# Caso de uso

## Contexto

Una empresa de servicios con 25 empleados necesita centralizar su operación digital: control de accesos, publicación de contenidos y conexión con herramientas de terceros sin perder seguridad ni tiempo.

## Supuestos

- Dispone de dominio propio y servicios básicos (correo, DNS, hosting/VPS).
- No requiere desarrollos a medida fuera del MVP descrito en `./descripcion-producto.md`.
- Hay disposición para adoptar plantillas estandarizadas y conectores prioritarios.

## Actores principales

- Empleado/a con rol operativo (ventas, soporte, contenidos).
- Manager con responsabilidad de aprobación y reporting.
- Equipo técnico/externo que administra la infraestructura.
- Cliente final que consume servicios y contenido.

## Flujo resumido

1. Alta de la organización en Ariadna y definición de unidades/roles.
2. Dispositivos corporativos inscritos a la red privada (perímetro seguro).
3. Contenidos creados en Sindri (md) y publicados como web/PDF.
4. Conectores activados (calendario de reservas, CRM, pasarela de pago) con permisos mínimos.
5. Usuarios acceden vía botón «Iniciar sesión con Ariadna»; RBAC controla qué ve y qué puede hacer cada uno.

## Ejemplos de caso de uso

- Intranet y manuales operativos controlados por rol.
- Portal de cliente con historial de facturas y reservas.
- Microsites de campaña generados desde plantillas Sindri.

## Beneficios esperados

- Disminución del tiempo de publicación de contenidos en un 60–80%.
- Reducción de incidencias de acceso/permiso por unificación de identidad.
- Mayor control sobre datos compartidos con terceros.

## Criterios de aceptación (MVP)

- Inicio de sesión funcional en 3 aplicaciones internas con Ariadna.
- 2 plantillas Sindri publicadas (web informativa y PDF de propuesta).
- Conector operativo con al menos 1 SaaS crítico (ej.: reservas o CRM).

## Métricas y comprobaciones

- Tasa de adopción: % de usuarios activos vía Ariadna tras 30 días.
- Tiempo medio de publicación con Sindri: desde borrador a web/PDF (< 2 h en plantilla estándar).
- Incidencias de acceso resueltas en < 24 h hábiles.
