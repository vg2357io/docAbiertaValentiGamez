# Whitepaper Apps Suite

## Resumen ejecutivo

### Ariadna — el hilo que conecta la tecnología de tu empresa

Un inicio de sesión unificado (como el de Google o Meta) y una extensión de navegador para acceder a las apps de empresa. Ariadna actúa como núcleo de identidad y acceso (cuentas, roles y permisos), con una red privada que sirve de perímetro de seguridad.

![Esquema de presentación de Ariadna](/_media/ariadna-presentacion-esquema.png)

> Nombre del proyecto: Ariadna (Ariadne). En la mitología griega, Ariadna entrega a Teseo el «hilo» que le permite recorrer e interconectar pasajes del laberinto sin perderse. Simboliza orientación, interconexión y salida segura.
>
> Posibles subproyectos: Ariadna como marca paraguas de plugins como «Constructor web», «Agente de reservas» o «Recepción de informes periódicos de desarrollo».

#### Objetivos y resultados esperados

Objetivo: desplegar en infraestructura propiedad de la empresa el software necesario para automatizar lo esencial de forma económica y segura:
- Ariadna (identidad y acceso unificado).
- Red privada para proteger y controlar los dispositivos con acceso a los sistemas de la empresa.
- Conexión con terceros para controlar qué datos comparte la empresa con proveedores de software y servicios.
- Escalabilidad: capacidad de crecer con el volumen de clientes sin desarrollo a medida.
- Atención focalizada: que un servicio técnico (p. ej., CicloTIC) se encargue de configuración, mantenimiento y soporte para que la empresa centre el foco en su negocio.

Resultado: un botón «Iniciar sesión con Ariadna» en los productos de CicloTIC y una extensión de navegador que centraliza el acceso a los servicios tecnológicos de la empresa.

#### Propuesta de valor (Ariadna)
- Una sola identidad para todo tu stack.
- Seguridad por diseño (RBAC + perímetro privado).
- Trazabilidad de accesos y datos compartidos con terceros.

#### Indicadores iniciales
- % de apps con «Iniciar sesión con Ariadna».
- Incidencias de permisos resueltas y tiempo medio de resolución.
- Dispositivos gestionados dentro de la red privada.

### Sindri — el forjador que une tu tecnología con tu información

Tagline: Constructor de web, app, doc y PDF. Extiende el formato Markdown (md) con plantillas y un conector que construye un sitio web, un PDF o un documento, ligados al software de empresa.

![Esquema de presentación de Sindri](/_media/sindri-presentacion.png)

> Nombre del proyecto: Sindri. En la mitología nórdica, Sindri es un enano legendario, maestro forjador junto a su hermano Brokk, célebre por crear tesoros como el martillo Mjölnir (Thor), el anillo Draupnir (Odín) y el jabalí dorado Gullinbursti (Freyr).

#### Objetivos y resultados esperados

