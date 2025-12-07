# Para colaboradores técnico

## Resumen del rol

Este documento define el encaje, expectativas y entregables del colaborador técnico (desarrollador/a y/o DevOps) dentro de Apps Suite. Debe leerse junto con la [Descripción del Producto](../../descripcion-producto.md) para alinear decisiones con los dos pilares de la plataforma:

- Ariadna: identidad, acceso unificado (OIDC/OAuth2), orquestación y conectores.
- Sindri: extensión de Markdown para generar web/PDF/DOC y operar con plantillas reutilizables.

### Misión del rol

Acelerar el time‑to‑market del MVP y la evolución a V1 garantizando seguridad por diseño, calidad y trazabilidad. El rol técnico convierte requerimientos de producto en código, infraestructura como código (IaC), pipelines y documentación operable.

### Principios de trabajo

- Seguridad primero: mínimos privilegios, trazabilidad y revisión obligatoria.
- Una sola fuente de verdad: código + configuración versionada; documentación junto al repositorio.
- Automatizar lo repetible: pipelines CI/CD, plantillas Sindri, módulos IaC.
- Iterar pequeño, entregar frecuente: ramas cortas, PR pequeños y verificables.

### Perfil esperado

- Experiencia práctica en al menos 2 áreas: backend (Node/TS/Java/Kotlin), frontend (SPA/SSR), DevOps (Docker, IaC, CI/CD), seguridad (OIDC/OAuth2, RBAC), contenidos estáticos (Markdown/MDX).
- Conocimiento aplicado de contenedores, artefactos y gestión de secretos.
- Capacidad para leer/crear ADR y documentación técnica de diseño.

### Responsabilidades clave (resumen)

- Integrar servicios con Ariadna (login unificado, claims/roles, políticas de acceso y conectores de terceros) siguiendo el modelo de mínimos privilegios.
- Diseñar y mantener plantillas y componentes de Sindri para publicación coherente (web y PDF como mínimo en el MVP).
- Implementar y operar CI/CD, calidad (lint, test, cobertura) y seguridad (SAST/DAST, escaneo de dependencias).
- Entregar IaC reproducible (red privada, dominios/TLS, observabilidad, despliegues) de acuerdo con el alcance del MVP.
- Documentar flujos, variables y runbooks; participar en revisiones de PR.

### Entregables por fase

- MVP (Fase 0):
    - Login Ariadna funcionando para los servicios definidos (2–3 conectores máximo).
    - Plantillas base de Sindri y render a web y PDF.
    - Pipeline CI/CD con checks mínimos (lint+test) y despliegue a entorno de pruebas.
    - Esqueleto de IaC para red privada y dominios/TLS.
- Fase 1:
    - Observabilidad base (logs/métricas/trazas) y ampliación de conectores prioritarios.
    - Endurecimiento de seguridad y automatización de pruebas de integración.
- Fase 2:
    - Catálogo de módulos reutilizables y automatización avanzada (entornos efímeros, promoción controlada).

### Interacciones

- Producto/Manager: priorización de historias y criterios de aceptación.
- Seguridad: revisión de amenazas, configuración de políticas y excepciones.
- Contenido/Comms: acuerdos de estilo y límites de plantillas Sindri.

### Disponibilidad y comunicación

- Presencia semanal a través de rituales definidos (ver `_sidebar` → comunicaciones y rituales globales).
- Respuesta a incidencias críticas según rotación pactada.

## Responsabilidades y alcance

Este documento detalla el scope del colaborador técnico para el MVP y la evolución posterior de Apps Suite. Complementa la [Descripción del Producto](../../descripcion-producto.md) y sirve como contrato de expectativas.

### Alcance (In‑Scope)

1. Identidad y acceso (Ariadna)
    - Integración OIDC/OAuth2 en los servicios priorizados del MVP.
    - Definición y aplicación de roles/claims y políticas de mínimos privilegios.
    - Gestión segura de secretos (env/keystores) y rotación básica.
2. Contenidos y plantillas (Sindri)
    - Diseño/ajuste de plantillas base y componentes reutilizables.
    - Pipeline de render a web y PDF a partir de Markdown extendido.
    - Integración con Ariadna para contenido privado/acciones autenticadas.
