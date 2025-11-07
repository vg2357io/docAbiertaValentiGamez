# Resumen ejecutivo

**Objetivo:** desplegar en un único VPS de **Contabo*** un stack productivo que incluya:
1) **CMS** (núcleo de datos y cuentas),
2) **VPN** para acceso administrativo y red privada,
3) **SSO** (Single Sign-On) para que el **usuario del CMS** acceda a **otros servicios** del VPS con la misma identidad.

**Resultado:** un entorno reproducible (*Infra-as-Code*) donde el CMS actúa como **fuente de verdad** de usuarios/roles y un **proveedor de identidad (IdP)** orquesta el SSO con OIDC/SAML. Un **plugin del CMS** sincroniza identidades con el IdP y expone UI/acciones de login único.

\* Puede ser cualquier otro proveedor de VPS como Hetzner o Dinahosting
