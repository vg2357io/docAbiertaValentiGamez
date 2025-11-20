# 💻 Guía Rápida para la Gestión de Tareas en Jira

Esta guía se centra en tu flujo de trabajo principal: **actualizar el estado de tus tareas** para reflejar tu progreso. El Project Manager (PM) se encarga de la creación, planificación y priorización.

## I. 🔍 Encontrar tus Tareas

Antes de empezar a trabajar, localiza la tarea asignada a ti.

* **1. Navega a tu Tablero (Board):**
    * Ve al proyecto de Jira. Si estás usando Scrum o Kanban, haz clic en el **"Tablero"** (Board) o **"Backlog"**.
* **2. Identifica tus Asignaciones:**
    * Busca el carril o filtro que muestre las tareas asignadas a ti. Estas tareas estarán en la columna **"Por Hacer" (To Do)** o **"Pendiente"**.
    * **Identificador Clave:** Anota el código de la tarea (ej: **PROYECTO-123**). Este código lo necesitarás para tu trabajo en Bitbucket.

---

## II. ➡️ Flujo de Trabajo en Jira: Actualización de Estado

Tu principal responsabilidad en Jira es mover la tarjeta (issue) a través de las columnas para reflejar dónde se encuentra el trabajo.

| Acción | Columna de Origen | Columna de Destino | Descripción |
| :--- | :--- | :--- | :--- |
| **Empezar a Trabajar** | **Por Hacer (To Do)** | **En Progreso (In Progress)** | Indica que has comenzado a escribir código o realizar la tarea. |
| **Código Terminado** | **En Progreso (In Progress)** | **En Revisión (In Review)** | El código está listo, has creado tu **Pull Request (PR)** en Bitbucket y necesitas que se revise. |
| **Trabajo Finalizado** | **En Revisión/Pruebas** | **Hecho (Done)** | El código ha sido aprobado, fusionado y desplegado (o probado por QA). **El PM o QA suele moverlo a este estado final**. |

* **Cómo Mover Tareas:**
    1.  Haz clic en la tarjeta de la tarea en el Tablero.
    2.  Arrastra y suelta la tarjeta a la columna correspondiente (**Drag & Drop**).
    3.  Alternativamente, haz clic en el botón de **"Transición"** que aparece en la parte superior del detalle de la tarea.

---

## III. 🔗 Enlace con Bitbucket (Automatización)

Tu Project Manager espera que vincules tu trabajo de Bitbucket con la tarea de Jira para automatizar parte de este flujo.

* **El paso más importante es incluir el código de la tarea de Jira en el nombre de la rama (branch) y en el título del Pull Request (PR).**

### 1. Nombra la Rama

Al crear una nueva rama para tu tarea en Bitbucket, asegúrate de que el prefijo sea el código de Jira. Esto vinculará automáticamente la rama a la tarea.

> 📝 **Formato de Rama:** `tipo/PROYECTO-123-descripcion-corta`
>
> * *Ejemplo:* `feature/PROYECTO-123-validacion-email`

### 2. Crea el Pull Request (PR)

Cuando tu código esté listo para la revisión, crea el PR e incluye el código de Jira en el título.

> 📝 **Título del PR:** `PROYECTO-123: Implementar validación de correo electrónico`

---

## IV. 💬 Comunicación Adicional

* **Comentarios:** Si tienes una pregunta o necesitas una aclaración sobre un requisito, utiliza la sección **"Comentarios"** dentro de la tarea de Jira.
* **Registro de Trabajo (Log Work):** Si tu PM requiere que registres tu tiempo, busca el botón **"Log Work"** o **"..."** dentro de la tarea para introducir el tiempo dedicado en horas.
