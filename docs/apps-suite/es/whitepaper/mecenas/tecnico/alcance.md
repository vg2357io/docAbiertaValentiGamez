# Alcance (MVP → V1.md)

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
