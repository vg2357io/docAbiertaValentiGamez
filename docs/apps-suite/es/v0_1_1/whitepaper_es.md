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

# Logros

## Quien es el Mecenas Fundador

### Definición

El/la Mecenas Fundador/a es la persona u organización que impulsa la iniciativa aportando experiencia técnica y operativa, y actuando como garante de los principios éticos y de calidad del proyecto.

### Responsabilidades

- Custodiar la visión técnica y priorizar entregables con impacto.
- Velar por el cumplimiento de políticas éticas y de seguridad.
- Facilitar la entrada de colaboradores y validar su progreso.
- Mantener la independencia: sin inversión por equity ni dependencia de un único cliente.

### Alcance

- Mentorización de colaboradores y revisión de arquitectura.
- Definición de estándares (plantillas, nomenclaturas, ADRs).
- Coordinación con áreas legal, marketing y operación.

### Reconocimiento

- Mención pública y atribución en documentos clave.
- Acceso a foros cerrados de decisión técnica.

## Horizontalidad automatizada

### Objetivo

Repartir funciones y decisiones de manera distribuida mediante procesos y herramientas que minimicen sesgos y cuellos de botella.

### Mecanismos

- Tableros públicos con prioridades y estados.
- Reglas claras de revisión por pares para aceptar cambios.
- Rotación de responsabilidades en ceremonias y releases.

### Beneficios

- Transparencia en por qué se decide y quién ejecuta.
- Mayor resiliencia ante ausencias o cambios de equipo.
- Aprendizaje compartido y reducción de dependencia de personas clave.

### Salvaguardas

- Definición de tie‑breakers (quórum mínimo/ADR) para resolver empates.
- Documentar excepciones y decisiones urgentes.

## Mecenas Colaboradores

### Propósito

Reconocer a personas u organizaciones que aportan valor tangible al proyecto mediante tiempo, conocimiento o difusión verificada.

### Aportes típicos

- Mejora de documentación, ejemplos y plantillas.
- Tests, QA y reporte de bugs con reproducibilidad.
- Charlas, artículos o tutoriales con referencias al repositorio.

### Beneficios

- Reconocimiento público y acceso prioritario a betas.
- Posibles airdrops/recompensas no financieras según programas vigentes.
- Invitación a canales de coordinación.

### Cómo empezar

- Revisar el roadmap y las issues etiquetadas "good first issue".
- Proponer mejoras con contexto y criterio de aceptación.
- Participar en sesiones abiertas mensuales.

## Colaborador embajador

### Resumen del rol

Persona que representa el proyecto en entornos externos, conectando con comunidades, partners y potenciales usuarios, siempre con mensajes fieles a los principios del proyecto.

### Responsabilidades

- Identificar foros/eventos relevantes y proponer presencia.
- Preparar y dar charlas/demos con material oficial actualizado.
- Recoger feedback accionable y trasladarlo a producto.
- Respetar las guías de comunicación y marca.

### KPIs orientativos

- Número de presentaciones/demos cualificadas al mes.
- Leads técnicos o de adopción generados.
- Feedbacks accionables documentados.

### Apoyos

- Kit de presentaciones y guiones de demo.
- Canal directo con producto para coordinar mensajes.

## Colaborador Periodista

### Resumen del rol

Profesional que documenta y difunde avances del proyecto con rigor, verificando fuentes y aportando contexto para audiencias no técnicas.

### Estándares editoriales

- Veracidad y contraste de información con al menos 2 fuentes.
- Claridad: explicar implicaciones y límites de cada hito.
- Transparencia de posibles conflictos de interés.

### Flujos de trabajo

- Pauta editorial quincenal con el equipo.
- Revisión por pares antes de publicar.
- Repositorio de notas, entrevistas y material gráfico con licencias claras.

### Métricas

- Alcance cualificado (suscriptores técnicos/organizaciones).
- Tráfico hacia documentación y demos.
- Feedbacks útiles recopilados.

## Colaborador Creador Contenido

### Resumen del rol

Creador/a que produce piezas de contenido alineadas a la narrativa del proyecto (tutoriales, ejemplos, casos de uso, videos), facilitando la adopción y el aprendizaje.

### Líneas creativas y tono

- Didáctico y honesto, evitando hype.
- Enfocado en resolver tareas concretas (how‑to, recetas, checklists).
- Inclusivo y accesible (lenguaje y formatos).

### Calendario editorial

- Cadencia sugerida: 2 piezas/mes (alternando formatos: artículo, vídeo corto, demo Sindri).
- Planificación trimestral con hitos del roadmap.

### Guías de formato por canal

- Blog/docs: pasos reproducibles, snippets y assets en repos.
- Vídeo: demo clara, enlaces a docs y repos; subtítulos.
- Social/Comunidades: extractos con llamada a tutorial completo.

### KPIs e incentivos

- Consumo cualificado (tiempo en página, finalización de vídeo).
- Repos clonados/plantillas usadas.
- Feedback y PRs derivados del contenido.

### Onboarding

- Acceso a kit de marca y plantillas.
- Revisión ligera del primer lote por parte de producto.

## Colaborador legal

### Resumen del rol

Perfil legal que asegura que las prácticas del proyecto cumplen con la normativa aplicable y con las políticas éticas publicadas, sin frenar la entrega.

### Marco contractual

- Plantillas de acuerdos de servicio y confidencialidad.
- Licencias de código y documentación compatibles con objetivos del proyecto.
- Cláusulas de uso aceptable y privacidad.

### Políticas de privacidad y datos

- Inventario de datos tratados y bases legales correspondientes.
- Derechos de las personas usuarias y mecanismos de ejercicio.
- Retención y eliminación segura de datos.

### Propiedad intelectual y licencias

- Verificación de compatibilidad de licencias de dependencias.
- Atribuciones y notices donde proceda.

### Revisión de cumplimiento

- Checklist de lanzamiento (legal/privacy) por release mayor.
- Canal para gestión de incidencias y solicitudes.

### KPIs orientativos

- Tiempo de respuesta a consultas legales.
- Número de incidencias de cumplimiento resueltas.
- Porcentaje de repos/artefactos con licencias verificadas.

## Colaborador Manager

### Resumen del rol

Coordina la entrega, facilita la comunicación entre áreas y asegura que objetivos, riesgos y recursos estén alineados sin microgestión.

### RACI y gobernanza

- Definir responsables (R), aprobadores (A), consultados (C) e informados (I).
- Publicar el RACI por módulo y actualización por release.

### Planificación y OKRs

- Ciclos trimestrales con objetivos medibles y resultados clave.
- Tablero público con estado, bloqueos y dependencias.

### Gestión de riesgos

- Registro vivo de riesgos con probabilidad/impacto y planes de mitigación.
- Revisión quincenal y comunicación de cambios relevantes.

### Comunicaciones y rituales

- Weekly breve con foco en bloqueos y entregas.
- Revisión de sprint y retrospectiva con acciones concretas.

### KPIs orientativos

- Fiabilidad de entregas vs. plan.
- Tiempo de resolución de bloqueos.
- Satisfacción de equipos (encuestas breves).

## Colaborador Moderador

### Resumen del rol

Facilita la convivencia y el cumplimiento de normas en espacios de la comunidad, mediando conflictos y aplicando medidas proporcionales cuando sea necesario.

### Código de conducta y normas

- Respeto y tolerancia cero a acoso o discriminación.
- No spam ni autopromoción fuera de hilos destinados.
- Confidencialidad en canales privados.

### Flujos de resolución de conflictos

- Recepción de reporte con evidencia.
- Evaluación con otro moderador para evitar sesgos.
- Medidas escalonadas: aviso → mute temporal → expulsión.
- Derecho a apelación y registro de decisiones.

### Herramientas y protocolos

- Plantillas de respuesta, etiquetas y estados.
- Canales separados para incidentes de seguridad.

### KPIs orientativos

- Tiempo de respuesta a reportes.
- Porcentaje de conflictos resueltos sin escalado.
- Encuestas de clima comunitario.

## Licencias de socios

### Objetivo

Definir un marco de colaboración para socios que quieran operar o extender la Suite respetando principios técnicos y éticos del proyecto.

### Modalidades (resumen)

- Básica: uso interno y despliegues estándar con plantillas oficiales.
- Pro: personalizaciones moderadas y soporte ampliado.
- Empresa: operaciones multi‑equipo, requisitos avanzados y SLAs específicos.
- Embajadores: uso personal en sus proyectos y demos disponibles para su público objetivo.

### Requisitos comunes

- Respeto a licencias de código y documentación (MIT/CC0 y afines).
- Cumplimiento de políticas de seguridad y privacidad publicadas.
- Atribución cuando proceda y respeto de marca.

### Beneficios

- Acceso a plantillas, conectores y roadmap.
- Soporte prioritario y sesiones técnicas.
- Posibilidad de aparecer en el directorio de socios.

### Verificación (opcional)

- Auditoría ligera de despliegues y prácticas.
- Sello de «Socio verificado» con validez anual. No requiere costo económico, solo la licencia perpétua comercializable. Requiere no tener más de 3 faltas graves en los 12 meses anteriores.

# Motor de crecimiento gamificado

## $CAS | El motor del ecosistema Apps Suite

**ID oficial de la moneda $CAS:** 0.0.xxxx

La moneda $CAS es la pieza clave que da vida al ecosistema Apps Suite. Diseñado como una herramienta multifuncional, su propósito es claro:

-   **Acelerar el desarrollo del ecosistema**, facilitando iniciativas impulsadas por la propia moneda.

-   **Potenciar la difusión y el aprendizaje**, mediante incentivos que premian la participación en campañas educativas y de marketing.

-   **Reconocer la implicación de la comunidad**, recompensando a quienes contribuyen activamente al crecimiento del entorno Apps Suite.

-   **Fomentar la gobernanza descentralizada**, otorgando a los titulares de la moneda capacidad de voto en decisiones relevantes y nuevas funcionalidades.


Lanzado en la red Hedera inicialmente y emitido directamente por Apps Suite junto a automatizaciones y colaboradores, la moneda $CAS presenta las siguientes características técnicas:

-   **Nombre:** CAS

-   **Moneda ID:** 0.0.xxxx

-   **Suministro máximo:** 100.000.000 $CAS

-   **Claves hasta 2027:** Todas

-   **Claves en 2027:** Supply, Metadata

-   **Modelo de distribución:** 20 % entregado en el evento Génesis decongelando la moneda en 2027 y el 80 % restante repartido progresivamente durante un período de 5 años.

Apps Suite va a hacer acciones proactivas para evitar que la moneda $CAS no se usa para especular o como activo financiero.

Tanto las cuentas del Tesoro como las claves de la moneda están protegidas mediante un sistema de multifirma 6/10, asegurado por la gobernanza interna de Apps Suite.

## Génesis de la moneda

Con el lanzamiento de la moneda durante el evento Génesis, se liberará un total de **20 millones de monedas CAS**, lo que representa el **20 % del suministro total**. Esta distribución se reparte en tres áreas clave que impulsan los primeros pasos del ecosistema:


| Categoría | Monedas asignadas | % del desbloqueo inicial | % del total del suministro |
| --- | --- | --- | --- |
| Comunidad | 15,000,000 | 75 % | 15 % |
| Liquidez 2027 | 3,000,000 | 15 % | 3 % |
| Marketing | 2,000,000 | 10 % | 2 % |
| **Total** | **20,000,000** | **100 %** | **20 %** |

* * *

#### 🧑‍🤝‍🧑 Comunidad

La mayor parte del desbloqueo inicial, con **15 millones de monedas**, está destinada a fortalecer y recompensar a la comunidad. Esta asignación se divide en dos bloques:

-   **Participación en la INO:**  
    Se asignarán **12 millones de monedas**, equivalentes al **12 % del suministro total**, a quienes participen comprando o ganando tickets de la INO de Apps Suite.

-   **Airdrops para socios:**  
    Otros **3 millones de monedas** (3% del total) estarán disponibles para ser reclamados a diario durante un período de **12 meses** por los poseedores de licencias de socio de CicloTIC. Este airdrop se prolongará 4 años más con 12 millones de monedas (12% del total) distribuidos de forma lineal.


* * *

#### 💧 Liquidez

Para garantizar un arranque sólido en 2027 en los mercados, se destinarán **1.5 millones de monedas** (**1.5 % del suministro total**) a la creación de **pools de liquidez** y la inclusión en **exchanges centralizados (CEX)**.

El otro 1.5% se destinará a otras pools de liquidez futuras sin alterar el mercado secundario.

Esta reserva estará disponible desde el **Evento de Generación de la moneda (TGE)**, será congelada hasta 2027 y será administrada mediante una cuenta multifirma **6/10** bajo el control de Apps Suite.

-   **ID de la cuenta de liquidez:** *(pendiente de confirmación)*


* * *

#### 📣 Marketing

Para acompañar el lanzamiento con fuerza, se liberarán **2 millones de monedas** (**2 % del suministro total**) al momento del TGE. Estos recursos permitirán poner en marcha las primeras **estrategias de promoción y visibilidad**.

Al igual que la asignación de liquidez, los fondos de marketing estarán asegurados mediante una **cuenta multifirma 6/10** de Hedera gestionada con Kábila App.

-   **ID de la cuenta de marketing:** *(pendiente de confirmación)*

## INO de la Comunidad

**Lanzamiento Inicial de tickets de Apps Suite**

Apps Suite lanza sus **Apps Suite ticket INO** para la comunidad con la distribución de **1080 tickets**.

* * *

### Fecha prevista del evento INO

Marzo de 2026

* * *

### Precio de un Apps Suite ticket INO

Los tickets gratuitos canjeables tendrán un costo de 0$. Máximo 80 unidades.

Los tickets anticipados canjeables tendrán un coste de 100$. Máximo 350 unidades.

Los tickets públicos canjeables tendrán un coste de 120$. Hasta 1000 unidades, si se canjean 300 tickets anticipados habrá un máximo de 700 unidades públicas.

* * *

### Información del ticket INO

-   **ID moneda oficial:** 0.0.xxxx

-   **Nombre del ticket:** Apps Suite ticket INO


* * *

#### ¿Qué ofrece el Apps Suite ticket INO?

Adquirir un Apps Suite ticket INO no solo te identifica como miembro fundador, sino que además te permite:

-   **Reclamar una vez 13.888 monedas $CAS**, como recompensa directa.


Apps Suite también **destinará 80 tickets canjeables gratuitos** a campañas promocionales y recompensas especiales para la comunidad.

> ⚠️ Importante: **Solo los tickets obtenidos durante el evento INO** darán acceso al reclamo único de 13.888 $CAS. Si obtienes un ticket canjeable deberás participar en la INO para reclamarlo gratis. Tendrás un mínimo de 6 horas para hacerlo tú o un representate tuyo.

* * *

#### Lanzamiento por Etapas: Accesos y Disponibilidad

La distribución de los Apps Suite ticket INO se realizará mediante la tienda de Apps Suite, estará dividido en **dos fases secuenciales**:

1.  **Fase 1:** De 9:00 UTC +1 a 15:00 UTC +1 Exclusiva para los primeros fundadores de Apps Suite que ya posean tickets canjeables gratuitos o anticipados.

2.  **Fase 2:** De 15:01 UTC +1 a 23:59 UTC +1 Etapa final abierta al público general, sin necesidad de tener ticket previo. Se cierra al terminar stock.


Los tickets podrán adquirirse en **Euros**, **Dólares** o **$HBAR**, con un precio **indexado al dólar**. Se habilitará el reclamo de factura.

La disponibilidad será diferente en cada fase:

-   En la **fase 1**, cada usuario contará con una **asignación garantizada**. Tu tícket canjeable gratuito o anticipado te asegura, durante la primera fase, reclamar un Apps Suite ticket INO.

-   En la **fase pública**, **no se garantiza disponibilidad**, ya que dependerá de la demanda acumulada en las etapas anteriores.

#### ¿Qué pasa si no se venden todos?

El proyecto tiene hasta 2027 para distribuir la INO ya que la descentralización estará congelada hasta entonces y no habrá posibilidad de operar en el mercado secundario.

Nuestro objetivo es vender todo en Marzo de 2026 pero si no fuera así se podría hacer una segunda venta en el Q3 de 2026.

En cualquier caso si en la descongelación de 2027 no se hubiera vendido todo se repartirán las monedas asignadas en la INO entre los propietarios de ese momento de los Apps Suite ticket INO.

## Airdrops para la Comunidad

**Un reconocimiento a quienes siempre han estado ahí**

Para agradecer el compromiso de los miembros más leales de Apps Suite, se ha diseñado un programa de **airdrop anticipado** que repartirá **3.000.000 de monedas $CAS** a lo largo de **12 meses**, mediante **reclamos diarios**. Este airdrop se prolongará 4 años más con 12.000.000 de monedas $CAS.

La distribución comenzará **una vez finalizado el Evento de Generación de la moneda (TGE)**, cuya fecha marcará el inicio oficial del airdrop. A partir de ese momento, se realizará una **captura diaria** del contenido de cada cuenta, y los usuarios podrán reclamar sus monedas en función de las **licencias utilitarias de CicloTIC** que tengan en su posesión.

Para hacerlo, será necesario **conectar CicloTIC al perfil de Apps Suite y reclamar las recompensas manualmente** desde la plataforma.

* * *

#### ¿Cómo funcionan las recompensas?

Cada tipo de licencia está vinculada a una cantidad fija de $CAS mensual. **Cuantas más licencias tengas, mayor será tu recompensa**, ya que los montos se **acumulan automáticamente** según la cantidad total que poseas al momento de cada captura diraria.

Tipo de licencia

Cantidad de licencias

Multiplicador

Monedas $CAS/mes (total por grupo)

Monedas $CAS/mes por licencia

| Tipo de licencia | Cantidad de licencias activas | Multiplicador | Monedas $CAS/mes (total por grupo) | Monedas $CAS/mes por licencia |
| --- | --- | --- | --- | --- |
| Básica | 20 | 2× | 99,000 | 4,950 |
| Pro | 10 | 3× | 74,250 | 7,425 |
| Enterprise | 2 | 5× | 24,750 | 12,375 |
| Embajador | 3 | 7× | 51,975 | 17,325 |
| **Total** | **35** | — | **250,000** | — |

El total máximo de licencias básicas y pro que se distribuirán con los años es de 2160. El máximo de licencias enterprise con 5x es de 101. El máximo de licencias de embajador con 7x es de 101.

El total de los 250,000 $CAS/mes distribuidos que tocan a las licencias en activo se puede actualizar una vez por trimestre. Cuantas más licencias se distribuyan más crecerá el número de socios y menos moneda tocará por socio.

📌 **Ejemplo práctico:**  
Si en tu cuenta hay **2 licencias pro** y **3 licencias básicas**, podrás reclamar **4,950 x 3 + 7,425 x 2 = 29.700 $CAS al mes**.

* * *

#### 🕒 Hasta cuándo se pueden reclamar

> ⚠️ Podrás reclamar tus recompensas **cada día hasta 30 días después del último airdrop diario**.  
> Después de esa fecha, **todas las monedas no reclamadas se transferirán al Tesoro para el Crecimiento del Ecosistema**.

## Distribución de la moneda

**Estructura de tokenomics, asignaciones y calendario de liberación de $CAS**

Durante el **evento Génesis**, se acuñarán las **100 millones de monedas $CAS** que componen el suministro total.

