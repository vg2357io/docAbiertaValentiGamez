# Para colaboradores periodista

## Resumen del rol

Este documento define el marco de colaboración para periodistas que trabajan en medios estructurados (redacciones organizadas con más de 5 empleados) utilizando Apps Suite. Está alineado con la visión de producto descrita en [Descripción del Producto](../../descripcion-producto.md) y con los pilares Ariadna (identidad, acceso, trazabilidad) y Sindri (plantillas y publicación multiformato).

### Propósito del rol

- Producir contenidos periodísticos veraces, independientes y de interés público.
- Operar con eficiencia y trazabilidad, aprovechando plantillas y flujos estandarizados.
- Publicar en web/PDF/DOC desde una única fuente con Sindri, respetando los estándares editoriales.
- Trabajar con seguridad por diseño: control de accesos, perímetro privado y auditoría mediante Ariadna.

### Responsabilidades clave

- Planificación: proponer y priorizar temas junto al editor/desk; reservar slots en el calendario.
- Obtención y verificación: identificar fuentes, recabar evidencias y documentar la verificación.
- Redacción y edición: elaborar borradores en Sindri usando las plantillas oficiales.
- Revisión y compliance: atender comentarios, resolver observaciones legales/ética.
- Publicación y mantenimiento: coordinar la salida y gestionar correcciones/actualizaciones.
- Analítica y mejora continua: revisar KPIs e incorporar aprendizajes al flujo.

### Interacción con Ariadna y Sindri

- Ariadna
    - Acceso unificado y perfiles de rol (Periodista, Editor, Legal/Compliance, Gestión).
    - Permisos mínimos necesarios (RBAC) por sección y tipo de contenido.
    - Trazabilidad: quién crea/edita/aprueba/publica; bitácora de cambios.
- Sindri
    - Plantillas de contenido con metadatos obligatorios (autoría, fuentes, estado de verificación, licencias).
    - Componentes reutilizables (cajas de contexto, cronologías, tablas de datos, anexos de evidencia).
    - Render multiformato coherente (web, PDF, DOC) desde el mismo origen.

### Entregables esperados

- Piezas periodísticas listas para publicación según el tipo de plantilla (noticia, reportaje, entrevista).
- Dossier de verificación documentado en el archivo Sindri (o anexo) con evidencias citables.
- Registro de fuentes y estado de corroboración.
- Resumen de cambios si hay correcciones post-publicación.

### KPIs principales

Consulta [KPIs e incentivos](./kpis-incentivos.md) para el detalle. A alto nivel:
- Calidad: ratio de correcciones, cumplimiento de estándares y de política de conflictos.
- Eficiencia: lead time desde pitch a publicación, tiempo de revisión.
- Impacto: lectura cualificada, tiempo de permanencia, backlinks/orgánico.

### Flujo resumido

1. Pitch y asignación en el desk.
2. Redacción en Sindri con plantilla y metadatos completos.
3. Verificación de fuentes y evidencias.
4. Revisión editorial y legal.
5. Publicación y distribución.
6. Medición y correcciones si procede.

Detalles operativos: ver [Flujos de publicación](./flujos-publicacion.md) y [Onboarding y checklist](./onboarding-checklist.md).

## Estándares editoriales

Estos estándares aplican a periodistas que colaboran con medios estructurados (>5 empleados) usando Apps Suite. Complementan la [Descripción del Producto](../../descripcion-producto.md) y establecen criterios de calidad, independencia y trazabilidad en todo el ciclo de vida del contenido.

### Principios

- Veracidad y precisión: hechos comprobables, datos con fuentes citadas.
- Independencia: evitar influencias indebidas comerciales/políticas.
- Interés público: prioridad a temas relevantes para la audiencia.
- Transparencia: metodologías y correcciones públicas cuando aplique.
- Responsabilidad: cumplimiento legal y ético; correcciones diligentes.

### Reglas de estilo y forma

