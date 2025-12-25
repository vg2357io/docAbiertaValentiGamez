# SCHEMA BBDD para eventos (ficha de causalidad / cicatriz del mundo)

* **Identificador de dominio**: evt_
* **Dominios relacionados**: personajes -> chr_, definiciones categóricas -> cd_, referencias -> ref_, media_,
* **Tabla principal**: evt_events

```yaml
schema:
  name: event_system
  dialect: <sql_dialect> # postgresql | mysql | sqlite | <otro>

tables:

  # =========================
  # TABLA PRINCIPAL
  # =========================
  evt_events:
    description: >
      Ficha de evento: serie de sucesos relacionados en un marco temporal que afectan a personajes
      y al universo. Define causalidad, alcance e impacto (cicatriz).
    columns:
      id: { type: uuid, pk: true }

      # Identidad canónica
      name:
        type: varchar(255)
        nullable: false
        comment: "Nombre canónico del evento (p.ej. 'La Noche del Tratado Roto')."
      slug:
        type: varchar(255)
        nullable: true
        unique: true
        comment: "Identificador legible (kebab-case) opcional."

      original_universe_id:
        type: uuid
        fk: { table: ref_original_universes, column: id }
        nullable: false
        comment: "Universo de origen donde se registra el evento."

      # Naturaleza del evento (taxonomía mínima)
      event_type:
        type: enum
        nullable: false
        values:
          [
            Guerra, Rebelion, Golpe,
            Pacto, Tratado, Juramento,
            CatastrofeNatural, CatastrofeMagica, CatastrofeTecnologica,
            Descubrimiento, AperturaPlano, Invocacion,
            Plaga, Maldicion, Fenomeno,
            Conspiracion, Asesinato, Traicion,
            Ritual, Coronacion, Exilio,
            Otro
          ]
        comment: "Tipo de evento para indexación y consistencia."

      event_mode:
        type: enum
        nullable: false
        values: [Historico, Jugable]
        comment: "Historico (lore) o Jugable (diseñado para atravesarse en partida)."

      # Tiempo (ventana temporal)
      start_at:
        type: datetime
        nullable: true
        comment: "Inicio del evento si hay fecha exacta."
      end_at:
        type: datetime
        nullable: true
        comment: "Fin del evento si hay fecha exacta."
      time_text:
        type: varchar(128)
        nullable: true
        comment: "Alternativa simbólica: era, año, marcador 't=...' (si no hay fechas)."
      is_ongoing:
        type: boolean
        nullable: false
        default: false
        comment: "True si el evento está en curso."

      duration_text:
        type: varchar(128)
        nullable: true
        comment: "Horas/días/años si aplica (texto libre)."

      # Alcance (onda expansiva)
      impact_radius:
        type: enum
        nullable: false
        values: [Local, Regional, Global, Transplano, Multiversal]
        comment: "Radio de impacto del evento."
      impact_domains:
        type: json
        nullable: false
        comment: >
          Lista de ámbitos: Politico, Social, Economico, Religioso, Ecologico,
          MagicoOntologico, Tecnologico. (Ej: ['Politico','MagicoOntologico'])

      # Causalidad (2 capas)
      root_cause:
        type: text
        nullable: false
        comment: "Causa estructural: lo que sostiene el evento."
      trigger:
        type: text
        nullable: false
        comment: "Detonante puntual: la chispa concreta."

      # Núcleo narrativo de evento
      short_summary:
        type: text
        nullable: false
        comment: "Resumen 1 frase (citable)."
      summary:
        type: text
        nullable: false
        comment: "Resumen 1–2 párrafos."
      notes:
        type: text
        nullable: true
        comment: "Notas: límites, versiones, dudas, continuidad."

      created_at: { type: timestamp, nullable: false }
      updated_at: { type: timestamp, nullable: false }

    indexes:
      - { name: idx_evt_name, columns: [name] }
      - { name: idx_evt_universe, columns: [original_universe_id] }
      - { name: idx_evt_type, columns: [event_type, event_mode] }
      - { name: idx_evt_time, columns: [start_at, end_at] }

  # =========================
  # SUCESOS (cadena del evento) (array => tabla relacionada)
  # =========================
  evt_incidents:
    description: >
      Cadena ordenada de sucesos del evento (columna vertebral). Cada suceso tiene lugar,
      actores implicados, resultado y consecuencia inmediata.
    columns:
      id: { type: uuid, pk: true }
      event_id:
        type: uuid
        fk: { table: evt_events, column: id }
        nullable: false

      order_index:
        type: int
        nullable: false
        default: 0
        comment: "Orden dentro de la cadena del evento."

      title:
        type: varchar(255)
        nullable: false
        comment: "Nombre corto del suceso."
      description:
        type: text
        nullable: false
        comment: "Qué pasa (narración operativa)."

      # Lugar del suceso (flexible)
      location_id:
        type: uuid
        fk: { table: ref_locations, column: id }
        nullable: true
        comment: "FK si existe catálogo de ubicaciones."
      location_text:
        type: varchar(255)
        nullable: true
        comment: "Texto libre si no hay catálogo."

      # Tiempo del suceso (opcional)
      happened_at:
        type: datetime
        nullable: true
      happened_at_text:
        type: varchar(128)
        nullable: true

      outcome:
        type: text
        nullable: true
        comment: "Resultado del suceso."
      immediate_consequence:
        type: text
        nullable: true
        comment: "Consecuencia inmediata."

      notes:
        type: text
        nullable: true

    indexes:
      - { name: idx_evt_incidents_event, columns: [event_id, order_index] }

  # =========================
  # ACTORES: PERSONAJES (muchos-a-muchos)
  # =========================
  evt_character_roles:
    description: >
      Vincula personajes al evento con un rol (protagonista, antagonista, víctima, testigo, cronista).
    columns:
      id: { type: uuid, pk: true }
      event_id:
        type: uuid
        fk: { table: evt_events, column: id }
        nullable: false
      character_id:
        type: uuid
        fk: { table: chr_characters, column: id }
        nullable: false

      involvement_role:
        type: enum
        nullable: false
        values: [Protagonista, Antagonista, Victima, Testigo, Cronista, Aliado, Neutro, Otro]
      notes:
        type: text
        nullable: true

    indexes:
      - { name: idx_evt_character_roles, columns: [event_id, character_id], unique: true }
      - { name: idx_evt_character_role_type, columns: [event_id, involvement_role] }

  # =========================
  # ACTORES: DEFINICIONES CATEGÓRICAS (muchos-a-muchos)
  # =========================
  evt_categorical_definition_roles:
    description: >
      Vincula definiciones categóricas (colectivos/linajes/tipos) al evento.
    columns:
      id: { type: uuid, pk: true }
      event_id:
        type: uuid
        fk: { table: evt_events, column: id }
        nullable: false
      categorical_definition_id:
        type: uuid
        fk: { table: cd_categorical_definitions, column: id }
        nullable: false

      involvement_role:
        type: enum
        nullable: false
        values: [Faccion, Invasor, Defensor, VictimaColectiva, TestigoColectivo, Autor, Otro]
      notes:
        type: text
        nullable: true

    indexes:
      - { name: idx_evt_cd_roles, columns: [event_id, categorical_definition_id], unique: true }

  # =========================
  # CONSECUENCIAS (3 niveles, multi-ámbito)
  # =========================
  evt_consequences:
    description: >
      Consecuencias del evento separadas por horizonte (inmediata/medio/plazo/cicatriz) y ámbito.
    columns:
      id: { type: uuid, pk: true }
      event_id:
        type: uuid
        fk: { table: evt_events, column: id }
        nullable: false

      horizon:
        type: enum
        nullable: false
        values: [Inmediata, MedioPlazo, Cicatriz]
        comment: "Nivel temporal de la consecuencia."

      domain:
        type: enum
        nullable: false
        values: [Mundo, Sociedad, MagiaOntologia, Tecnologia, Economia, Politica, Religion, Ecologia, Personajes, Otro]
        comment: "Ámbito afectado."

      title:
        type: varchar(255)
        nullable: false
      description:
        type: text
        nullable: false

      severity:
        type: int
        nullable: true
        comment: "0..100 (opcional) para priorizar relevancia."
      notes:
        type: text
        nullable: true

    indexes:
      - { name: idx_evt_consequences_event, columns: [event_id, horizon, domain] }

  # =========================
  # GANCHOS JUGABLES (solo si event_mode=Jugable)
  # =========================
  evt_play_hooks:
    description: >
      Diseño jugable del evento: objetivos, puntos de decisión, escenas clave e info oculta.
      Se usa si el evento es Jugable o si se quiere re-jugar como campaña histórica.
    columns:
      event_id:
        type: uuid
        pk: true
        fk: { table: evt_events, column: id }

      # Listas en JSON para evitar explosión de tablas; si prefieres normalización 1 tabla por lista, se separa.
      objectives:
        type: json
        nullable: true
        comment: "Lista de objetivos (facción/personales)."
      decision_points:
        type: json
        nullable: true
        comment: "2–5 decisiones que abren ramas."
      key_scenes:
        type: json
        nullable: true
        comment: "3–7 escenas clave."
      hidden_information:
        type: json
        nullable: true
        comment: "Qué se descubre y cuándo."

      notes:
        type: text
        nullable: true

  # =========================
  # MATERIAL DE REFERENCIA (documentos, decretos, profecías, etc.)
  # =========================
  evt_reference_materials:
    description: >
      Material de soporte del evento: cartas, tratados, profecías, decretos, mapas, iconografía.
    columns:
      id: { type: uuid, pk: true }
      event_id:
        type: uuid
        fk: { table: evt_events, column: id }
        nullable: false

      material_type:
        type: enum
        nullable: false
        values: [Carta, Tratado, Profecia, Decreto, Mapa, Iconografia, Informe, Cronica, Otro]
      title:
        type: varchar(255)
        nullable: false
      content_text:
        type: text
        nullable: true
        comment: "Texto (si se guarda inline)."
      url:
        type: text
        nullable: true
        comment: "<url|path> si es un recurso externo."
      notes:
        type: text
        nullable: true
      sort_order:
        type: int
        nullable: false
        default: 0

    indexes:
      - { name: idx_evt_refmaterials, columns: [event_id, material_type, sort_order] }

  # =========================
  # MULTIMEDIA DEL EVENTO
  # =========================
  evt_media_event:
    description: "Recursos visuales del evento (portadas, mapas, iconos, etc.)."
    columns:
      id: { type: uuid, pk: true }
      event_id:
        type: uuid
        fk: { table: evt_events, column: id }
        nullable: false
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

    indexes:
      - { name: idx_evt_media_event, columns: [event_id, media_type] }

  # =========================
  # ENLACES ENTRE EVENTOS (precuela/secuela/relacionado/causa)
  # =========================
  evt_event_links:
    description: "Relación entre eventos (cadena histórica o causal)."
    columns:
      id: { type: uuid, pk: true }
      from_event_id:
        type: uuid
        fk: { table: evt_events, column: id }
        nullable: false
      to_event_id:
        type: uuid
        fk: { table: evt_events, column: id }
        nullable: false

      link_type:
        type: enum
        nullable: false
        values: [Precuela, Secuela, Relacionado, Causa, Consecuencia, Paralelo, Retcon]
      notes:
        type: text
        nullable: true

    indexes:
      - { name: idx_evt_event_links, columns: [from_event_id, to_event_id, link_type], unique: true }
```