De esta cantidad, un **20 % estará disponible de inmediato**, mientras que el **80 % restante permanecerá bloqueado** y será distribuido de forma progresiva durante **6 años**, a través de #weLore y un **Smart Contract con mecanismo de vesting** que liberará poco a poco la moneda descentralizada.

* * *

#### Cómo se repartirá la moneda $CAS durante los 6 años

El suministro de $CAS se asignará a **siete áreas clave**, cada una con un propósito concreto y una estrategia de liberación definida:

* * *

#### 📈 Ecosistema

-   **Asignación total:** 25M $CAS (25 %)

-   **Desbloqueo:**

    -   20M con vesting lineal en los primeros 3 años

    -   5M en los últimos 3 años

-   **Uso previsto:** Incentivos para el ecosistema y subvenciones para proyectos de la comunidad

-   **Cuenta asociada:** `0.0.xxxx`(Multifirma 6/10)


* * *

#### 🛠️ Desarrollo Técnico

-   **Asignación total:** 18M $CAS (18 %)

-   **Desbloqueo:**

    -   13M distribuidos linealmente en los primeros 3 años

    -   5M durante los 3 años posteriores

-   **Uso previsto:** Desarrollo de producto y operaciones internas

-   **Cuenta asociada:** `0.0.xxxx` (Multifirma 6/10)


* * *

#### 👥 Comunidad

-   **Asignación total:** 27M $CAS (27 %)

-   **Desbloqueo:**

    -   12M disponible desde el TGE (INO)

    -   15M distribuidos linealmente en los 5 primeros años

-   **Uso previsto:** Venta inicial de tickets (INO) y airdrops para licencias de socio

-   **Cuenta asociada:** `0.0.xxxx` (Multifirma 6/10)


* * *

#### 🤝 Participantes Estratégicos (Stakeholders)

-   **Asignación total:** 12M $CAS (12 %)

-   **Desbloqueo:**

    -   1 año de “cliff” (sin desbloqueo)

    -   12M distribuidos linealmente en los 5 años siguientes

-   **Uso previsto:** Recompensas para el equipo, alianzas clave e socios iniciales

-   **Cuenta asociada:** `0.0.xxxx` (Multifirma 6/10)


* * *

#### 📣 Marketing

-   **Asignación total:** 9M $CAS (9 %)

-   **Desbloqueo:**

    -   2M disponibles en el TGE

    -   7M liberados de forma lineal durante los siguientes 3 años

-   **Uso previsto:** Acciones de marketing inbound y outbound

-   **Cuenta asociada:** `0.0.xxxx`(Multifirma 6/10)


* * *

#### 🧠 Embajadores

-   **Asignación total:** 6M $CAS (6 %)

-   **Desbloqueo:** Vesting lineal en 3 años

-   **Uso previsto:** Actividades de los embajadores y bonificaciones por desempeño

-   **Cuenta asociada:** `0.0.xxxx`(Multifirma 6/10)


* * *

#### 💧 Liquidez

-   **Asignación total:** 3M $CAS (3 %)

-   **Desbloqueo:** 50 % accesible desde el 2027. 50 % disponible para otras liquidity pools sin interferir en el mercado secundario, retención máxima 18 meses desde 2027.

-   **Uso previsto:** Fondos para pools de liquidez, incentivos y listados en exchanges centralizados

-   **Cuenta asociada:** `0.0.xxxx`(Multifirma 6/10)


* * *

#### Consideraciones de congelación descentralizada

La descentralización estará congelada hasta 2027 para evitar la especulación.

En 2026 se activará la transferencia de forma centralizada en Apps Suite.

En 2027 se descongelará de descentralización, se modificarán las claves disponibles para las cuentas gestoras (Solo supply y metadata) y se habilitará el mercado secundario.

#### Consideraciones centralización/descentralización

El usuario que desee descentralizar su moneda y logros podrá hacerlo desde el primer día, teniendo en cuenta que no podrá mover su propiedad digital de su cuenta Hedera hasta 2027.

Apps Suite gestionará el suministro de moneda y entrega de logros mediante #weLore, una plataforma Open Source que permite operar de forma mixta.

Los usuarios que no quieran tener una cuenta en Hedera no será necesario que se la creen, con la cuenta de Apps Suite podrán gestionar su moneda y logros con custodia por parte de la organización.

El objetivo es que Apps Suite permita crear un correo `cartera@dominio-usuario.com` desde el que el usuario pueda enviar y recibir activos descentralizados de cualquier red descentralizada, empezando por Hedera y continuando por Ethereum y Bitcoin.

#### Consideraciones sobre el suministro en circulación

Es crucial entender que **desbloquear monedas no significa que todas entren en circulación al instante**. Simplemente pasan a estar disponibles para ser utilizados según la necesidad.

Por ejemplo, aunque se liberen **20 millones de $CAS en el Génesis (20 %)**, **menos de 15 millones** estarán efectivamente en circulación desde el inicio. El resto se irá incorporando gradualmente a lo largo del tiempo.

## Pool de liquidez y market cap inicial

**Resumen económico del lanzamiento de la moneda $CAS** de Apps Suite, con detalles sobre la creación de la pool de liquidez, valor inicial de la moneda y capitalización inicial del mercado descentralizado.

#### 🔢 Supply total / Supply liberado en TGE

-   **100.000.000 $CAS / 20.000.000 $CAS**


#### 🎯 Objetivo de liquidez inicial

Durante la INO (Oferta de moneda inicial) del TGE (Evento de generación de la moneda) se pondrán a la venta **1080 Apps Suite ticket INO**, con un precio entre **100 $ y 120 $**.

-   Si se completa la venta: **30.000 $** se destinarán a la **pool de liquidez inicial**.

-   Si no se vende todo: se destinará **el 100 % de lo recaudado**, hasta ese máximo de 30.000 $.


#### 💧 Composición de la pool

-   **Monedas aportadas:** 1.500.000 $CAS

-   **USDC o similar aportado:** hasta 30.000 $

-   **Formato típico:** 50% $CAS / 50% USDC


Esto establece un **precio inicial de cada unidad de moneda a 0,02 $**.

#### 📊 Market cap inicial

Se calcula en función del supply en circulación, es decir, los 1.5 millones de monedas puestas en la pool:

-   **Circulante inicial:** 1.500.000 $CAS

-   **Precio inicial por moneda:** 0,02 $


➡️ **Market cap inicial estimado: 30.000 $**

Si se recauda menos, se ajusta la cantidad de monedas en la pool para mantener el mismo precio inicial.

#### ⚠️ Disclaimer

El valor del moneda $CAS en el mercado lo determina la oferta y la demanda en los CEX o DEX.  
Desde Apps Suite no controlamos la compraventa de moneda ni su evolución de precio, por lo que **no podemos garantizar que su valor suba o se mantenga**, ni tampoco evitar que baje.

## Recompras de la moneda

Desde Apps Suite hemos diseñado un sistema de recompra y distribución de moneda $CAS que combina sostenibilidad económica del proyecto con recompensas para quienes apoyan activamente el ecosistema.

### Recompras con ingresos reales

-   **Porcentaje, determinado por el CTO, de los beneficios de Apps Suite** se destinarán a recomprar monedas $CAS en el mercado secundario. Muy imortante: el CTO es quien determina qué cantidad se recompra mediante un algoritmo público que tiene una fluctuación del 40% al 100% de forma randomizada. Este mecanismo puede cambiar para luchar contra la especulación y la mala praxis de miembros de la comuidad con intereses no alineados con Apps Suite.

-   Esta estrategia vincula directamente el crecimiento del negocio con la demanda de la moneda por parte de la comunidad.

- Apps Suite va luchar activamente para que no se trate la moneda con un fin financiero/especulativo.


### Distribución tras la recompra

Una vez realizada la recompra, la moneda se divide así:

-   **30 % se queman** permanentemente → Esto reduce el supply en circulación.

-   **70 % se reparten vía airdrop** entre quienes poseen roles clave en el ecosistema:

#### Miermbros con licencias de socio

-   **Básica:** multiplicador x2

-   **Pro:** multiplicador x3

-   **Enterprise:** multiplicador x5

-   **Embajador:** multiplicador x7

Logros

- **Fácil** x2

- **Intermedio** x3

- **Difícil** x5

- **Platinum** x7

Esta asignación se realizará **mensualmente**, y busca recompensar a quienes sostienen y enriquecen Apps Suite.

* * *

### ⚠️ Disclaimer

La recompra de monedas $CAS está sujeta al rendimiento del proyecto tanto Open Source como comercial. Ni Apps Suite ni ningún miembro del equipo garantiza la evolución futura del precio de la moneda ni la frecuencia o cantidad exacta de los airdrops de recompra.

El valor de mercado sigue estando determinado por la oferta y la demanda.

# Documentación legal

## Uso ético - No se acepta inversión por equity

### Principio rector

El proyecto no acepta inversión a cambio de equity. Esto protege la independencia técnica y la orientación a valor de uso por encima de la especulación financiera.

### Alcance

- Financiación por servicios, patrocinios o donaciones sin contraprestación accionarial.
- Transparencia en presupuestos y entregables.
- Licencias abiertas (código y docs) compatibles con este principio.

### Buenas prácticas

- Publicar hoja de ruta y criterios de priorización.
- Evitar cláusulas que concedan control o veto a terceros.
- Separar ingresos de explotación (servicios) de cualquier fondo comunitario.

### Cumplimiento

- Revisión anual del principio y de los acuerdos firmados.
- Registro público de fuentes de financiación relevantes.

## Uso ético - Medidas para evitar especulación

### Principio rector

La adopción de tecnologías y, en su caso, de modelos tokenizados, se orienta a utilidad y sostenibilidad; se desalienta la especulación financiera.

### Prácticas recomendadas

- Diseño de incentivos alineados a contribuciones reales (trabajo, código, docs).
- Publicación de métricas de uso por encima de precios de mercado.
- No se ofrecerán promesas de revalorización ni retornos garantizados.

### Alcance

- Políticas de acceso, airdrops o recompensas ligadas a hitos verificables.
- Comunicación responsable en canales públicos y privados.

### Supervisión

- Comité de revisión ética (ligero) para evaluar iniciativas de incentivos.
- Posibilidad de suspender campañas si se detecta comportamiento especulativo.

## Respeto - A la propiedad y licencias de los profesionales

### Principio

Reconocer y respetar la autoría, las licencias y el trabajo de los profesionales que participan en el proyecto y de terceros cuyos activos se utilicen.

### Directrices

- Usar materiales conforme a su licencia (código, imágenes, tipografías, plantillas).
- Atribuir de forma visible cuando la licencia lo requiera.
- Evitar uso de recursos con restricciones incompatibles.
- Mantener un inventario de dependencias y licencias.

Ejemplos de licencias comunes y pautas:
- MIT/BSD/Apache-2.0: incluir aviso de copyright y, en su caso, archivo `NOTICE`.
- CC BY 4.0: atribución con autor, título, licencia y enlace.
- CC BY-SA 4.0: atribución y compartir obras derivadas bajo la misma licencia.
- CC0/Public Domain: se puede usar sin atribución, recomendable citar fuente.
- No comerciales (NC) o No derivadas (ND): evitar en casos incompatibles con el uso del proyecto.

### Procesos

- Revisión de licencias en incorporación de nuevas dependencias.
- Inclusión de NOTICE/ATTRIBUTION cuando aplique.
- Canal de reporte para solicitar correcciones o retiradas.

### Evidencias y transparencia

- Publicar en repositorios el archivo `LICENSE` y, cuando proceda, `NOTICE`/`ATTRIBUTION`.
- Anotar en documentación las fuentes de imágenes/recursos.
- Mantener un registro de aprobaciones y correcciones relacionadas con licencias.

## Uso ético - Entrenamiento automatizado

### Alcance

Establece criterios para el uso ético de datos y contenidos en procesos de entrenamiento automatizado o con IA, respetando derechos, privacidad y licencias.

### Principios

- Consentimiento y base legal adecuada para el procesamiento.
- Minimización de datos y anonimización cuando proceda.
- Respeto de licencias y exclusiones expresas.
- Trazabilidad de conjuntos de datos y modelos.

### Prácticas operativas

- Mantener un registro de datasets con origen, licencia y uso permitido.
- Excluir contenidos señalados como no entrenables.
- Proporcionar mecanismos de opt‑out razonables.
- Auditorías periódicas sobre muestras para verificar cumplimiento.

### Transparencia

- Documentar capacidades y limitaciones de los sistemas IA usados.
- Comunicar, cuando aplique, el uso de IA en generación de contenido.

# Gamificación del proyecto

## Herramienta Open Source

### Objetivo