- Titular claro y fiel, subtítulo contextual.
- Lead informativo (las 5W) y estructura por pirámide invertida en noticias.
- En reportajes: secciones con subtítulos, contexto, antecedentes y voces múltiples.
- Citas textuales entrecomilladas y atribuidas; evitar juicios no sustentados.
- Enlaces a documentos/fuentes primarias cuando sea posible.
- Inclusión de datos clave en tablas/figuras usando componentes de Sindri.

### Metadatos obligatorios (Sindri)

Cada pieza debe incluir en el front‑matter de Sindri:
- `autor`, `revisor_editorial`, `revisor_legal` (si aplica), `seccion`.
- `estado_verificacion` (borrador, en verificación, verificado, publicado).
- `fuentes` (lista estructurada con tipo y estado de corroboración).
- `licencia` de contenido y material gráfico.
- `fecha_corte` para datos y `ubicacion` si es relevante.

### Proceso de revisión

- Revisión editorial: foco en claridad, exactitud, coherencia y equilibrio de voces.
- Revisión legal/compliance: calumnias, privacidad, Copyright, uso justo, embargos.
- Señalización en Ariadna: sólo perfiles con rol autorizado pueden aprobar publicación.
- Trazabilidad: toda revisión queda registrada con comentarios y cambios.

### Correcciones y actualizaciones

- Erratas menores: se corrigen y se anota la actualización con marca de tiempo.
- Cambios sustantivos: nota de corrección al inicio o final del artículo.
- Retirada: requiere aprobación editorial y legal; mantener registro interno.

### Inclusión y lenguaje

- Evitar estigmatizaciones; usar lenguaje inclusivo y preciso.
- Señalar la condición de anonimato de las fuentes cuando proceda y por qué.

### Seguridad y confidencialidad

- Usar la red privada gestionada por Ariadna para documentos sensibles.
- No subir a repositorios públicos borradores o evidencias no publicadas.

Para normas de conducta y conflictos de interés, ver [Políticas de conflictos de interés](./politicas-conflictos-interes.md).

## Guía de verificación de fuentes

Marco práctico para verificar información y documentar la corroboración dentro de Sindri, con trazabilidad mediante Ariadna. Aplica a contenidos producidos en medios estructurados (>5 empleados).

### Objetivos

- Asegurar veracidad y precisión antes de publicar.
- Reducir el riesgo legal (difamación, privacidad, copyright).
- Dejar rastro claro de cómo se llegó a cada dato o afirmación.

### Clasificación de fuentes

- Primarias: protagonistas directos, documentos oficiales, bases de datos públicas.
- Secundarias: coberturas de otros medios, informes de terceros, expertos no implicados.
- Testimoniales: declaraciones de testigos o afectados.
- Anónimas: protegidas por riesgo; requieren filtros adicionales y aval editorial.

### Niveles de corroboración

- Nivel 0: afirmación sin fuente (no publicable).
- Nivel 1: una fuente confiable/primaria citada.
- Nivel 2: dos fuentes independientes o una primaria + evidencia documental.
- Nivel 3: evidencia documental sólida + confirmación independiente.

Por defecto, se exige Nivel 2 para datos sensibles o acusaciones; Nivel 1 para hechos triviales no controvertidos.

### Procedimiento

1. Identifica el tipo de fuente y su relación con el hecho.
2. Evalúa credibilidad (historial, intereses, acceso a la información).
3. Corrobora: busca segunda fuente o documento.
4. Documenta la verificación en Sindri (ver plantilla de metadatos).
5. Si hay riesgo alto, consulta a Legal antes de publicar.

### Cómo documentar en Sindri

Incluye en el front‑matter y/o anexos un registro estructurado de fuentes y evidencias:

```yaml
## Ejemplo de front‑matter en Sindri
autor: nombre.apellidos
seccion: politica
estado_verificacion: en verificacion
fuentes:
  - tipo: primaria
    identificacion: "Auto 123/2025, Juzgado Nº 5"
    contacto: null
    corroboracion: "Documento oficial descargado de BOE"
    nivel: 2
  - tipo: testimonial
    identificacion: "Trabajador afectado (anónimo)"
    contacto: "grabacion_2025-11-09.aac (en red privada)"
    corroboracion: "Coincide con documento interno filtrado"
    nivel: 2
licencia: CC BY-NC 4.0
fecha_corte: 2025-11-08
```

