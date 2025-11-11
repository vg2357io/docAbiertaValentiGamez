# Para colaboradores manager

## Resumen del rol

Este documento define la colaboración con Project Managers (PM) que coordinan la ejecución en Apps Suite usando Jira o software equivalente (YouTrack, Azure Boards, Linear, Trello+Power‑Ups, etc.). Se alinea con la visión y límites del producto descritos en `../../descripcion-producto.md`.

### Propósito del rol
- Asegurar entrega predecible del roadmap de Apps Suite (Ariadna + Sindri) con trazabilidad end‑to‑end.
- Orquestar trabajo entre negocio, diseño, ingeniería, legal/compliance y comunidad (mecenas/partners).
- Mantener un sistema de planificación, seguimiento y comunicación saludable y auditable.

### Alcance y responsabilidades clave
- Planificación por resultados: definir y mantener OKRs trimestrales, mapear epics/features y desglosar en historias/tareas.
- Gobernanza ágil: facilitar cadencias (dailies, weekly review, sprint planning/review/retro) y acuerdos de trabajo.
- Flujo en Jira: diseñar tableros, estados, Definition of Ready (DoR) y Definition of Done (DoD). Garantizar etiquetas, versiones y componentes coherentes.
- Gestión de dependencias y riesgos: identificar, registrar, mitigar y escalar según `gestion-riesgos.md`.
- Calidad y cumplimiento: asegurar criterios de aceptación, PR reviews, y evidencias (enlace a commits, PRs, artefactos y, cuando aplique, verificaciones Hedera).
- Stakeholder management: reportes ejecutivos, gestión de expectativas, coordinación con proveedores/terceros.

### Límites del rol
- No sustituye a Product Management ni a Tech Lead: las decisiones de priorización estratégica y arquitectura requieren co‑decisión según `raci-gobernanza.md`.
- No se comprometen desarrollos “a medida” fuera del alcance del MVP/roadmap de `../../descripcion-producto.md` salvo acuerdo documentado.

### Entregables recurrentes
- Roadmap vivo con epics priorizados, versiones y dependencias.
- Plan de iteración vigente (sprint/kanban) con capacidad estimada y burnup/burndown visibles.
- Informe semanal a stakeholders (estado, riesgos, bloqueos, próximos hitos).
- Registro de riesgos y decisiones actualizado.

### Indicadores (KPIs)
- Predictibilidad: ratio compromiso/entrega por iteración, lead time y cycle time.
- Calidad de flujo: WIP medio, throughput, % retrabajo/reaperturas.
- Salud de planificación: % items con DoR/DoD cumplidos, cobertura de criterios de aceptación.
- Stakeholders: satisfacción (NPS interno), cumplimiento de fechas clave.

### Herramientas y artefactos mínimos
- Jira/alternativa con: proyectos, workflows, issue types (Epic, Story, Task, Bug, Spike), versiones, componentes y filtros guardados.
- Repositorios Git con PRs obligatorias y checks automáticos.
- Documentación Sindri/Markdown con plantillas estándar (`plantillas-operativas.md`).
- Canales de comunicación definidos (`comunicaciones-rituales.md`).

## RACI y gobernanza

Este marco aclara quién Hace (R), quién es Responsable última (A), quién debe ser Consultado (C) y quién Informado (I) en decisiones clave del programa Apps Suite. Complementa lo definido en `comunicaciones-rituales.md` y `planificacion-okrs.md`.

### Roles
- Sponsor/Mecenas (SP)
- Product Manager / Product Owner (PO)
- Project Manager (PM)
- Tech Lead / Arquitecto (TL)
- Equipo de Ingeniería (DEV)
- QA / Calidad (QA)
- DevOps/SRE (OPS)
- Legal/Compliance (LC)
- Community/Marketing (CM)

### Decisiones y matriz RACI (resumen textual)
- Roadmap y priorización trimestral
    - R: PO, PM
    - A: SP (cuando afecte a alcance/finanzas); PO (día a día)
    - C: TL, CM
    - I: DEV, QA, OPS, LC
- Diseño de arquitectura y estándares técnicos
    - R: TL
    - A: TL
    - C: DEV, OPS, PM
    - I: PO, QA
- Seguridad y acceso (Ariadna: OIDC, RBAC, perímetro)
    - R: TL, OPS
    - A: TL
    - C: LC, PM
    - I: PO, DEV, QA
- Plantillas y publicación (Sindri: estilos, componentes)
    - R: DEV asignado, QA
    - A: TL (técnico) y PO (coherencia producto)
    - C: PM, CM
    - I: SP