3. CI/CD y calidad
    - Configurar pipelines con lint, test unitarios y de integración básicos.
    - Versionado semántico y publicación de artefactos/imágenes.
    - Reglas de PR y revisión por pares; plantillas de PR/issue.
4. Infraestructura como código (IaC)
    - Esqueleto reproducible (red privada/perímetro, dominios y TLS).
    - Despliegues a entornos de desarrollo y pruebas; promoción manual a producción.
    - Observabilidad mínima: logs y métricas de sistema/servicio.
5. Seguridad por diseño
    - SAST/escaneo de dependencias en CI; hardening de contenedores base.
    - Checklist de amenazas por historia épica; registro de decisiones (ADR).

### Fuera de alcance (Out‑of‑Scope) en MVP

- Personalizaciones a medida fuera de las plantillas Sindri definidas.
- Automatización compleja multi‑cloud o multi‑región.
- Alta carga/escala (stress/performance) más allá de pruebas básicas.
- Conectores de terceros no priorizados en el roadmap del MVP.

### Responsabilidades detalladas

- Ingeniería de software
    - Implementar historias con criterios de aceptación claros y pruebas.
    - Mantener deuda técnica acotada; proponer ADR cuando aplique.
- DevOps / Plataforma
    - Mantener IaC, pipelines, artefactos y gestión de secretos.
    - Definir procesos de backup/restore y runbooks de recuperación.
- Seguridad
    - Aplicar RBAC en Ariadna, revisar superficies de ataque y excepciones.
    - Coordinar validaciones periódicas (dependabot/trivy/semgrep o equivalentes).
- Documentación
    - Documentar variables, comandos, flujos y puntos de soporte en Markdown junto al código.

### Interfaces y dependencias

- Con Producto: priorización y aceptación de entregables.
- Con Contenido/Comms: límites de plantillas y convenciones editoriales Sindri.
- Con Legal/Compliance: requisitos mínimos de privacidad, trazabilidad y retención.

### Criterios de “hecho” (DoD)

- Código revisado y mergeado en rama principal con CI verde.
- Documentación actualizada (README, runbooks, variables, changelog).
- Seguridad mínima: escaneos sin findings críticos/bloqueantes.
- Despliegue verificado en entorno objetivo con checklist de smoke tests.

## Flujos de entrega y PR

Este documento define cómo trabajamos el ciclo de vida del código en Apps Suite para mantener velocidad y seguridad. Aplica a repos de Ariadna (identidad/conectores), Sindri (plantillas/render) y módulos auxiliares.

### Modelo de ramas

- `main`: siempre desplegable; protegido. Requiere PR con revisión y CI verde.
- `develop` (opcional si el equipo lo requiere): integración continua previa a `main`.
- `feature/<ticket>`: trabajo acotado (≤ 3 días). Basada en `main` o `develop`.
- `hotfix/<issue>`: corrección urgente sobre `main`. Se backporta a `develop` si existe.
- `release/<version>`: preparación de versión (changelog, bumps, smoke tests).

Recomendación: ramas cortas y PR pequeños (≤ 400 líneas cambiadas netas) para facilitar revisión.

### Pull Requests (PR)

- Plantilla de PR: descripción, tipo de cambio, checklist, capturas/logs, riesgos y mitigación.
- Revisión por pares: mínimo 1 aprobación; cambios sensibles (seguridad/IaC) requieren 2.
- Checks automáticos obligatorios:
    - Lint + format
    - Pruebas (unitarias y, cuando aplique, integración)
    - SAST/escaneo de dependencias
    - Build de artefacto/imagen
- Criterios de aceptación: definidos por Producto; incluir pruebas o evidencias.

### Commits y mensajes