Adjunta evidencias a la red privada gestionada por Ariadna; no publiques archivos sensibles.

### Uso de fuentes anónimas

- Requiere aprobación del editor; en temas de alto impacto, también de Legal.
- Describe el motivo del anonimato y cómo se evaluó la credibilidad.
- Evita basar piezas enteras sólo en fuentes anónimas; busca corroboraciones adicionales.

### Verificación de datos y cifras

- Reconstruye el cálculo: conserva hojas de cálculo y fórmulas.
- Cita la metodología (muestra, periodo, limitaciones).
- Utiliza componentes de tablas/gráficos de Sindri y referencia la fuente original.

### Contenidos de terceros y AI

- Cita y enlaza al medio original cuando uses material de otros.
- Si se usaron herramientas de IA para transcripción o ayuda en borrador, decláralo en notas internas y revisa manualmente.

### Registro y trazabilidad

- Usa comentarios/revisiones para registrar decisiones editoriales.
- Mantén bitácora de contactos sensibles en repositorio privado.

### Escalado y dudas

- Riesgo legal: escalar a Legal/Compliance.
- Conflictos de interés: ver [Políticas de conflictos de interés](./politicas-conflictos-interes.md).
- Para estándares de forma: ver [Estándares editoriales](./estandares-editoriales.md).

## Flujos de publicación

Este documento describe el flujo estándar de ideación a publicación para redacciones con más de 5 empleados que usan Apps Suite. Maximiza eficiencia (Sindri) y seguridad/trazabilidad (Ariadna), y establece tiempos objetivo (SLA) por etapa.

### Roles implicados (Ariadna)

- Periodista: crea contenidos, gestiona fuentes y evidencias.
- Editor/Desk: prioriza, asigna, revisa y aprueba editorialmente.
- Legal/Compliance: revisa riesgos (difamación, privacidad, derechos).
- Gestión/Distribución: agenda publicación y coordina salida a canales.

Los permisos se gestionan con RBAC en Ariadna. Sólo Editor y Legal pueden marcar “Aprobado para publicar”.

### Estados del contenido (Sindri)

1. Pitch (idea registrada)
2. Asignado
3. Borrador
4. En verificación
5. En revisión editorial
6. En revisión legal
7. Aprobado para publicar
8. Publicado
9. Corrección/Actualización (cuando aplique)

El estado se refleja en los metadatos de Sindri (`estado_verificacion`) y en la trazabilidad de Ariadna.

### Paso a paso

1) Pitch y priorización
- El periodista registra el pitch con contexto, valor informativo y fuentes iniciales.
- El editor decide: Aprobado / Aplazado / Descartado.

2) Asignación y planificación
- El editor asigna al periodista y fija deadline; se crea el documento en Sindri a partir de la plantilla.
- Se definen entregables (texto, gráficos, anexos) y criterios de verificación.

3) Redacción en Sindri
- Se completa el front‑matter obligatorio y se redacta usando componentes.
- Se adjuntan evidencias o se referencian mediante enlaces internos.

4) Verificación de fuentes
- Se documenta corroboración según la [Guía de verificación](./guia-verificacion-fuentes.md).
- Se actualiza el estado y se solicita revisión editorial.

5) Revisión editorial
- El editor solicita cambios o aprueba. Comentarios quedan trazados en Ariadna.

6) Revisión legal/compliance
- Foco en difamación, privacidad, Copyright, embargos, permisos de imagen.
- Si hay observaciones, el periodista ajusta y vuelve a enviar.

7) Aprobación y programación
- Editor y Legal marcan “Aprobado para publicar”. Gestión programa fecha/hora.
- Sindri genera web/PDF/DOC desde la misma fuente.