Definir una dinámica de reconocimiento abierta (#weLore) que convierta contribuciones en reputación verificable sin crear incentivos especulativos.

### Cómo funciona

- Contribuciones elegibles: código, documentación, QA, soporte, diseño, difusión verificada.
- Evidencia: PRs, issues, enlaces públicos o validación por pares.
- Revisión: mínimo 2 validaciones cruzadas por parte de colaboradores verificados o con automatismo.
- Registro: tablero público con hitos, niveles de reconocimiento y roles en Discord.

### Niveles y logros

- Semilla: primera contribución aceptada.
- Tejedor/a: 5 contribuciones con impacto medible.
- Arquitecto/a: 3 decisiones documentadas (ADRs) o módulos entregados.
- Guardián/a: liderazgo en seguridad/operación/difusión verificado por métricas.

- Otros niveles únicos/cuantificables según hitos o campañas.

### Recompensas no financieras

- Menciones públicas, priorización de propuestas, acceso temprano a betas.
- Invitación a sesiones técnicas y workshops cerrados.
- Moneda utilitaria `$CAS` con finalidad de utilidad (no especulativa); verificación según `../licencias-socio/verificacion-descentralizada.md`.
- Invitación a eventos.
- Descuentos o promociones en productos/servicios del proyecto o colaboradores.

### Salvaguardas

- Sin canje por valor monetario; foco en aprendizaje y reputación.
- Registro transparente de criterios y resultados.
- Cumplimiento de `../legal/uso-etico-no-especulacion.md`.

## Custodia de la propiedad digital

Este capítulo describe la estrategia de custodia y salvaguarda de la propiedad digital en el ecosistema de Apps Suite, con especial foco en Ariadna como núcleo de identidad, permisos y claves.

### Resumen ejecutivo
- Ariadna incorporará una cold‑wallet (billetera en frío) para custodia de activos y credenciales críticas.
- La cold‑wallet está en desarrollo. El hito público previsto es 2027, coincidiendo con la "descongelación" de la propiedad digital descentralizada en el roadmap de la suite.
- Mientras tanto, se operará con una arquitectura híbrida (hot/warm + custodios fríos offline) y con mecanismos de migración en caso de incidente de seguridad (hackeo/compromiso de claves).

### Principios de diseño
1. Soberanía del usuario: el titular conserva el control último sobre sus claves y activos cuando así lo requiera (self‑custody opcional).
2. Seguridad por capas: segmentación hot/warm/cold, MFA, políticas de retiro temporizadas, listas blancas y límites.
3. Portabilidad y reversibilidad: exportación estandarizada de claves/estados y planes de migración sin lock‑in.
4. Simplicidad operativa: flujos claros de alta, respaldo y recuperación para no expertos.
5. Observabilidad y prueba de integridad: logs firmados, anclaje periódico y auditorías externas.

### Arquitectura de custodia
- Hot wallet (operativa):
    - Uso: transacciones frecuentes, micropagos, utilidades de gamificación.
    - Controles: límites diarios, listas blancas, detección de anomalías.
- Warm wallet (colchón):
    - Uso: fondos operativos de mediano plazo.
    - Controles: 2FA/MFA, retardo de retiro (time‑lock), aprobaciones por rol.
- Cold wallet (Ariadna ColdWallet, 2027):
    - Uso: reservas, llaves maestras, credenciales raíz y backups cifrados.
    - Implementación prevista: dispositivos offline con firmware auditado, HSM donde aplique, soporte Shamir/MPC, QR/USB‑airgap para firmar sin exponer claves.

### Cronograma (orientativo)
- 2025–2026: arquitectura híbrida con custodios fríos manuales + automatización de flujos de firma via air‑gap.
- 2027: lanzamiento de Ariadna ColdWallet y activación completa de propiedad digital descentralizada.
- Post‑2027: soporte avanzado de MPC, multisig federado y módulos de recuperación social.

### Ciclo de vida de claves y activos
1. Alta y verificación:
    - Emisión de identidad Ariadna, generación de par de claves en dispositivo del usuario o en HSM.
    - Respaldo: frases mnemotécnicas, shards de recuperación, cofres cifrados.
2. Firma y operación:
    - Hot/warm firman transacciones de bajo/medio riesgo; cold firma por lotes y en sesiones planificadas.
3. Rotación y expiración:
    - Rotación periódica de claves operativas; anclaje en cold.
4. Revocación y migración:
    - Mecanismos predefinidos para cortar permisos, revocar tokens y migrar saldos/estados.

### Plan de respuesta y migración ante incidentes (hackeo)
- Detección y contención inmediata:
    - Congelación de salidas desde hot/warm cuando se exceden umbrales o se detectan patrones anómalos.
    - Revocación de sesiones Ariadna y rotación de claves comprometidas.
- Recuperación técnica:
    - Uso de claves de recuperación en cold (o shards MPC) para regenerar identidades y re‑asignar propiedad.
    - Migración a nuevas billeteras mediante:
        - Exportación de estados/saldos en formatos estándar.
        - Re‑emisión de NFTs/credenciales con metadatos de continuidad y pruebas de procedencia.
        - Anclaje de pruebas (Merkle/PKI) que demuestran la transferencia legítima.
- Comunicación y auditoría:
    - Notificación al titular, sellado temporal de eventos y reporte de causa raíz.
    - Auditoría independiente post‑mortem cuando el impacto lo requiera.

### Gobernanza y roles
- Titular/Usuario: decide nivel de custodia (self vs. asistida), gestiona backups y factores.
- Administrador de seguridad (empresa/organización): define políticas de límites, listas blancas y aprobaciones.
- Custodio Ariadna: provee tooling, HSM/cold‑device y servicios de recuperación bajo mandato verificable.

### Cumplimiento y privacidad
- Privacidad por diseño: minimización de datos, cifrado extremo a extremo, segregación de dominios.
- Conformidad: alineación con normativas aplicables (p.ej., eIDAS2, NIS2, AML/KYC cuando corresponda) y mejores prácticas de la industria.
- Exportabilidad: herramientas para que el usuario exporte claves/activos y migre sin fricción.

### Riesgos y limitaciones
- Riesgo humano (pérdida de frase/seeds): mitigado con recuperación social/MPC y cofres cifrados.
- Riesgo de firmware/implant: mitigado con auditorías, reproducible builds y verificación de firmas.
- Riesgo operativo (errores de configuración): mitigado con plantillas seguras y validaciones automatizadas.

### Glosario
- Hot/Warm/Cold wallet: niveles de exposición y seguridad de billeteras.
- MPC (Multi‑Party Computation): esquema de firma distribuida sin revelar claves completas.
- HSM: módulo hardware seguro para operaciones criptográficas.
- Time‑lock: retardo programado para ejecutar retiros de fondos o cambios críticos.

### Estado del desarrollo
- La cold‑wallet de Ariadna está en desarrollo activo. Documentación técnica y APIs preliminares se publicarán progresivamente. El objetivo es que en 2027 esté ampliamente disponible para clientes y socios, junto con los mecanismos de migración y recuperación descritos en este documento.

## Protocolos de seguridad

### Objetivo

Definir controles mínimos y repetibles que reduzcan superficie de ataque sin frenar la entrega.

### Controles base (MVP)

- Identidad y acceso
    - 2FA obligatorio para cuentas privilegiadas.
    - RBAC: roles y permisos mínimos por servicio.
    - Revocación y rotación de credenciales trimestral.
- Red y perímetro
    - Acceso a servicios internos solo desde red privada/VPN.
    - TLS actualizado y HSTS en frontales públicos.
- Datos
    - Backups cifrados con pruebas de restauración.
    - Registros de acceso a datos sensibles.
- Desarrollo
    - Análisis SAST en PRs de módulos críticos.
    - Dependabot/renovación de dependencias y escáner de licencias.

### Respuesta ante incidentes

- Canal único de reporte y severidades definidas.
- Playbook de contención y recuperación.
- Post‑mortem público cuando proceda.

### Verificación

- Checklist de seguridad por release.
- Auditoría ligera semestral (interna o por tercero).

## Descentralización

### Enfoque

La descentralización es opcional y progresiva. Se introduce donde aporta resiliencia, transparencia o reducción de dependencia, evitando complejidad innecesaria.

### Criterios de adopción

- Beneficio neto frente a alternativa centralizada.
- Coste operativo asumible y herramientas maduras.
- Requisitos legales/privacidad compatibles.

### Ámbitos posibles

- Identidad federada entre organizaciones.
- Registros inmutables de decisiones (ADRs) o licencias.
- Distribución de moneda y logros para la comunidad que aporta.

### Gobernanza ligera

- Propuestas públicas, ventana de comentarios y resolución documentada.
- Roles y quórums mínimos para cambios que afecten a terceros.
- Votaciones con participaciones por moneda y accesibilidad por logros.

### Fecha de apertura del mercado secundario

- Desde el inicio, moneda y logros se gestionarán de forma centralizada, con informe de transparencia cotejable.
- 2027 como fecha de apertura para habilitar plenamente el mercado secundario y la transferencia sin restricciones, conforme al calendario descrito en `../licencias-socio/verificacion-descentralizada.md`.

## Congelación temporal

### Objetivo

Establecer un mecanismo de «congelación» para pausar cambios o despliegues cuando se detectan riesgos (picos de tráfico, incidentes, campañas críticas).

### Cuándo activar

- Incidentes de seguridad en curso.
- Cambios de infraestructura de alto impacto.
- Eventos de negocio que requieren estabilidad máxima.

### Qué implica

- Bloqueo temporal de merges a ramas protegidas salvo hotfixes.
- Bloqueo temporal de transferencias/obtención de moneda y logros.
- Ventana de cambios definida (inicio/fin) y responsables designados.
- Comunicación clara a equipos y actualización del estado público.

### Excepciones

- Hotfixes críticos con revisión de 2 personas y tests mínimos.

### Retorno a la normalidad

- Checklist de verificación post‑congelación.
- Post‑mortem si la congelación fue por incidente.

# Para colaboradores embajador

## Resumen del rol

El rol de Embajador de Apps Suite impulsa la adopción responsable del ecosistema en segmentos sociales específicos (educación, pymes, administraciones locales, comunidades técnicas, colectivos creativos, etc.). Su misión es conectar necesidades reales con las capacidades de los dos pilares del producto —`Ariadna` (identidad, acceso y orquestación de servicios) y `Sindri` (contenido/plantillas en Markdown extendido)— y activar pilotos, casos de uso y alianzas locales.

### Objetivos
- Dar a conocer Apps Suite con mensajes claros y verificables, enlazando a la `descripcion-producto.md`.
- Facilitar oportunidades de prueba (demos, pilotos y PoC) alineadas con el Roadmap.
- Abrir puertas a partnerships con organizaciones de su segmento.
- Retroalimentar a producto con hallazgos de campo (barreras, necesidades, métricas).
- Cuidar la marca y el cumplimiento de las políticas éticas (no especulación, no inversión por equity).

### Qué NO es
- No es un rol comercial a comisión por cerrar ventas.
- No es un cargo de representación legal o vocería oficial; la comunicación siempre se apoya en materiales aprobados.
- No conlleva promesas financieras ni expectativas de revalorización de activos.

### Relación con licencias y utilidades
- Los embajadores pueden ser elegibles para la licencia `Socio — Embajador` (cuando se publique) y para incentivos utilitarios `$CAS` por logros verificables. Ver `../../licencias-socio/verificacion-descentralizada.md` y `../../legal/uso-etico-no-especulacion.md`.

### Entregables típicos
- Activaciones en su segmento: charlas, talleres, meetups, mentorización de pilotos.
- Conexión con partners potenciales: presentación, encaje y seguimiento inicial.
- Evidencias publicadas (#weLore, repositorios, entradas en HashScan cuando aplique).

### Éxito del rol
El éxito se mide por adopción responsable: número y calidad de activaciones, pilotos iniciados, feedback útil al equipo y relaciones a largo plazo con comunidades/organizaciones, todo ello con trazabilidad y cumplimiento ético.

## Responsabilidades y alcance

Este documento define qué hace y qué no hace un Embajador/a de Apps Suite, con foco en impacto real, trazabilidad y cumplimiento ético.

### Responsabilidades principales
- Mapeo de oportunidades en su segmento (asociaciones, centros educativos, pymes, comunidades técnicas, etc.).
- Educación y sensibilización: charlas intro a `Ariadna` (identidad, acceso) y `Sindri` (Markdown extendido para sitios/docs/apps). Ver `../../descripcion-producto.md`.
- Activación de pilotos/PoC: identificar un caso mínimo viable, preparar demo y coordinar seguimiento.
- Curation de materiales: seleccionar y compartir recursos oficiales (presentaciones, one‑pagers, repos, guías).
- Generación de evidencias: publicar resúmenes, fotos, enlaces y, cuando aplique, evidencias on‑chain. Ver `../../licencias-socio/verificacion-descentralizada.md`.
- Feedback a producto: problemas, fricciones, métricas y propuestas surgidas del terreno.
- Custodia de la marca: seguir `Guías de comunicación y marca` y políticas de `Uso ético`.

### Alcance
- Geográfico/Comunitario: centrado en su región/segmento declarado en el onboarding.
- Temático: adopción de los componentes del MVP y roadmap inmediato (no desarrollos a medida).
- Temporal: compromiso trimestral renovable basado en KPIs y cumplimiento.

### Qué está dentro
- Charlas y talleres introductorios o de nivel intermedio.
- Conexión con organizaciones; facilitación de reuniones con el equipo central.
- Acompañamiento de 1–2 pilotos en paralelo, como máximo, según capacidad.
- Colaboración con otros roles (p. ej., Creador de contenido o Técnico) cuando aporte valor.

### Qué queda fuera
- Representación legal o contractual del proyecto.
- Promesas comerciales, descuentos o condiciones fuera de lo publicado en el Whitepaper.
- Desarrollo a medida o soporte técnico avanzado (derivar a canales oficiales).
- Gestión de fondos, custodia de activos o de credenciales ajenas.

### Coordinación y reportes
- Canal oficial: espacio de coordinación en la comunidad y repos dedicados.
- Ritual mínimo: reporte quincenal (breve) y cierre de mes con KPIs.
- Conflictos o incidencias: seguir `Compliance y riesgos` y escalar cuando corresponda.

### Límites y criterios de éxito
- Enfoque en calidad sobre cantidad: más valor a 1 piloto bien ejecutado que a 5 intentos difusos.
- Evidencias o no cuenta: sin trazabilidad y reportes, una actividad no es elegible a incentivos.
- Priorizar segmentos con mayor afinidad al MVP descrito en `../../descripcion-producto.md`.

## KPIs e incentivos

Este documento define cómo medimos el impacto del rol de Embajador/a y cómo operan los incentivos utilitarios. Todos los logros deben ser verificables. Ver `../../licencias-socio/verificacion-descentralizada.md`.

### KPIs (mínimos y de calidad)
- Activaciones realizadas: número de eventos/charlas/talleres con evidencia pública (enlace a agenda, fotos o resumen en #weLore).
- Asistentes e interacción: asistentes totales, tasa de preguntas/participación (>20% ideal).
- Pilotos/PoC iniciados: oportunidades que avanzan a prueba estructurada (con objetivo, responsables y fechas).
- Partners introducidos: organizaciones con encaje y reunión cualificada con el equipo central.
- Feedback accionable: issues/prs/tickets abiertos con hallazgos de campo (fricciones, necesidades, métricas).
- Contenidos de apoyo: piezas creadas/curadas (presentaciones localizadas, tutoriales, guías breves) y su alcance.

Sugerencias de metas trimestrales (orientativas):
- 2–4 activaciones; 1–2 pilotos; 1 partner cualificado; 3–5 feedbacks accionables.

### Evidencias requeridas
- Entrada en #weLore o repos con resumen, fecha, lugar/organizador y resultados.
- Materiales utilizados (deck, demo) o enlaces.
- Cuando aplique, referencia on‑chain en Hedera para hitos que reciban incentivo utilitario. Ver `../../licencias-socio/verificacion-descentralizada.md`.

### Incentivos utilitarios `$CAS`
- Naturaleza: token de utilidad orientado a recompensar contribuciones verificables. No es instrumento financiero.
- Asignación: sujeta a elegibilidad y a la política publicada en `../../mecenas/tiers-utilitarios/moneda/distribucion-moneda.md`.
- Criterios de cálculo: combinación de cantidad/calidad/alcance del impacto y prioridad estratégica del segmento.
- Vesting: podrá aplicarse calendario de vesting para alinear incentivos de largo plazo.
- Límite: tope por persona/periodo para evitar acumulación adversa.
- Verificación: toda asignación relevante tendrá evidencia en Hedera o registros públicos; verificación descrita en `../../licencias-socio/verificacion-descentralizada.md`.
- Custodia: puedes usar custodia de Apps Suite o tu propia cuenta Hedera (ver documento de verificación).

### Reglas éticas y elegibilidad
- Cumplimiento estricto de `../../legal/uso-etico-no-especulacion.md` y `../../legal/uso-etico-no-inversion-equity.md`.
- Prohibido crear expectativas de precio, prometer rendimientos o realizar prácticas de “shilling”.
- Sin evidencias no hay incentivo: toda actividad debe estar documentada.
- Transparencia de conflictos de interés y patrocinio (ver `Compliance y riesgos`).
- Consideraciones fiscales: cada persona es responsable de analizar sus obligaciones fiscales locales.

### Revisión y disputas
- Si no estás de acuerdo con una evaluación, abre ticket con las evidencias y, si procede, enlaces on‑chain.
- Se seguirá el proceso de `../legal/guias-mediaciones-disputas.md` cuando aplique.

## Playbook de activaciones

Guía práctica para planificar, ejecutar y medir activaciones de embajadores en distintos contextos. Aplícalo con criterio y prioriza calidad sobre cantidad.

> Pilares del producto para el mensaje: `Ariadna` (identidad/acceso/orquestación) y `Sindri` (Markdown extendido para contenidos y apps). Ver `../../descripcion-producto.md`.

### 0) Preparación previa
- Define tu segmento: quiénes son, qué problemas tienen, qué lenguaje usan.
- Elige 1–2 casos de uso del MVP relevantes (p. ej., intranet PyME con login único; publicación de material docente con Sindri).
- Junta de materiales: deck de 10–12 diapositivas, demo guiada (5–7 min), one‑pager.
- Logística: fecha, lugar/formato, registro, permisos de imagen y RGPD si aplica.

### 1) Tipos de activación y guías

#### Charlas intro (30–45 min)
- Objetivo: awareness + pipeline de interesados.
- Estructura: problema del segmento → solución Apps Suite → demo breve → llamada a piloto.
- Métricas: asistentes, preguntas, interesados en piloto.

#### Taller práctico (60–120 min)
- Objetivo: que la audiencia “toque” Ariadna/Sindri.
- Requisitos: cuentas de prueba, material paso a paso, 1 facilitador por cada 15 personas.
- Métricas: finalización de ejercicios, feedback, candidatos a PoC.

#### Reuniones 1:1 con organizaciones
- Objetivo: calificar encaje y proponer piloto.
- Checklist: pain points, sistemas actuales, restricciones de seguridad, patrocinio interno.
- Métricas: avance a PoC, patrocinador asignado, tiempos.

#### Comunidad/meetup temático
- Objetivo: construir relación y cadencia (mensual/trimestral).
- Tácticas: co‑organizar con actores locales, lightning talks, show‑and‑tell de pilotos.
- Métricas: recurrencia, speakers, colaboraciones.

### 2) Demo recomendada (guion corto)
1. Inicio de sesión con `Ariadna` (OIDC/OAuth2) y control de acceso.
2. Publicación con `Sindri`: del Markdown a web/PDF en minutos, misma fuente.
3. Cierre: ruta a piloto, soporte y cómo medir resultados.

### 3) Pilotos (PoC) — definición mínima
- Objetivo claro (ej.: “intranet con 2 conectores y 3 perfiles RBAC”).
- Alcance concreto (4–6 semanas, sin desarrollos a medida): ver `../../descripcion-producto.md` (Límites del MVP).
- Responsables y calendario; criterios de éxito y plan de salida.
- Acuerdos de datos/privacidad si corresponde.

### 4) Materiales y repos
- Presentaciones oficiales y plantillas en repos públicos.
- Guías rápidas y tutoriales breves adaptados a tu segmento.
- Registro de evidencias en #weLore; para incentivos utilitarios, ver `../../licencias-socio/verificacion-descentralizada.md`.

### 5) Checklist de ejecución
- Confirmar agenda/logística; prueba técnica del lugar/plataforma.
- Ensayo del pitch y de la demo; backups offline.
- Definir responsable de fotos/notas para evidencias.
- Recoger feedback (formulario breve) y próximos pasos.

### 6) Post‑evento y seguimiento
- Publicar resumen y materiales (48–72h).
- Contactar interesados; calificar y agendar reuniones de piloto.
- Reporte quincenal y cierre de mes con KPIs.

### 7) Antipatrones a evitar
- Sobre‑prometer (features fuera del MVP o timings no realistas).
- Enfoque “venta dura”: prioriza descubrimiento y encaje.
- Mensajes sensibles: evita menciones a precio o especulación de `$CAS` (ver `../../legal/uso-etico-no-especulacion.md`).

### 8) Ejemplos de mensajes (adaptar)
- Educación: “Con Ariadna unificamos login y control de acceso; con Sindri publicas web/PDF desde un Markdown fuente. Menos fricción, más control.”
- PyME: “De propuestas a facturas, la misma identidad y plantillas; arrancamos con 2 conectores prioritarios.”
- Docencia: “Plan docente versionado y accesible; controlas qué grupo ve cada material.”

## Guías de comunicación y marca

Estas pautas ayudan a comunicar Apps Suite de forma coherente, veraz y ética. Aplícalas en charlas, redes, emails y reuniones.

### Mensaje base del producto
- Apps Suite se apoya en dos pilares: `Ariadna` (identidad, acceso y orquestación) y `Sindri` (Markdown extendido para generar sitios, documentos y apps desde una sola fuente). Ver `../../descripcion-producto.md`.
- Propuesta de valor: eficiencia operativa, seguridad por diseño, escalabilidad modular.
- Enfoque MVP: prioriza casos de uso y límites explicitados en `../../descripcion-producto.md`.

### Do’s (sí)
- Cita fuentes y enlaza al Whitepaper cuando hagas afirmaciones.
- Explica beneficios en términos del segmento (ej.: PyME, educación, sector público).
- Usa lenguaje claro, evita jerga innecesaria; define siglas la primera vez (OIDC, RBAC, etc.).
- Declara si participas como embajador/a voluntario/a y si un contenido es patrocinado.
- Pide permiso para fotos y gestiona RGPD cuando corresponda.

### Don’ts (no)
- No prometas funcionalidades fuera del MVP ni fechas no confirmadas.
- No hables de precios o de posibles revalorizaciones de `$CAS`. Ver `../../legal/uso-etico-no-especulacion.md`.
- No uses la marca para endorsar productos/servicios de terceros sin acuerdo explícito.
- No publiques datos personales o sensibles sin consentimiento.

### Tono y estilo
- Constructivo, transparente y pedagógico.
- Enfocado en problemas reales y soluciones accionables.
- Reconoce limitaciones actuales y redirige necesidades avanzadas a canales oficiales.

### Identidad visual (resumen)
- Logo y paleta: usa las versiones oficiales provistas por el equipo. Mantén contraste y márgenes de seguridad.
- Tipografías y estilos: adoptar los definidos en materiales oficiales cuando sea posible.
- Plantillas: prioriza las plantillas compartidas (decks, one‑pagers, cabeceras Sindri).

### Credenciales y marcas
- Apps Suite, Ariadna y Sindri son marcas de proyecto; úsalas con mayúscula inicial.
- Terceras marcas y logotipos solo se muestran con permiso y en contexto informativo.

### Disclaimers recomendados
- “Este contenido es informativo. No constituye asesoramiento financiero ni oferta de inversión.”
- “Soy embajador/a voluntario/a. Las opiniones expresadas son personales y deben contrastarse con la documentación oficial.”

### Revisión y aprobaciones
- Para materiales de alto impacto (nota de prensa, co‑marketing con partners), solicita revisión previa al equipo.
- Si dudas, comparte borrador en el canal de coordinación y espera feedback.

### Gestión de crisis
- Evita conjeturas públicas. Recopila hechos y eleva el caso a los responsables.
- Remite a los comunicados oficiales cuando existan.

## Onboarding y checklist

Ruta para incorporarte como embajador/a de Apps Suite y empezar a aportar valor de forma ordenada y medible.

### 0) Requisitos previos
- Leer `../../descripcion-producto.md` y comprender el alcance del MVP.
- Aceptar las políticas de `../../legal/uso-etico-no-especulacion.md` y `../../legal/uso-etico-no-inversion-equity.md`.
- Contar con disponibilidad mínima quincenal para activaciones y reportes.

### 1) Accesos y herramientas
- Comunidad y coordinación: acceso al canal oficial de embajadores.
- Repos y materiales: lecturas, decks, plantillas y ejemplos de demos.
- Evidencias: alta en #weLore (o sistema indicado) para registrar actividades.
- Hedera (opcional): crear cuenta `0.0.xxxx` o activar custodia en Apps Suite para verificación de incentivos. Ver `../../licencias-socio/verificacion-descentralizada.md`.

### 2) Configuración inicial (7 días)
- Presentación en el canal: segmento, región, motivación, disponibilidad.
- Definir segmento objetivo y 1–2 casos de uso MVP a priorizar.
- Preparar kit base: deck de 10–12 diapositivas + demo corta de Ariadna/Sindri.
- Revisar `Guías de comunicación y marca` y antipatrones.

### 3) Plan 30/60/90 días

#### Días 1–30
- 1 charla/taller intro en tu comunidad/organización.
- 3–5 reuniones de descubrimiento con potenciales partners.
- Publicar 1 pieza de contenido de apoyo (post, guía breve, tutorial).
- Registrar evidencias y enviar primer reporte quincenal.

#### Días 31–60
- Calificar y lanzar 1 piloto (PoC) con alcance acotado.
- Co‑organizar un meetup o sesión temática con actores locales.
- Entregar feedback accionable (issues/tickets) al equipo.
- Reportes quincenales y cierre de mes con KPIs.

#### Días 61–90
- Acompañar el piloto hasta resultados y lecciones aprendidas.
- Documentar un caso de estudio interno (borrador) y proponer co‑marketing si procede.
- Identificar 1 partner adicional o 1 nuevo piloto.
- Evaluación conjunta de desempeño y continuidad.

### 4) Checklist por actividad
- Objetivo claro y métrica asociada.
- Materiales preparados y revisados (deck/demo/plantillas).
- Permisos (imagen/RGPD) y logística confirmados.
- Evidencias recopiladas (resumen, fotos, enlaces) dentro de 48–72h.

### 5) Reportes y métricas
- Reporte quincenal: actividades realizadas, métricas, bloqueos.
- Cierre mensual: resumen de KPIs y próximos pasos.
- Para incentivos, aportar enlaces on‑chain o evidencias según `../../licencias-socio/verificacion-descentralizada.md`.

### 6) Soporte y escalado
- Dudas de mensaje o marca: `Guías de comunicación y marca`.
- Dudas legales/éticas o conflictos: `Compliance y riesgos`.
- Necesidad técnica o desarrollos: derivar a canales oficiales.

### 7) Salida y pausas
- Puedes pausar o salir del programa comunicándolo al canal de coordinación.
- Mantén buenas prácticas de cierre: entrega de materiales, notas y estado de oportunidades abiertas.

## Plantillas de propuestas a partners

Material de referencia para contactar y proponer pilotos/colaboraciones con organizaciones. Adáptalo a tu segmento y valida siempre con las `Guías de comunicación y marca`.

### 1) Email inicial (frío o con presentación)

Asunto: Explorar piloto de identidad y contenidos con Apps Suite (Ariadna + Sindri)

Hola <Nombre>,

Soy <Tu Nombre>, embajador/a de Apps Suite en <región/segmento>. Trabajamos dos pilares:
- Ariadna: inicio de sesión unificado y control de acceso (OIDC/OAuth2, RBAC).
- Sindri: publicación desde Markdown a web/PDF con plantillas reutilizables.

Veo encaje con <organización> por <razón específica>. Proponemos un piloto de 4–6 semanas centrado en <caso de uso breve> con alcance muy acotado.

¿Te parecería agendar 30 min para validar objetivos y siguiente paso?

Gracias,
<Nombre> — Embajador/a Apps Suite
<Contacto | LinkedIn | Web>

### 2) One‑pager de piloto (estructura)

Título: Piloto Apps Suite — <Organización>

1. Contexto y objetivos
    - Dolor actual y oportunidad
    - Objetivos medibles (ej.: “login único para 3 perfiles”, “publicar 2 plantillas PDF”)
2. Alcance (4–6 semanas)
    - Ariadna: <conectores/roles>
    - Sindri: <plantillas/contenidos>
    - Límites: sin desarrollos a medida; ver `../../descripcion-producto.md`
3. Éxito y métricas
    - Métricas: adopción login, tiempo de publicación, incidencias
4. Equipo y responsabilidades
    - Sponsor interno, responsable TI/negocio, punto de contacto
5. Privacidad y seguridad
    - Datos mínimos, RBAC, buenas prácticas; acuerdos si aplican
6. Próximos pasos
    - Fecha de kick‑off, calendario tentativo, revisión final

### 3) Guion de reunión cualificada (30–45 min)

1) Introducción (5’): quiénes somos; objetivos de la reunión.
2) Descubrimiento (10’): procesos actuales, dolores, restricciones.
3) Propuesta (10’): encaje del piloto; alcance y límites del MVP.
4) Demo (5–7’): login Ariadna + publicación Sindri.
5) Cierre (5’): métricas de éxito, calendario y responsables.