- Convencional Commits (recomendado): `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `perf:`, `test:`, `ci:`, `build:`.
- Mensajes claros y en imperativo; referenciar ticket/issue.

### Versionado y releases

- Versionado semántico (SemVer): `MAJOR.MINOR.PATCH`.
- Auto‐bump y changelog generados a partir de Conventional Commits o etiquetas en PR.
- Tag de release en `main` + publicación de artefactos (imágenes, paquetes, plantillas Sindri).
- Entornos:
    - `dev`: integración diaria; puede romperse de forma controlada.
    - `test`/`staging`: estable; previa a producción. Smoke tests obligatorios.
    - `prod`: sólo desde `main` y con aprobación explícita.

### Despliegues (alto nivel)

- CI construye y valida; CD despliega con gates por entorno.
- Parámetros por entorno en variables seguras; sin credenciales en el repo.
- Estrategias: blue/green o canary si procede; en MVP, despliegue directo controlado.

### Hotfixes

- Crear `hotfix/<issue>` desde `main` → PR a `main` con prioridad alta.
- Tras release de `PATCH`, backport a `develop`/`release` abierto si existe.
- Documentar causa raíz y medidas preventivas en el PR.

### Gestión de dependencias

- Renovaciones automáticas de dependencias (renovate/dependabot o equivalente).
- Política de actualización: parches de seguridad ASAP; minor en ventanas planificadas.

### Artefactos y SBOM

- Generar y almacenar artefactos versionados (imágenes, paquetes, PDFs).
- Publicar SBOM en releases de producción para trazabilidad de la cadena de suministro.

## KPIs e incentivos

Los KPIs buscan alinear la ejecución técnica con los objetivos del MVP y la evolución a V1, priorizando seguridad, velocidad y calidad. Sirven también para activar incentivos y reconocer contribuciones sobresalientes.

### KPIs principales (objetivos y umbrales)

1. Lead time de cambios (DORA)
    - Objetivo MVP: ≤ 7 días P50 desde PR abierto hasta deploy en `test`.
    - Excelente: ≤ 3 días P50; ≤ 7 días P90.
2. Frecuencia de despliegue (DORA)
    - Objetivo MVP: ≥ 1 deploy/semana a `test`. Producción: al menos 2/mes.
    - Excelente: ≥ 3 deploys/semana a `test`. Producción: ≥ 1/semana.
3. Tasa de cambios fallidos (DORA)
    - Objetivo MVP: ≤ 10% de despliegues requieren hotfix/rollback.
    - Excelente: ≤ 5%.
4. Tiempo medio de restauración (MTTR)
    - Objetivo MVP: ≤ 4 h en incidentes de severidad alta.
    - Excelente: ≤ 1 h.
5. Calidad del código
    - Cobertura mínima por módulo: ≥ 60% (MVP); Excelente: ≥ 75%.
    - Lint sin errores bloqueantes; Sonar/semgrep sin issues críticos abiertos.
6. Seguridad por diseño
    - Dependencias críticas vulnerables: 0 en ramas protegidas.
    - Secretos en repos: 0 incidentes confirmados.
7. Documentación operable
    - PRs con checklist y notas de despliegue: ≥ 90%.
    - Runbooks/README actualizados en cambios de infraestructura: ≥ 100%.

### KPIs complementarios

- Satisfacción de revisiones (peer review): tiempo medio de primera respuesta ≤ 24 h laborables.
- Eficiencia de PR: tamaño medio ≤ 400 LOC netas cambiadas.
- Observabilidad: porcentaje de servicios con logs/metrics básicos ≥ 90%.

### Incentivos y reconocimiento

- Incentivo base por objetivos cumplidos del MVP: cumplimiento de 5/7 KPIs principales durante el periodo.
- Bonificación por excelencia: superar el umbral “Excelente” en 3 KPIs principales, incluyendo al menos 1 de seguridad o fiabilidad (MTTR/tasa de fallos).
- Reconocimiento no monetario: mención en changelog/release notes y prioridad en elección de iniciativas del roadmap.

### Penalizaciones o acciones correctivas

- Findings críticos de seguridad no resueltos en 7 días hábiles sin justificación: bloqueo de releases del módulo afectado.
- Incidentes por secreto expuesto en repo: rotación inmediata y post‑mortem obligatorio.
- Reincidencia en PR sin checklist/evidencias: requerir pairing o sesión de refuerzo de prácticas.

### Medición y reporting

- El pipeline CI/CD genera métricas automáticamente (DORA, calidad, seguridad) y las publica en panel interno.
- Revisión quincenal de métricas con Producto y Seguridad; acciones correctivas priorizadas como tickets.

## Guías de calidad y seguridad

Estas guías aseguran entregas consistentes y seguras en Apps Suite, alineadas con el MVP y el roadmap. Se aplican a código de Ariadna (identidad/conectores), Sindri (plantillas/render) e infraestructura (IaC, CI/CD).

### Estándares de código y formato

- Estilo consistente por lenguaje (editorconfig y formateadores automáticos).
- Linters obligatorios en CI (ej.: ESLint/Prettier para JS/TS; ktlint/detekt en Kotlin; flake8/black en Python si aplica).
- Convencional Commits y PR pequeños con descripción clara.

### Pruebas y calidad

- Pirámide de testing: unitarias > integración > end‑to‑end (solo casos críticos).
- Cobertura por módulo ≥ 60% (MVP); sin tests rojos en `main`.
- Fixtures y datos de prueba sin secretos reales; evitar dependencias frágiles.

### Seguridad por diseño (Secure‑by‑Default)

- Autenticación y autorización
    - Integrar servicios vía Ariadna con OIDC/OAuth2; prohibido autenticarse directo contra IDP externos.
    - Aplicar RBAC y políticas de mínimos privilegios en claims/roles.
- Gestión de secretos
    - Prohibido commitear secretos; usar gestor de secretos/variables de entorno seguras.
    - Rotación obligatoria tras incidentes o exposición; registro de accesos.
- Dependencias y SAST/DAST
    - Escaneo de dependencias en cada PR y al menos semanal en ramas principales.
    - SAST automático (semgrep/sonar o equivalente) en PR; DAST programado para servicios expuestos.
- Contenedores y Supply Chain
    - Imágenes base endurecidas y con SBOM; escaneo de vulnerabilidades (trivy/grype o equivalente).
    - Ejecutar como usuario no root; limitar capacidades; read‑only FS cuando sea viable.
- Infraestructura como código (IaC)
    - Plantillas revisadas con linters/policies (tflint/conftest/OPA o equivalente).
    - Revisión doble en cambios sensibles (red, IAM, dominios, TLS).

### Datos, privacidad y registros

- Minimizar datos personales; anonimizar o seudonimizar cuando sea posible.
- Logs sin PII sensible; usar filtros y retención definida por entorno.
- Trazabilidad de accesos a recursos protegidos por Ariadna.

### Observabilidad mínima (MVP)

- Logs estructurados (JSON) con correlación de petición.
- Métricas básicas por servicio (latencia, tasa de error, uso de recursos).
- Salud/ready checks para orquestación y despliegues.

### Gestión de cambios y despliegues

- PR con checklist de seguridad y notas de despliegue.
- Releases desde `main` con CI verde; promoción controlada entre entornos.
- Rollback documentado y probado en `test`.

### Conectores con terceros

- Tokens/keys con alcance limitado y rotación; auditoría de uso.
- Almacenar scopes y permisos en documentación técnica; justificar ampliaciones.

### SLAs de vulnerabilidades (ramas protegidas)

- Críticas (CVSS ≥ 9): 72 h.
- Altas (7–8.9): 7 días.
- Medias (4–6.9): 30 días.

### Respuesta a incidentes

- Canal de on‑call y runbooks por servicio; MTTR objetivo ≤ 4 h (MVP).
- Post‑mortem sin culpables en 48 h con acciones preventivas.

### Documentación obligatoria

- README por módulo con: propósito, cómo correr, variables, endpoints, roles Ariadna.
- Runbooks de operación y recuperación; ADR para decisiones significativas.

Referencia: [Descripción del Producto](../../descripcion-producto.md).

## Onboarding y checklist

Guía práctica para que un colaborador técnico (dev/DevOps) quede operativo en Apps Suite en ≤ 72 h, alineado con Ariadna (identidad/acceso) y Sindri (plantillas/render). Complementa las [Guías de calidad y seguridad](./guias-calidad-seguridad.md) y la [Descripción del Producto](../../descripcion-producto.md).

### 0) Prerrequisitos

- Acuerdo de colaboración y aceptación del Código de Conducta.
- Cuenta de correo verificada y clave 2FA disponible (TOTP o llave U2F).

### 1) Accesos y seguridad

- Solicitar alta en Ariadna con rol inicial correspondiente (lector, contribuidor o mantenedor).
- Activar MFA en Ariadna e iniciar sesión de prueba en el portal.
- Recibir invitaciones a:
    - Repositorios de código (Git) y gestor de issues.
    - Canal de comunicación (Slack/Teams/Matrix) y calendario de rituales.
    - Registro de artefactos (imágenes/paquetes) y panel de CI/CD.
- Confirmar acceso a gestor de secretos/variables (sólo lectura o escritura según rol).

Checklist de verificación:
- [ ] Login Ariadna OK con MFA.
- [ ] Acceso a repos y CI/CD confirmado.
- [ ] Acceso a registro de artefactos confirmado.
- [ ] Acceso a documentación interna y panel de métricas.

### 2) Entorno local y herramientas

- Sistema: Windows/macOS/Linux con Docker/Podman reciente.
- Tooling mínimo:
    - Git + GPG/SSH para firmas.
    - Node.js LTS y/o runtimes necesarios por módulo (Java/Kotlin, Python, etc.).
    - Editor/IDE con linters y formateadores configurados (editorconfig).
    - Make/Taskfile o scripts equivalentes para tareas comunes.
- Clonar repos prioritarios y ejecutar `make setup` o script equivalente.
- Configurar variables de entorno locales vía `.env.example` y gestor de secretos.

Checklist de verificación:
- [ ] Contenedores levantan en local (`docker compose up`) para los servicios del MVP.
- [ ] Tests unitarios pasan en local.
- [ ] Lint/format ejecuta sin errores bloqueantes.

### 3) Conocimiento de base (leer y comprender)

- `README` de cada módulo del MVP: propósito, cómo correr, variables, endpoints.
- Documentos clave:
    - [Descripción del Producto](../../descripcion-producto.md)
    - [Responsabilidades y alcance](./responsabilidades-alcance.md)
    - [Flujos de entrega y PR](./flujos-entrega-pr.md)
    - [Guías de calidad y seguridad](./guias-calidad-seguridad.md)
    - [KPIs e incentivos](./kpis-incentivos.md)

Checklist de verificación:
- [ ] Dudas resueltas en sesión de onboarding con un mantenedor.
- [ ] Se comprendió el alcance del MVP y el rol de Ariadna/Sindri.

### 4) Primeras tareas (primeros 3 días)

Día 1:
- Levantar entorno local y ejecutar pruebas.
- Abrir un PR de prueba actualizando documentación (typos, aclaraciones) siguiendo la plantilla de PR.

Día 2:
- Tomar un ticket pequeño (`good-first-issue`) en Sindri o un conector sencillo de Ariadna.
- Implementar con pruebas y abrir PR; solicitar revisión.

Día 3:
- Ajustes tras revisión, merge a `main` o `develop` cuando CI esté en verde.
- Despliegue a `dev`/`test` siguiendo el playbook; anotar notas de despliegue.

Checklist de verificación:
- [ ] 1 PR de documentación mergeado.
- [ ] 1 PR de código mergeado con CI verde.
- [ ] Despliegue validado en `dev`/`test` con smoke tests.

### 5) Seguridad y cumplimiento continuo

- Activar alertas personales de CI/CD y repos (build roto, dependencias vulnerables).
- Revisar semanalmente dependencias abiertas y PRs de actualización.
- Participar en revisión de amenazas de historias épicas y en post‑mortems cuando apliquen.

### 6) Rotación de guardias (si aplica)

- Entender los horarios, niveles de severidad y procedimiento de escalado.
- Practicar el runbook de recuperación en `test` (simulacro corto).

### 7) Cierre de onboarding

- Reunión de cierre con mantenedor para feedback y plan de crecimiento.
- Confirmar acceso a todas las herramientas necesarias y revisar KPIs del rol.

Checklist final:
- [ ] Accesos completos y MFA activo.
- [ ] Entorno local operativo y CI verde en PRs.
- [ ] PRs iniciales completados y despliegue validado.
- [ ] Conocimiento base y guías comprendidos.