- Releases y versionado
    - R: PM (calendarización), OPS (ejecución), DEV (preparación)
    - A: TL (go/no‑go técnico)
    - C: QA, PO
    - I: SP, CM, LC
- Gestión de incidencias críticas (P1/P2)
    - R: TL (técnico), PM (coordinación)
    - A: TL
    - C: OPS, QA, PO
    - I: SP, CM, LC
- Presupuesto y contrataciones
    - R: SP
    - A: SP
    - C: PO, PM
    - I: TL
- Cumplimiento legal y políticas (uso ético, privacidad)
    - R: LC
    - A: LC
    - C: PO, TL, PM
    - I: SP, DEV, QA, OPS

### Reglas de toma de decisiones
- Documentar decisiones relevantes como ADRs en Sindri y enlazarlas desde el epic/issue.
- Para conflictos PO vs TL (prioridad vs viabilidad), el PM facilita trade‑offs y eleva al Sponsor si impacta alcance/tiempos y presupuesto.
- Cambios de alcance medio/alto requieren: análisis de impacto, propuesta de mitigación y aprobación de quien ostenta la "A".

### Escalado
- Bloqueos > 24h que afecten camino crítico: escalar al TL y, si aplica, al SP en la weekly.
- Riesgos con score ≥ 12 (ver `gestion-riesgos.md`): incluir en comité mensual y evaluar planes de contingencia.

## Planificación y OKRs

Guía para definir objetivos orientados a resultados y conectarlos con la ejecución en Jira (o equivalente), alineados al MVP y roadmap de `../../descripcion-producto.md`.

### Ciclo de planificación trimestral
1. Descubrimiento y foco (semana -2 a -1): revisar métricas (adopción Ariadna, tiempo de publicación Sindri, incidencias de seguridad), feedback de stakeholders y deuda técnica.
2. Propuesta de OKRs (semana -1): Product/PM redactan borrador y lo socializan.
3. Aprobación y capacity (semana 0): acordar objetivos, fijar capacidad por equipo/rol, cerrar dependencias críticas.
4. Ejecución (semanas 1–11): sprints/flujo continuo con revisiones semanales.
5. Cierre (semana 12): scoring de KRs, lecciones aprendidas y decisiones (ADRs) para el siguiente ciclo.

### Estructura recomendada
- Objetivo (O): cualitativo, inspirador, acotado al trimestre.
- Key Results (KRs): 2–4 métricas leading/lagging, con línea base y objetivo.
- Iniciativas: epics/features en Jira que impactan los KRs.

### Ejemplos (Apps Suite)
- O1: Aumentar la adopción segura de Ariadna en el MVP.
    - KR1: +30% en usuarios activos mensuales autenticados por OIDC.
    - KR2: <1.5h MTTR en incidencias de acceso de severidad alta.
    - Iniciativas: Epic "Onboarding Ariadna MVP", Epic "Observabilidad de acceso".
- O2: Reducir el tiempo de publicación con Sindri.
    - KR1: Tiempo mediano de borrador a web/PDF ≤ 2h.
    - KR2: 90% de documentos publicados desde plantillas estándar sin retrabajo.
    - Iniciativas: Epic "CLI Sindri mejoras", Epic "Plantillas base v2".

### Mapeo OKR → Jira
- Cada Objetivo se etiqueta en Jira como versión/label p.e. `okr-2025Q4-o1`.
- Cada KR se instrumenta con métricas automatizadas (dashboard) o tareas de medición recurrentes.
- Las Iniciativas se modelan como Epics; historias/tareas enlazadas heredan la etiqueta del OKR.
- Crear tableros/dashboards por OKR con: progreso de epics, throughput, lead time, burnup.

### Reglas de calidad
- KRs deben ser medibles, alcanzables y con una fuente de datos clara (logs, dashboards, encuestas, Hedera cuando aplique).
- Evitar KRs exclusivamente de output (número de tareas cerradas); priorizar outcomes (impacto en usuario/negocio/operación).
- Revisión semanal: 10–15 min en la weekly review para comprobar avance y ajustar.

### Cierre y scoring
- Escala 0.0–1.0 por KR. El objetivo es 0.7–0.8 como señal de ambición saludable.
- Documentar aprendizajes en ADRs; actualizar el backlog estratégico y deuda técnica.

## Gestión de riesgos

Marco para identificar, evaluar, mitigar y monitorizar riesgos del programa Apps Suite. Integra el registro en Jira/alternativa y reportes semanales del PM.