### 4) Documento de co‑marketing (borrador)

Uso condicionado a aprobación del equipo central.

- Mensaje clave: valor del caso y aprendizaje obtenido; evita promesas futuras.
- Identidad visual: aplica `Guías de comunicación y marca`.
- Disclaimers: “Contenido informativo; no es oferta de inversión.”

### 5) Plantilla de registro de evidencia (#weLore)

- Título del evento/reunión/piloto
- Fecha, lugar/organizador, asistentes
- Resumen de actividad, materiales usados
- Resultados y próximos pasos
- Enlaces a repos, capturas, y a HashScan si hubo incentivo utilitario (`../../licencias-socio/verificacion-descentralizada.md`)

### 6) Notas legales y éticas

- No prometer descuentos o acuerdos fuera del Whitepaper.
- No hablar de revalorizaciones de `$CAS`. Ver `../../legal/uso-etico-no-especulacion.md`.
- Gestionar RGPD y permisos de imagen cuando corresponda.
- En caso de disputa, seguir `../legal/guias-mediaciones-disputas.md`.

## Compliance y riesgos

Marco de actuación para embajadores/as con el fin de minimizar riesgos legales, reputacionales y operativos. Aplica a todas las actividades públicas y privadas relacionadas con Apps Suite.

### 1) Principios
- Legalidad y respeto: cumple la normativa local (publicidad, protección de datos, propiedad intelectual).
- Transparencia: declara tu rol como embajador/a y cualquier patrocinio o relación de interés.
- Proporcionalidad: no prometas más allá del MVP. Ver `../../descripcion-producto.md`.
- Verificabilidad: registra evidencias y, cuando aplique, referencias on‑chain. Ver `../../licencias-socio/verificacion-descentralizada.md`.

### 2) Uso ético y límites
- Prohibida la especulación o crear expectativas de revalorización del token utilitario `$CAS`. Ver `../../legal/uso-etico-no-especulacion.md`.
- No se ofrece equity ni instrumentos financieros. Ver `../../legal/uso-etico-no-inversion-equity.md`.
- Entrenamiento de IA y automatizaciones: respeta las guías de uso de datos y consentimiento. Ver `../../legal/uso-etico-entrenamiento-automatizado-ia.md`.

### 3) Privacidad y datos (RGPD)
- Minimiza datos personales en registros y evidencias. Anonimiza cuando sea posible.
- Solicita consentimiento para fotos o grabaciones; informa del propósito y destino.
- Usa herramientas aprobadas para gestionar listas de asistentes y feedback.

### 4) Seguridad operacional
- Credenciales: nunca compartas accesos; activa 2FA en las herramientas oficiales.
- Dispositivos: mantén actualizado el sistema y evita redes inseguras en demos.
- Demos: utiliza entornos/sandboxes y datos ficticios; evita exponer información sensible.

### 5) Conflictos de interés y patrocinios
- Declara relaciones relevantes (empleo, consultoría, afiliaciones) que puedan influir en tu comunicación.
- Identifica claramente contenidos patrocinados o co‑organizados.
- Evita recomendar proveedores/terceros por interés personal; prioriza criterios objetivos.

### 6) Comunicación responsable
- Usa las `Guías de comunicación y marca` para tono, mensajes y disclaimers.
- Evita lenguaje que sugiera beneficios económicos por participar en el programa.
- Refiere a documentación oficial para detalles técnicos o de roadmap; no inventes fechas.

### 7) Riesgos frecuentes y mitigaciones
- Sobre‑promesas → Mitigación: recalcar límites del MVP y derivar necesidades avanzadas.
- Uso indebido de marca → Mitigación: seguir identidad visual y pedir revisión previa en piezas sensibles.
- Filtración de datos → Mitigación: datos mínimos, anonimización y consentimiento informado.
- Mensajes financieros → Mitigación: usar disclaimers y evitar cualquier referencia a precio/valor.
- Custodia de activos → Mitigación: no gestionar activos de terceros; remitir a `verificacion-descentralizada.md`.

### 8) Reporte de incidentes y mediación
- Si detectas una incidencia (p. ej., publicación inadecuada, disputa con un partner), notifícalo en el canal de coordinación con hechos y evidencias.
- Para disputas formales, sigue `../legal/guias-mediaciones-disputas.md`.
- Mantén registro de comunicaciones y acuerdos alcanzados.

### 9) Consecuencias por incumplimiento
- Advertencia y formación correctiva.
- Suspensión temporal de la condición de embajador/a y de la elegibilidad a incentivos.
- Expulsión del programa en casos graves o reiterados.
- Cuando aplique, comunicación pública de correcciones o rectificaciones.

### 10) Preguntas y soporte
- Dudas legales/éticas: consulta al equipo y revisa la sección `legal/` del Whitepaper.
- Dudas de verificaciones: ver `../../licencias-socio/verificacion-descentralizada.md`.
- Seguridad y datos: aplica políticas de mínimos privilegios y consulta con el responsable técnico.

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

# Para colaboradores creador de contenido

## Resumen del rol

Este documento define el marco de colaboración para Creadores de Contenido pequeños y medianos de la comunidad Apps Suite. Aplica a perfiles con hasta 50.000 usuarios únicos mensuales (UUM) que interactúan en sus canales. Para creadores por encima de ese umbral, el tratamiento es individual y se negocia por separado.

### Contexto de producto
- Ver visión y alcance en `../../descripcion-producto.md` (Ariadna: identidad y acceso; Sindri: contenidos y sitios a partir de Markdown).
- Este rol contribuye a adopción, educación y feedback del MVP, priorizando mensajes claros y medibles.

### Objetivos del rol
- Educar sobre Ariadna (login unificado) y Sindri (publicación desde Markdown).
- Generar prueba social y tutoriales accionables que reduzcan la fricción de entrada.
- Activar comunidad con dinámicas ligeras (retos, directos, UGC) y medir impacto.

### Alcance y responsabilidades
- Planificar y publicar contenidos según el `calendario-editorial.md` acordado.
- Respetar las `lineas-creativas-tono.md` y las `guias-formato-por-canal.md`.
- Proponer y ejecutar acciones del `playbook-campanas.md` cuando corresponda.
- Reportar resultados siguiendo `kpis-incentivos.md`.
- Cumplir las pautas de `../../legal/uso-etico-no-especulacion.md` y las reglas de marca.

### Entregables típicos
- Piezas por canal (vídeo corto, hilo, post, newsletter, entrada de blog con Sindri).
- Directo o demo guiada por trimestre durante el MVP (según capacidad).
- Tutorial o caso de uso práctico por trimestre.

### Beneficios e incentivos
- Reconocimiento comunitario, acceso temprano a plantillas/funciones y posibles utilidades `$CAS` según desempeño. Ver `../tiers-utilitarios/moneda/distribucion-moneda.md` y `kpis-incentivos.md`.

### Límites y exclusiones
- No se exige exclusividad global. Sí se exige no competir deslealmente ni comunicar información reservada.
- No se permite contenido engañoso ni promesas de retorno financiero.
- Colaboraciones con >50k UUM se tratan con un acuerdo aparte (condiciones comerciales y de visibilidad específicas).

### Coordinación
- Punto de contacto: Manager de Comunidad.
- Herramientas: calendario compartido, repositorio de assets, carpeta de briefs.
- Ver `onboarding-checklist.md` para puesta en marcha.

## Líneas creativas y tono

Estas pautas aplican a creadores pequeños y medianos (≤ 50.000 UUM). Buscan coherencia, claridad y utilidad, alineadas al MVP de Apps Suite: Ariadna (identidad y acceso) y Sindri (publicación desde Markdown). Ver `../../descripcion-producto.md`.

### Pilares narrativos
- Claridad: explicar el qué/para qué antes que el cómo técnico.
- Utilidad: mostrar pasos accionables, plantillas y resultados.
- Honestidad: sin promesas financieras ni hype. Ver `../../legal/uso-etico-no-especulacion.md`.
- Comunidad: destacar contribuciones, feedback y casos reales (PyME, docentes, creadores).

### Tono
- Cercano, profesional y didáctico.
- Evitar jerga innecesaria; cuando se use, definirla brevemente.
- Inclusivo y respetuoso con la diversidad.

### Mensajes clave por pilar
- Ariadna: “Un login, muchos servicios. Seguridad y control por diseño”.
- Sindri: “Escribe una vez en Markdown, publica web/PDF/Doc con estilo”.
- Ecosistema: “Plantillas, conectores y comunidad para ir más rápido y mejor”.

### Do / Don’t
- Do: demos cortas, pantallas claras, ejemplos reproducibles, enlaces a docs.
- Do: evidencia de impacto (tiempo ahorrado, pasos reducidos, calidad).
- Don’t: claims financieros, comparativas despectivas, FUD o clickbait.
- Don’t: usar logos de terceros sin permiso ni assets desactualizados.

### Identidad visual (resumen)
- Usa el kit de marca oficial (logos, paleta, tipografías) provisto.
- Respeta zonas de seguridad del logo y contrastes AA para accesibilidad.
- Evita distorsionar el logo o combinarlo con otros sin separación adecuada.

### CTA y cierres
- Cierra con una acción concreta: “Regístrate en Ariadna”, “Prueba esta plantilla de Sindri”, “Lee el tutorial completo”.
- Añade UTM/trackers cuando corresponda y coloca enlaces visibles.

### Casos sensibles
- Anuncios de roadmap o integraciones: coordinar con el Manager.
- Contenido patrocinado/afiliado: declarar con transparencia.

### Nota para >50k UUM
- Cualquier activación con creadores por encima del umbral se revisa con branding y mensajes específicos en acuerdo aparte.

## Calendario editorial

Este calendario es una guía flexible para creadores pequeños y medianos (≤ 50.000 UUM). Si superas ese umbral, tu planificación y condiciones se acuerdan de forma específica.

### Ritmo recomendado (MVP)
- 1 pieza principal/semana por tu canal prioritario.
- 1 repurposing/semana adaptando la pieza a otro canal.
- 1 tutorial o caso práctico/trimestre (idealmente usando Sindri para documentarlo en el blog).

### Cadencia sugerida (ejemplo mensual)
- Semana 1: Tutorial “Primeros pasos con Ariadna” (vídeo corto + hilo resumen).
- Semana 2: Post/Newsletter “Qué es Sindri y cómo publico desde Markdown”.
- Semana 3: Directo/Q&A de 30–45 min con demo breve.
- Semana 4: Caso de uso de PyME o creador mostrando beneficios prácticos.

### Estructura por publicación
- Objetivo claro (educar, activar, resolver duda frecuente).
- Mensaje clave alineado al MVP. Ver `../../descripcion-producto.md`.
- CTA medible (registro Ariadna, doc, plantilla Sindri, etc.).
- UTM/trackers aplicados y preview revisada.

### Hitos trimestrales
- 1 directo o demo guiada.
- 1 tutorial/caso práctico publicado con Sindri (web/PDF) y enlazado.
- Informe corto de aprendizajes (según `kpis-incentivos.md`).

### Coordinación y revisiones
- Planificar con 2 semanas de antelación los temas del mes.
- Revisión ligera opcional 48 h antes en piezas clave (primer tutorial, anuncios).
- Mantener un backlog de ideas priorizado por impacto/tiempo.

### Temporadas y temáticas
- Sincronizar con el roadmap: lanzamientos de plantilla, conectores, hitos de Ariadna.
- Adaptar a picos de consumo (vuelta al trabajo, fin de año, eventos sectoriales).

### Excepciones
- Si no puedes cumplir una semana, informa y reubica la pieza prioritaria al siguiente hueco.
- Campañas especiales sustituyen la pieza semanal si así se acuerda.

## Guías de formato por canal

Aplicable a creadores pequeños y medianos (≤ 50.000 UUM). Para volúmenes superiores se pactan guías específicas.

### Principios generales
- Enfoque MVP: claridad, utilidad y verificación. Ver `../../descripcion-producto.md`.
- CTA único por pieza (registro Ariadna, docs, plantilla Sindri).
- Accesibilidad: subtítulos, contraste, descripciones alt en imágenes.
- Medición: UTM/trackers en todos los enlaces; anota resultados en `kpis-incentivos.md`.

### YouTube / TikTok (Shorts/Reels)
- Duración: 30–90 s. Hook en 3–5 s.
- Formato: 9:16, resolución 1080×1920 como mínimo.
- Estructura: problema → solución con Apps Suite → CTA.
- Recursos: pantalla limpia, zoom a features clave, callouts con texto.

### X (Twitter) — Hilos
- 5–8 tuits. Primer tuit = beneficio claro (no técnico).
- Incluye 1–2 capturas con resaltado. Evita imágenes densas ilegibles.
- Cierra con CTA y enlace con UTM.

### LinkedIn — Post/Carousel
- 100–200 palabras; 5–8 slides si carousel.
- Prioriza utilidad para PyME/equipos (operativa, seguridad, TTM).
- Imagen de portada con titular claro y marca.

### Blog — Sindri
- Formato: Markdown con secciones H2/H3 y bloques de código cuando aplique.
- Incluye resumen inicial, pasos, checklist y enlaces.
- Publica web/PDF desde la misma fuente (Sindri). Ver `../../descripcion-producto.md`.

### Newsletter
- Un tema, un CTA. 300–600 palabras.
- Tonos didáctico y accionable. Enlaza tutoriales/plantillas.

### Directos (YouTube/Twitch)
- 30–45 min. Guion con demo breve (10–15 min) + Q&A.
- Captura estable, micrófono claro, chat moderado.
- Crea un documento de apoyo con Sindri y compártelo después.

### Discord/Foro — Microcontenidos
- Anuncios cortos con enlace a docs/plantillas.
- Clips de 30–60 s reutilizados de directos.

### Reutilización (repurposing)
- De un tutorial largo, extrae 2–3 shorts y 1 hilo.
- De un directo, extrae clips y un post con aprendizajes.

### Compliance rápido
- No prometer retornos financieros. Ver `../../legal/uso-etico-no-especulacion.md`.
- Usa sólo assets con permisos. Ver `derechos-uso-licencias.md`.

## KPIs e incentivos

Aplica a creadores pequeños y medianos (≤ 50.000 UUM). Para creadores por encima de ese umbral, los objetivos e incentivos se definen en un acuerdo específico.

### Principios
- Medir valor real: alcance de calidad, activaciones y aprendizaje.
- Simplicidad: pocos KPIs claros por cada pieza/campaña.
- Transparencia: reporte periódico y verificaciones cuando apliquen.

### KPIs base (por pieza)
- Alcance cualificado: visualizaciones/impresiones dentro del público objetivo.
- Engagement: tasa de interacción (likes, comentarios, guardados, CTR…).
- Activación: clics/altas en Ariadna, descargas de plantillas de Sindri, visitas a docs.
- Calidad del tráfico: tiempo de lectura, rebote, finalización de vídeo.

### KPIs de campaña (acumulados)
- Publicaciones realizadas vs plan (calendario).
- Tutoriales/casos prácticos publicados con Sindri (web/PDF).
- Directos/Q&A ejecutados y asistencia.
- Conversiones agregadas (registros Ariadna, uso de plantillas, etc.).

### Umbrales orientativos (MVP)
- Publicación: 1 pieza principal/semana (ver `calendario-editorial.md`).
- Engagement objetivo: 3%–8% según canal; CTR ≥ 1.5% en piezas con enlace.
- Tutorial trimestral con Sindri y 1 directo/Q&A por trimestre.

### Reporte
- Primer corte a 72 h; segundo a los 7 días de la publicación.
- Formato sugerido: tabla breve con KPIs base + aprendizajes.
- Evidencias: enlaces públicos, capturas y, cuando aplique, hash/registro en `../../licencias-socio/verificacion-descentralizada.md`.

### Incentivos
- Reconocimiento: rol/insignia, difusión en nuestros canales.
- Acceso anticipado: plantillas de Sindri, betas de conectores.
- Utilidades `$CAS` (no financieras): a discreción y según desempeño global del periodo, con topes y vesting cuando aplique. Ver `../tiers-utilitarios/moneda/distribucion-moneda.md`.
- Bonos puntuales en campañas especiales (co‑marketing), si se acuerda previamente.