8) Publicación y distribución
- Se publica y se empujan metas de distribución (web, newsletter, redes si aplica).
- Se inicia medición de KPIs y escucha de feedback.

9) Correcciones/actualizaciones
- Erratas menores: edición directa con anotación de cambio.
- Cambios sustantivos: nota de corrección visible. Ver [Estándares editoriales](./estandares-editoriales.md).

### SLA y tiempos objetivo

- Pitch → Asignación: ≤ 24 h laborables.
- Borrador inicial: 2–5 días según complejidad.
- Verificación: ≤ 24–48 h desde fin de borrador.
- Revisión editorial: ≤ 24 h.
- Revisión legal (si aplica): ≤ 48 h.

### Excepciones: Última hora / Breaking news

- Ruta rápida: se permite saltar revisión legal si el editor así lo decide, dejando registro y evaluación posterior.
- Señalización clara de “en desarrollo” y actualización continua.

### Controles de calidad

- Checklist automático en Sindri antes de permitir pasar a “En revisión”.
- Validaciones: metadatos completos, fuentes con estado, licencias, ortografía.

### Seguridad y privacidad

- Borradores y anexos sensibles sólo dentro de la red privada de Ariadna.
- Uso de dispositivos corporativos o registrados en Ariadna.

### Integraciones

- Sindri → CMS/estático: despliegue automatizado a web/PDF/DOC.
- Ariadna → Bitácora: registro de acciones (quién, cuándo, qué).

Ver también: [Onboarding y checklist](./onboarding-checklist.md).

## KPIs e incentivos

Los siguientes KPIs e incentivos se aplican a periodistas que colaboran con medios estructurados (>5 empleados) usando Apps Suite. Buscan optimizar calidad, impacto y eficiencia, sin comprometer la ética.

### Principios

- Calidad por encima del click: evitar métricas que perviertan el juicio editorial.
- Transparencia y trazabilidad: métricas reproducibles, con fuente y método claros.
- Mejora continua: revisiones periódicas y ajustes de umbrales.

### Fuentes de datos (Apps Suite)

- Ariadna: bitácora de acciones (quién, cuándo, qué), cumplimiento de flujos y permisos.
- Sindri: metadatos de piezas, estados, tiempos de build/publicación, conteo de correcciones.
- Analítica de distribución: lecturas cualificadas, suscripciones, CTR newsletter, SEO.

### KPIs de calidad

- Ratio de correcciones por 1.000 palabras (objetivo: < 0,5/1.000).
- Cumplimiento de estándares editoriales (checklist OK/KO, objetivo: ≥ 95%).
- Incidencias de plagio o uso indebido de material (objetivo: 0).
- Porcentaje de piezas con verificación Nivel ≥ 2 cuando aplique (objetivo: ≥ 90%).

### KPIs de eficiencia

- Lead time pitch → publicación (mediana por tipo de pieza).
- Tiempo de revisión editorial (objetivo: ≤ 24 h) y legal (≤ 48 h si aplica).
- Porcentaje de entregas on‑time respecto a deadline (objetivo: ≥ 90%).
- WIP en curso por periodista (límite operativo acordado con el desk).

### KPIs de impacto

- Lectura cualificada: sesiones con tiempo de permanencia > X s (segmentado por sección).
- CTR en newsletter para piezas destacadas.
- Backlinks orgánicos y menciones cualificadas.
- Conversión a registro/suscripción atribuido a la pieza (si aplica).

### KPIs de cumplimiento

- Porcentaje de piezas con metadatos completos en Sindri (objetivo: 100%).
- Uso de red privada de Ariadna para anexos sensibles (objetivo: 100%).
- Declaraciones de conflicto registradas cuando corresponde (objetivo: 100%).

### Periodicidad y reporting

- Revisión semanal: tablero de equipo.
- Revisión mensual: informe cruzado calidad/impacto/eficiencia por sección.
- Revisión trimestral: tendencias y recomendaciones.

### Incentivos

