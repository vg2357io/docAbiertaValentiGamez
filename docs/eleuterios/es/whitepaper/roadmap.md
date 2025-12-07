# Roadmap

## Fases y hitos

### Fase 0 — Cimientos (Q4 2025)
- Identidad: proveedor OIDC, alta/baja de usuarios y roles.
- Sindri: CLI mínima, plantillas base, render web y PDF.
- Infraestructura: dominios, TLS, red privada y backups.
- Demostradores: 2 apps internas con «Iniciar sesión con Ariadna».

Criterios de salida:
- Usuarios de prueba autenticándose en ambas apps con Ariadna.
- Publicación de una página y un PDF con Sindri a partir de plantillas base.
- Documentación mínima de despliegue.

### Fase 1 — MVP funcional (Q1 2026)
- Conectores: 2–3 integraciones prioritarias (ej.: reservas, CRM).
- Observabilidad: logs centralizados, métricas y alertas básicas.
- Seguridad: hardening inicial, RBAC operativo, revisión externa ligera.
- Entregables: guía de despliegue y plantilla pública Sindri.

KPIs orientativos:
- % de apps objetivo con login Ariadna activo (>60%).
- Tiempo medio «borrador → web/PDF» con Sindri (<2 h en plantilla estándar).

### Fase 2 — Beta pública (Q2 2026)
- Catálogo: primeros módulos reusables y versiones etiquetadas.
- Automatización: pipelines CI para releases y empaquetados.
- Documentación: libros de docs por rol (ops, contenidos, manager).
- Feedback: programa de prueba con 3–5 organizaciones.

Criterios de salida:
- 3 organizaciones externas utilizando el MVP en piloto.
- 5+ módulos publicados con versionado semántico.

### Fase 3 — V1 estable (Q3 2026)
- Escalabilidad: ajuste de performance y límites por inquilino.
- Seguridad avanzada: pruebas de intrusión y auditoría de permisos.
- Soporte: SLAs definidos y playbooks de operación.
- Legal/compliance: cierre de políticas públicas y revisión de licencias.

KPIs orientativos:
- SLOs de disponibilidad y tiempos de respuesta cumplidos durante 60 días.
- <2 incidencias P1 resueltas en <24 h en el periodo de estabilización.

## Dependencias clave
- Diseño de modelo de identidades y red privada.
- Plantillas Sindri base alineadas con marketing y producto.
- Recursos para QA/observabilidad.

Referencias:
- Descripción del producto: `./descripcion-producto.md`.
- Plan de marketing: `./plan-marketing.md`.

## Riesgos y mitigación (resumen)
- Deriva de alcance: tablero de decisiones y ADRs visibles.
- Complejidad técnica: entregas verticales pequeñas y medibles.
- Adopción: foco en DX (developer experience) y buenas guías.