### Criterios de calidad (para evaluar incentivos)
- Relevancia del público alcanzado vs. casos de uso de Apps Suite.
- Claridad y utilidad del contenido (tutoriales reproducibles, enlaces correctos).
- Cumplimiento de guía de marca y `../../legal/uso-etico-no-especulacion.md`.
- Consistencia de publicación y colaboración proactiva.

### Anti‑abuso y notas
- Prohibido el tráfico artificial o tácticas engañosas para inflar métricas.
- Declarar contenido patrocinado/afiliado cuando corresponda.
- Las métricas se revisarán de forma razonable; Apps Suite puede ajustar objetivos por cambios de algoritmo/plataforma.
- Para >50k UUM, los KPIs e incentivos se negocian caso a caso.

## Playbook de campañas

Guía operativa de activaciones para creadores pequeños y medianos (≤ 50.000 UUM). Para >50k UUM, se acuerdan campañas y condiciones específicas.

### Tipos de campaña (ligeras)
- Educativa: “Cómo empezar con Ariadna/Sindri”. Objetivo: onboarding y reducción de fricción.
- Caso de uso: PyME/creador/docente resolviendo un problema real. Objetivo: prueba social.
- Lanzamiento de plantilla: anunciar y demostrar una plantilla de Sindri.
- Reto/UGC: mini‑desafío (p. ej., “publica tu primera web con Sindri en 20 min”).
- Directo/Q&A: sesión 30–45 min con demo y preguntas.

### Flujo estándar
1) Brief (1–2 páginas)
- Objetivo, público, mensaje clave, CTA, canales, responsables, fechas.
- Enlaces de referencia: `../../descripcion-producto.md`, docs/plantillas.

2) Producción
- Guion/borrador, assets, grabación y edición.
- Revisión ligera opcional (48 h antes en piezas sensibles).

3) Publicación y amplificación
- Posteo en canal principal + repurposing (hilo/short/newsletter).
- Compartir en Discord/Foro y con otros roles (Manager, Moderador, Embajador).

4) Medición y cierre
- Reportar métricas en 72 h y a los 7 días. Ver `kpis-incentivos.md`.
- Aprendizajes y próximas acciones.

### Plantillas de mensajes (esqueleto)
- Educativo (vídeo/hilo):
    - Hook: “Un login, menos fricción: Ariadna en 60 s”.
    - Cuerpo: 3 pasos + pantallas clave.
    - Cierre: CTA con UTM.
- Plantilla Sindri (post/newsletter):
    - Intro: “Publica web y PDF desde Markdown”.
    - Cuerpo: qué, por qué, cómo (3–5 pasos), ejemplo, enlaces.
    - Cierre: descarga de plantilla.

### Checklist de campaña
- [ ] Objetivo + KPI primario definidos.
- [ ] Mensaje alineado a MVP (sin hype financiero).
- [ ] Assets aprobados y derechos confirmados. Ver `derechos-uso-licencias.md`.
- [ ] Enlaces con UTM y landing correcta.
- [ ] Calendario y responsables confirmados.

### Escalado y colaboraciones
- Si una campaña supera expectativas (p. ej., >200% del KPI), considerar:
    - Extensión (parte 2), co‑marketing, directo con equipo técnico.
    - Publicación de caso de éxito en el blog con Sindri.

### Cumplimiento
- No prometer retornos financieros ni especular sobre `$CAS`. Ver `../../legal/uso-etico-no-especulacion.md`.
- Transparencia en colaboraciones pagadas/afiliadas.

## Derechos de uso y licencias

Aplica a creadores pequeños y medianos (≤ 50.000 UUM). Para perfiles con mayor alcance, estas condiciones se definen en un acuerdo específico.

### Propiedad intelectual
- La autoría de tus contenidos originales es tuya. Apps Suite/CicloTIC S.L. no adquiere la propiedad de tus obras por el mero hecho de colaborar.
- El contenido co‑creado con el equipo (p. ej., guiones, plantillas, docs en repos públicos) conservará su autoría atribuida y se publicará bajo la licencia del repositorio cuando aplique.
- Ver `../legal/propiedad-intelectual-licencias.md` y `../../legal/respeto-profesionales-licencias.md`.

### Licencia de uso otorgada a Apps Suite
- Concedes una licencia no exclusiva, mundial, gratuita y sublicenciable para:
    - Reproducir, adaptar (p. ej., recortes, subtítulos), distribuir y comunicar públicamente las piezas de la colaboración en canales oficiales (web, redes, newsletter, eventos) y archivos históricos.
    - Citar fragmentos y capturas a efectos de documentación, soporte y casos de éxito.
- Duración: durante la vigencia de la colaboración y, para archivo/hemeroteca, sin límite temporal salvo revocación.
- Revocación: podrás revocar por escrito el uso futuro (no el ya publicado) con 30 días de antelación, salvo piezas co‑creadas/publicadas bajo licencias del repositorio que seguirán su licencia.
- Atribución: nos comprometemos a citar tu nombre/canal cuando sea razonable.

### Materiales de terceros y permisos
- Eres responsable de verificar que tienes derechos para usar música, imágenes, tipografías, clips o librerías de terceros incluidos en tus piezas.
- Queda prohibido utilizar materiales sin licencia o con incompatibilidades (p. ej., activos con cláusulas restrictivas no compatibles con difusión online/comercial), salvo permiso expreso.
- Si empleas assets CC o similares, incluye créditos y enlaces requeridos.

### Uso de marca y co‑branding
- Se autoriza el uso de la marca Apps Suite conforme a las guías de `lineas-creativas-tono.md` y el kit de marca. No alteres el logo ni uses versiones no oficiales.
- Apps Suite puede mostrar tu marca/canal como colaborador/a en listados, casos de éxito y resúmenes de campaña; puedes revocar para usos futuros con comunicación por escrito.

### Transparencia y cumplimiento
- Indica claramente colaboraciones pagadas/afiliadas cuando aplique.
- Evita mensajes de inversión o promesas de retorno. Ver `../../legal/uso-etico-no-especulacion.md`.
- Para verificaciones de hitos/incentivos, ver `../../licencias-socio/verificacion-descentralizada.md`.

### Datos y privacidad
- No compartas datos personales de terceros sin consentimiento. En demos, anonimiza o usa datos ficticios.

### IA y entrenamiento automatizado
- Cualquier uso de tus piezas para entrenamiento automatizado seguirá `../../legal/uso-etico-entrenamiento-automatizado-ia.md`. Puedes optar por no permitirlo notificándolo por escrito; esto no afecta a usos editoriales ordinarios.

### Disputas y mediación
- Ante dudas sobre licencias/atribución, primero contacta al Manager de Comunidad para resolución amistosa. Si persiste, ver `../legal/guias-mediaciones-disputas.md`.

### Nota para >50k UUM
- Los creadores con más de 50.000 UUM tendrán cláusulas de uso y licenciamiento acordes a su alcance y requisitos de marca, definidas en contrato específico.

## Onboarding y checklist

Esta guía te ayuda a empezar de forma ordenada como Creador/a de Contenido (pequeño/mediano) en Apps Suite. Si superas los 50.000 usuarios únicos mensuales (UUM) activos en tus canales, contáctanos: tu caso se gestiona con un acuerdo específico.

### 1) Alta y accesos
- Solicita acceso a Ariadna (login unificado). Recibirás invitación por email. Ver `../../descripcion-producto.md`.
- Acepta el código de conducta y `../../legal/uso-etico-no-especulacion.md`.
- Únete a los canales de coordinación (Discord/Foro) y presenta tu perfil.

### 2) Assets y branding
- Descarga el kit de marca y las plantillas de Sindri (carpeta compartida).
- Revisa `lineas-creativas-tono.md` y `guias-formato-por-canal.md`.
- Añade tu firma/CTA estándar con enlaces oficiales.

### 3) Brief y definición de foco
- Completa un breve formulario: público objetivo, canales principales, temáticas.
- El Manager de Comunidad te propondrá un mini‑roadmap de contenidos (primer mes).
- Selecciona 1–2 acciones del `playbook-campanas.md` para el trimestre.

### 4) Calendario y entregables
- Acordad ritmo base (p. ej., 1 pieza/semana) en `calendario-editorial.md`.
- Define formatos por canal (short, hilo, post, newsletter, tutorial con Sindri).
- Prepara el primer tutorial/caso práctico sujeto a revisión ligera.

### 5) Medición y reporte
- Configura tus UTMs/links de referencia (plantilla provista).
- Establece los KPIs de seguimiento y el canal de reporte. Ver `kpis-incentivos.md`.
- Activa verificación on‑chain cuando aplique. Ver `../../licencias-socio/verificacion-descentralizada.md`.

### 6) Legal y permisos
- Confirma licencias y derechos de uso. Ver `derechos-uso-licencias.md`.
- Declara colaboraciones pagadas/afiliadas cuando corresponda (transparencia).

### 7) Primera publicación (checklist)
- [ ] Título y mensaje alineados al MVP (claro, accionable, sin hype financiero).
- [ ] Visuales/plantillas validadas y créditos correctos.
- [ ] CTA correcto (registro Ariadna, doc, demo, etc.).
- [ ] UTM/trackers funcionando.
- [ ] Publicado en fecha acordada y reportado en el hilo correspondiente.

### 8) Iteración
- Envía aprendizajes rápidos (qué funcionó, qué no) tras 3–5 publicaciones.
- Propón ajustes al calendario/formatos en base a datos.

# Para colaboradores legal

## Resumen del rol — Colaborador/a Legal (Gestor/a Jurídico/a)

Este documento describe el propósito, alcance y responsabilidades del rol de colaboración legal dentro de Apps Suite, con foco en garantizar la solidez jurídica del producto (Ariadna y Sindri), la conformidad regulatoria, la protección de datos y la calidad de las comunicaciones y contratos vinculados al proyecto.

### Encaje con Apps Suite
- Ariadna: identidad, acceso y orquestación. Implicaciones legales: control de acceso, seguridad, tratamiento de datos personales, registro de actividad, acuerdos con terceros (conectores) y gobierno de cuentas/roles (RBAC).
- Sindri: formato extendido de Markdown que genera web, PDF y DOC. Implicaciones legales: reutilización de contenidos, licencias, propiedad intelectual, derechos de imagen, avisos legales y accesibilidad.

### Objetivos del rol
- Asegurar cumplimiento normativo (p. ej., RGPD/LOPDGDD, eIDAS cuando aplique, consumo, publicidad, propiedad intelectual, competencia desleal).
- Definir y mantener plantillas contractuales y políticas (Términos, Privacidad, DPA, DUA, Cookies cuando aplique, Códigos de conducta, Guías de mediación).
- Reducir riesgos operativos y reputacionales: prácticas anti‑abuso, uso ético y no especulativo del token utilitario `$CAS` (ver `../../legal/uso-etico-no-especulacion.md`).
- Dar trazabilidad y verificabilidad: promover evidencias en red pública (Hedera) y auditoría interna donde tenga sentido (ver `../../licencias-socio/verificacion-descentralizada.md`).

### Responsabilidades clave
- Gobernanza documental: revisión y versionado de políticas y contratos en el repositorio.
- Evaluación de riesgos y compliance por feature (Ariadna/Sindri) y por integración con terceros.
- Soporte a equipos: respuesta a dudas legales de producto, marketing y comunidad.
- Gestión de incidentes legales/privacidad y canalización de reclamaciones/mediaciones.
- Formación y comunicación: guías prácticas, checklists y sesiones breves al equipo.

### Entregables esperados
- Marco contractual actualizado (ver `marco-contractual.md`).
- Políticas de privacidad y tratamiento de datos (ver `politicas-privacidad-datos.md`).
- Propiedad intelectual y licencias de contenidos/plantillas (ver `propiedad-intelectual-licencias.md`).
- Guías de mediación y resolución de disputas (ver `guias-mediaciones-disputas.md`).
- Proceso de revisión de cumplimiento (ver `revision-cumplimiento.md`).
- Onboarding y checklist operativa para nuevos colaboradores legales (ver `onboarding-checklist.md`).

### Límites y supuestos
- El rol no asume representación letrada en juicio ni prestación de servicios externos a terceros; se centra en el marco interno del proyecto y en documentación pública del whitepaper.
- Cualquier servicio profesional a clientes/partners se regula en contrato independiente con CicloTIC S.L. u organización responsable.

### Indicadores de éxito
- Tiempo de respuesta a consultas legales internas.
- Número de publicaciones con avisos y políticas correctas desde el primer intento.
- Reducción de incidencias de privacidad/uso indebido y tiempos de resolución.
- Auditorías internas superadas sin hallazgos críticos.

## Marco contractual — Colaboración Legal en Apps Suite

Este marco describe los documentos, principios y relaciones contractuales que rigen la colaboración de gestores y profesionales del derecho con el proyecto Apps Suite. Se alinea con la estrategia de producto descrita en `../../descripcion-producto.md` y con las políticas generales del whitepaper.

### Principios rectores
- Legal by design: incorporar requisitos legales desde el diseño de Ariadna (identidad/acceso) y Sindri (contenidos/plantillas).
- Minimización y proporcionalidad: sólo tratar datos y asumir obligaciones estrictamente necesarias.
- Transparencia y trazabilidad: evidencias en sistemas internos y, cuando aplique, anclas públicas (Hedera) para hitos verificables.
- Uso ético y anti‑especulación: cumplimiento del documento `../../legal/uso-etico-no-especulacion.md`.

### Partes y ámbitos de relación
- Equipo núcleo/organización promotora (p. ej., CicloTIC S.L.).
- Colaborador/a legal (gestor/a jurídico/a) a título individual o corporativo.
- Terceros: proveedores de infraestructura y conectores (SaaS), clientes/partners bajo contratos independientes.

### Documentación contractual estándar
- Acuerdo de Colaboración Legal (ACL): define alcance del rol, duración, confidencialidad, titularidad de entregables, límites de responsabilidad y compensación si aplica.
- NDA/Confidencialidad: cuando sea necesario por acceso a información sensible.
- Encargo de Tratamiento (DPA): sólo si el/la colaborador/a procesa datos personales por cuenta del responsable.
- Códigos y Políticas vinculadas: `politicas-privacidad-datos.md`, `propiedad-intelectual-licencias.md`, `guias-mediaciones-disputas.md`.

### Alcance del trabajo
- Gobernanza documental jurídica del whitepaper y materiales públicos relacionados.
- Soporte de conformidad en features de Ariadna y Sindri y en integraciones prioritarias.
- Revisión de campañas y comunicaciones relevantes para evitar prácticas engañosas.

### Límites y exclusiones
- No incluye representación ante tribunales ni asesoría a clientes finales del ecosistema, salvo pacto específico.
- No asegura resultados comerciales; es un apoyo de cumplimiento y riesgo.
- La colaboración puede rescindirse por incumplimientos materiales, conflictos de interés o vulneración del código ético.

### Propiedad y licencias de los entregables
- La documentación creada para el whitepaper se publica bajo la licencia del repositorio, salvo se indique lo contrario. Ver `propiedad-intelectual-licencias.md`.
- Aportes de terceros deben respetar sus licencias de origen y atribuciones.

### Responsabilidad y garantías
- Esfuerzo de medios, no de resultado. Las opiniones jurídicas se ofrecen de buena fe y con diligencia profesional.
- Limitación de responsabilidad proporcional a la compensación (si la hubiere) y sin daños indirectos o pérdida de oportunidad.

### Vigencia y terminación
- Vigencia por hitos o periodos; renovación por acuerdo expreso.
- Terminación anticipada por incumplimiento, imposibilidad sobrevenida o decisión estratégica, con entrega ordenada de materiales.

### Resolución de disputas
- Preferencia por mediación amistosa siguiendo `guias-mediaciones-disputas.md`.
- Si no hay acuerdo, sumisión a la jurisdicción y ley aplicable acordadas en el ACL.

## Políticas de privacidad y datos — Apps Suite

Este documento resume el marco de protección de datos y privacidad para las actividades internas del proyecto y los materiales públicos del whitepaper, con especial atención a Ariadna (identidad/acceso) y Sindri (contenidos/plantillas). No sustituye a los avisos legales específicos de productos o servicios ofrecidos a terceros, que se publicarán y versionarán cuando apliquen.

### Roles y responsabilidades
- Responsable del tratamiento: la organización promotora del proyecto (p. ej., CicloTIC S.L.) respecto de los datos que gestione directamente.
- Encargados del tratamiento: proveedores y colaboradores que traten datos por cuenta del responsable bajo un DPA/Anexo de Tratamiento.
- Colaborador/a legal: apoya en la gobernanza y revisión de cumplimiento, sin acceso a datos personales salvo necesidad y autorización documentada.

### Bases legales y finalidades
- Gestión de identidad y acceso (Ariadna): ejecución de una relación precontractual/contractual y cumplimiento de obligaciones de seguridad.
- Publicación y versionado de contenidos (Sindri): interés legítimo y, cuando corresponda, consentimiento para difundir materiales informativos.
- Comunicación y comunidad: interés legítimo para comunicaciones operativas; consentimiento para suscripciones o comunicaciones comerciales.
- Evidencias y trazabilidad (Hedera): interés legítimo para anclar pruebas no personales ni datos identificables; se debe evitar publicar datos personales on‑chain.

### Categorías de datos
- Identificación básica (nombre, email corporativo, identificadores de cuenta), metadatos de acceso y registros de actividad (logs).
- Contenidos editoriales y metadatos asociados. Se evitará incluir datos personales salvo necesidad y base legal documentada.

### Conservación
- Cuentas y accesos: mientras dure la relación y por los plazos de prescripción aplicables en materia de seguridad/compliance.
- Comunicaciones: hasta solicitud de baja u oposición, o plazos legales.
- Logs y auditoría: periodos mínimos para investigación de incidentes y obligaciones legales, con rotación y minimización.

### Destinatarios y transferencias
- Proveedores tecnológicos (SaaS/infra) necesarios para la operación, bajo contratos y garantías adecuadas.
- Transferencias internacionales: sólo con base legal suficiente (p. ej., cláusulas tipo, decisiones de adecuación) y evaluación de riesgos.

### Derechos de las personas
- Acceso, rectificación, supresión, limitación, oposición y portabilidad cuando proceda.
- Canales: email de contacto del responsable o formulario indicado en los sitios generados con Sindri. Se responderá en un mes (prorrogable dos meses en casos complejos).

### Seguridad
- Principio de mínimos privilegios, RBAC, autenticación robusta, red privada/perímetro controlado, cifrado en tránsito y en reposo cuando aplique.
- Revisión periódica de permisos, monitorización de accesos y respuesta a incidentes conforme a procedimiento interno.

### Cookies y tecnologías similares
- Los sitios generados con Sindri que utilicen cookies no exentas deberán mostrar banner/gestor y política específica. Se intentará operar con cookies técnicas y de medición con impacto mínimo en privacidad.

### Registro de actividades y DPIA
- Mantener un Registro de Actividades de Tratamiento (RAT) acorde al RGPD/LOPDGDD.
- Realizar Evaluaciones de Impacto (DPIA) cuando el riesgo lo exija (p. ej., monitorización sistemática a gran escala o datos sensibles).

### Menores de edad
- No se dirige a menores. No se recaban datos de menores de forma intencional. Si se detecta, se procederá a su supresión diligente.

