# Guía para el *Fork* de `vg2357io/2357` y Despliegue de Documentación en Cloudflare Pages

El objetivo de esta guía es **tomar el código base** del repositorio público `vg2357io/2357`, adaptarlo para su documentación, y desplegarlo instantáneamente en un dominio propio con Cloudflare.

## Paso 1: Realizar el *Fork* del Repositorio en GitHub

El primer paso es crear una copia personal del repositorio original en su propia cuenta de GitHub, lo que se conoce como *fork*.

1.  **Localizar el Repositorio:** El proyecto de referencia es `vg2357io/2357`, un proyecto web. Es un repositorio público.
2.  **Acceder a la Función de Fork:** Para copiar el repositorio, debe buscar la acción **Fork** dentro de la interfaz de GitHub.
3.  **Realizar el Fork:** Haga clic en el botón "Fork" para crear una copia del código base bajo su propia cuenta de usuario.
    *   El repositorio contiene archivos como `index.html`, `README.md`, `package.json`, y `wrangler.jsonc`.
    *   El código está compuesto 100.0% de HTML.

Este repositorio es conocido como **2357 — El Código de lo Oculto**, y es la biblioteca pública de los Fénix humanos. Los contenidos están sujetos a la legalidad española.

## Paso 2: Configuración de la Documentación (Docsify)

Una vez que tenga su *fork*, necesita configurar el entorno para generar la documentación. Docsify es un generador de documentación que utiliza archivos Markdown y se ejecuta en tiempo de ejecución.

1.  **Modificar Contenido:** Dado que el proyecto original es un proyecto web con `index.html`, deberá asegurarse de que su nuevo archivo principal sirva la documentación de Docsify.
2.  **Crear Contenido:** La documentación se crearía utilizando archivos Markdown, aprovechando el marco de **constancia, orden y disciplina** y el objetivo de crecimiento personal que persigue el proyecto original.
3.  **Archivos Clave:** Asegúrese de que su repositorio forkeado contenga los archivos necesarios de Docsify y el contenido Markdown.

## Paso 3: Despliegue y Publicación a través de Cloudflare Pages

Cloudflare Pages permite desplegar aplicaciones de *full-stack* de forma instantánea en su red global. El método más directo para publicar su *fork* es mediante la **Integración Git**.

### 3.1 Conexión del Repositorio

1.  **Acceder a Cloudflare Pages:** Inicie sesión en su cuenta de Cloudflare y diríjase a la sección **Pages**.
2.  **Seleccionar el Método de Despliegue:** Para su *fork* de GitHub, elija el método de **Integración Git**. Cloudflare Pages puede conectarse a su proveedor Git, incluyendo la **integración de GitHub**.
3.  **Seleccionar el Repositorio:** Elija el repositorio que acaba de *forkear* (su copia de `vg2357io/2357`) de la lista de repositorios de GitHub disponibles.

### 3.2 Configuración del *Build*

Cloudflare Pages le pedirá la configuración para compilar su proyecto.

1.  **Configuración del Build:** Deja el comando de construcción en blanco, el comando de deploy con este texto "echo deploy", non production branch deploy command con este texto "npx wrangler versions upload" y el directorio de salida como "/".

2.  **Despliegue Inicial:** Una vez configurado, Cloudflare Pages realizará el primer despliegue. Cloudflare Pages utiliza la red global de Cloudflare para el despliegue instantáneo.

### 3.3 Actualizaciones

Con esta configuración cada vez que hagas un pull request de una rama en github se va a hacer una build. Cuando integres la pull request en master debes ir a Cloudflare Pages y hacer un deploy manual: en el apartado deployments -> Version History -> Deploy Version. Selecciona el build del pull request y haz click en Deploy.
