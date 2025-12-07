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