### Cambios y versión
- Esta política puede actualizarse. La versión vigente y su historial se mantienen en el repositorio.

### Contacto
- Para ejercer derechos o consultas de privacidad, utilice el canal de contacto indicado en la documentación o sitio correspondiente.

## Propiedad intelectual y licencias — Apps Suite

Este documento establece el marco de propiedad intelectual (PI) y licenciamiento de los contenidos, plantillas y activos legales asociados al whitepaper y a los artefactos de Apps Suite (Ariadna y Sindri).

### Licencia del repositorio y de la documentación
- El repositorio público indica su licencia en `LICENSE` (actualmente CC0 1.0). Esta licencia aplica por defecto a la documentación del whitepaper y a los ficheros de texto, salvo que un archivo o carpeta especifique una licencia distinta.
- Publicar bajo CC0 implica renuncia de derechos de autor hasta el máximo permitido por ley. Aun así, se recomienda mantener atribución de cortesía y conservación de avisos.

### Plantillas y componentes de Sindri
- Las plantillas y componentes de Sindri pueden incluir estilos, fragmentos y macros. Por defecto heredan la licencia del repositorio. Si se integra material de terceros, deberá respetarse su licencia (p. ej., MIT, Apache-2.0, CC BY) y conservarse los avisos en la cabecera del archivo o en un fichero `NOTICE`.
- Cualquier restricción adicional (marcas, imágenes con derechos, fuentes tipográficas) se documentará explícitamente en el directorio correspondiente.

### Código, conectores y dependencias
- El código de herramientas/CLI o scripts asociados a Apps Suite se licenciara conforme a su propio encabezado. No asumir automáticamente CC0 para código si el archivo declara otra licencia.
- Conectores con terceros (SaaS/infra) están sujetos a sus Términos de Servicio y licencias. El uso por parte del proyecto debe cumplir las condiciones del proveedor.

### Marcas y nombres comerciales
- “Apps Suite”, “Ariadna” y “Sindri” pueden ser marcas de uso del proyecto o de terceros. Este documento no concede licencia de marca. Cualquier uso público debe seguir las guías de marca que se publiquen o contar con autorización expresa.

### Contenidos generados por colaboradores
- Las contribuciones al whitepaper y a las plantillas se entienden licenciadas bajo la licencia del repositorio en el momento de la contribución, salvo acuerdo escrito distinto.
- El/la colaborador/a garantiza originalidad o cesión/licencia suficiente de los materiales aportados y libera de reclamaciones por infracción a la organización promotora en la medida legalmente posible.

### Derechos de imagen y datos personales
- Cuando el contenido incluya fotografías, voces o datos personales, serán necesarios consentimientos adecuados o base legal alternativa. Ver `politicas-privacidad-datos.md`.

### Compatibilidad con licencias de terceros
- Antes de incorporar materiales de terceros, verificar compatibilidad de licencias (p. ej., CC BY‑SA puede exigir copyleft) y obligaciones de atribución.
- Mantener un fichero `TERCEROS.md` o sección de créditos cuando proceda.

### Procedimiento de atribución
- Incluir encabezados con: autoría, año, licencia y enlaces de origen.
- Para activos binarios (imágenes, fuentes), conservar archivos de licencia dentro del mismo directorio.

### Resolución de conflictos de PI
- Cualquier disputa sobre autoría o uso indebido seguirá la guía `guias-mediaciones-disputas.md` como paso previo, sin perjuicio de acciones legales posteriores.

## Revisión de cumplimiento — Apps Suite

Proceso liviano y periódico para verificar que la documentación, las prácticas y los cambios de producto (Ariadna y Sindri) se ajustan a las políticas y al marco regulatorio aplicable.

### Objetivos
- Detectar y corregir desviaciones de forma temprana.
- Aportar evidencia razonable de cumplimiento (auditable).
- Reducir riesgos operativos, legales y reputacionales.

### Alcance
- Políticas y avisos: privacidad, uso ético (`../../legal/uso-etico-no-especulacion.md`), PI/licencias.
- Features y releases relevantes de Ariadna/Sindri y nuevas integraciones con terceros.
- Comunicaciones externas significativas (lanzamientos, campañas, FAQs de licencias).

### Cadencia y roles
- Frecuencia recomendada: trimestral (mínimo semestral) o ante cambios significativos.
- Responsables: colaborador/a legal (coordinación), responsables de producto/tecnología (ejecución de acciones), gestor/a de comunidad (si aplica).

### Metodología
1) Preparación
- Recopilar cambios desde la última revisión (commits/PRs, notas de versión, nuevos conectores, cambios de políticas).

2) Muestreo y pruebas
- Seleccionar una muestra representativa de páginas/documentos generados por Sindri y de flujos de Ariadna (alta, login, permisos) para verificar avisos, consentimientos y accesos.
- Revisar contratos/plantillas modificados.

3) Matriz de riesgos
- Clasificar hallazgos por impacto (Alto/Medio/Bajo) y probabilidad. Priorizar Alto/Medio.

4) Plan de acciones
- Definir responsables, plazos y criterios de aceptación. Abrir issues/PRs correspondientes.

5) Evidencias
- Guardar checklist, acta de revisión, lista de hallazgos y enlaces a PRs. Cuando tenga sentido, anclar un hash de acta no personal en red pública (Hedera). Ver `../../licencias-socio/verificacion-descentralizada.md`.

### Checklist orientativo
- Privacidad
    - [ ] Avisos y políticas visibles y actualizados en sitios Sindri.
    - [ ] RAT actualizado y DPIA evaluada si aplica.
    - [ ] Cookies: banner/config correcto cuando se usen cookies no exentas.
- Acceso y seguridad (Ariadna)
    - [ ] RBAC revisado y mínimos privilegios vigentes.
    - [ ] Registros de acceso y rotación de logs acorde a política.
- Propiedad intelectual
    - [ ] Atribuciones y licencias de terceros correctas y visibles.
    - [ ] Marcas y derechos de imagen con autorizaciones documentadas.
- Uso ético / anti‑abuso
    - [ ] Mensajes públicos coherentes con no especulación de `$CAS`.
    - [ ] Controles anti‑abuso y comunicación honesta en FAQs/licencias.

### KPIs sugeridos
- % de hallazgos Alto cerrados dentro del plazo objetivo.
- Tiempo medio de cierre de hallazgos.
- Nº de reincidencias por categoría (privacidad, PI, comunicaciones).

### Gestión de incidentes
- Si durante la revisión se detecta un incidente (p. ej., exposición de datos): activar el procedimiento interno de respuesta, contener, evaluar notificación a autoridades/personas y documentar acciones correctivas.

## Guías para mediaciones y disputas — Apps Suite

Estas guías proporcionan un procedimiento claro, breve y proporcional para resolver desacuerdos relacionados con colaboraciones legales, documentación del whitepaper, uso de marcas y cumplimiento de políticas. Se prioriza la solución amistosa y rápida antes de escalar a vías formales.

### Principios
- Buena fe y proporcionalidad: intentar resolver con el menor coste y en el menor tiempo posible.
- Trazabilidad: registrar acuerdos y evidencias relevantes; cuando sea pertinente, anclar hash de acuerdos/hitos no personales en red pública (Hedera).
- Confidencialidad: proteger información sensible y datos personales durante el proceso.
- Impacialidad razonable: si hay conflicto de interés, invitar a una tercera persona interna que no haya participado.

### Ámbito de aplicación
- Disputas sobre interpretación de documentos del whitepaper o plantillas de Sindri.
- Reclamaciones por presunto incumplimiento de políticas (p. ej., `../../legal/uso-etico-no-especulacion.md`).
- Conflictos de atribución/autoría no resueltos en primera instancia (ver `propiedad-intelectual-licencias.md`).

### Proceso en 4 pasos
1) Notificación inicial
- Parte afectada envía un resumen objetivo (máx. 1 página) con: hechos, documentos implicados, impacto y propuesta de solución.
- Plazo recomendado: dentro de los 15 días siguientes al hecho conocido.

2) Revisión y respuesta
- La persona o equipo receptor acusa recibo en 3 días hábiles y responde en 10 días hábiles proponiendo: aceptar, rechazar o alternativa.
- Puede solicitarse una breve reunión para aclaraciones (30–45 min).

3) Mediación interna
- Si no hay acuerdo, se nombra una persona mediadora interna con conocimiento del dominio y sin conflicto de interés.
- La mediación dura hasta 15 días hábiles y concluye con: acuerdo (minuta escrita) o no acuerdo (acta breve).

4) Cierre y siguientes pasos
- Si hay acuerdo: documentar cambios, fechas y responsables. Publicar versiones actualizadas cuando aplique.
- Si no hay acuerdo: se podrá elevar a instancia externa (p. ej., mediación/árbitro profesional) o, en última instancia, jurisdicción ordinaria según el contrato aplicable.

### Evidencias y documentación
- Mantener un expediente con: notificación, respuestas, minutas, decisiones y enlaces a PRs/commits relacionados.
- Evitar incluir datos personales salvo necesidad. Anonimizar cuando sea posible antes de anclar evidencias públicas.

### Indicadores
- Porcentaje de disputas resueltas en fase 2–3.
- Tiempo medio de resolución.
- Número de reincidencias sobre la misma causa.

### Modelo de minuta de acuerdo
- Partes: …
- Objeto de la disputa: …
- Hechos acordados: …
- Solución: … (cambios documentales, plazos, responsables)
- Efectos: renuncia recíproca sobre el asunto resuelto, salvo incumplimiento del acuerdo.
- Fecha y firmas/confirmaciones.

## Onboarding y checklist — Colaboración Legal en Apps Suite

Guía práctica para incorporar a gestores y profesionales del derecho al flujo de trabajo del proyecto, asegurando alineación con producto (Ariadna/Sindri), políticas y herramientas.

### 1) Preparación (antes del día 1)
- [ ] Confirmar identidad y acuerdo de colaboración (ACL) firmado. Si procede, NDA y DPA.
- [ ] Crear cuenta en Ariadna con rol mínimo necesario (RBAC) y activar MFA.
- [ ] Conceder acceso a repositorios/documentación y canal de comunicación (p. ej., Slack/Matrix).
- [ ] Compartir enlaces clave: `../../descripcion-producto.md`, `../../legal/uso-etico-no-especulacion.md`, `propiedad-intelectual-licencias.md`, `politicas-privacidad-datos.md`, `marco-contractual.md`.

### 2) Día 1 — Inducción
- [ ] Sesión de 45–60 min: visión general de Apps Suite y roles.
- [ ] Repaso de flujo editorial con Sindri (plantillas, generación web/PDF/DOC) y puntos legales habituales.
- [ ] Repaso de flujos de Ariadna (alta, login, permisos) y controles de privacidad/seguridad.
- [ ] Asignación de una primera tarea guiada (p. ej., revisión de un aviso legal en una plantilla).

### 3) Primera semana — Trabajo acompañado
- [ ] Revisar y actualizar un documento existente (PR) siguiendo el estilo del repositorio.
- [ ] Verificar licencias/atribuciones de un conjunto de activos (imágenes, fuentes) y documentar en `TERCEROS.md` si aplica.
- [ ] Completar checklist de privacidad para una página de Sindri con cookies.
- [ ] Conocer el proceso de disputas (ver `guias-mediaciones-disputas.md`).

### 4) Primer mes — Autonomía supervisada
- [ ] Conducir una mini revisión de cumplimiento (ver `revision-cumplimiento.md`) sobre un cambio de Ariadna o una integración nueva.
- [ ] Proponer mejoras a plantillas contractuales/políticas con evidencia comparada.
- [ ] Documentar al menos un caso de aprendizaje (lección) en el repositorio.

### 5) Operación continua
- [ ] Cadencia de revisiones: trimestral/semestral según el plan.
- [ ] Mantener actualizado el inventario de políticas y versión.
- [ ] Participar en retro trimestral de riesgos/compliance.

### Herramientas y accesos
- [ ] Ariadna: cuenta, MFA, permisos adecuados.
- [ ] Repositorio: acceso de lectura/escritura según necesidad.
- [ ] Herramientas de ofimática/gestión (si aplica) con mínimos privilegios.

### Criterios de salida/transferencia
- [ ] Entregar materiales y credenciales revocadas al finalizar la colaboración.
- [ ] Transferir conocimiento (documento de cierre con estado de tareas y recomendaciones).

### Contactos
- [ ] Responsable de producto.
- [ ] Responsable técnico.
- [ ] Punto de contacto legal/compliance.

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

# Para colaboradores moderador

## Resumen del rol

### Propósito del rol
El moderador es la primera línea de cuidado de la comunidad interna (p. ej., Discord). Su misión es mantener conversaciones sanas, seguras y productivas, alineadas con los valores del proyecto Apps Suite y sus dos pilares: Ariadna (identidad/roles/seguridad) y Sindri (documentación y plantillas de procesos).

- Garantiza cumplimiento del código de conducta y normas del servidor.
- Facilita la comunicación entre equipos y reduce la fricción operativa.
- Actúa preventivamente ante riesgos (spam, doxxing, acoso, filtraciones, ingeniería social).
- Escala incidentes conforme a los flujos definidos y registra evidencias.

### Alcance y límites
- Cobertura: canales internos de comunicaciones oficiales (p. ej., Discord, foros internos) y sus integraciones autorizadas.
- Horario: según turnos publicados; fuera de turno solo actuación de contención básica en emergencias.
- Decisiones: puede aplicar acciones moderadas (silenciar, eliminar mensajes, mover hilos) según matriz RACI; sanciones severas requieren revisión de un Manager o Legal.
- Privacidad: no accede a datos sensibles fuera de lo estrictamente necesario; respeta RBAC definido por Ariadna.

### Responsabilidades clave
- Supervisar canales y activar herramientas de protección (anti‑spam, rate‑limit, verificación de nuevos miembros).
- Mediación básica entre personas usuarias cuando surjan conflictos, documentando en Sindri los acuerdos.
- Custodia de evidencias (capturas, IDs de mensajes, registros de bots) siguiendo las guías de Legal.
- Comunicación clara y empática; promover la cultura y el tono del proyecto.
- Reportar KPIs y lecciones aprendidas para mejora continua.

### Resultados esperados (outcomes)
- Disminución sostenida de incidencias por cada 1000 mensajes.
- Tiempos de respuesta dentro de SLA definidos en este whitepaper.
- Clima seguro medido por encuestas de pulso y feedback de la comunidad.

### Relación con Ariadna y Sindri
- Ariadna: asignación de roles de moderación, registro de accesos, MFA y permisos mínimos; auditoría de acciones críticas.
- Sindri: plantillas de actas de mediación, formatos de reporte, manuales de canal y versionado de normas para máxima transparencia.

### Matriz RACI (resumen)
- Responsable (R): Moderador de turno.
- Aprobador (A): Manager de Comunidad.
- Consultado (C): Legal/Compliance cuando aplica.
- Informado (I): Equipo núcleo del proyecto.

## Código de conducta y normas

### Objetivo
Este código establece el estándar mínimo de conducta para moderadores y participantes en los canales internos del proyecto (p. ej., Discord). Se alinea con los pilares de Apps Suite: Ariadna (identidad, acceso, auditoría) y Sindri (transparencia, documentación versionada).

### Principios
- Seguridad primero: priorizamos la protección de las personas y la confidencialidad operativa.
- Respeto y empatía: comunicación clara, inclusiva, sin sarcasmo hostil.
- Proporcionalidad: las intervenciones de moderación son mínimas y justificadas.
- Trazabilidad: toda acción relevante queda documentada y es auditable.
- Mejora continua: aprendemos de incidentes y actualizamos procesos en Sindri.

### Comportamientos esperados
- Usar el canal adecuado y resumir contexto al iniciar conversaciones.
- Citar fuentes y evitar rumores; marcar claramente opiniones personales.
- Cuidar el tiempo del equipo: ser conciso; evitar @everyone salvo emergencias.
- Respetar decisiones de moderación; usar los canales de apelación cuando proceda.

### Conductas no permitidas (ejemplos no exhaustivos)
- Acoso, discriminación, amenazas, doxxing o difusión de datos personales.
- Spam, flood, publicidad no autorizada o ingeniería social.
- Compartir material con derechos sin permiso o contenido NSFW.
- Filtrar información confidencial del proyecto o de terceros.

### Privacidad y datos
- Aplicar el principio de mínimos privilegios (RBAC vía Ariadna).
- No divulgar logs, capturas ni datos sensibles fuera del flujo de resolución.
- Retención de evidencias según política de Legal (ver guías en Sindri).

### Normas de canal (plantilla)
- Idioma principal: español; otros idiomas permitidos según canal.
- Formato: uso de hilos para temas técnicos; etiquetado con prefijos [AYUDA], [INCIDENTE], [PROPUESTA].
- Etiqueta: cero tolerancia al ad hominem; centrarse en ideas, no personas.

### Acciones de moderación (progresivas)
1) Aviso privado o público con referencia a esta norma.
2) Eliminación/edición de mensaje, mute temporal (hasta 24h) si persiste.
3) Expulsión temporal (24–168h) y reporte interno.
4) Expulsión indefinida o ban, requiere validación de Manager/Legal.

- Las decisiones deben ser consistentes y documentadas en el registro de incidentes.

### Apelaciones y revisión
- Cualquier medida ≥ paso 2 puede apelarse en el canal/forma designada.
- Un moderador distinto, o el Manager de Comunidad, revisará el caso.
- El resultado y aprendizajes se registran en Sindri con redacciones necesarias.

### Cumplimiento de plataformas y ley
- Este código complementa, no sustituye, los Términos de Servicio de Discord.
- En caso de conflicto legal, prevalece la normativa aplicable y la guía de Legal.

### Transparencia y versionado
- Las normas se publican en Sindri, con historial de cambios y control de versiones.
- Cambios de materialidad alta se comunican en anuncio fijado y en el canal #normas.

## Flujos de resolución de conflictos

### Clasificación de incidentes
- Nivel 0 (informativo): dudas, malentendidos sin infracción. Tratamiento: respuesta y reorientación.
- Nivel 1 (menor): lenguaje inapropiado leve, off‑topic persistente, mini‑spam. Tratamiento: aviso + corrección.
- Nivel 2 (moderado): acoso leve, spoilers sensibles, difusión accidental de info interna. Tratamiento: eliminar mensaje + mute temporal.
- Nivel 3 (grave): amenazas, doxxing, ingeniería social, filtraciones deliberadas. Tratamiento: expulsión y escalado inmediato.
- Nivel 4 (crítico): riesgo físico, intrusión, extorsión, incidentes legales. Tratamiento: contención, congelar evidencias y escalar a Legal/Seguridad.

### SLA y tiempos de respuesta
- Triage inicial: < 10 minutos en horario de cobertura.
- Contención (si aplica): < 15 minutos desde triage.
- Documentación en registro de incidentes: < 60 minutos desde cierre.
- Escalado a Manager/Legal (N3): inmediato para N3+ y en < 2h para N2 recurrente.

### Flujo estándar (N1–N2)
1. Detectar y evaluar severidad (apoyarse en bots/alertas).
2. Intervenir con el mínimo impacto: aviso público/privado, mover a hilo, recordar norma.
3. Si persiste: eliminar contenido y aplicar mute temporal proporcional.
4. Registrar: enlace al mensaje, ID, usuario, canal, captura, acción aplicada y norma referida.
5. Cerrar incidente y, si procede, enviar retroalimentación constructiva.