### Categorías típicas
- Producto: ambigüedad de requisitos, desalineación con `../../descripcion-producto.md`.
- Técnica: deuda, complejidad, rendimiento, seguridad (Ariadna: OIDC/RBAC/perímetro; Sindri: publicación/plantillas).
- Operacional: capacidad, rotación, procesos, proveedores.
- Dependencias: terceros (SaaS/infra), integraciones, aprobaciones externas.
- Cumplimiento: privacidad, uso ético, licencias, `../legal/uso-etico-no-especulacion.md`.
- Calendario/Finanzas: fechas clave, presupuesto, ROI esperado.

### Proceso
1. Identificación continua en dailies/planificación/reviews.
2. Registro en Jira (issue type "Risk" o etiqueta `risk`) con detalles y propietario.
3. Evaluación inicial con matriz Probabilidad × Impacto y cálculo de score.
4. Plan de respuesta (evitar, mitigar, transferir, aceptar) y tareas vinculadas.
5. Seguimiento semanal: actualizar estado/score; escalar si score ≥ 12.
6. Cierre con lecciones aprendidas y enlace a ADR si la decisión es estructural.

### Matriz de evaluación (ejemplo)
- Probabilidad (P): 1 Muy baja, 2 Baja, 3 Media, 4 Alta, 5 Muy alta.
- Impacto (I): 1 Marginal, 2 Menor, 3 Moderado, 4 Alto, 5 Crítico.
- Score = P × I.
- Umbrales: 1–6 bajo, 7–11 medio, 12–25 alto (revisar en weekly/comité mensual).

### Campos del registro de riesgos (plantilla)
- Título: [Categoría] Riesgo conciso.
- Descripción: contexto, hipótesis, señales.
- P/I/Score: valores y razonamiento.
- Horizonte: corto (<1 mes), medio (1–3), largo (>3).
- Disparadores: eventos que materializan el riesgo.
- Plan de respuesta: estrategia y acciones.
- Responsable: persona/rol (PM/TL/PO/Proveedor).
- Estado: Identificado, En mitigación, Escalado, Cerrado.
- Evidencias/enlaces: issues, PRs, dashboards, verificaciones Hedera si aplica.

### Ejemplo
- Título: [Técnico] Incertidumbre integración OIDC con proveedor X.
- Descripción: la librería del proveedor tiene soporte parcial para PKCE; riesgo de bloqueo en onboarding Ariadna.
- P/I/Score: 4 × 4 = 16 (alto).
- Disparadores: errores 4xx en flujo de autorización, latencia > 1s.
- Plan de respuesta: spike técnico (1 sprint), prueba de concepto, plan B con conector alternativo.
- Responsable: TL (R), PM (C), PO (I).
- Estado: En mitigación; seguimiento semanal y demo en sprint review.

## Comunicaciones y rituales

Este marco define canales, cadencias y agendas para garantizar transparencia y alineamiento. Se apoya en Jira (o equivalente), documentación en Sindri/Markdown y videoconferencia estándar.

### Canales oficiales
- Operativo: tablero Jira + comentarios en issues; repos Git (PRs, code reviews).
- Sincrónico: Google Meet/Zoom/Teams (según cliente), calendario compartido.
- Asíncrono: canal de chat dedicado (Slack/Teams) con hilos por epic/área.
- Documentación: repositorio Sindri con páginas de decisiones (ADR), plantillas y actas.

### Cadencias recomendadas
- Daily (15 min, opcional en kanban estable): bloqueos, prioridades del día, WIP.
- Weekly review (30–45 min): estado de epics, métricas (throughput, lead time), riesgos.
- Sprint planning (cada 2 semanas o seg. contexto, 60–90 min): capacidad, objetivos, selección de historias, criterios de aceptación, dependencias.
- Sprint review (30–45 min): demo de avances, feedback de stakeholders.
- Retrospectiva (30–60 min): qué mantener, qué cambiar, acciones concretas con responsables.
- Comité de producto/tecnología (mensual, 45–60 min): decisiones estratégicas y escalados según `raci-gobernanza.md`.

### Agendas tipo
- Daily: 1) Bloqueos, 2) Prioridades, 3) Riesgos emergentes, 4) Avisos.
- Weekly review: 1) Roadmap/epics, 2) Métricas (burndown/burnup, WIP, cycle time), 3) Riesgos y dependencias, 4) Próximos hitos.
- Planning: 1) Objetivo de iteración, 2) Capacidad, 3) Selección de historias (DoR), 4) Aceptación y partición de tareas, 5) Confirmar DoD y definición de pruebas.
- Retro: 1) Datos (métricas/eventos), 2) Análisis, 3) Acciones SMART, 4) Seguimiento de acciones anteriores.