- Reconocimiento editorial (portafolio interno, destacados del mes).
- Acceso a proyectos/piezas especiales tras 2 trimestres con KPIs ≥ objetivo.
- Formación financiada (verificaciones de datos, OSINT, redacción) ligada a plan individual.
- Bonus no automático y condicionado a calidad sostenida y cero incidencias de ética/legal.
- Insignias en Ariadna/Sindri por hitos (p. ej., 6 meses sin correcciones sustantivas).

Regla de oro: ningún incentivo económico dependerá exclusivamente de páginas vistas.

### Gobernanza y revisiones

- Comité editorial+legal revisa definición de KPIs e incentivos cada 6 meses.
- Cambios quedan documentados y versionados en Sindri.

Véase también: [Estándares editoriales](./estandares-editoriales.md) y [Flujos de publicación](./flujos-publicacion.md).

## Plantillas (nota de prensa, entrevista)

Modelos oficiales de Sindri para acelerar la producción y estandarizar la calidad. Pueden ampliarse con componentes del medio. Véase [Estándares editoriales](./estandares-editoriales.md) y [Flujos de publicación](./flujos-publicacion.md).

---

### Plantilla: Noticia breve

```markdown
---
autor: nombre.apellidos
seccion: actualidad
estado_verificacion: borrador
fuentes:
  - tipo: primaria
    identificacion: "Comunicado Ayuntamiento XYZ (09/11/2025)"
    nivel: 1
licencia: CC BY-NC 4.0
fecha_corte: 2025-11-09
tags: [municipal, movilidad]
---

## TITULAR conciso y fiel

_Subtítulo opcional con contexto clave_

[lead]
Breve párrafo inicial con las 5W: qué, quién, cuándo, dónde, por qué (y cómo).

[cuerpo]
- Hecho 1 con detalle y cifra (cita o enlace a fuente primaria cuando sea posible).
- Hecho 2 con contexto y antecedentes.
- Reacción/posición de las partes implicadas.

[contexto]
> Caja de contexto (componente Sindri) con antecedentes, cronología o datos clave.

[material]
- Foto/Gráfico (crédito y licencia).

[nota_redaccion]
- Observaciones internas, embargos, pendientes.
```

#### Buenas prácticas

- Mantener el foco en el hecho nuevo; enlazar a coberturas previas.
- Evitar adjetivos valorativos salvo en citas atribuidas.
- Verificación mínima Nivel 1; Nivel 2 si hay controversia.

---

### Plantilla: Reportaje/Análisis

```markdown
---
autor: nombre.apellidos
seccion: economia
estado_verificacion: en verificacion
fuentes:
  - tipo: secundaria
    identificacion: "Informe CNMV 2025"
    nivel: 2
  - tipo: testimonial
    identificacion: "Analista sectorial (nombre y cargo)"
    nivel: 1
licencia: CC BY-NC 4.0
fecha_corte: 2025-11-08
tags: [mercados, regulacion]
---

## TITULAR informativo

_Sumario que explique el enfoque del análisis_

[introduccion]
Párrafo de arranque que plantee la pregunta o hipótesis.

[cuerpo]
### Sección 1
Contexto, datos, gráfico (componente Sindri) y voces múltiples.

### Sección 2
Comparativa, antecedentes, expertos.

### Sección 3
Qué implicaciones tiene para el lector/sector.

[metodologia]
Cómo se obtuvieron los datos, limitaciones, margen de error.

[conclusiones]
Hallazgos clave y próximos pasos.
```

#### Buenas prácticas

- Declarar metodología y sesgos/limitaciones.
- Usar tablas/gráficos reproducibles con referencia a la fuente original.

---

### Plantilla: Entrevista

