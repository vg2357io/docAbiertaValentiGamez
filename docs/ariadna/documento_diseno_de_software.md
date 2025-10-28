# ARIADNA — el hilo que conecta tus servicios

**Tagline:** *Un único login, extensión de navegador con apps de empresa. Un CMS como núcleo, una VPN como perímetro, y SSO para enlazar cada pieza.*

![Arquitectura de proyectos](/_media/arquitectura-proyectos.png)

> **Nombre del proyecto:** **ARIADNA** (Ariadne). En la mitología griega, Ariadna entrega a Teseo el «hilo» que le permite recorrer e interconectar pasajes del laberinto sin perderse. Simboliza **orientación, interconexión y salida segura**.
> 
> **Posible subproyectos:** **ARIADNA** como marca paraguas de *módulos* como "Thread", "Knot" y "Loom".

## 1) Resumen ejecutivo
**Objetivo:** desplegar en un único VPS de **Contabo*** un stack productivo que incluya:  
1) **CMS** (núcleo de datos y cuentas),  
2) **VPN** para acceso administrativo y red privada,  
3) **SSO** (Single Sign-On) para que el **usuario del CMS** acceda a **otros servicios** del VPS con la misma identidad.  

**Resultado:** un entorno reproducible (*Infra-as-Code*) donde el CMS actúa como **fuente de verdad** de usuarios/roles y un **proveedor de identidad (IdP)** orquesta el SSO con OIDC/SAML. Un **plugin del CMS** sincroniza identidades con el IdP y expone UI/acciones de login único.

\* Puede ser cualquier otro proveedor de VPS como Hetzner o Dinahosting 

## 2) Alcance (MVP → V1)
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

## 3) Requisitos
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

## 4) Arquitectura de alto nivel
- **Perímetro:** Traefik (80/443) -> enruta a servicios Docker; certificados automáticos (Let’s Encrypt DNS/HTTP-01).  
- **Red privada:** WireGuard (UDP/51820) para administración segura; subnet wg0 expone puertos internos solo a clientes VPN.  
- **Identidad:** Authentik como **IdP** (OIDC/SAML, grupos/roles, políticas).  
- **Núcleo de datos:** Strapi + PostgreSQL.  
- **Conector Ariadna (plugin CMS):** sincroniza usuarios/roles ⇄ IdP; Web UI en el CMS; *SSO button* y *service catalog*.  
- **Servicios SSO-aware:** Gitea, MinIO, n8n, etc. integrados vía OIDC con Authentik.  
- **Almacenamiento y backups:** volúmenes Docker + restic/rclone (S3/Backblaze/Wasabi).  
- **Monitoring:** cAdvisor + Prometheus + Grafana (MVP: Netdata por simplicidad).

## 5) Componentes y versiones sugeridas
- **SO:** Ubuntu 24.04 LTS.
- **Docker / Compose v2**.  
- **Traefik v3** (ACME + middlewares).  
- **WireGuard** (linuxserver/wireguard).  
- **Authentik** (goauthentik/server) + Redis + PostgreSQL.  
- **Strapi** (strapi/strapi) + PostgreSQL.  
- **Servicios demo:** gitea/gitea, minio/minio, n8nio/n8n, Netdata/Netdata.  
- **Backups:** restic + rclone en contenedor *cron* + wasabi datastorage.

## 6) Modelo de identidades y acceso
- **Fuente de verdad**: CMS (Strapi).  
- **IdP**: Authentik refleja usuarios/roles del CMS.  
- **Protocolos**: OIDC (recomendado) y SAML (opcional).  
- **Atributos estándar**: `sub`, `email`, `name`, `preferred_username`, `roles`, `groups`.  
- **Mapeos de *claims*** por servicio (p.ej., `role=admin` ⇒ admin en Gitea).  
- **SCIM / Sync**:
  - MVP: **Ariadna-Connector** invoca API de Authentik para *provisioning* (crear/actualizar/borrar).  
  - V1: implementar **SCIM 2.0** para *auto-provisioning* bidireccional opcional.

