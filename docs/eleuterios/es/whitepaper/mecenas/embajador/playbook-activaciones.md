# Playbook de activaciones

Guía práctica para planificar, ejecutar y medir activaciones de embajadores en distintos contextos. Aplícalo con criterio y prioriza calidad sobre cantidad.

> Pilares del producto para el mensaje: `Ariadna` (identidad/acceso/orquestación) y `Sindri` (Markdown extendido para contenidos y apps). Ver `../../descripcion-producto.md`.

## 0) Preparación previa
- Define tu segmento: quiénes son, qué problemas tienen, qué lenguaje usan.
- Elige 1–2 casos de uso del MVP relevantes (p. ej., intranet PyME con login único; publicación de material docente con Sindri).
- Junta de materiales: deck de 10–12 diapositivas, demo guiada (5–7 min), one‑pager.
- Logística: fecha, lugar/formato, registro, permisos de imagen y RGPD si aplica.

## 1) Tipos de activación y guías

### Charlas intro (30–45 min)
- Objetivo: awareness + pipeline de interesados.
- Estructura: problema del segmento → solución EleuteriOS → demo breve → llamada a piloto.
- Métricas: asistentes, preguntas, interesados en piloto.

### Taller práctico (60–120 min)
- Objetivo: que la audiencia “toque” Ariadna/Sindri.
- Requisitos: cuentas de prueba, material paso a paso, 1 facilitador por cada 15 personas.
- Métricas: finalización de ejercicios, feedback, candidatos a PoC.

### Reuniones 1:1 con organizaciones
- Objetivo: calificar encaje y proponer piloto.
- Checklist: pain points, sistemas actuales, restricciones de seguridad, patrocinio interno.
- Métricas: avance a PoC, patrocinador asignado, tiempos.

### Comunidad/meetup temático
- Objetivo: construir relación y cadencia (mensual/trimestral).
- Tácticas: co‑organizar con actores locales, lightning talks, show‑and‑tell de pilotos.
- Métricas: recurrencia, speakers, colaboraciones.

## 2) Demo recomendada (guion corto)
1. Inicio de sesión con `Ariadna` (OIDC/OAuth2) y control de acceso.
2. Publicación con `Sindri`: del Markdown a web/PDF en minutos, misma fuente.
3. Cierre: ruta a piloto, soporte y cómo medir resultados.

## 3) Pilotos (PoC) — definición mínima
- Objetivo claro (ej.: “intranet con 2 conectores y 3 perfiles RBAC”).
- Alcance concreto (4–6 semanas, sin desarrollos a medida): ver `../../descripcion-producto.md` (Límites del MVP).
- Responsables y calendario; criterios de éxito y plan de salida.
- Acuerdos de datos/privacidad si corresponde.

## 4) Materiales y repos
- Presentaciones oficiales y plantillas en repos públicos.
- Guías rápidas y tutoriales breves adaptados a tu segmento.
- Registro de evidencias en #weLore.

## 5) Checklist de ejecución
- Confirmar agenda/logística; prueba técnica del lugar/plataforma.
- Ensayo del pitch y de la demo; backups offline.
- Definir responsable de fotos/notas para evidencias.
- Recoger feedback (formulario breve) y próximos pasos.

## 6) Post‑evento y seguimiento
- Publicar resumen y materiales (48–72h).
- Contactar interesados; calificar y agendar reuniones de piloto.
- Reporte quincenal y cierre de mes con KPIs.

## 7) Antipatrones a evitar
- Sobre‑prometer (features fuera del MVP o timings no realistas).
- Enfoque “venta dura”: prioriza descubrimiento y encaje.

## 8) Ejemplos de mensajes (adaptar)
- Educación: “Con Ariadna unificamos login y control de acceso; con Sindri publicas web/PDF desde un Markdown fuente. Menos fricción, más control.”
- PyME: “De propuestas a facturas, la misma identidad y plantillas; arrancamos con 2 conectores prioritarios.”
- Docencia: “Plan docente versionado y accesible; controlas qué grupo ve cada material.”