```markdown
---
autor: nombre.apellidos
seccion: sociedad
estado_verificacion: en verificacion
fuentes:
  - tipo: primaria
    identificacion: "Entrevistado: Nombre, cargo"
    nivel: 1
licencia: CC BY-NC 4.0
fecha_corte: 2025-11-09
tags: [entrevista]
---

## TITULAR con idea-fuerza del entrevistado

_Sumario con la tesis más destacada_

[introduccion]
Breve contexto del porqué de la entrevista y perfil del entrevistado.

[entrevista]
**Pregunta.** Texto de la pregunta.

**Respuesta.** Transcripción fiel (editar muletillas sin alterar sentido).

(repetir bloque P/R)

[cierre]
Síntesis de ideas y próximos pasos/compromisos.

[material]
Foto/Crédito/Licencia.
```

#### Buenas prácticas

- Evitar preguntas capciosas y permitir matices.
- Identificar cortes por claridad; usar elipsis si se omiten partes no sustantivas.
- Verificar afirmaciones factuales del entrevistado (verificación Nivel 1–2).

---

### Metadatos y validaciones automáticas

- Las plantillas incluyen metadatos obligatorios que Sindri valida antes de pasar a revisión.
- Se impide publicar si faltan `fuentes`, `licencia` o `estado_verificacion`.

### Integración con Ariadna

- Los cambios y aprobaciones quedan trazados.
- Sólo perfiles con permisos pueden mover estados o publicar.

## Políticas de conflictos de interés

Marco para identificar, declarar, gestionar y, cuando proceda, evitar conflictos de interés en la producción periodística dentro de medios estructurados (>5 empleados) que usan Apps Suite. Se integra con Ariadna (identidad/trazabilidad) y Sindri (metadatos/documentación).

### Principios generales

- Independencia editorial: las decisiones se toman en función del interés público.
- Transparencia: se declaran los conflictos reales, potenciales o percibidos.
- Proporcionalidad: se aplican medidas de mitigación acordes al riesgo.
- Trazabilidad: todo queda registrado para auditoría interna.

### Ámbitos de conflicto

- Económicos: participación accionarial, inversiones relevantes, deudas o patrocinios.
- Laborales: empleos, consultorías o colaboraciones pagadas con sujetos cubiertos.
- Personales: relaciones familiares, amistades o enemistades notorias.
- Regalos y atenciones: obsequios, viajes, invitaciones, hospitalidades.
- Activismo: pertenencia activa a organizaciones con agenda en el tema cubierto.

### Declaración obligatoria (Ariadna)

- Cada periodista debe mantener actualizada su declaración en el módulo de cumplimiento de Ariadna.
- Declaraciones por pieza: en Sindri, incluir campo `declaracion_conflicto` (sí/no) y, si “sí”, describir.
- Actualización anual mínima, y en cualquier cambio material (≤ 7 días desde el hecho).

### Gestión por casos

1) Asignación de temas
- El periodista revisa su potencial conflicto al recibir un pitch/asignación.
- Si existe conflicto real o potencial, lo comunica al editor y lo registra en Ariadna.

2) Mitigación
- Recusación: reasignar la pieza a otro periodista.
- Supervisión reforzada: doble edición y revisión legal previa.
- Transparencia al lector: nota al pie explicando relación pertinente, cuando aplique.

3) Regalos y viajes
- Regla general: no se aceptan regalos de valor más que simbólico (< 20 EUR), ni viajes pagados.
- Excepciones: accesos imprescindibles para cobertura (p. ej., pase de prensa). Deben declararse.
- Viajes/pagos de terceros: requieren aprobación previa del editor y registro en Ariadna.

4) Actividades externas
- Conferencias, cursos, consultorías remuneradas: requieren autorización previa.
- Deben declararse y, si están relacionadas con la cobertura, se aplicará recusación o aviso al lector.

### Redacción en Sindri (metadatos)

Añadir campos al front‑matter cuando aplique:

```yaml
conflictos_interes:
  existe: true
  descripcion: "El autor imparte clases ocasionales en la universidad analizada"
  mitigacion: ["doble_edicion", "nota_transparencia"]
  aprobado_por: "editor.nombre"
```

Si `existe: false`, mantener igualmente un rastro de revisión interna en Ariadna.

### Revisión y auditoría