### Flujo de alto impacto (N3–N4)
1. Contener: borrar contenido sensible, activar slow‑mode/cerrar canal si es necesario.
2. Preservar evidencias: IDs de mensajes/usuarios, capturas con timestamps, logs de bots.
3. Bloquear/ban temporal del emisor si hay riesgo.
4. Escalar a Manager de Comunidad y Legal con resumen ejecutivo (máx. 10 líneas) y evidencias.
5. Activar plan de comunicación si impacta a múltiples canales o a externos.
6. Registrar en Sindri un post‑mortem breve (qué pasó, por qué, cómo evitamos repetición) en < 48h.

### Plantillas y mensajes tipo
- Aviso inicial (N1): "Hola, para mantener el canal ordenado, movemos este tema a [hilo]. Revisa por favor #normas. Gracias!"
- Advertencia (N2): "Este contenido infringe [norma]. Hemos retirado el mensaje. Un nuevo incumplimiento resultará en mute temporal."
- Escalado (N3): "Se detectó posible filtración/doxxing. Contenido retirado, usuario bloqueado temporalmente. Escalamos a Legal."

### Criterios de cierre
- Comportamiento corregido y acuse de recibo del recordatorio.
- Acciones aplicadas y documentación completa en el registro.
- Para N3–N4: validación de Manager/Legal y acciones preventivas definidas.

### Prevención y aprendizaje
- Revisión mensual de incidentes y patrones.
- Actualización de normas/plantillas en Sindri según hallazgos.
- Simulacros trimestrales de incidentes críticos (phishing, doxxing) con checklist.

## Herramientas y protocolos

### Ariadna (identidad, acceso y auditoría)
- Roles recomendados: `moderador`, `manager_comunidad`, `legal_viewer` con permisos mínimos necesarios (RBAC).
- Requisitos de acceso: MFA obligatorio; dispositivos registrados en la red privada.
- Auditoría: registro automático de acciones críticas (ban, mute > 1h, borrado masivo) con usuario, timestamp y motivo.
- Alta/Baja de moderadores: solicitud en Sindri, aprobación del Manager, provisión de rol en Ariadna y revisión trimestral.

### Sindri (documentación y plantillas)
- Repositorio de normas y plantillas: actas de mediación, reportes de incidentes, mensajes tipo, manuales de canal.
- Versionado y permisos: edición restringida a `manager_comunidad`; moderadores con permiso de contribución (PRs).
- Publicación: cambios relevantes anunciados en #normas con enlace a diff.

### Discord: configuración base de moderación
- Permisos mínimos en servidores y canales: gestionar mensajes, silenciar miembros, mover hilos, slow‑mode.
- Bots sugeridos: anti‑spam (captcha/verification), logs (mensajes editados/eliminados), automod (palabras clave), encuestas.
- Seguridad:
    - Verificación de nuevos miembros (nivel medio o superior).
    - Two‑factor para cuentas con permisos elevados.
    - Roles separados para moderación y para identidad personal; prohibido usar cuentas personales para tareas admin.

### Protocolos operativos
- Turnos y cobertura: calendario mensual en Sindri; handed‑off con checklist de incidentes abiertos.
- Registro de incidentes: usar el formulario/plantilla en Sindri con campos obligatorios (IDs, canal, severidad, acciones, normas).
- Evidencias: capturas con marca temporal, enlaces permanentes al mensaje, export de logs de bot cuando aplique.
- Comunicación interna: canal #mod‑equipo para coordinación; #mod‑alertas para eventos automáticos.
- Comunicación externa (si procede): mensajes estandarizados, aprobados por Manager/Legal.

### Procedimientos específicos
- Eliminación de contenido: priorizar edición/ocultación si el contexto lo permite; si hay datos sensibles, borrado inmediato y preservación de evidencias.
- Mute/ban: aplicar de forma proporcional y documentar motivo y duración. Bans indefinidos requieren aprobación de Manager.
- Desescalado: tras cumplimiento de medidas, invitar a retomar conversación con pautas claras.

### Contingencias y continuidad
- Fallo de bots: activar medidas manuales (slow‑mode, cierre temporal de canal) y abrir ticket a soporte.
- Incidentes de seguridad de cuenta: revocar sesiones desde Ariadna, rotar tokens/roles de bot y notificar a Seguridad.
- Backup de configuraciones: export mensual de ajustes clave y roles, almacenado de forma segura.

## KPIs e incentivos

### Objetivo
Definir métricas claras para evaluar el desempeño de moderación y un esquema de incentivos que promueva seguridad, calidad de conversación y eficiencia operativa.

### KPIs operativos
- Tasa de incidentes por 1000 mensajes (objetivo: ↓ con tendencia mensual a la baja).
- Tiempo medio de respuesta (MTTA) a incidentes N1–N2 en horario de cobertura (objetivo: < 10 min).
- Tiempo medio de contención (MTTC) para N2–N3 (objetivo: < 15 min).
- Porcentaje de incidentes correctamente documentados en Sindri (objetivo: ≥ 95%).
- Ratio de reincidencia por usuario/canal a 30 días (objetivo: ↓ < 5%).
- Densidad de uso de hilos y etiquetas correctas por canal (proxy de orden; objetivo: ≥ 80%).

### KPIs de calidad y satisfacción
- Puntuación de clima/seguridad percibida en encuestas trimestrales (objetivo: ≥ 4/5).
- Feedback positivo/neutro vs negativo sobre moderación (objetivo: ≥ 90% no‑negativo).
- Porcentaje de apelaciones confirmadas vs revertidas (objetivo: ≥ 80% confirmadas por consistencia).

### SLAs de referencia
- N1: triage < 10 min; cierre < 60 min.
- N2: contención < 15 min; cierre < 4 h.
- N3: escalado inmediato; cierre con post‑mortem < 48 h.

### Incentivos
- Reconocimiento mensual a moderador/a destacado/a (menciones, insignias en Discord y en Sindri).
- Micro‑bonos/vales (según política del proyecto) por hitos: 3 meses con KPIs > objetivo; resolución ejemplar de N3.
- Acceso prioritario a formación/recursos y a roles avanzados en Ariadna.

### Salvaguardas
- Evitar gamificación tóxica: los incentivos nunca deben promover intervenciones innecesarias.
- Revisión trimestral de métricas y calibración por Manager/Legal para asegurar equidad.
- Transparencia: reporte agregado publicado en Sindri, con datos anonimizados.

## Onboarding y checklist

### Objetivo
Asegurar que cada moderador/a inicia su actividad con los accesos, conocimientos y protocolos necesarios, alineados con Ariadna (identidad/seguridad) y Sindri (documentación/plantillas).

### Requisitos previos
- Acuerdo de colaboración aceptado y firmado (ver carpeta Legal en Sindri).
- Identidad verificada en Ariadna y activación de MFA.
- Dispositivo principal registrado en la red privada y con antivirus/OS actualizados.

### Accesos y configuraciones (Día 0)
- Ariadna:
    - Asignación del rol `moderador` y revisión de permisos mínimos (RBAC).
    - Verificación de inicio de sesión, MFA y aceptación de políticas.
- Discord:
    - Invitación al servidor interno y asignación de roles de moderación.
    - Confirmar visibilidad de canales: #normas, #mod‑equipo, #mod‑alertas y canales asignados.
    - Revisar permisos: gestionar mensajes, slow‑mode, mover hilos, mute temporal.
- Bots/herramientas:
    - Acceso de lectura a logs y paneles del bot anti‑spam/automod.
    - Acceso a tablero de incidentes/registro en Sindri.

### Formación inicial (Día 0–1)
- Leer: `Descripción del Producto` (Ariadna y Sindri) y `Código de conducta y normas` del rol.
- Revisar: `Flujos de resolución de conflictos` y `Herramientas y protocolos`.
- Simulacro guiado:
    - Caso N1: aviso y corrección de off‑topic con registro.
    - Caso N2: eliminación de mensaje + mute 30 min + registro completo.
    - Caso N3: contención + escalado a Manager/Legal + resumen ejecutivo.

### Primeras 72 horas
- Cubrir al menos 1 turno acompañado (shadowing) y 1 turno en conducción con apoyo.
- Completar 3 registros de incidentes de práctica en entorno controlado (si no hay casos reales).
- Publicar un breve post en #presentaciones describiendo disponibilidad y canales asignados.

### Primer mes
- Rotar por 2–3 canales de distinta naturaleza (técnico, general, anuncios) para calibración.
- Revisión de KPIs personales con el Manager: MTTA/MTTC, calidad de documentación, feedback.
- Ajuste fino de permisos si es necesario (principio de mínimos privilegios).

### Checklist operativa de cada turno
- Revisar #mod‑alertas y panel de bots (5 min).
- Verificar slow‑mode/ajustes en canales de alta actividad.
- Monitorizar hilos activos y aplicar etiquetas/orden.
- Atender incidentes según flujos y documentar en Sindri antes de cerrar turno.
- Handover: dejar nota de estado en #mod‑equipo (incidentes abiertos y próximos hitos).

### Offboarding (cuando aplique)
- Retirar rol `moderador` en Ariadna y revocar sesiones activas.
- Retirar roles/permisos en Discord y acceso a paneles de bots.
- Archivar o reasignar tareas abiertas; verificar que no queden accesos residuales.
- Encuesta de salida y recogida de aprendizajes para mejora continua.

# Licencia Socio — Básica

La licencia Básica es la puerta de entrada al programa de socios del Whitepaper de Apps Suite (CicloTIC S.L.). Está pensada para usuarios individuales y colaboradores que quieren apoyar el proyecto, disfrutar de ventajas iniciales y crecer con la comunidad.

## Beneficios principales
- Descuentos en servicios de la parte propietaria del proyecto Open Source (CicloTIC S.L.).
    - Descuento base en consultoría/soporte y en paquetes formativos introductorios.
    - Los descuentos concretos se comunicarán en las páginas de tarifas vigentes y pueden variar por campaña.
- Airdrops del motor de crecimiento `$CAS` conforme a la política de distribución de comunidad descrita en `../mecenas/tiers-utilitarios/moneda/distribucion-moneda.md`.
    - Elegible a airdrops periódicos vinculados a hitos de participación (p. ej., pruebas, feedback, difusión responsable, desarrollo).
    - Entregas sujetas a vesting y a medidas anti-especulación.
- Rol comunitario específico en los canales oficiales (por ejemplo, “Socio Básico”).
    - Acceso a canales privados de novedades y encuestas.
- Posibles descuentos o ventajas de colaboradores externos. No garantizados ni permanentes.

## Expectativas de participación
- Seguir el código de conducta y el principio de uso ético: no especulación ni promesas de revalorización.
- Favorecer la construcción: pruebas, reportes, documentación o difusión con responsabilidad.

## Verificación y entrega
- La elegibilidad y los airdrops pueden verificarse de forma descentralizada en Hedera cuando aplique. Ver `verificacion-descentralizada.md`.
- Custodia opcional por Apps Suite para quienes no gestionen su propia cuenta Hedera.

## Condiciones y límites
- Esta licencia no confiere derechos de propiedad intelectual ni participación societaria.
- Las utilidades aquí listadas son las únicas comprometidas; cualquier otra utilidad no mencionada no debe considerarse a la hora de adquirir una licencia.
- Las políticas de descuento y airdrops pueden actualizarse para alinearse con el documento `../legal/uso-etico-no-especulacion.md`.
- Sujeto a disponibilidad y a requisitos de verificación anti-abuso (KYT/antibots) razonables.

## Resumen
Una forma simple y asequible de apoyar Apps Suite, acceder a descuentos iniciales y participar en airdrops utilitarios `$CAS`, con verificación transparente y enfoque 100% orientado a utilidad.

# Licencia Socio — Pro

La licencia Pro está dirigida a profesionales y equipos pequeños que desean un mayor nivel de servicio y participación dentro del ecosistema Apps Suite (CicloTIC S.L.). Amplía los beneficios de la licencia Básica con mejores descuentos, prioridad y más oportunidades de aportar valor.

## Beneficios principales
- Descuentos ampliados en servicios de CicloTIC S.L. frente a la licencia Básica.
    - Consultoría, soporte avanzado y paquetes formativos intermedios.
    - Los porcentajes concretos se publicarán en las páginas de tarifas y pueden variar por campaña.
- Airdrops utilitarios de `$CAS` con prioridad en campañas orientadas a comunidad profesional.
    - Ver `../mecenas/tiers-utilitarios/moneda/distribucion-moneda.md` para el marco de distribución.
    - Las entregas pueden aplicar vesting y medidas anti-especulación.
- Rol comunitario “Socio Pro” con acceso a canales y sesiones de roadmapping/feedback más técnicas.
- Acceso preferente a betas cerradas y pruebas de nuevas funcionalidades.
- Posibles ventajas de colaboradores externos (no garantizadas ni permanentes).

## Servicios y soporte
- Ventanas de soporte con prioridad respecto a la licencia Básica (en canales definidos por Apps Suite).
- Webinars y formaciones específicas para perfiles técnicos/operativos según calendario.

## Verificación y entrega
- Elegibilidad y airdrops verificables en Hedera cuando aplique. Ver `verificacion-descentralizada.md`.
- Custodia opcional por Apps Suite para quienes no gestionen su propia cuenta Hedera.

## Condiciones y límites
- No concede derechos de propiedad intelectual, participación societaria ni reparto de beneficios.
- Las utilidades listadas son las únicas comprometidas; no considerar otras utilidades no mencionadas para decidir la compra.
- Sujeto al documento `../legal/uso-etico-no-especulacion.md` y a políticas anti-abuso (KYT/antibots).

## Resumen
La opción ideal para profesionales: mejores descuentos, prioridad en soporte y mayor participación en el ciclo de producto, sin alterar la filosofía de utilidad por encima de la especulación.

# Licencia Socio — Enterprise

La licencia Enterprise está orientada a organizaciones que desean integrarse estratégicamente con el ecosistema Apps Suite, con acuerdos de servicio, gobierno técnico y adopción a escala. Amplía los beneficios de Pro con soporte dedicado y marcos de colaboración.

## Beneficios principales
- Descuentos preferentes en servicios de CicloTIC S.L. para implantaciones, integraciones y soporte de nivel empresarial.
    - Los porcentajes se comunicarán en hojas de servicio y pueden variar por alcance.
- Airdrops utilitarios `$CAS` alineados con la asignación de Comunidad y, cuando aplique, con iniciativas de adopción empresarial.
    - Ver `../mecenas/tiers-utilitarios/moneda/distribucion-moneda.md`.
    - Vesting y controles anti-especulación aplican.
- Rol comunitario “Partner Enterprise” con presencia destacada en foros y participación en mesas técnicas.
- Acceso a hojas de ruta compartidas, pilotos y pruebas de concepto coordinadas.
- Posibles paquetes de formación in-company y onboarding de equipos.

## Servicios y niveles de soporte
- Gestor técnico asignado (según disponibilidad) y canales de soporte priorizados.
- Acuerdos de nivel de servicio (SLA) cuando aplique, definidos en contrato separado.
- Asesoría en gobierno de datos, despliegues y buenas prácticas de producción.

## Verificación y cumplimiento
- Entregas y logros verificables en Hedera cuando corresponda. Ver `verificacion-descentralizada.md`.
- Cumplimiento de `../legal/uso-etico-no-especulacion.md` y políticas anti-abuso internas.

## Condiciones y límites
- No implica participación accionarial ni derechos económicos fuera del alcance contractual de servicios.
- Las utilidades aquí descritas son las únicas comprometidas en esta licencia.
- Cualquier acuerdo adicional (co-marketing, casos de éxito, etc.) se documentará aparte.

## Resumen
Pensada para organizaciones que buscan un marco claro de colaboración técnica y de adopción, con descuentos preferentes, soporte dedicado y trazabilidad descentralizada de hitos cuando proceda.

# Verificación descentralizada

Este documento explica cómo se verifican, de forma transparente y, cuando proceda, descentralizada, las utilidades asociadas a las licencias de socio del Whitepaper de Apps Suite.

