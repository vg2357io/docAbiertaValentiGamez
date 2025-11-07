# Protocolos de seguridad

## Objetivo

Definir controles mínimos y repetibles que reduzcan superficie de ataque sin frenar la entrega.

## Controles base (MVP)

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

## Respuesta ante incidentes

- Canal único de reporte y severidades definidas.
- Playbook de contención y recuperación.
- Post‑mortem público cuando proceda.

## Verificación

- Checklist de seguridad por release.
- Auditoría ligera semestral (interna o por tercero).