Objetivo: que un empleado, creador de contenidos o estudiante pueda desplegar un sitio web, documento o PDF desde un bloc de notas:
- Fork del repositorio [docsify](https://docsify.js.org/).
- Definir un estándar de plantillas y componentes.
- Conexión con Ariadna para acceder a servicios de la organización desde la red privada.
- Paquete instalable (npm/pip) para cualquier dispositivo.

Resultado: un comando que inicializa una carpeta con contenido en Markdown y despliega un sitio web, PDF o documento ligado con el software de empresa.

#### Propuesta de valor (Sindri)
- Publica desde una única fuente (md) a múltiples formatos (web/PDF/doc).
- Plantillas reutilizables para acelerar time‑to‑market.
- Integración con Ariadna para contenidos privados y acciones autenticadas.

## Descripción del producto

### Introducción

Este documento describe, de forma clara y accionable, los dos pilares de Apps Suite: Ariadna (identidad, acceso y orquestación de servicios) y Sindri (formato extendido de Markdown para construir sitios, documentos y apps a partir de plantillas). El objetivo es alinear a negocio, producto y tecnología para ejecutar un MVP en el corto plazo y escalar hacia una versión estable.

### Componentes principales

- Ariadna
    - Inicio de sesión unificado (OIDC/OAuth2) y gestión de cuentas/roles.
    - Red privada como perímetro de seguridad y control de dispositivos.
    - Conectores con terceros (SaaS/infra) con políticas de mínimos privilegios.
- Sindri
    - Extensión de Markdown que genera web, PDF y DOC desde el mismo origen.
    - Plantillas de estilo y componentes reutilizables.
    - Integraciones con Ariadna para contenido privado y acciones autenticadas.

### Propuesta de valor

- Eficiencia operativa: una sola fuente de verdad para identidad y contenidos.
- Time‑to‑market: plantillas y conectores listos para usar.
- Seguridad por diseño: RBAC, perímetro privado y trazabilidad.
- Escalabilidad: arquitectura modular, versionada y automatizable (IaC/CI).

### Casos de uso tipo

- PyME que centraliza su intranet, catálogos y reservas con login único.
- Agencia/estudio que produce sitios y documentos estandarizados para clientes.
- Equipo docente que publica material didáctico y lo versiona con control de acceso.

### Límites del MVP

- Alcance centrado en login, red privada, 2–3 conectores con terceros y render básico de Sindri (web y PDF).
- Sin personalizaciones a medida fuera de las plantillas definidas.

Notas de exclusión: no se incluyen desarrollos a medida, integraciones no priorizadas ni funcionalidades fuera del roadmap.

### Métricas iniciales

- Tasa de adopción de login Ariadna.
- Tiempo de publicación con Sindri (de borrador a web/PDF).
- Incidencias de seguridad y tiempos de resolución.

### Roadmap (resumen)

- Fase 0: cimientos (identidad, plantillas base, CLI Sindri).
- Fase 1: conectores prioritarios y observabilidad.
- Fase 2: automatización avanzada y catálogo de módulos.

## Caso de uso

### Contexto

Una empresa de servicios con 25 empleados necesita centralizar su operación digital: control de accesos, publicación de contenidos y conexión con herramientas de terceros sin perder seguridad ni tiempo.

### Supuestos

- Dispone de dominio propio y servicios básicos (correo, DNS, hosting/VPS).
- No requiere desarrollos a medida fuera del MVP descrito en `./descripcion-producto.md`.
- Hay disposición para adoptar plantillas estandarizadas y conectores prioritarios.

### Actores principales

- Empleado/a con rol operativo (ventas, soporte, contenidos).
- Manager con responsabilidad de aprobación y reporting.
- Equipo técnico/externo que administra la infraestructura.
- Cliente final que consume servicios y contenido.

### Flujo resumido

1. Alta de la organización en Ariadna y definición de unidades/roles.
2. Dispositivos corporativos inscritos a la red privada (perímetro seguro).
3. Contenidos creados en Sindri (md) y publicados como web/PDF.
4. Conectores activados (calendario de reservas, CRM, pasarela de pago) con permisos mínimos.
5. Usuarios acceden vía botón «Iniciar sesión con Ariadna»; RBAC controla qué ve y qué puede hacer cada uno.

### Ejemplos de caso de uso

- Intranet y manuales operativos controlados por rol.
- Portal de cliente con historial de facturas y reservas.
- Microsites de campaña generados desde plantillas Sindri.

### Beneficios esperados

- Disminución del tiempo de publicación de contenidos en un 60–80%.
- Reducción de incidencias de acceso/permiso por unificación de identidad.
- Mayor control sobre datos compartidos con terceros.

### Criterios de aceptación (MVP)

- Inicio de sesión funcional en 3 aplicaciones internas con Ariadna.
- 2 plantillas Sindri publicadas (web informativa y PDF de propuesta).
- Conector operativo con al menos 1 SaaS crítico (ej.: reservas o CRM).

### Métricas y comprobaciones

- Tasa de adopción: % de usuarios activos vía Ariadna tras 30 días.
- Tiempo medio de publicación con Sindri: desde borrador a web/PDF (< 2 h en plantilla estándar).
- Incidencias de acceso resueltas en < 24 h hábiles.

## Plan de Marketing

### Objetivo

Acelerar la adopción de Ariadna y Sindri en segmentos prioritarios (PyMEs, agencias y educación) con un mix de marketing de producto, contenidos y alianzas, priorizando pruebas verificables y mensajes claros.

### Segmentación y posicionamiento

- PyMEs digitales: valor en login unificado y seguridad simple.
- Agencias/estudios: producción repetible con Sindri + control de acceso.
- Educación/formación: publicación de material y aulas privadas.

Propuesta de posicionamiento:
- «Una identidad para todo tu stack» (Ariadna) + «Publica web y PDF desde el mismo MD» (Sindri).
- Seguridad y rapidez por diseño: RBAC, red privada y plantillas.

### Mensajes clave

- "Un solo login para todo tu stack" (Ariadna).
- "Publica web y PDF desde el mismo MD" (Sindri).
- "Seguro por diseño, escalable por módulos" (Suite).

Pruebas y demostraciones:
- Botón «Iniciar sesión con Ariadna» activo en 2 apps de demo.
- Plantilla Sindri pública para evaluación inmediata.

### Canales

- Propios: web, docs, newsletter, repos públicos, demostraciones en vivo.
- Ganados: prensa sectorial, comunidades técnicas, talks/meetups.
- Pagados: patrocinios selectivos, búsqueda/retargeting en temporadas pico.

### Tácticas por etapa

- Descubrimiento: artículos técnicos, casos de uso, comparativas.
- Consideración: demos guiadas, plantilla gratuita de Sindri, sandbox.
- Conversión: prueba acompañada (30 días), checklist de despliegue.
- Retención: roadmap público, canal de feedback, contenidos avanzados.

Playbooks y activos:
- Playbook de demo de 30 minutos (Ariadna + Sindri) con guion y checklist.
- Plantillas de propuesta en Sindri (PDF) y microsite de campaña.

### Contenido (editorial)

- Serie "De MD a Web/PDF": 4 entregas con plantillas.
- Guías de seguridad y RBAC para no expertos.
- Casos reales (anónimos) con métricas de ahorro.
- FAQs y comparativas con herramientas conocidas (cuando aporte claridad).

### Métricas

- MQLs por canal, tasa de demo y de prueba.
- Tasa de activación de login y publicación Sindri.
- CAC por segmento y LTV estimado.
- Tiempo medio de conversión desde primer contacto a piloto.
- Tasa de retención trimestral de cuentas activas.

### Cronograma (Q1–Q3)

- Q1: fundacionales (sitio, demos, plantilla libre, 3 artículos técnicos).
- Q2: partnerships (2 integraciones co‑marketing) y eventos.
- Q3: expansión (campañas pagadas de baja intensidad + PR sectorial).

Notas de ejecución:
- Mantener evidencia pública de hitos (repos, capturas y, cuando aplique, referencias on‑chain) para fomentar confianza y verificabilidad.

## Plan financiero

### Supuestos base (MVP → Año 1)

- Modelo: servicio técnico + licencias MIT (sin venta de equity).
- Ingresos: servicios de despliegue/soporte e implantación de plantillas.
- Precios de referencia (EUR, sin IVA):
    - Despliegue MVP (paquete): 3.500–6.000.
    - Soporte mensual (SLA básico): 350–900.
    - Plantilla premium Sindri: 90–290 por unidad.

Notas y alcance:
- Cifras orientativas sujetas a revisión por segmento, país e impuestos.
- No incluye desarrollos a medida ni integraciones fuera del MVP.
- El proyecto no acepta inversión por equity. Ver `./legal/uso-etico-no-inversion-equity.md`.

### Estructura de costes

- Infraestructura (clientes): dominios/TLS, VPS/Cloud, backups.
- Desarrollo base: mantenimiento de plantillas y conectores.
- Operación: soporte, documentación, QA y releases.
- Marketing: contenidos, eventos, patrocinios discretos.

### Escenarios (12 meses)

- Conservador
    - 6 paquetes MVP + 6 soportes mensuales medios.
    - Ingresos aprox.: 6×5.000 + 12×6×550 = 30.000 + 39.600 = 69.600.
- Objetivo
    - 10 paquetes MVP + 10 soportes mensuales medios + 120 plantillas.
    - Ingresos aprox.: 10×5.000 + 12×10×550 + 120×150 = 50.000 + 66.000 + 18.000 = 134.000.
- Acelerado
    - 16 paquetes MVP + 14 soportes + 240 plantillas.
    - Ingresos aprox.: 16×5.000 + 12×14×550 + 240×150 = 80.000 + 92.400 + 36.000 = 208.400.

Aviso: estos escenarios no constituyen proyección financiera ni promesa de resultados. Se ofrecen para dimensionar capacidades y prioridades.

### Inversiones prioritarias

- Seguridad y cumplimiento (RBAC, hardening, auditorías).
- Observabilidad y testing automatizado.
- Biblioteca de plantillas Sindri y conectores de alto impacto.
- Documentación y DX (developer experience) para acelerar adopción.

### Indicadores financieros

- Margen bruto por paquete y por soporte.
- Ingresos recurrentes mensuales (MRR) de soporte.
- Payback medio de captación por segmento.
- Retención trimestral de clientes con soporte activo.

## Roadmap

### Fases y hitos

#### Fase 0 — Cimientos (Q4 2025)
- Identidad: proveedor OIDC, alta/baja de usuarios y roles.
- Sindri: CLI mínima, plantillas base, render web y PDF.
- Infraestructura: dominios, TLS, red privada y backups.
- Demostradores: 2 apps internas con «Iniciar sesión con Ariadna».

Criterios de salida:
- Usuarios de prueba autenticándose en ambas apps con Ariadna.
- Publicación de una página y un PDF con Sindri a partir de plantillas base.
- Documentación mínima de despliegue.

#### Fase 1 — MVP funcional (Q1 2026)
- Conectores: 2–3 integraciones prioritarias (ej.: reservas, CRM).
- Observabilidad: logs centralizados, métricas y alertas básicas.
- Seguridad: hardening inicial, RBAC operativo, revisión externa ligera.
- Entregables: guía de despliegue y plantilla pública Sindri.

KPIs orientativos:
- % de apps objetivo con login Ariadna activo (>60%).
- Tiempo medio «borrador → web/PDF» con Sindri (<2 h en plantilla estándar).

#### Fase 2 — Beta pública (Q2 2026)
- Catálogo: primeros módulos reusables y versiones etiquetadas.
- Automatización: pipelines CI para releases y empaquetados.
- Documentación: libros de docs por rol (ops, contenidos, manager).
- Feedback: programa de prueba con 3–5 organizaciones.

Criterios de salida:
- 3 organizaciones externas utilizando el MVP en piloto.
- 5+ módulos publicados con versionado semántico.

#### Fase 3 — V1 estable (Q3 2026)
- Escalabilidad: ajuste de performance y límites por inquilino.
- Seguridad avanzada: pruebas de intrusión y auditoría de permisos.
- Soporte: SLAs definidos y playbooks de operación.
- Legal/compliance: cierre de políticas públicas y revisión de licencias.

KPIs orientativos:
- SLOs de disponibilidad y tiempos de respuesta cumplidos durante 60 días.
- <2 incidencias P1 resueltas en <24 h en el periodo de estabilización.

### Dependencias clave
- Diseño de modelo de identidades y red privada.
- Plantillas Sindri base alineadas con marketing y producto.
- Recursos para QA/observabilidad.

Referencias:
- Descripción del producto: `./descripcion-producto.md`.
- Plan de marketing: `./plan-marketing.md`.

### Riesgos y mitigación (resumen)
- Deriva de alcance: tablero de decisiones y ADRs visibles.
- Complejidad técnica: entregas verticales pequeñas y medibles.
- Adopción: foco en DX (developer experience) y buenas guías.
