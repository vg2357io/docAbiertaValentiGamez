# Crear un bloque Sindri con TailwindCSS

Crear nuevos plugins Sindri para Docsify en `src\assets\docsify\plugins\sindri` que transformen bloques de código Markdown del tipo `sindri:marketing:hero` en HTML con clases TailwindCSS. Además, verificar su funcionamiento integrándolos en `src\README.md` y ejecutando el proceso de build/serve.

Repositorio Sindri Preview: https://github.com/EleuteriSuite/eleuterios-sindri-preview

---

## Cómo funciona el flujo de Sindri (resumen práctico)

- En los Markdown se escribe un bloque de código con lenguaje `sindri:<category>:<block>` y contenido YAML.
- El core de Sindri (expuesto como `window.SindriCore`) reemplaza esos bloques usando una función de mapeo: `replaceSindriBlocks(md, { 'category:block': renderFn })`.
- Tu plugin aporta la `renderFn(cfg)` que recibe el YAML parseado como objeto `cfg` y devuelve un string HTML con clases Tailwind.

No hace falta conocer Docsify: sólo necesitas crear un archivo JS que registre el renderizador y devuelva el HTML deseado.

---

## Paso a paso del ejemplo `renderHero` (archivo `marketing-hero.js`)

El archivo `src\assets\docsify\plugins\sindri\marketing-hero.js` define el bloque `sindri:marketing:hero`. Su flujo:

1) IIFE y dependencias
- Se define dentro de una IIFE para exponer el plugin en el global y evitar módulos.
- Usa `window.SindriCore` (helpers como `attrsToString`, `stylesArrayToInline` y `replaceSindriBlocks`).
- Usa `window.__SindriUtilsUi.renderButton` para generar el botón de acción, si lo hay.

2) Definición de clases Tailwind por sección
- Variables con clases Tailwind por partes:
    - `heroClassSection`, `heroClassContainer`, `heroClassSubContainer` (layout general).
    - `heroClassTitle`, `heroClassSubTitle`.
    - `heroClassAction` (el contenedor de acciones).
- Esto centraliza el diseño y te permite ajustar estilos sin tocar la lógica.

3) Estilos inline y atributos HTML seguros
- Si `cfg.htmltag.styles` existe (array de objetos clave-valor), `stylesArrayToInline` lo convierte en un string CSS inline.
- Se construyen objetos de atributos por bloque (section, container, subcontainer) con `class`, `style` y `data-slot`.
- `attrsToString` serializa estos atributos a un string HTML seguro.

4) Detección de contenido presente en el YAML
- `hasTitle`, `hasSubTitle`, `hasAction` comprueban si `cfg` trae `title.description`, `subtitle.description`, `action.description`.

5) Renderizado condicional de subpartes
- Título: si existe, se genera `h1` con clases base y `cfg.title.class` opcional.
- Subtítulo: si existe, se genera `p` con clases base y `cfg.subtitle.class` opcional.
- Acción (botón o enlace): si existe, delega a `__SindriUtilsUi.renderButton(cfg.action)`, que devuelve el HTML del botón con sus clases.

6) Ensamblado final y wrapper
- Une todas las partes en un `section` con dos `div` anidados (contenedor y subcontenedor), aplicando sus atributos serializados.
- Envuelve todo en `<div class="sindri-marketing sindri-marketing-hero">...</div>` para facilitar el escoping/estilado.

7) Registro del plugin
- Función `install(hook)` que en `hook.beforeEach` llama a `C.replaceSindriBlocks(md, { 'marketing:hero': renderHero })`.
- Se registra en `window.$docsify.plugins` para que se ejecute al cargar Docsify.

Con esto, un bloque YAML `sindri:marketing:hero` del Markdown se convierte en el HTML de tu hero con Tailwind.

---

## Ejemplo práctico del bloque en `src\README.md`

Ya existe un ejemplo mínimo de uso:

```sindri:marketing:hero
title:
  description: "Ecosistema digital Open Source"
subtitle:
  description: "Tu página web, tienda virtual, correos electrónicos, newsletter, etc por 15€/mes o 150€/año"
action:
  description: "Ser mecenas"
  variant: "primary"
  size: "lg"
  as: "a"
  href: "#mecenas"
htmltag:
  class: "testclass"
```

Campos relevantes:
- `title.description` y `subtitle.description`: texto del hero.
- `action`: se pasa tal cual a `renderButton` (soporta `variant`, `size`, `as`, `href`, `htmltag.*`, etc.).
- `htmltag.class` y `htmltag.styles`: clases y estilos extra para los wrappers.

---

## Cómo crear TU propio plugin Sindri basado en TailwindCSS

Sigue el mismo patrón que `marketing-hero.js` pero cambiando las clases y la estructura HTML.

1) Crea un archivo en `src\assets\docsify\plugins\sindri`, por ejemplo `marketing-feature.js`:

