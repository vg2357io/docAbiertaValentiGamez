# Documento de Diseño de Producto — **SINDRI**

**Sindri:** Editor avanzado que convierte documentos de texto en **webs**, **PDFs**, **apps** y **presentaciones**, integrándose con **Ariadna** y extendiendo **Godot** mediante nodos configurables y themes personalizados.

> **Concepto:** Sindri es un editor híbrido (Godot + Tailwindcss + SindriTheme) empaquetado en un fork del Core de Godot. Su propósito es transformar una seria de simples documento de texto en artefactos multiplataforma, siguiendo una estructura yaml. Cada proyecto se enmarca en una carpeta con un entorno autónomo ejecutable con un exe o mediante página web, ampliado mediante módulos configurables escritos en YAML.

---

## 1. Resumen ejecutivo

**Objetivo:** proporcionar un entorno unificado para crear documentos que se convierten en múltiples formatos (HTML/Docsify, PDF, app móvil, presentación). El usuario configura en Sindri cargando un directorio con ficheros legibles; Sindri gestiona conversión, metadatos, módulos Ariadna y vista previa en tiempo real.

**Resultado:** un flujo de trabajo tipo "Headless CMS local en una web propia": edición, metadatos, módulos, vista previa web, construcción y exportación.

---

## 2. Alcance (MVP → V1)

### **MVP**

* Extensión de core de Godot 4.5 con editor en plataforma web.
* Creación de nodo base NodeWeb y sus nodos heredados de tailwindcss.
* Carga de ficheros de proyecto Godot desde Windows/Mac.



# Documentación TODO



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
* Seguridad local: metadatos en cabeceras del md. Convertibles al cargar fichero a electron.

---

## 4. Arquitectura de alto nivel

* **Electron** como runtime (main process + renderer).
* **Editor**: Quill.js con extensiones personalizadas.
* **Conversión**: (HTML → MD) y Quill Delta → HTML.
* **Motor Docsify**: plantilla base + plugins Sindri.
* **Módulos Ariadna**:
    * Definidos por bloques YAML en el `.md`.
    * Mapean a templates personalizados. Todos los templates deben ser compatibles con los themes generados.
* **Previsualización**: WebView/BrowserView sirviendo la carpeta `.sindri/`.
* **Gestión de archivos**: lectura/escritura desde path usuario.

---

## 5. Componentes y versiones sugeridas

* **Electron** 31+
* **Quill.js** 2.x
* **Docsify** 4.x (standalone)
* **Marked** o **markdown-it** para parse local
* **YAML** parser: js-yaml
* **Exportación PDF**: Chromium headless vía Electron

---

## 6. Modelo de datos

### Documento principal

* `content.md` → generado desde el HTML del editor.
* Inserciones YAML marcadas por `yaml ... `.

### Metadatos

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
  README.md <- generado desde notepad en electron
  /_media
  /logs
```

---

## 7. Flujos principales

Considerar hacer el guardado automático tras 2 segundos de inactividad del editor.

### 7.1 Crear o cargar documento

1. Usuario abre Sindri.
2. Nuevo documento vacío o cargar documento en Quill.
3. Al guardar, se genera:
    * `README.md` en `.sindri`
    * carpeta `.sindri` con template extendido Docsify.
4. Vista previa actualizada al guardar.

### 7.2 Cargar documento existente

1. Abrir `.md` o `.txt` en el explorador al hacer click en `Abrir` en el menú.
2. Convertir a HTML y cargar en Quill.

### 7.3 Añadir módulo Ariadna

1. Usuario inserta bloque YAML desde la línea con foco en el editor. Habrá un botón `+` a la izquierda de la línea con el foco.
2. El botón `+` abre un popup con los módulos disponibles.
3. La aplicación electron interpreta la estructura YAML del módulo para poner un formulario para el usuario.
4. Al guardar la previsualización en HTML muestra el bloque cómo se ve finalmente.

### 7.4 Exportar

* **PDF:** render headless. Se debe poder editar desde Canva o Adobe Express.
* **Presentación:** transformar MD en slides png, jpg o pdf. El pdf se debe poder editar desde Canva o Adobe Express.
* **Web generada con vue:**
  * En página web desde ubicaciones disponibles para el usuario con el rol que tiene en Ariadna.
  * En local con un fichero html, un css y un js.
* **App/PWA:** empaquetado V1.

---

## 8. Integración con Ariadna

* Módulos definibles como:

````md
```yaml ariadna:presentation:hero
text: "Bienvenidx a mi marca"
cta: "Empezar"
img: "https://imgs.eleuterios.org/150.png"
```
````

* Sindri interpreta el bloque, lo valida y lo inserta en el template extendido de Docsify mediante un plugin.

---

## 9. Interfaz de usuario

### Zonas

* **Izquierda 2/12w:** panel de metadatos.
* **Izquierda Superior 5/12w 2/3h:** editor Quill.
* **Izquierda Inferior 5/12w 1/3h:** inspector de módulos y configuraciones de Ariadna.
* **Derecha 5/12w:** previsualización Docsify.

---

## 10. Seguridad

* Archivos `.sindri` aislados por proyecto.
* Configuración crítica de usuario del notepad encriptada en `%APPDATA%/`, no mezclados con contenido.
* Validación estricta de YAML.
* Roles sincronizados con Ariadna cuando proceda. En el proceso de exportación se pasará por ariadna para publicar.

---

## 11. Observabilidad

* Logs locales en `~/.sindri/logs`.
* Informe de exportaciones o previsualizaciones fallidas.

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
* Temas
* Snippets reutilizables

---

## 13. Pruebas

* Conversión reversible HTML↔MD.
* Renderizado de módulos YAML.
* Carga de archivos grandes.
* Validación de metadatos.
* Exportación Web, pdf, png y jpg.

---

## 14. Operación

* Actualización vía auto-updater.
* Revisión periódica de compatibilidad con Quill y extensión de Docsify.
* Limpieza automática de proyectos obsoletos.

---

## 15. Mapa de decisiones (ADR)

1. **Docsify** elegido por su naturaleza client-side y simplicidad.
2. **Markdown como formato principal** por su universalidad.
3. **YAML para módulos** para configuración clara y extensible.
4. **Electron** para portabilidad sin backend. Para compatibilidad futura para una versión cloud.

---

## 16. Templates con Ariadna

* [UI con Shadcn](https://ui.shadcn.com/)
* [UI Vue con Shadcn](https://www.shadcn-vue.com/)
* [Componentes visuales](https://21st.dev/community/components)

---

## 17. Licencia y propiedad

* Código fuente bajo **MIT**.