## 7) Flujos principales
### 7.1 Alta de usuario
1. Admin crea usuario/rol en CMS.  
2. Plugin **Ariadna** dispara *webhook* → sincroniza en Authentik.  
3. Usuario recibe invitación de primer acceso (opcional) y configura 2FA en IdP.

### 7.2 Login con SSO a un servicio
1. Usuario entra en el CMS y abre el *Launcher Ariadna* (catálogo de servicios).  
2. Clic en “Abrir *Gitea*” → *redirect* a Authentik (OIDC).  
3. Authentik autentica (cookie/2FA), emite **ID Token + Access Token**.  
4. Servicio (Gitea) valida tokens y crea sesión.

### 7.3 Acceso a administración por VPN
1. Admin se conecta a WireGuard (profile `.conf` generado por el stack).  
2. Accede a puertos internos (DB shells, dashboards no públicos, etc.).

## 8) Diseño del plugin "Ariadna-Connector" (para Strapi)
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

## 9) Infraestructura como código
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

## 10) Red, dominios y TLS
- **DNS**: `cms.tudominio`, `sso.tudominio`, `git.tudominio`, etc.  
- **Traefik**: routers por *Host* + middlewares (`redirectScheme`, `rateLimit`, `headers` CSP/HSTS).  
- **TLS**: certificados ACME (HTTP-01) o DNS-01 si hay *wildcards*.  
- **Puertos expuestos**: 80/443 (HTTP/S) y 51820/UDP (WireGuard).  
- **Puertos internos**: todo lo demás, accesible solo desde la red Docker y/o la VPN.

## 11) Seguridad
- **SSO**: 2FA/TOTP en Authentik; *password policy* fuerte.  
- **Least privilege**: roles/grupos por servicio; *service accounts* dedicadas.  
- **Actualizaciones**: *watchtower* o flujo CI para *rolling updates*.  
- **Backups**: cifrado restic; pruebas mensuales de restauración.  
- **Firewall**: UFW (allow 80,443,51820/udp); fail2ban para SSH.  
- **Secret management**: `.env` en el VPS con permisos 600; opción **HashiCorp Vault** en V1.  
- **Cumplimiento**: registro de accesos, retención de logs, política de contraseñas y baja de usuarios.

## 12) Bases de datos y datos
- **PostgreSQL**: dos instancias separadas (Strapi y Authentik) o *schemas* separados en una instancia con usuarios distintos.  
- **Backups**: `pg_dump` + restic (diario), *snapshots* de volúmenes (semanal) a datastorage configurado.  
- **Migraciones**: Strapi gestiona esquemas; plugin añade tablas mínimas para mapeos si hiciera falta.

## 13) Observabilidad
- **MVP**: logs de contenedores (json-file).  
- **V1**: Netdata
- **V2**: Prometheus + Grafana + Loki + Alertmanager (panel “Ariadna Ops”).

## 14) Despliegue (alto nivel)
1. **Preparar VPS Contabo** (Ubuntu LTS): usuario `deploy`, SSH keys, UFW, fail2ban, Docker.  
2. **Clonar `ariadna`** y rellenar `.env` base (dominios, emails ACME, rutas).  
3. **Levantar Traefik** (`docker compose up -d traefik`).  
4. **Levantar Authentik** y realizar *bootstrap* (crear *Provider OIDC* y *Applications*).  
5. **Levantar Strapi** y activar **Ariadna-Connector**; configurar conexión con Authentik.  
6. **Registrar servicios** (Gitea/MinIO/n8n/Blendi/weLore) como *Applications* OIDC en Authentik; pegar *client_id/secret* en el conector.  
7. **Configurar WireGuard**: generar *peers* y enviar `.conf` a administradores.  
8. **Probar SSO end-to-end** y 2FA.  
9. **Programar backups** y verificar restauración.

## 15) Roadmap y módulos (nomenclatura temática)
- **Ariadna-Thread**: plugin conector para cada CMS (Strapi, Directus, WordPress).  
- **Ariadna-Knot**: *policy engine* (mapeos de roles/claims por servicio).  
- **Ariadna-Loom**: panel *Launcher* (Los puntitos de Google para apps de la empresa) y catálogo de servicios con *deep-links* y *health*.  
- **Ariadna-Guide**: *CLI* para *bootstrap* del VPS (Ansible/Compose).  
- **Ariadna-Vault**: gestión de secretos (V1+).  
- **Ariadna-Scales**: auditoría y *compliance* (logs centralizados + reportes).

