# SCHEMA BBDD para ubicaciones (ficha de "dónde" + "estado temporal" del lugar)

* **Identificador de dominio**: evt_
* **Dominios relacionados**: personajes -> chr_, definiciones categóricas -> cd_, eventos -> evt_ referencias -> ref_, media_,
* **Tabla principal**: loc_

```yaml
schema:
  name: location_system
  dialect: <sql_dialect> # postgresql | mysql | sqlite | <otro>

tables:

  # =========================
  # TABLA BASE (lugar abstracto)
  # =========================
  loc_locations:
    description: >
      Localización base: el lugar en abstracto (sin estado temporal). Sirve como nodo estable
      para colgar estados, conectores y jerarquía espacial (contenedores).
    columns:
      id: { type: uuid, pk: true }

      original_universe_id:
        type: uuid
        fk: { table: ref_original_universes, column: id }
        nullable: false
        comment: "Universo de origen del lugar."

      name:
        type: varchar(255)
        nullable: false
        comment: "Nombre canónico del lugar."
      slug:
        type: varchar(255)
        nullable: true
        unique: true
        comment: "Identificador legible (kebab-case) opcional."

      location_scope:
        type: enum
        nullable: false
        values: [Punto, Zona, Region, Macro]
        comment: "Peso espacial: Punto (taberna), Zona (barrio), Región (reino), Macro (planeta/plano)."

      # Jerarquía espacial (contenedor)
      parent_location_id:
        type: uuid
        fk: { table: loc_locations, column: id }
        nullable: true
        comment: "Contenedor: ciudad dentro de región, región dentro de reino, etc."

      # Si deseas coordenadas reales (opcionales)
      latitude:
        type: decimal(10,7)
        nullable: true
      longitude:
        type: decimal(10,7)
        nullable: true
      coordinate_text:
        type: varchar(255)
        nullable: true
        comment: "Alternativa narrativa: 'al norte del lago', 'bajo la cúpula', etc."

      # Alias/otros nombres
      alias_list:
        type: json
        nullable: true
        comment: "Array de alias históricos/populares."

      created_at: { type: timestamp, nullable: false }
      updated_at: { type: timestamp, nullable: false }

    indexes:
      - { name: idx_loc_name, columns: [name] }
      - { name: idx_loc_universe, columns: [original_universe_id] }
      - { name: idx_loc_parent, columns: [parent_location_id] }
      - { name: idx_loc_scope, columns: [location_scope] }

  # =========================
  # ESTADO TEMPORAL DEL LUGAR (lo que se juega / lo que cambia)
  # =========================
  loc_location_states:
    description: >
      Localización en estado: describe el lugar en una ventana temporal (antes/durante/después de eventos).
      Si el lugar cambia por un evento, se crea un nuevo estado en vez de reescribir.
    columns:
      id: { type: uuid, pk: true }
      location_id:
        type: uuid
        fk: { table: loc_locations, column: id }
        nullable: false

      # Tiempo (ventana temporal)
      start_at:
        type: datetime
        nullable: true
        comment: "Inicio del estado si hay fecha exacta."
      end_at:
        type: datetime
        nullable: true
        comment: "Fin del estado si hay fecha exacta."
      time_text:
        type: varchar(128)
        nullable: true
        comment: "Alternativa simbólica: era, año, marcador 't=...' (si no hay fechas)."
      is_ongoing:
        type: boolean
        nullable: false
        default: false
        comment: "True si el estado está en curso."
      duration_text:
        type: varchar(128)
        nullable: true
        comment: "Horas/días/años si aplica (texto libre)."

      # Rol sistémico del lugar (para qué existe)
      narrative_function:
        type: enum
        nullable: false
        values: [Refugio, Frontera, Objetivo, Carcel, Santuario, Mercado, Trampa, Ruta, Otro]
        comment: "Función narrativa principal."
      socio_political_function:
        type: enum
        nullable: true
        values: [Capital, Colonia, EnclaveNeutral, ZonaOcupada, Puerto, Fortaleza, Ruina, Otro]
        comment: "Función social/política."
      ontological_function:
        type: text
        nullable: true
        comment: "Función ontológica (p.ej. 'aquí la magia se deforma', 'aquí el tiempo se curva')."

      # Descripción en capas (igual que personajes)
      short_description:
        type: text
        nullable: false
        comment: "1 frase citable."
      description:
        type: text
        nullable: false
        comment: "1–2 párrafos: cómo se percibe."
      large_description:
        type: text
        nullable: false
        comment: "Sensorial: luz, olor, sonido, textura; presencia del lugar."

      # Identidad cultural / normas / tensión
      who_rules_text:
        type: text
        nullable: true
        comment: "Quién manda (texto libre)."
      allowed_forbidden:
        type: text
        nullable: true
        comment: "Qué se permite y qué no (leyes/tabúes/rituales)."
      values_text:
        type: text
        nullable: true
        comment: "Qué se valora aquí (honor, oro, silencio...)."
      main_tension:
        type: text
        nullable: true
        comment: "Conflicto latente principal."

      # Snapshot / notas
      before_after_snapshot:
        type: text
        nullable: true
        comment: "Estado antes/después (si aplica)."
      notes:
        type: text
        nullable: true

      created_at: { type: timestamp, nullable: false }
      updated_at: { type: timestamp, nullable: false }

    indexes:
      - { name: idx_loc_state_location, columns: [location_id] }
      - { name: idx_loc_state_time, columns: [start_at, end_at] }
      - { name: idx_loc_state_mode, columns: [is_ongoing] }

  # =========================
  # CONECTORES (rutas/portales/ríos/pasos/suministros)
  # =========================
  loc_connectors:
    description: "Conectores entre dos ubicaciones (rutas, portales, ríos, pasos, líneas de suministro)."
    columns:
      id: { type: uuid, pk: true }

      from_location_id:
        type: uuid
        fk: { table: loc_locations, column: id }
        nullable: false
      to_location_id:
        type: uuid
        fk: { table: loc_locations, column: id }
        nullable: false

      connector_type:
        type: enum
        nullable: false
        values: [Camino, Carretera, Rio, Paso, Portal, Tunel, RutaMaritima, RutaAerea, Suministro, Otro]

      travel_time_text:
        type: varchar(128)
        nullable: true
        comment: "Tiempo de viaje (texto libre)."
      access_rule:
        type: text
        nullable: true
        comment: "Restricciones: peaje, llave, permiso, ritual, clima, etc."

      danger_level:
        type: int
        nullable: true
        comment: "0..100 (opcional) peligro percibido."
      notes:
        type: text
        nullable: true

    indexes:
      - { name: idx_loc_connectors_from_to, columns: [from_location_id, to_location_id, connector_type], unique: true }
      - { name: idx_loc_connectors_from, columns: [from_location_id] }
      - { name: idx_loc_connectors_to, columns: [to_location_id] }

  # =========================
  # FRONTERAS (físicas/políticas) por estado
  # =========================
  loc_boundaries:
    description: "Fronteras físicas o políticas relevantes para un estado del lugar."
    columns:
      id: { type: uuid, pk: true }
      location_state_id:
        type: uuid
        fk: { table: loc_location_states, column: id }
        nullable: false

      boundary_type:
        type: enum
        nullable: false
        values: [Fisica, Politica, Mixta]
      description:
        type: text
        nullable: false
        comment: "Murallas, aduanas, montañas, ríos frontera, checkpoints..."
      notes:
        type: text
        nullable: true

    indexes:
      - { name: idx_loc_boundaries_state, columns: [location_state_id] }

  # =========================
  # PELIGROS (por estado)
  # =========================
  loc_hazards:
    description: "Peligros del lugar por estado: físicos, sociales y místico-ontológicos."
    columns:
      id: { type: uuid, pk: true }
      location_state_id:
        type: uuid
        fk: { table: loc_location_states, column: id }
        nullable: false

      hazard_type:
        type: enum
        nullable: false
        values: [Fisico, Social, MisticoOntologico, Otro]
      title:
        type: varchar(255)
        nullable: false
      description:
        type: text
        nullable: false

      severity:
        type: int
        nullable: true
        comment: "0..100 (opcional)."
      notes:
        type: text
        nullable: true

    indexes:
      - { name: idx_loc_hazards_state, columns: [location_state_id, hazard_type] }

  # =========================
  # RECOMPENSAS / OPORTUNIDADES (por estado)
  # =========================
  loc_rewards:
    description: "Recompensas del lugar por estado: recursos, ventajas, poder."
    columns:
      id: { type: uuid, pk: true }
      location_state_id:
        type: uuid
        fk: { table: loc_location_states, column: id }
        nullable: false

      reward_type:
        type: enum
        nullable: false
        values: [Recurso, Ventaja, Poder, Informacion, Refugio, Otro]
      title:
        type: varchar(255)
        nullable: false
      description:
        type: text
        nullable: false

      value_score:
        type: int
        nullable: true
        comment: "0..100 (opcional)."
      notes:
        type: text
        nullable: true

    indexes:
      - { name: idx_loc_rewards_state, columns: [location_state_id, reward_type] }

  # =========================
  # HABITANTES: definiciones categóricas (grupos) por estado
  # =========================
  loc_inhabitants_categorical_definitions:
    description: "Grupos/linajes/tipos que viven u operan en la ubicación (por estado)."
    columns:
      id: { type: uuid, pk: true }
      location_state_id:
        type: uuid
        fk: { table: loc_location_states, column: id }
        nullable: false
      categorical_definition_id:
        type: uuid
        fk: { table: cd_categorical_definitions, column: id }
        nullable: false

      presence_role:
        type: enum
        nullable: false
        values: [Dominante, Comun, Raro, Invasor, Ocupante, Custodio, Transito, Otro]
      notes:
        type: text
        nullable: true

    indexes:
      - { name: idx_loc_inh_cd_unique, columns: [location_state_id, categorical_definition_id], unique: true }

  # =========================
  # HABITANTES: personajes clave (por estado)
  # =========================
  loc_inhabitants_characters:
    description: "Personajes concretos clave en la ubicación (1–3 típicamente) por estado."
    columns:
      id: { type: uuid, pk: true }
      location_state_id:
        type: uuid
        fk: { table: loc_location_states, column: id }
        nullable: false
      character_id:
        type: uuid
        fk: { table: chr_characters, column: id }
        nullable: false

      presence_role:
        type: enum
        nullable: false
        values: [Gobernante, AntagonistaLocal, Guia, MercaderClave, Sacerdote, Guardia, Informante, Otro]
      notes:
        type: text
        nullable: true

    indexes:
      - { name: idx_loc_inh_chr_unique, columns: [location_state_id, character_id], unique: true }

  # =========================
  # EVENTOS QUE MARCAN LA UBICACIÓN (historial por estado)
  # =========================
  loc_evt_location_events:
    description: "Eventos que marcan la ubicación o definen su estado."
    columns:
      id: { type: uuid, pk: true }
      location_state_id:
        type: uuid
        fk: { table: loc_location_states, column: id }
        nullable: false
      event_id:
        type: uuid
        fk: { table: evt_events, column: id }
        nullable: true

      title:
        type: varchar(255)
        nullable: false
        comment: "Si no existe event_id, título libre."
      description:
        type: text
        nullable: true
      happened_at:
        type: date
        nullable: true
      happened_at_text:
        type: varchar(128)
        nullable: true
      sort_order:
        type: int
        nullable: false
        default: 0

    indexes:
      - { name: idx_loc_evt_state, columns: [location_state_id, sort_order] }

  # =========================
  # GANCHOS DE JUEGO (por estado)
  # =========================
  loc_play_hooks:
    description: >
      Ganchos jugables del lugar: escenas posibles, decisiones con consecuencias y un secreto.
    columns:
      location_state_id:
        type: uuid
        pk: true
        fk: { table: loc_location_states, column: id }

      scenes:
        type: json
        nullable: true
        comment: "3 escenas posibles si los PJ entran."
      decision_points:
        type: json
        nullable: true
        comment: "2 decisiones con consecuencias (cambian estado local)."
      secret:
        type: text
        nullable: true
        comment: "1 secreto que recontextualiza el lugar."
      notes:
        type: text
        nullable: true

  # =========================
  # MULTIMEDIA (base o estado)
  # =========================
  loc_media_location:
    description: "Recursos visuales del lugar (mapa, icono, ilustración, portada)."
    columns:
      id: { type: uuid, pk: true }

      location_id:
        type: uuid
        fk: { table: loc_locations, column: id }
        nullable: true
        comment: "Media del lugar base."
      location_state_id:
        type: uuid
        fk: { table: loc_location_states, column: id }
        nullable: true
        comment: "Media de un estado concreto."

      media_type:
        type: enum
        nullable: false
        values: [cover, map, icon, illustration, other]
      url:
        type: text
        nullable: false
        comment: "<url|path>"
      alt_text:
        type: varchar(255)
        nullable: true
      sort_order:
        type: int
        nullable: false
        default: 0

      notes:
        type: text
        nullable: true

    indexes:
      - { name: idx_loc_media_location, columns: [location_id, media_type] }
      - { name: idx_loc_media_state, columns: [location_state_id, media_type] }

  # =========================
  # REGLAS DE INTEGRIDAD (documentadas)
  # =========================
  # - loc_media_location: exactamente UNO de (location_id, location_state_id) debe ser no-null.
  # - loc_location_states: se recomienda evitar solapes temporales para el mismo location_id si is_ongoing=false.
  # - loc_connectors: se recomienda permitir bidireccionalidad explícita (dos filas) si las reglas difieren.
```