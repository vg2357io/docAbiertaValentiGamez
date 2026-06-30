# SCHEMA BBDD para definición categórica (ficha de linaje / tipo / entidad colectiva)

* v0.0.1: 2025-12-27 19:00:00

* **Identificador de dominio**: cd_
* **Dominios relacionados**: personajes -> chr_, referencias -> ref_, eventos -> evt_, media_,
* **Tabla principal**: cd_categorical_definitions

```yaml
schema:
  name: categorical_definition_system
  dialect: <sql_dialect> # postgresql | mysql | sqlite | <otro>

tables:

  # =========================
  # TABLA PRINCIPAL
  # =========================
  cd_categorical_definitions:
    description: >
      Ficha de definición categórica: define un conjunto homogéneo de seres conscientes
      (misma categoría, subcategoría y definición categórica). Sirve como plantilla narrativa-sistémica.
    columns:
      id: { type: uuid, pk: true }

      # Identidad del conjunto
      name:
        type: varchar(255)
        nullable: false
        comment: "Nombre colectivo canónico (p.ej. 'Lobos grises de la Llanura Norte')."
      slug:
        type: varchar(255)
        nullable: true
        unique: true
        comment: "Identificador legible (kebab-case) opcional."

      # Universo y ontología (clasificación cerrada)
      original_universe_id:
        type: uuid
        fk: { table: ref_original_universes, column: id }
        nullable: false
        comment: "Universo de origen del conjunto."
      category_id:
        type: uuid
        fk: { table: chr_categories, column: id }
        nullable: false
        comment: "Tipo de entidad consciente (Animal, Personaje, Deidad...)."
      subcategory_type_id:
        type: uuid
        fk: { table: chr_subcategory_types, column: id }
        nullable: false
        comment: "Cómo se clasifican los de su mismo tipo (raza, elemento, dominio...)."

      # Definición categórica concreta del conjunto (el valor)
      definition_value:
        type: varchar(128)
        nullable: false
        comment: "Valor concreto (p.ej. 'Lobo gris', 'Fuego', 'Solar', 'Humano')."

      # Reglas estructurales del grupo
      caste:
        type: boolean
        nullable: false
        default: false
        comment: "Sí/No: si el rol viene fijado por nacimiento/casta de forma dominante."
      hierarchy_id:
        type: uuid
        fk: { table: chr_hierarchies, column: id }
        nullable: true
        comment: "Jerarquía típica (sistema de rangos) si existe."

      # Núcleo narrativo común (patrones)
      short_description:
        type: text
        nullable: false
        comment: "1 frase: qué es este ser en el mundo."
      description:
        type: text
        nullable: false
        comment: "2 párrafos: cómo se perciben normalmente."
      large_description:
        type: text
        nullable: false
        comment: "Apariencia, presencia, lenguaje corporal típico."
      base_personality:
        type: text
        nullable: false
        comment: "Personalidad base: instintos, valores dominantes, miedos comunes."
      collective_backstory:
        type: text
        nullable: false
        comment: "Trasfondo colectivo: origen mítico/creación/propósito inicial."

      notes:
        type: text
        nullable: true
        comment: "Notas libres: límites ontológicos, tabúes, excepciones permitidas, etc."

      created_at: { type: timestamp, nullable: false }
      updated_at: { type: timestamp, nullable: false }

    indexes:
      - { name: idx_cd_name, columns: [name] }
      - { name: uq_cd_ontology, columns: [original_universe_id, category_id, subcategory_type_id, definition_value], unique: true }
      - { name: idx_cd_category, columns: [category_id, subcategory_type_id] }

  # =========================
  # ROLES COLECTIVOS (array => tabla relacionada)
  # =========================
  cd_roles:
    description: "Roles colectivos: para qué existe este tipo de ser en el mundo (puede ser 1..n)."
    columns:
      id: { type: uuid, pk: true }
      categorical_definition_id:
        type: uuid
        fk: { table: cd_categorical_definitions, column: id }
        nullable: false
      role_id:
        type: uuid
        fk: { table: chr_roles, column: id }
        nullable: true
        comment: "FK a catálogo si aplica."
      role_text:
        type: varchar(128)
        nullable: true
        comment: "Texto libre si no existe en catálogo (p.ej. 'Equilibrador del ecosistema')."
      is_primary:
        type: boolean
        nullable: false
        default: false
      notes:
        type: text
        nullable: true
    indexes:
      - { name: idx_cd_roles_def, columns: [categorical_definition_id] }

  # =========================
  # RANGOS POSIBLES (array)
  # =========================
  cd_ranks:
    description: "Rangos existentes dentro de la jerarquía típica (no quién los ocupa)."
    columns:
      id: { type: uuid, pk: true }
      categorical_definition_id:
        type: uuid
        fk: { table: cd_categorical_definitions, column: id }
        nullable: false
      rank_id:
        type: uuid
        fk: { table: chr_ranks, column: id }
        nullable: true
      rank_text:
        type: varchar(128)
        nullable: true
        comment: "Texto libre si no existe en catálogo."
      sort_order:
        type: int
        nullable: false
        default: 0
      notes:
        type: text
        nullable: true
    indexes:
      - { name: idx_cd_ranks_def, columns: [categorical_definition_id] }

  # =========================
  # ARQUETIPOS DOMINANTES (array)
  # =========================
  cd_archetypes:
    description: "Arquetipos dominantes en el conjunto (no exclusivos)."
    columns:
      id: { type: uuid, pk: true }
      categorical_definition_id:
        type: uuid
        fk: { table: cd_categorical_definitions, column: id }
        nullable: false
      archetype_id:
        type: uuid
        fk: { table: chr_archetypes, column: id }
        nullable: true
      archetype_text:
        type: varchar(128)
        nullable: true
        comment: "Texto libre si no existe en catálogo."
      weight:
        type: int
        nullable: true
        comment: "0..100: presencia aproximada dentro del conjunto."
    indexes:
      - { name: idx_cd_archetypes_def, columns: [categorical_definition_id] }

  # =========================
  # EXPRESIONES RECURRENTES (array)
  # =========================
  cd_expressions:
    description: "Gestos, rituales, silencios, reacciones estándar."
    columns:
      id: { type: uuid, pk: true }
      categorical_definition_id:
        type: uuid
        fk: { table: cd_categorical_definitions, column: id }
        nullable: false
      expression:
        type: text
        nullable: false
        comment: "<string>"
      kind:
        type: enum
        nullable: true
        values: [frase, gesto, silencio, tic, ritual, otro]
      sort_order:
        type: int
        nullable: false
        default: 0

  # =========================
  # EVENTOS HISTÓRICOS COMUNES (array)
  # =========================
  cd_evt_historic_events:
    description: "Guerras, pactos, caídas; hechos que definen al grupo como conjunto."
    columns:
      id: { type: uuid, pk: true }
      categorical_definition_id:
        type: uuid
        fk: { table: cd_categorical_definitions, column: id }
        nullable: false
      event_id:
        type: uuid
        fk: { table: evt_events, column: id }
        nullable: true
        comment: "Opcional si existe catálogo de eventos global."
      title:
        type: varchar(255)
        nullable: false
      description:
        type: text
        nullable: true
      happened_at:
        type: date
        nullable: true
      happened_at_text:
        type: varchar(128)
        nullable: true
        comment: "Si no hay fecha (era, desconocida...)."
      sort_order:
        type: int
        nullable: false
        default: 0

  # =========================
  # MULTIMEDIA DEL CONJUNTO (array)
  # =========================
  cd_media_categorical_definition:
    description: "Recursos visuales representativos del conjunto (no de un individuo)."
    columns:
      id: { type: uuid, pk: true }
      categorical_definition_id:
        type: uuid
        fk: { table: cd_categorical_definitions, column: id }
        nullable: false
      media_type:
        type: enum
        nullable: false
        values: [portrait, cover, tarot_front, tarot_back, other]
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
      - { name: idx_cd_media_def, columns: [categorical_definition_id, media_type] }

  # =========================
  # MECÁNICA BASE (TECHO/SUELO) 1:1
  # =========================
  cd_stats_range:
    description: "Rangos mecánicos permitidos para individuos de este conjunto."
    columns:
      categorical_definition_id:
        type: uuid
        pk: true
        fk: { table: cd_categorical_definitions, column: id }

      # Rangos (mínimo/máximo) por atributo
      hp_min:  { type: int, nullable: false, comment: ">=0" }
      hp_max:  { type: int, nullable: false, comment: ">=hp_min" }
      ad_min:  { type: int, nullable: false, comment: ">=0" }
      ad_max:  { type: int, nullable: false, comment: ">=ad_min" }
      ap_min:  { type: int, nullable: false, comment: ">=0 (si no usa magia: suele ser 2)" }
      ap_max:  { type: int, nullable: false, comment: ">=ap_min" }
      def_min: { type: int, nullable: false, comment: ">=0" }
      def_max: { type: int, nullable: false, comment: ">=def_min" }
      mr_min:  { type: int, nullable: false, comment: ">=0 (si no usa magia: suele ser 2)" }
      mr_max:  { type: int, nullable: false, comment: ">=mr_min" }

      # Escalas
      stat_cap:
        type: int
        nullable: false
        comment: "235 (estándar) | 2357 (deidad) | 235710 (primigenio) | <otro>"
      affinity_cap:
        type: int
        nullable: false
        default: 2357
        comment: "Escala de afinidades (normalmente 2357)."

      uses_magic_default:
        type: boolean
        nullable: false
        default: true
        comment: "Si false, AP/MR mínimos suelen ser 2."

      notes:
        type: text
        nullable: true
        comment: "Reglas mecánicas del conjunto (p.ej. resistencias naturales, inmunidades narrativas, etc.)"

  # =========================
  # HABILIDADES COLECTIVAS (array)
  # =========================
  cd_abilities:
    description: >
      Habilidades/acciones colectivas (recomendado 2,3,5,7).
      Define lo que casi todos poseen; el resto va por cono.
    columns:
      id: { type: uuid, pk: true }
      categorical_definition_id:
        type: uuid
        fk: { table: cd_categorical_definitions, column: id }
        nullable: false
      name:
        type: varchar(255)
        nullable: false
        comment: "<string> (acción o habilidad)"
      aptitude_type:
        type: enum
        nullable: false
        values: [Fisica, Magica, Cuantica]

      # Afinidad sugerida (como plantilla para individuos)
      affinity_typical:
        type: int
        nullable: true
        comment: "0..2357 (235 competente estándar)."
      affinity_min:
        type: int
        nullable: true
        comment: "Mínimo plausible en individuos de este conjunto."
      affinity_max:
        type: int
        nullable: true
        comment: "Máximo plausible en individuos de este conjunto."

      cone_hint:
        type: enum
        nullable: true
        values: [Nucleo, ZonaCercana, ZonaMedia, Periferia]
        comment: "Pista para ubicarla en el cono por defecto."
      notes:
        type: text
        nullable: true

    indexes:
      - { name: idx_cd_abilities_def, columns: [categorical_definition_id] }

  # =========================
  # CAMPOS ESPECÍFICOS POR CATEGORÍA (extensible)
  # =========================
  cd_category_fields:
    description: >
      Extensión por categoría sin romper la estructura base.
      Ejemplos: Animal->territory, Deidad->domain, Elemental->manifestation_state, etc.
    columns:
      id: { type: uuid, pk: true }
      categorical_definition_id:
        type: uuid
        fk: { table: cd_categorical_definitions, column: id }
        nullable: false
      key:
        type: varchar(64)
        nullable: false
        comment: "territory | domain | manifestation_state | <otro>"
      value:
        type: text
        nullable: false
        comment: "<string>"
    indexes:
      - { name: idx_cd_category_fields_def_key, columns: [categorical_definition_id, key], unique: true }

```