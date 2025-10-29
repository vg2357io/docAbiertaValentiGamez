# SINDRI — el hilo que conecta tus servicios

**Tagline:** Descripción del proyecto en dos frases.

![Esquema de presentación de Proyecto](/_media/presentacion.png)

> **Nombre del proyecto:** **NOMBRE**. Dos frases de por qué se ha elegido el nombre

## 1) Resumen ejecutivo

## 2) Alcance (MVP → V1)
- **MVP**
  - 1
  - 2

- **V1**
  - 1
  - 2

## 3) Requisitos
**Funcionales**
1. x
2. x

**No funcionales**
- x
- x

## 4) Arquitectura de alto nivel
- **Y:** x
- **Y:** x

## 5) Componentes y versiones sugeridas
- **X:** y
- **X:** y

## 6) Acceso
- **X**: y

## 7) Flujos principales
### 7.1 x1
1. a
2. b

### 7.2 x2
1. a
2. b

## 8) Dominio y contenido web
- **Dominio**: `tudominio.com`
- **Landing Page**: `tudominio.com`
- **Registro**: `tudominio.com`

## 9) Seguridad
- **x**: y  
- **x**: y

## 10) Bases de datos y datos
- **PostgreSQL**: x  
- **Backups**: x
- **Ficheros**: x

## 11) Observabilidad
- **MVP**: logs de contenedores (json-file).  
- **V1**: Netdata

## 12) Despliegue (alto nivel)
1. **Preparar VPS Contabo** (Ubuntu LTS): usuario `deploy`, SSH keys, UFW, fail2ban, Docker.  
2. **Preparar Cloudflare Page**.  
3. **Programar backups** y verificar restauración.

## 13) Roadmap y módulos (nomenclatura temática)
- **Sindra-MVP**: x.  
- **Sindra-V1**: y.

## 14) Pruebas
- **Funcionales**: x.  
- **Seguridad**: y.

## 15) Operación
- **Runbooks**: x.  
- **Mantenimiento**: parches periódicos, limpieza de logs, revisión de *alerts*.  
- **Versionado**: *semver* para plugin y para *infra templates*.

## 16) Costes estimados
- **VPS Contabo** (ej.): 4–8 vCPU, 8–16 GB RAM, 200–400 GB SSD.  
- **Dominios + DNS**: Cloudflare variable (wildcard recomendable).

## 17) Riesgos y mitigación
- **VPS único**: punto único de fallo → snapshots + plan de recuperación en otro VPS.
- **Mantenimiento de componentes**: x.

## 18) Licencia y propiedad
- **Código de plugin y tooling**: MIT.  
- **Infra templates**: repos abiertos con *secrets* externalizados.  
- **Marcas**: “Sindri”.

## 19) Entregables
- Repositorio `sindri`.  
- Manual de despliegue, operación y *runbooks*.  
- Manual de usuario.

## 20) Apéndice A — Componentes/Software compatible
- **Ariadna**
  - Scopes: `botón login`.
- **Blendi**
  - Scopes: `descargar facturas y tickets`.
- **Landing Page**
  - Scopes: `hero header footer features pricing contact`.

## 21) Apéndice B — Variables de entorno (extracto)
```
DOMAIN_BASE=tudominio.com
EMAIL_ACME=ops@tudominio.com
```

## 22) Apéndice C — Esqueleto de `docker-compose.yml` (resumen)
*(Se entregará completo en el repositorio; aquí un esquema de servicios y redes:)*
```
networks:
  web:

services:
  postgreSQL: {...}
```

## 23) Mapa de decisiones (ADR clave)
1. **x** y  
1. **x** y

**Estado:** Listo para desarrollar el documento de diseño.