## Principios
- Transparencia: toda entrega relevante deja rastro verificable (on-chain o en registros públicos de la herramienta #weLore usada por Apps Suite para gestionar propiedad digital y gamificación).
- Privacidad razonable: se evita publicar datos personales; se usan identificadores técnicos cuando sea posible.
- Usabilidad: si no tienes cuenta en Hedera, Apps Suite ofrece custodia opcional sin perder trazabilidad.

## Red y activos
- Red base: Hedera Hashgraph.
- Moneda utilitaria: `$CAS` (ID: `0.0.xxxx`). Ver `../mecenas/tiers-utilitarios/moneda/datos-generales.md`.
- Gobierno técnico: multifirma 6/10 en cuentas tesoreras y claves del activo, ver apartado Moneda en tiers utilitarios.

## Qué se verifica
- Airdrops utilitarios de `$CAS` asignados a titulares de licencias (Básica, Pro, Embajador, Enterprise).
- Logros/recompensas vinculados a hitos (participación, testing, campañas, embajadas, etc.).
- Estados de vesting cuando aplique.

## Cómo verificar si gestionas tu propia cuenta Hedera
1. Obtén tu `accountId` de Hedera (formato `0.0.xxxx`).
2. Revisa en un explorador compatible (p. ej., HashScan) las transacciones relacionadas con el activo `$CAS` y tu cuenta.
3. Confirma:
    - Recepciones de tokens (`Transfer` del token `0.0.xxxx`).
    - Notas de memo o referencias a campañas cuando existan.
4. Cruza la información con los anuncios oficiales de Apps Suite (canales y repositorios).

## Cómo verificar si usas custodia de Apps Suite
1. Accede a tu panel con la cuenta de Apps Suite.
2. Revisa el historial de moneda/logros y su identificación on-chain (Icono de cadena).
3. Si más tarde creas tu propia cuenta, podrás solicitar la transferencia cuando la política lo permita (ver sección de centralización).

## Centralización/descentralización y calendario
- 2026: activación de transferencias de forma centralizada en Apps Suite.
- 2027: “descongelado” de descentralización y habilitación completa de mercado secundario; claves limitadas a Supply/Metadata.
- Antes de 2027 puedes optar por descentralizar tus activos en tu cuenta Hedera, pero no podrás moverlos fuera de tu cuenta hasta esa fecha.

Ver detalles en `../mecenas/tiers-utilitarios/moneda/distribucion-moneda.md`.

## Evidencias complementarias
- #weLore: plataforma Open Source usada para coordinar y publicar evidencias de entregas, descentralización y propiedad digital.
- Repositorios y anuncios: se listan campañas, snapshots y criterios de elegibilidad.

## Soporte y disputas
- Si detectas discrepancias, abre un ticket en los canales oficiales indicando:
    - Tu identificador de licencia (o email de la cuenta Apps Suite).
    - Tu `accountId` Hedera si aplica.
    - Enlace a la transacción o a la evidencia publicada.
- Se aplicará una revisión siguiendo `../legal/uso-etico-no-especulacion.md`.

# FAQ de licencias

Preguntas frecuentes sobre las licencias de socio del Whitepaper de Apps Suite (CicloTIC S.L.).

## 1) ¿Qué incluyen las licencias?
- Descuentos en servicios de la parte propietaria del proyecto Open Source (CicloTIC S.L.).
- Airdrops utilitarios del motor `$CAS` según el marco descrito en `../mecenas/tiers-utilitarios/moneda/distribucion-moneda.md`.
- Rol específico en los canales de comunidad y acceso a espacios privados cuando aplique.
- Posibles ventajas de colaboradores externos (no garantizadas ni permanentes).

Consulta los detalles por licencia:
- `licencia-socio-basica.md`
- `licencia-socio-pro.md`
- `licencia-socio-embajador.md`
- `licencia-socio-enterprise.md`

## 2) ¿Los descuentos están garantizados y fijos?
No. Los descuentos dependen de las políticas de CicloTIC S.L. y pueden variar por campaña o servicio. Siempre se publicarán en las páginas de tarifas vigentes. Las licencias no garantizan descuentos perpetuos ni montos concretos.

## 3) ¿Qué es `$CAS` y por qué recibo airdrops?
`$CAS` es la moneda utilitaria y motor de crecimiento del ecosistema Apps Suite. Sus objetivos y parámetros técnicos están en `../mecenas/tiers-utilitarios/moneda/datos-generales.md`. Las licencias pueden ser elegibles a airdrops por participación y hitos, dentro de la asignación de Comunidad y Embajadores definida en `../mecenas/tiers-utilitarios/moneda/distribucion-moneda.md`.

## 4) ¿Cómo verifico mis airdrops o logros?
Sigue los pasos de `verificacion-descentralizada.md`. Si gestionas tu propia cuenta Hedera, podrás ver transferencias del token en un explorador on-chain. Si usas custodia de Apps Suite, verás las evidencias en tu panel y podrás solicitar transferencias cuando la política lo permita.

## 5) ¿Cuál es la diferencia entre Básica, Pro, Embajador y Enterprise?
- Básica: entrada asequible con descuentos base y elegibilidad a airdrops.
- Pro: descuentos ampliados, prioridad en soporte, acceso a betas y sesiones cerradas con departamentos del proyecto.
- Embajador: incentivos orientados a divulgación y KPIs, con airdrops específicos y briefings adelantados.
- Enterprise: enfoque para organizaciones, con soporte dedicado, acuerdos de servicio y colaboración técnica.

## 6) ¿Puedo revender o transferir mi licencia?
En general, la licencia es personal/organizativa y podrá ponerse en reventa por parte del propietario en un mercado secundario descentralizado no controlado por CicloTIC S.L., esta opción estará disponible a partir del 2027. Cualquier transferencia debe ser autorizada según las políticas vigentes. Los airdrops o logros asignados on-chain son verificables y, en su caso, transferibles conforme al calendario de centralización/descentralización indicado en `../mecenas/tiers-utilitarios/moneda/distribucion-moneda.md`.

## 7) ¿Hay reembolsos?
Salvo que se indique lo contrario en la política comercial vigente o en el canal de adquisición, las licencias no son reembolsables. Las utilidades comprometidas son exclusivamente las listadas en cada página de licencia.

## 8) ¿Esto es una inversión o un valor financiero?
No. Las licencias y los airdrops de `$CAS` se orientan a utilidad. No hay promesas de revalorización ni retorno. Ver `../legal/uso-etico-no-especulacion.md`.

## 9) ¿Qué duración tienen los beneficios?
Los beneficios y campañas (descuentos, airdrops, acceso a betas) pueden tener ventanas temporales. Apps Suite publicará calendarios y snapshots de elegibilidad cuando corresponda.

## 10) ¿Cómo obtengo una licencia?
Se anunciarán los canales oficiales de adquisición (tienda, partners, campañas). Evita intermediarios no verificados. Confirma siempre en repositorios y sitios oficiales de Apps Suite.

## 11) ¿Qué pasa si no tengo cuenta Hedera?
No es obligatorio. Apps Suite ofrece custodia opcional. Más adelante puedes crear tu cuenta y solicitar la transferencia de activos conforme a la política de centralización/descentralización.

## 12) ¿Con quién contacto ante incidencias?
Abre un ticket en los canales oficiales aportando:
- Identificador de licencia o email de la cuenta Apps Suite.
- `accountId` de Hedera si aplica.
- Enlaces a transacciones/evidencias. Se aplicará la revisión definida en `../legal/uso-etico-no-especulacion.md`.

# Documento de diseño de Apps Suite

**Apps Suite:** *Un único login, extensión de navegador con apps de empresa. Un CMS como núcleo, una VPN como perímetro, y SSO para enlazar cada pieza.*

![Arquitectura de proyectos](/_media/ariadna-arquitectura-proyectos.png)

> **Nombre del proyecto:** **ARIADNA** (Ariadne). En la mitología griega, Ariadna entrega a Teseo el «hilo» que le permite recorrer e interconectar pasajes del laberinto sin perderse. Simboliza **orientación, interconexión y salida segura**.
>
> **Posible subproyectos:** **ARIADNA** como marca paraguas de *módulos* como "Thread", "Knot" y "Loom".

## Resumen ejecutivo

**Objetivo:** desplegar en un único VPS de **Contabo*** un stack productivo que incluya:
1) **CMS** (núcleo de datos y cuentas),
2) **VPN** para acceso administrativo y red privada,
3) **SSO** (Single Sign-On) para que el **usuario del CMS** acceda a **otros servicios** del VPS con la misma identidad.

**Resultado:** un entorno reproducible (*Infra-as-Code*) donde el CMS actúa como **fuente de verdad** de usuarios/roles y un **proveedor de identidad (IdP)** orquesta el SSO con OIDC/SAML. Un **plugin del CMS** sincroniza identidades con el IdP y expone UI/acciones de login único.

\* Puede ser cualquier otro proveedor de VPS como Hetzner o Dinahosting

## Alcance (MVP → V1.md)

- **MVP**
    - VPS Contabo (Ubuntu LTS).
    - Orquestación por **Docker Compose**.
    - **Dokploy** para despliegue continuo.
    - **Traefik** como *reverse-proxy* + TLS (Let’s Encrypt).
    - **WireGuard** o **Tailscale** como VPN.
    - **IdP**: **Authentik** (ligero, moderno OIDC/SAML).
    - **CMS**: **Strapi** por su simplicidad, typescript friendly y comunidad que le respalda.
    - **Plugin/Extensión “Ariadna-Connector”** para Strapi*: sincronización de usuarios/roles ⇒ Authentik (SCIM-like/REST) + botón “Entrar con Ariadna”.
    - Servicios ejemplo protegidos por SSO: **Gitea**, **MinIO**, **n8n** (o software interno como Blendi o weLore).
    - Backups (base de datos + volúmenes) con **restic** + **rclone** a almacenamiento externo.

\* Puede ser cualquier otro CMS pero inicialmente Strapi.

- **V1**
    - 2FA/TOTP y WebAuthn en IdP.
    - Monitoring (Netdata).
    - **SCIM 2.0** nativo para *provisioning*.
    - Alta disponibilidad opcional (réplicas DB, Object Storage externo).

- **V2**
    - autoscaling
    - Segundo CMS soportado mediante *driver*.
    - multi-VPS
    - *zero-trust* completo
    - Monitoring avanzado (Prometheus + Grafana + Loki + Alertmanager).

## Requisitos

**Funcionales**
1. Gestión de usuarios y roles en el CMS (alta/baja/cambio).
2. SSO en servicios del VPS con la identidad del CMS.
3. VPN para administración y para servicios solo internos.
4. Backups y restauración *one-command*.

**No funcionales**
- Seguridad por defecto (TLS, cortafuegos, mínimos privilegios).
- Reproducible (Infra-as-Code, .envs, plantillas).
- Observabilidad básica (métricas, logs).
- Documentación operativa y de desarrollo.

## Arquitectura de alto nivel

- **Perímetro:** Traefik (80/443) -> enruta a servicios Docker; certificados automáticos (Let’s Encrypt DNS/HTTP-01).
- **Red privada:** WireGuard (UDP/51820) para administración segura; subnet wg0 expone puertos internos solo a clientes VPN.
- **Identidad:** Authentik como **IdP** (OIDC/SAML, grupos/roles, políticas).
- **Núcleo de datos:** Strapi + PostgreSQL.
- **Conector Ariadna (plugin CMS):** sincroniza usuarios/roles ⇄ IdP; Web UI en el CMS; *SSO button* y *service catalog*.
- **Servicios SSO-aware:** Gitea, MinIO, n8n, etc. integrados vía OIDC con Authentik.
- **Almacenamiento y backups:** volúmenes Docker + restic/rclone (S3/Backblaze/Wasabi).
- **Monitoring:** cAdvisor + Prometheus + Grafana (MVP: Netdata por simplicidad).

## Componentes y versiones sugeridas

- **SO:** Ubuntu 24.04 LTS.
- **Docker / Compose v2**.
- **Traefik v3** (ACME + middlewares).
- **WireGuard** (linuxserver/wireguard).
- **Authentik** (goauthentik/server) + Redis + PostgreSQL.
- **Strapi** (strapi/strapi) + PostgreSQL.
- **Servicios demo:** gitea/gitea, minio/minio, n8nio/n8n, Netdata/Netdata.
- **Backups:** restic + rclone en contenedor *cron* + wasabi datastorage.

## Modelo de identidades y acceso

- **Fuente de verdad**: CMS (Strapi).
- **IdP**: Authentik refleja usuarios/roles del CMS.
- **Protocolos**: OIDC (recomendado) y SAML (opcional).
- **Atributos estándar**: `sub`, `email`, `name`, `preferred_username`, `roles`, `groups`.
- **Mapeos de *claims*** por servicio (p.ej., `role=admin` ⇒ admin en Gitea).
- **SCIM / Sync**:
    - MVP: **Ariadna-Connector** invoca API de Authentik para *provisioning* (crear/actualizar/borrar).
    - V1: implementar **SCIM 2.0** para *auto-provisioning* bidireccional opcional.

## Flujos principales

#### 7.1 Alta de usuario
1. Admin crea usuario/rol en CMS.
2. Plugin **Ariadna** dispara *webhook* → sincroniza en Authentik.
3. Usuario recibe invitación de primer acceso (opcional) y configura 2FA en IdP.

#### 7.2 Login con SSO a un servicio
1. Usuario entra en el CMS y abre el *Launcher Ariadna* (catálogo de servicios).
2. Clic en “Abrir *Gitea*” → *redirect* a Authentik (OIDC).
3. Authentik autentica (cookie/2FA), emite **ID Token + Access Token**.
4. Servicio (Gitea) valida monedas y crea sesión.

#### 7.3 Acceso a administración por VPN
1. Admin se conecta a WireGuard (profile `.conf` generado por el stack).
2. Accede a puertos internos (DB shells, dashboards no públicos, etc.).

## Diseño del plugin 'Ariadna-Connector' (para Strapi.md)

**Objetivo:** puente entre CMS (Strapi) ⇄ IdP (Authentik).  
**Forma:** extensión de Strapi (*hook + app module*).  
**Funciones:**
- Panel "Ariadna" en el CMS con:
    - Catálogo de servicios SSO (cards con icono/estado).
    - Botón “Entrar” (OIDC *auth request*).
    - Estado de sincronización (user/roles).
- *Hooks* de usuario: `onCreate`, `onUpdate`, `onDelete` ⇒ llamar API Authentik.
- *Health-check* IdP y *diagnostics* (roles mapeados, última sync).

**Configuración:**
- Endpoint y credenciales de Authentik (client_id/secret de *Ariadna*).
- Mapeo de roles/grupos (JSON).
- Lista de servicios (issuer, client_id, scopes, icono, URL).

**API mínima (pseudo):**
- `POST /ariadna/sync/user/:id` — fuerza sincronización.
- `GET /ariadna/status` — estado del conector.
- `GET /ariadna/services` — catálogo para UI.

**Seguridad:**
- Secrets en variables de entorno (no en BBDD).
- *Rate limiting* en llamadas al IdP.
- Logs/auditoría en Strapi y Authentik.

## Infraestructura como código

- **Repositorio** `ariadna/`
    - `compose/` (stacks por servicio).
    - `traefik/` (dynamic conf, middlewares).
    - `wireguard/` (peers, scripts).
    - `authentik/` (bootstrap y *providers* OIDC).
    - `strapi/` (bootstrap, esquemas).
    - `services/` (gitea, minio, n8n, blendi, weLore).
    - `backups/` (restic+rclone cron).
    - `docs/` (runbooks, diagramas).
- **Provisioning opcional**: **Ansible** playbooks para preparar Ubuntu (paquetes, usuario `deploy`, *firewall* UFW, fail2ban, swap, `docker` group, etc.).

## Red, dominios y TLS

- **DNS**: `cms.tudominio`, `sso.tudominio`, `git.tudominio`, etc.
- **Traefik**: routers por *Host* + middlewares (`redirectScheme`, `rateLimit`, `headers` CSP/HSTS).
- **TLS**: certificados ACME (HTTP-01) o DNS-01 si hay *wildcards*.
- **Puertos expuestos**: 80/443 (HTTP/S) y 51820/UDP (WireGuard).
- **Puertos internos**: todo lo demás, accesible solo desde la red Docker y/o la VPN.

## Seguridad

- **SSO**: 2FA/TOTP en Authentik; *password policy* fuerte.
- **Least privilege**: roles/grupos por servicio; *service accounts* dedicadas.
- **Actualizaciones**: *watchtower* o flujo CI para *rolling updates*.
- **Backups**: cifrado restic; pruebas mensuales de restauración.
- **Firewall**: UFW (allow 80,443,51820/udp); fail2ban para SSH.
- **Secret management**: `.env` en el VPS con permisos 600; opción **HashiCorp Vault** en V1.
- **Cumplimiento**: registro de accesos, retención de logs, política de contraseñas y baja de usuarios.

## Bases de datos y datos

- **PostgreSQL**: dos instancias separadas (Strapi y Authentik) o *schemas* separados en una instancia con usuarios distintos.
- **Backups**: `pg_dump` + restic (diario), *snapshots* de volúmenes (semanal) a datastorage configurado.
- **Migraciones**: Strapi gestiona esquemas; plugin añade tablas mínimas para mapeos si hiciera falta.

## Observabilidad

- **MVP**: logs de contenedores (json-file).
- **V1**: Netdata
- **V2**: Prometheus + Grafana + Loki + Alertmanager (panel “Ariadna Ops”).

## Despliegue (alto nivel.md)

1. **Preparar VPS Contabo** (Ubuntu LTS): usuario `deploy`, SSH keys, UFW, fail2ban, Docker.
2. **Clonar `ariadna`** y rellenar `.env` base (dominios, emails ACME, rutas).
3. **Levantar Traefik** (`docker compose up -d traefik`).
4. **Levantar Authentik** y realizar *bootstrap* (crear *Provider OIDC* y *Applications*).
5. **Levantar Strapi** y activar **Ariadna-Connector**; configurar conexión con Authentik.
6. **Registrar servicios** (Gitea/MinIO/n8n/Blendi/weLore) como *Applications* OIDC en Authentik; pegar *client_id/secret* en el conector.
7. **Configurar WireGuard**: generar *peers* y enviar `.conf` a administradores.
8. **Probar SSO end-to-end** y 2FA.
9. **Programar backups** y verificar restauración.

## Roadmap y módulos (nomenclatura temática.md)

- **Ariadna-Thread**: plugin conector para cada CMS (Strapi, Directus, WordPress).
- **Ariadna-Knot**: *policy engine* (mapeos de roles/claims por servicio).
- **Ariadna-Loom**: panel *Launcher* (Los puntitos de Google para apps de la empresa) y catálogo de servicios con *deep-links* y *health*.
- **Ariadna-Guide**: *CLI* para *bootstrap* del VPS (Ansible/Compose).
- **Ariadna-Vault**: gestión de secretos (V1+).
- **Ariadna-Scales**: auditoría y *compliance* (logs centralizados + reportes).

## Pruebas

- **Unitarias** (plugin): mapeo de roles, llamadas a API Authentik, manejo de errores.
- **Integración**: flujo OIDC end-to-end con servicios demo.
- **E2E**: creación usuario ➜ login SSO ➜ revocación ➜ acceso denegado.
- **Seguridad**: escaneo CVEs de imágenes, pruebas de fuerza bruta (rate limit), verificación 2FA.

## Operación

- **Runbooks**: alta/baja usuarios, rotación de credenciales, restauración de backups, renovación de certificados, añadir nuevo servicio OIDC.
- **Mantenimiento**: parches mensuales, limpieza de logs, revisión de *alerts*.
- **Versionado**: *semver* para plugin y para *infra templates*.

## Costes estimados

- **VPS Contabo** (ej.): 4–8 vCPU, 8–16 GB RAM, 200–400 GB SSD.
- **Dominios + DNS**: Cloudflare variable (wildcard recomendable).
- **Almacenamiento backups**: S3 compatible (Wasabi/Backblaze) con restic.

## Riesgos y mitigación

- **IdP caído**: servicios no autentican → alta disponibilidad futura / *grace logins*.
- **VPS único**: punto único de fallo → snapshots + plan de recuperación en otro VPS.
- **Desfase de identidades**: reconciliación programada + SCIM en V1.
- **Exposición de paneles**: Traefik middlewares + *basic auth* + limitar por VPN.

## Licencia y propiedad

- **Código de plugin y tooling**: MIT.
- **Infra templates**: repos abiertos con *secrets* externalizados.
- **Marcas**: “Ariadna” y módulos como marcas de producto (si procede).

## Entregables

- Repositorio `ariadna` (Compose + Ansible + docs).
- Repositorio `ariadna-connector-strapi` (plugin).
- Manual de despliegue, operación y *runbooks*.
- Diagramas (alto nivel + secuencia OIDC + topología WireGuard).

## Apéndice A — Especificaciones OIDC por servicio

- **Gitea**
    - Scopes: `openid email profile groups`.
    - *Claim mapping*: `roles=admin` ⇒ `GITEA_ADMIN=true`.
- **MinIO**
    - Scopes: `openid email`.
    - *Policy*: acceso a buckets por grupo.
- **n8n**
    - Scopes: `openid email profile`.
    - *Auto-provision*: crear usuario si no existe.

## Apéndice B — Variables de entorno (extracto.md)

```
DOMAIN_BASE=tudominio.com
EMAIL_ACME=ops@tudominio.com
## Traefik
TRAEFIK_ACME_STAGING=false
## Authentik
AUTHENTIK_DOMAIN=sso.${DOMAIN_BASE}
AUTHENTIK_ADMIN_EMAIL=admin@${DOMAIN_BASE}
## Strapi
STRAPI_DOMAIN=cms.${DOMAIN_BASE}
STRAPI_ADMIN_EMAIL=admin@${DOMAIN_BASE}
## WireGuard
WG_PUBLIC_ENDPOINT=wg.${DOMAIN_BASE}:51820
WG_ALLOWED_IPS=10.8.0.0/24
```

## Apéndice C — Esqueleto de docker-compose.yml (resumen.md)

*(Se entregará completo en el repositorio; aquí un esquema de servicios y redes:)*
```
networks:
  web:
  private:
  vpn:

services:
  traefik: {...}
  authentik: {...}
  authentik-postgres: {...}
  strapi: {...}
  strapi-postgres: {...}
  wireguard: {...}
  gitea: {...}
  minio: {...}
  n8n: {...}
  blendi: {...}
  welore: {...}
  backups: {...}
```

## Mapa de decisiones (ADR clave.md)

1. **IdP = Authentik** por simplicidad/ligereza vs Keycloak (más complejo).
2. **Reverse = Traefik** por *dynamic conf* y ACME integrado.
3. **CMS inicial = Strapi** por foco en datos y facilidad de extensión.
4. **VPN = WireGuard** por rendimiento y simplicidad de clientes.

**Estado:** Listo para pasar a *blueprint técnico* y crear el repositorio inicial.
