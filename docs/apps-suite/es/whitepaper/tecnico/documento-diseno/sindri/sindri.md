# Documento de Diseño de Producto — **SINDRI**

Documento no revisado

**Sindri:** Bloc de notas avanzado que convierte documentos de texto en **webs**, **PDFs**, **apps** y **presentaciones**, integrándose con **Ariadna** y extendiendo **Docsify** mediante módulos empresariales configurables.

> **Concepto:** Sindri es un editor híbrido (Quill + Markdown) empaquetado en Electron. Su propósito es transformar un simple documento de texto en artefactos multiplataforma. Cada proyecto genera una carpeta `.sindri` con un entorno Docsify autónomo, ampliado mediante módulos configurables escritos en YAML.

---

## 1. Resumen ejecutivo

**Objetivo:** proporcionar un entorno unificado para crear documentos que se convierten en múltiples formatos (HTML/Docsify, PDF, app móvil, presentación). El usuario escribe en Quill o carga archivos `.txt`/`.md`; Sindri gestiona conversión, metadatos, módulos Ariadna y vista previa en tiempo real.

**Resultado:** un flujo de trabajo tipo "Headless CMS local": edición, metadatos, módulos, vista previa web, construcción y exportación.

---

## 2. Alcance (MVP → V1)

### **MVP**

* Aplicación Electron con editor Quill.
* Conversión **Quill → HTML → Markdown** y viceversa.
* Carga de ficheros `.md` y `.txt` desde Windows/Mac.
* Creación automática de la carpeta **`.sindri/`** con estructura **Docsify**.
* Previsualizador web mediante WebView apuntando al Docsify generado.
* Sistema de **metadatos**: título, slug, descripción, autor, SEO, rol necesario.
* Soporte base de **módulos Ariadna**: cada módulo se configura mediante bloques YAML dentro del `.md`.
* Exportación a **web estática** (Docsify) y **PDF**.

### **V1**

* Exportación a **APK/Webview** (app básica), **PWA**, y **presentación HTML** (reveal.js-like).
* Módulos avanzados Ariadna: login/registro, formularios, hero blocks.
* Editor de metadatos más extenso: OG tags, sitemap local.
* Validación automática de módulos
* Previsualización segmentada según rol.

---

## 3. Requisitos

### Funcionales

1. Editar texto en Quill con formato enriquecido.
2. Convertir entre HTML y Markdown sin pérdida significativa.
3. Crear entorno Docsify standalone en `.sindri/`.
4. Renderizar módulos Ariadna desde bloques YAML dentro del `.md`.
5. Cargar archivos externos (`.md`, `.txt`) y mantener sincronización con editor.
6. Panel lateral de metadatos con validación.
7. Previsualización en tiempo real.

### No funcionales

* Rendimiento alto incluso en archivos grandes.
* Conversión robusta y reversible entre HTML y Markdown.
* Estructura portable: el proyecto `.sindri/` debe funcionar en cualquier sistema.
* Extensibilidad: nuevos módulos Ariadna y nuevos exportadores.
* Seguridad local: metadatos privados separados del md principal.

---

## 4. Arquitectura de alto nivel

* **Electron** como runtime (main process + renderer).
* **Editor**: Quill.js con extensiones personalizadas.
* **Conversión**: turndown.js (HTML → MD) y Quill Delta → HTML.
* **Motor Docsify**: plantilla base + plugins Sindri.
* **Módulos Ariadna**:

    * Definidos por bloques YAML en el `.md`.
    * Mapean a componentes Docsify personalizados.
* **Previsualización**: WebView/BrowserView sirviendo la carpeta `.sindri/`.
* **Gestión de archivos**: lectura/escritura desde path usuario.
* **Metadatos**: guardados en `.sindri/meta.json`.

---

## 5. Componentes y versiones sugeridas

* **Electron** 31+
* **Quill.js** 2.x
* **Turndown** 7+
* **Docsify** 4.x (standalone)
* **Marked** o **markdown-it** para parse local
* **YAML** parser: js-yaml
* **Exportación PDF**: Chromium headless vía Electron

---

## 6. Modelo de datos

### Documento principal

* `content.md` → generado desde el HTML del editor.
* Inserciones YAML marcadas por `yaml ... `.

### Metadatos (`meta.json`)

```
{
  "title": "",
  "slug": "",
  "description": "",
  "author": "",
  "seo": {"keywords": [], "og_image": ""},
  "access": {"requiredRole": null}
}
```

### Estructura `.sindri`

```
.sindri/
  index.html
  README.md
  /assets
  /modules
  meta.json
  sidebar.md
```

---

## 7. Flujos principales

### 7.1 Crear nuevo documento

1. Usuario abre Sindri.
2. Nuevo documento vacío en Quill.
3. Al guardar, se genera:

    * `documento.md`
    * carpeta `.sindri` con estructura Docsify.
4. Vista previa activa.

### 7.2 Cargar documento existente

1. Abrir `.md` o `.txt`.
2. Convertir a HTML y cargar en Quill.
3. Regenerar `.sindri` si no existe.

### 7.3 Añadir módulo Ariadna

1. Usuario inserta bloque YAML desde menú.
2. Docsify + plugin Sindri renderiza módulo en preview.

### 7.4 Exportar

* **Web:** carpeta `.sindri` lista.
* **PDF:** render headless.
* **App/PWA:** empaquetado V1.
* **Presentación:** transformar MD en slides.

---

## 8. Integración con Ariadna

* Módulos definibles como:

````md
```yaml module:hero
text: "Bienvenido"
cta: "Empezar"
```
````

* Sindri interpreta el bloque, lo valida y lo inserta en Docsify mediante un plugin.
* Roles de acceso del módulo y de la página validados por los metadatos del documento.

---

## 9. Interfaz de usuario

### Zonas

* **Izquierda:** panel de metadatos.
* **Centro:** editor Quill.
* **Derecha:** previsualización Docsify.
* **Inferior:** inspector de módulos YAML (opcional).

---

## 10. Seguridad

* Archivos `.sindri` aislados por proyecto.
* Metadatos críticos en `meta.json`, no mezclados con contenido.
* Validación estricta de YAML.
* Roles sincronizados con Ariadna cuando proceda.

---

## 11. Observabilidad

* Logs locales en `~/.sindri/logs`.
* Informe de conversiones fallidas.

---

## 12. Roadmap y módulos

### Módulos base

* Hero
* Newsletter
* Login/Registro
* Formulario
* Tabla dinámica

### Roadmap

* Exportación app
* Presentaciones
* Plantillas temáticas
* Snippets reutilizables

---

## 13. Pruebas

* Conversión reversible HTML↔MD.
* Renderizado de módulos YAML.
* Carga de archivos grandes.
* Validación de metadatos.
* Exportación PDF.

---

## 14. Operación

* Actualización vía auto-updater.
* Revisión periódica de compatibilidad con Quill y Docsify.
* Limpieza automática de proyectos obsoletos.

---

## 15. Mapa de decisiones (ADR)

1. **Docsify** elegido por su naturaleza client-side y simplicidad.
2. **Markdown como formato principal** por su universalidad.
3. **YAML para módulos** para configuración clara y extensible.
4. **Electron** para portabilidad sin backend.

---

## 16. Licencia y propiedad

* Código fuente bajo **MIT**.
* Proyectos generados (usuari
