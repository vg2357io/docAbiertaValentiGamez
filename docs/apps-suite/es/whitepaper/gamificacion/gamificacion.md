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