### Normas de trabajo
- Definition of Ready (DoR): historia con usuario/valor, criterios de aceptación testables, dependencias claras, diseño/PRD referenciado.
- Definition of Done (DoD): código mergeado, tests/QA pasados, documentación mínima actualizada, deploy a entorno acordado, issue cerrado con evidencia.
- Etiquetado estándar: `product-area`, `component`, `type` (feature/bug/chore), `priority`, `risk`.
- Tiempos de respuesta: comentarios críticos < 24h hábiles; PR reviews < 48h hábiles.

### Reglas de escalado
- Bloqueo > 24h o dependencia externa crítica: escalar a Tech Lead/Proveedor.
- Riesgo alto (score ≥ 12 ver `gestion-riesgos.md`): incluir en weekly review y, si procede, comité mensual.

### Trazabilidad
- Cada decisión relevante genera un ADR breve en Sindri y se enlaza desde el epic/issue correspondiente.
- Vincular issues a PRs y a versiones de Jira; para hitos verificables, registrar en `../tiers-utilitarios/moneda/distribucion-moneda.md` o `../../licencias-socio/verificacion-descentralizada.md` cuando aplique.

## Onboarding y checklist

Guía de incorporación de Project Managers (PM) para operar Apps Suite con Jira (o equivalente), Git y documentación en Sindri, alineada a `../../descripcion-producto.md`.

### Accesos y configuración (Día 0)
- Identidad y seguridad
    - Acceso a Ariadna (OIDC) con rol adecuado y MFA activado.
    - Alta en red privada/perímetro y registro de dispositivo.
- Herramientas
    - Jira/YouTrack/Azure Boards: usuario, permisos de proyecto, tableros y filtros.
    - Git (GitHub/GitLab): grupos, repos relevantes, políticas de PR obligatoria.
    - Sindri/Markdown: repos de documentación y plantillas base.
    - Chat (Slack/Teams) y videoconferencia, calendario compartido.
- Documentación
    - Leer `resumen-rol.md`, `comunicaciones-rituales.md`, `raci-gobernanza.md` y `gestion-riesgos.md`.
    - Aceptar políticas: `../legal/uso-etico-no-especulacion.md` y normas de contribución.

### Preparación de entorno (Día 1–2)
- Revisar el backlog, epics activos y versiones planificadas.
- Ver tableros y dashboards estándar (throughput, lead time, burndown/burnup).
- Confirmar workflows de issues (estados, transiciones, DoR/DoD).
- Crear o validar filtros guardados por área/producto.
- Verificar integraciones: enlaces PR ↔ issues, CI checks, releases/versiones.

### Puesta en marcha (Semana 1)
- Co-facilitar una daily y una weekly review.
- Preparar agenda y materiales de la próxima planning/retro.
- Elaborar primer informe semanal a stakeholders (estado, riesgos, bloqueos, próximos hitos) usando `plantillas-operativas.md`.
- Actualizar registro de riesgos iniciales del programa.

### Consolidación (Día 7–14)
- Auditar 10–20 issues para comprobar DoR/DoD y etiquetado estándar.
- Revisar acuerdos de trabajo del equipo y proponer mejoras si procede.
- Establecer cadencia de actualización de OKRs (`planificacion-okrs.md`) y dashboards.

### Estabilización (Día 30)
- Evaluar métricas base: predictibilidad, lead/cycle time, WIP y retrabajo.
- Revisar dependencias y plan de mitigación de riesgos altos.
- Alinear con PO/TL el plan de la iteración siguiente y ajustes de capacidad.

### Lista de verificación rápida
- [ ] Accesos a Ariadna, Jira, Git, Sindri, Chat, Calendario.
- [ ] Lectura de documentos clave y políticas.
- [ ] Tableros, filtros y dashboards operativos.
- [ ] Informe semanal enviado y enlazado en el epic correspondiente.
- [ ] Registro de riesgos creado y comunicado en weekly.

## Plantillas operativas

Colección de plantillas listas para copiar/pegar en Jira (o equivalente), Git y documentación Sindri/Markdown. Referencias cruzadas con `comunicaciones-rituales.md`, `planificacion-okrs.md` y `gestion-riesgos.md`.

