# 📜 Guía Básica: Git Local, Bitbucket y Flujo de Trabajo JIRA

-----

## 1\. ⚙️ Inicialización del Repositorio

### 1\.1\. ⚙️ Clonar el Repositorio de Bitbucket

* **Clonar el Repositorio:** Si el proyecto ya existe en Bitbucket, clonalo directamente, lo cual inicializa Git y conecta el remoto automáticamente:

  ```bash
  git clone <URL_DEL_REPOSITORIO>
  cd <nombre_del_proyecto>
  ```

-----

### 1\.2\. ⚙️ Para administradores

Asumiremos que ya tienes la carpeta de tu proyecto.

* **Inicializar Git:** Abre la terminal o Git Bash en la carpeta de tu proyecto y ejecuta:

  ```bash
  git init
  ```

* **Conectar con Bitbucket:** Necesitas añadir la URL remota de tu repositorio en Bitbucket. Reemplaza `<URL_DEL_REPOSITORIO>` con la URL SSH o HTTPS que te proporciona Bitbucket.

  ```bash
  git remote add origin <URL_DEL_REPOSITORIO>
  ```

* **Primer commit:** Necesitas crear el commit inicial y subirlo al repositorio remoto.

  ```bash
  git add -A
  git commit -m "HOL-22 Initial commit."
  git push origin master
  ```

## 2\. 🌱 Creación de la Rama de Trabajo (JIRA Standard)

El flujo de trabajo requiere que crees una rama para tu tarea específica de JIRA, por ejemplo, **HOL-23**. Siempre es una buena práctica asegurarte de que tu rama principal (`main` o `master`) esté actualizada antes de crear una nueva.

* **Actualizar la rama principal (opcional, pero recomendado):**

  ```bash
  git checkout master  # O main, dependiendo del nombre de la rama principal
  git pull origin master
  ```

* **Crear y cambiar a tu nueva rama:**

  ```bash
  git checkout -b HOL-23
  ```

  (Esto crea la rama `HOL-23` y te sitúa inmediatamente en ella).

-----

## 3\. 💾 Realizar Cambios y Commits

Ahora puedes empezar a modificar archivos. Una vez que has completado una parte lógica de tu tarea, debes hacer un *commit*.

* **Añadir los archivos modificados para el *staging*:**

  ```bash
  git add -A # Para añadir todos los archivos modificados
  # O bien: git add archivo1.js archivo2.css # Para añadir archivos específicos
  ```

* **Crear el *commit* (Crucial: Incluir el identificador JIRA):**
  El mensaje de tu commit **debe** comenzar con el identificador de la rama.

  ```bash
  git commit -m "HOL-23 Título descriptivo de los cambios realizados"
  ```

  > 💡 **Ejemplo de buen commit:** `git commit -m "HOL-23 Implementado el validador de formulario en el checkout."`

### 🪄 Truco para Modificar el Último Commit

1.  **Asegúrate de no haber hecho `push`:** Este comando solo debe usarse si el *commit* erróneo aún no ha sido subido al repositorio remoto de Bitbucket. Si ya lo subiste, la situación es más compleja (ver la nota abajo).

2.  **Ejecuta el comando:**

    ```bash
    git commit --amend -m "HOL-23 Mi mensaje corregido y listo"
    ```

3.  **Verifica:**

    ```bash
    git log -1
    ```

    Verás que el mensaje del último *commit* ahora es el corregido.

-----

## ⚠️ Nota Importante si ya hiciste `push`

Si ya subiste el *commit* erróneo a Bitbucket no hagas nada comunícalo por correo.

-----

## 4\. 📤 Subir Cambios a Bitbucket

Una vez que tengas uno o varios *commits* en tu rama local (`HOL-23`), es hora de subirlos al repositorio remoto.

* **Hacer `push` de la rama:** La primera vez que haces *push* de una rama nueva.
  ```bash
  git push origin HOL-23
  ```
  Para los `push` posteriores en la misma rama, solo necesitas:
  ```bash
  git push
  ```

-----

## 5\. 🤝 Crear el Pull Request (PR) en Bitbucket (Por Navegador)

Cuando la tarea (ej. HOL-23) está **finalizada** y sus cambios están en Bitbucket, debes crear un **Pull Request** para solicitar que se fusionen en la rama principal.

* **Navega a Bitbucket:** Abre tu repositorio en el navegador web.
* **Ir a Pull Requests:** Haz clic en la pestaña o sección llamada **"Pull requests"** (Solicitudes de extracción).
* **Crear nuevo Pull Request:**
    * Normalmente, al haber hecho `push` de una nueva rama, Bitbucket te mostrará una notificación o un botón grande que dice **"Create pull request"** para tu rama recién subida (`HOL-23`). Haz clic en él.
    * Si no aparece, haz clic en **"Create pull request"** y selecciona:
        * **Source branch (Origen):** `HOL-23`
        * **Destination branch (Destino):** `main` (o la rama principal que corresponda, ej. `development`).
* **Rellenar los Detalles:**
    * **Título:** Bitbucket a menudo rellena el título automáticamente con el identificador JIRA (ej. `HOL-23 - ...`). Asegúrate de que sea claro.
    * **Descripción:** Proporciona un resumen de los cambios, las pruebas realizadas, y menciona a qué ticket JIRA está vinculado (si no se ha hecho automáticamente).
    * **Revisores:** Asigna a las personas que deben revisar tu trabajo.
* **Finalizar:** Haz clic en **"Create"**.