- Legal/Compliance puede requerir documentación adicional antes de publicar.
- Auditoría semestral de una muestra de piezas para verificar cumplimiento.
- Incumplimientos graves pueden acarrear medidas disciplinarias según política del medio.

### Casos especiales

- Fuentes anónimas con relación previa con el periodista: requieren recusación o coautoría con supervisión reforzada.
- Coberturas locales en comunidades pequeñas: aplicar transparencia reforzada y edición externa si es necesario.

### Comunicación al lector

- Cuando la mitigación incluya transparencia, se añadirá una nota visible en el artículo (al inicio o al final) explicando el contexto del conflicto y la medida adoptada.

### Relación con otros documentos

- Ver [Estándares editoriales](./estandares-editoriales.md) para normas de forma.
- Ver [Guía de verificación de fuentes](./guia-verificacion-fuentes.md) para documentación de evidencias.
- Ver [Flujos de publicación](./flujos-publicacion.md) para el circuito de aprobaciones.

## Onboarding y checklist

Guía práctica para incorporar periodistas a un medio estructurado (>5 empleados) que opera con Apps Suite. Cubre accesos (Ariadna), plantillas y publicación (Sindri), y los controles básicos de seguridad y compliance.

### 1) Requisitos previos

- Contrato/colaboración registrada y verificada por RR. HH.
- Dispositivo corporativo o personal registrado en la red privada de Ariadna.
- Cuenta en Ariadna con rol “Periodista” asignado y 2FA activado.
- Aceptación del Código de Conducta y de las [Políticas de conflictos de interés](./politicas-conflictos-interes.md).

### 2) Accesos y herramientas (Ariadna)

- Activar la cuenta vía enlace seguro; configurar 2FA.
- Revisar las apps asignadas: Sindri, analítica, almacenamiento privado.
- Confirmar pertenencia a los grupos de secciones (Política, Economía, etc.).

### 3) Formación inicial (Sindri)

- Introducción a la extensión de Markdown y a los componentes de Sindri.
- Repaso de plantillas oficiales y metadatos obligatorios.
- Flujo de revisión y publicación; compilación a web/PDF/DOC.

### 4) Primeros pasos operativos

1. Crear un borrador con la plantilla “Noticia breve”.
2. Completar metadatos (autor, sección, estado, fuentes, licencia).
3. Simular verificación con 1–2 fuentes y adjuntar evidencia en red privada.
4. Solicitar revisión editorial; atender comentarios.
5. Simular revisión legal (si aplica) y programar publicación en entorno de pruebas.

### 5) Seguridad y privacidad

- No compartir borradores o anexos fuera de la red privada de Ariadna.
- Cifrar grabaciones y documentos sensibles; almacenar sólo en ubicaciones aprobadas.
- Reportar incidentes de seguridad al canal designado en <24 h.

### 6) Normativa y estándares

- Revisar [Estándares editoriales](./estandares-editoriales.md).
- Revisar [Guía de verificación de fuentes](./guia-verificacion-fuentes.md).

### 7) Checklist de publicación

Antes de solicitar “Aprobado para publicar”, verifica:

- Metadatos completos en Sindri (autor, sección, estado, fuentes, licencia). [ ]
- Enlaces y citas funcionan; materiales de terceros correctamente licenciados. [ ]
- Verificación documentada (Nivel ≥ 2 cuando aplique). [ ]
- Ortografía/estilo revisados según libro del medio. [ ]
- Evaluación de riesgos legal/compliance cuando procede. [ ]
- Declaraciones de conflicto de interés diligenciadas. [ ]

### 8) Métricas y mejora continua

- Acceso al tablero de KPIs del equipo (calidad, eficiencia, impacto).
- Revisión quincenal con el editor para identificar mejoras.

### 9) Contactos clave

- Editor/Desk: nombre@medio.tld
- Legal/Compliance: legal@medio.tld
- Soporte Apps Suite: soporte@apps-suite.tld

Para contexto general del producto, ver [Descripción del Producto](../../descripcion-producto.md).