### 1) Historia de usuario (Jira: Story)
```
Título: [Área/Componente] Como <tipo de usuario> quiero <capacidad> para <resultado>

Descripción
- Contexto: ¿qué problema resuelve? Relación con `../../descripcion-producto.md`.
- Alcance: límites y supuestos (fuera de alcance explícito).
- Diseño/Docs: enlaces a PRD/Mockups/ADRs.

Criterios de aceptación (Given/When/Then)
- [ ] Given ..., When ..., Then ...
- [ ] ...

Definición de listo (DoR)
- [ ] Valor usuario claro, dependencias identificadas, criterios de aceptación preliminares, riesgos anotados.

Definición de hecho (DoD)
- [ ] Código mergeado con PR revisada
- [ ] Tests/QA pasados
- [ ] Docs Sindri actualizadas
- [ ] Deploy al entorno acordado

Trazabilidad
- Epic: EPIC-XYZ
- Version/Release: 2025.Q4.MVP
- PRs: enlaces
- Métricas/OKR: label `okr-2025Q4-o1`
```

### 2) Tarea técnica / Spike (Jira: Task/Spike)
```
Título: [Técnico] Investigación/Implementación <tema>

Objetivo y preguntas
- Qué se quiere aprender/entregar
- Hipótesis a validar

Plan y entregables
- Experimentos/POC
- Documentos/ADRs/resultados

Criterios de éxito
- [ ] Preguntas respondidas
- [ ] Decisión tomada (ADR) o siguiente paso definido
- [ ] Estimación/impacto en epics relacionado
```

### 3) Bug (Jira: Bug)
```
Título: [Severidad] <resumen>

Descripción
- Comportamiento actual vs esperado
- Entorno (versión, navegador/SO, fecha/hora)
- Pasos para reproducir
- Evidencias (logs, capturas, hash de commit)

Severidad/Prioridad
- Severidad: P1/P2/P3
- Impacto en usuario/negocio

Criterios de aceptación
- [ ] Reproducido en entorno controlado
- [ ] Arreglado en rama, con test
- [ ] Verificado por QA
- [ ] Incluido en release correspondiente
```

### 4) Plantilla de Pull Request (Git)
```
### Resumen
- ¿Qué cambia y por qué?

### Tipo
- [ ] Feature  [ ] Bugfix  [ ] Chore  [ ] Docs  [ ] Security

### Alcance
- Issues relacionados: #JIRA-123 #JIRA-456
- Breaking changes: Sí/No

### Evidencias
- Capturas/Logs
- Resultados de tests/CI

### Checklist
- [ ] Cumple DoD y criterios de aceptación
- [ ] Etiquetas/Versiones actualizadas
- [ ] Docs Sindri enlazadas/actualizadas
```

### 5) Acta de reunión (Sindri/Markdown)
```
## Acta — <tipo> (<fecha>)

Objetivo
Participantes
Agenda

Notas clave
- Punto 1
- Punto 2

Decisiones (enlazar ADR si aplica)
- D1: ... [ADR-###]

Acciones
- [ ] Acción — Responsable — Fecha

Enlaces
- Tablero/Issues/PRs relacionados
```

### 6) Informe semanal a stakeholders (Sindri/Markdown)
```
## Informe semanal — Semana <n> (<rango fechas>)

Resumen ejecutivo (3–5 líneas)

Estado por objetivos/epics
- O1/EPIC-XYZ: semáforo (🟢🟡🔴), avances, próximos pasos

Métricas
- Throughput: X/semana  • Lead time mediano: Yd  • WIP: Z
- OKRs: KR1=0.5, KR2=0.3

Riesgos y bloqueos
- [Alto/Medio/Bajo] Descripción — Plan de respuesta — Responsable

Decisiones y cambios de alcance
- Resumen + enlaces a ADRs

Próximos hitos
- Hito — Fecha — Dependencias
```

### 7) Registro de riesgo (Jira o página en Sindri)
```
Título: [Categoría] <riesgo>
Descripción: contexto y señales
Probabilidad (1–5): 
Impacto (1–5): 
Score: P×I = 
Horizonte: corto/medio/largo
Disparadores: 
Plan de respuesta: evitar/mitigar/transferir/aceptar + acciones
Responsable: 
Estado: Identificado/En mitigación/Escalado/Cerrado
Evidencias: issues/PRs/dashboards/Hedera
```

### 8) Definiciones estándar
- Etiquetas: `product-area`, `component`, `type`, `priority`, `risk`, `okr-<año><Q>-o<n>`
- DoR/DoD: ver `comunicaciones-rituales.md`
- OKRs: ver `planificacion-okrs.md`
- Riesgos: ver `gestion-riesgos.md`

