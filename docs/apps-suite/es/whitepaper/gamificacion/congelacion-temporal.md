# Congelación temporal

## Objetivo

Establecer un mecanismo de «congelación» para pausar cambios o despliegues cuando se detectan riesgos (picos de tráfico, incidentes, campañas críticas).

## Cuándo activar

- Incidentes de seguridad en curso.
- Cambios de infraestructura de alto impacto.
- Eventos de negocio que requieren estabilidad máxima.

## Qué implica

- Bloqueo temporal de merges a ramas protegidas salvo hotfixes.
- Bloqueo temporal de transferencias/obtención de moneda y logros.
- Ventana de cambios definida (inicio/fin) y responsables designados.
- Comunicación clara a equipos y actualización del estado público.

## Excepciones

- Hotfixes críticos con revisión de 2 personas y tests mínimos.

## Retorno a la normalidad

- Checklist de verificación post‑congelación.
- Post‑mortem si la congelación fue por incidente.