## 16) Pruebas
- **Unitarias** (plugin): mapeo de roles, llamadas a API Authentik, manejo de errores.  
- **Integración**: flujo OIDC end-to-end con servicios demo.  
- **E2E**: creación usuario ➜ login SSO ➜ revocación ➜ acceso denegado.  
- **Seguridad**: escaneo CVEs de imágenes, pruebas de fuerza bruta (rate limit), verificación 2FA.

## 17) Operación
- **Runbooks**: alta/baja usuarios, rotación de credenciales, restauración de backups, renovación de certificados, añadir nuevo servicio OIDC.  
- **Mantenimiento**: parches mensuales, limpieza de logs, revisión de *alerts*.  
- **Versionado**: *semver* para plugin y para *infra templates*.

## 18) Costes estimados
- **VPS Contabo** (ej.): 4–8 vCPU, 8–16 GB RAM, 200–400 GB SSD.  
- **Dominios + DNS**: Cloudflare variable (wildcard recomendable).  
- **Almacenamiento backups**: S3 compatible (Wasabi/Backblaze) con restic.

## 19) Riesgos y mitigación
- **IdP caído**: servicios no autentican → alta disponibilidad futura / *grace logins*.  
- **VPS único**: punto único de fallo → snapshots + plan de recuperación en otro VPS.  
- **Desfase de identidades**: reconciliación programada + SCIM en V1.  
- **Exposición de paneles**: Traefik middlewares + *basic auth* + limitar por VPN.

## 20) Licencia y propiedad
- **Código de plugin y tooling**: MIT.  
- **Infra templates**: repos abiertos con *secrets* externalizados.  
- **Marcas**: “Ariadna” y módulos como marcas de producto (si procede).

## 21) Entregables
- Repositorio `ariadna` (Compose + Ansible + docs).  
- Repositorio `ariadna-connector-strapi` (plugin).  
- Manual de despliegue, operación y *runbooks*.  
- Diagramas (alto nivel + secuencia OIDC + topología WireGuard).

## 22) Apéndice A — Especificaciones OIDC por servicio (ejemplos)
- **Gitea**  
  - Scopes: `openid email profile groups`.  
  - *Claim mapping*: `roles=admin` ⇒ `GITEA_ADMIN=true`.  
- **MinIO**  
  - Scopes: `openid email`.  
  - *Policy*: acceso a buckets por grupo.  
- **n8n**  
  - Scopes: `openid email profile`.  
  - *Auto-provision*: crear usuario si no existe.

## 23) Apéndice B — Variables de entorno (extracto)
```
DOMAIN_BASE=tudominio.com
EMAIL_ACME=ops@tudominio.com
# Traefik
TRAEFIK_ACME_STAGING=false
# Authentik
AUTHENTIK_DOMAIN=sso.${DOMAIN_BASE}
AUTHENTIK_ADMIN_EMAIL=admin@${DOMAIN_BASE}
# Strapi
STRAPI_DOMAIN=cms.${DOMAIN_BASE}
STRAPI_ADMIN_EMAIL=admin@${DOMAIN_BASE}
# WireGuard
WG_PUBLIC_ENDPOINT=wg.${DOMAIN_BASE}:51820
WG_ALLOWED_IPS=10.8.0.0/24
```

## 24) Apéndice C — Esqueleto de `docker-compose.yml` (resumen)
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

## 25) Mapa de decisiones (ADR clave)
1. **IdP = Authentik** por simplicidad/ligereza vs Keycloak (más complejo).  
2. **Reverse = Traefik** por *dynamic conf* y ACME integrado.  
3. **CMS inicial = Strapi** por foco en datos y facilidad de extensión.  
4. **VPN = WireGuard** por rendimiento y simplicidad de clientes.

**Estado:** Listo para pasar a *blueprint técnico* y crear el repositorio inicial.