```js
// Sindri Docsify plugin: marketing:feature
// Depende de window.SindriCore (core.js) y opcionalmente de window.__SindriUtilsUi
(function () {
  function renderFeature(cfg) {
    const C = window.SindriCore || {};

    // 1) Clases Tailwind base
    const sectionCls = 'py-16 bg-background';
    const containerCls = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';
    const gridCls = 'grid grid-cols-1 gap-8 md:grid-cols-3';
    const itemCls = 'rounded-xl border p-6 shadow-sm bg-card text-card-foreground';
    const titleCls = 'text-lg font-semibold';
    const descCls = 'mt-2 text-sm text-muted-foreground';

    // 2) Estilos inline opcionales
    const stylesInline = C.stylesArrayToInline ? C.stylesArrayToInline(cfg?.htmltag?.styles || []) : '';

    // 3) Atributos serializados
    const sectionAttr = C.attrsToString ? C.attrsToString({ class: sectionCls, style: stylesInline || undefined, 'data-slot': 'feature' }) : '';
    const containerAttr = C.attrsToString ? C.attrsToString({ class: containerCls, 'data-slot': 'feature-container' }) : '';
    const gridAttr = C.attrsToString ? C.attrsToString({ class: gridCls, 'data-slot': 'feature-grid' }) : '';

    // 4) Items desde cfg.items (array de { title, description, class?, htmltag? })
    const items = Array.isArray(cfg?.items) ? cfg.items : [];
    const itemsHtml = items.map((it) => {
      const itemAttr = C.attrsToString ? C.attrsToString({ class: [itemCls, it?.htmltag?.class].filter(Boolean).join(' ') }) : '';
      const t = it?.title ? `<h3 class="${titleCls}">${it.title}</h3>` : '';
      const d = it?.description ? `<p class="${descCls}">${it.description}</p>` : '';
      return `<div ${itemAttr}>${t}${d}</div>`;
    }).join('');

    // 5) Ensamblado final
    const html = `<section ${sectionAttr}><div ${containerAttr}><div ${gridAttr}>${itemsHtml}</div></div></section>`;
    return `<div class="sindri-marketing sindri-marketing-feature">${html}</div>`;
  }

  function install(hook) {
    hook.beforeEach(function (md) {
      const C = window.SindriCore;
      if (!C || !C.replaceSindriBlocks) return md;
      return C.replaceSindriBlocks(md, {
        'marketing:feature': renderFeature,
      });
    });
  }

  window.$docsify = window.$docsify || {};
  $docsify.plugins = [install, ...($docsify.plugins || [])];
})();
```

2) Registra el bloque en el índice (`src/assets/docsify/plugins/sindri/index.js`):
```js
import './marketing-feature.js';
```

3) Usa el bloque en el Markdown (`src\README.md`):

```sindri:marketing:feature
items:
  - title: "Sin comisión"
    description: "Sin tarifas ocultas ni sorpresas."
  - title: "Rápido de implementar"
    description: "Plantillas listas y componentes reutilizables."
  - title: "Escalable"
    description: "Añade más bloques y páginas según creces."
htmltag:
  styles:
    - background: "linear-gradient(180deg, #fff, #f8fafc)"
```

4) Opcional: reutiliza utilidades comunes
- Si necesitas botones, tarjetas, etc., puedes invocar `window.__SindriUtilsUi.renderButton(cfg)` o `renderCard(cfg)` del archivo `utils-ui.js`.
- Para botones simples, también existe el plugin `ui:button` que mapea `sindri:ui:button` directamente a `renderButton`.

---

## Buenas prácticas al crear bloques con TailwindCSS

- Separa clases por sección en constantes (`section`, `container`, `grid`, etc.).
- Soporta `htmltag.class` para permitir que el usuario añada clases extra en el YAML.
- Soporta `htmltag.styles` para estilos inline adicionales (pasando por `stylesArrayToInline`).
- Añade `data-slot` en nodos clave; facilita pruebas y sobreescrituras.
- Usa `attrsToString` para serializar atributos y evitar inyecciones accidentales.
- Renderiza de forma condicional: sólo imprime elementos si `cfg` los trae.
- Envuelve tu salida en un contenedor con clases identificables (por ejemplo `sindri-marketing-<bloque>`).

---

## Cómo verificar que el bloque funciona

1) Edita `src\README.md` e inserta tu nuevo bloque `sindri:<namespace>:<bloque>` con YAML (como en los ejemplos anteriores).
2) Ejecuta el build para Windows:
    - `npm run build:sindri:win`
3) Lanza el servidor local:
    - `npm run serve`
4) Abre la URL que imprime `http-server` (normalmente `http://127.0.0.1:8080`) y comprueba el renderizado.

Si no ves cambios, revisa:
- Que tu archivo plugin esté en `src\assets\docsify\plugins\sindri` y no tenga errores de sintaxis.
- Que el nombre del bloque en `replaceSindriBlocks` coincida con el lenguaje del bloque de código en el Markdown.
- Que las dependencias globales existan: `window.SindriCore` y, si usas utilidades, `window.__SindriUtilsUi`.

---

## Replicar el patrón de `renderHero` con otros bloques

- Identifica la estructura del componente Tailwind que quieres (por ejemplo: banner, grid de features, testimonios, pricing).
- Crea tus constantes de clases Tailwind por capa (section/container/subcontainer/elementos).
- Soporta contenido dinámico en `cfg` (texto, listas, botones) y renderízalo condicionalmente.
- Serializa atributos con `attrsToString` y soporta `htmltag.class` y `htmltag.styles`.
- Registra el bloque en `install(hook)` con su clave (`'marketing:testimonials'`, `'marketing:pricing'`, etc.).
- Prueba con un bloque YAML en `src\README.md`, ejecuta `npm run build:sindri:win` y `npm run serve`.

Con este esquema podrás crear cualquier bloque Tailwind y usarlo en tus Markdown con la sintaxis `sindri:<namespace>:<bloque>`.