# ➕ Creación de Tareas en Jira (Casos Especiales)

Por defecto, el **Project Manager (PM)** es responsable de crear, planificar y asignar las tareas principales en el backlog. Sin embargo, como modelador 3D, necesitarás crear tareas en situaciones específicas para mantener el flujo de trabajo ágil y transparente.

---

## 1. ¿Cuándo debes crear una tarea?

Existen dos escenarios principales donde se espera que tú inicies una tarea:

### 🐞 Reporte de Bugs (Errores)
Si encuentras un problema visual, técnico o de integración en el motor de juego que bloquea tu trabajo o afecta la calidad final.
*   *Ejemplos:* "Normales invertidas en el modelo X", "La textura se ve estirada en Godot", "El pivote no está en el origen".

### 🧩 Sub-tareas (Desglose de Trabajo)
Para organizar tu propia tarea asignada si es muy compleja.
*   *Ejemplo:* Si tienes la tarea "Modelar Casa Victoriana", puedes crear sub-tareas para ti mismo como: "Modelado Modular", "UVs", "Texturizado", "LODs".

---

## 2. Pasos para Crear una Tarea

1.  **Botón "Crear":** En la barra de navegación superior de Jira, haz clic en el botón azul **"Crear"** (Create).
2.  **Proyecto:** Asegúrate de que el campo **Proyecto** esté seleccionado correctamente (el proyecto en el que estás trabajando actualmente).
3.  **Tipo de Incidencia (Issue Type):**
    *   Selecciona **Bug** para errores.
    *   Selecciona **Sub-task** si es parte de una tarea mayor (debes estar dentro de la tarea padre o vincularla después). Si no es una sub-tarea, usa **Task** (Tarea) solo si tienes autorización del PM.
4.  **Resumen (Summary):** Sé conciso y utiliza el siguiente formato para facilitar la lectura:
    *   `[Categoría] Descripción corta del problema o tarea`
    *   *Ejemplo Bug:* `[Modelado] Geometría invisible desde ciertos ángulos en Silla_01`
    *   *Ejemplo Tarea:* `[UVs] Optimizar espacio de textura para Personaje_Principal`
5.  **Descripción:**
    *   **Para Bugs:** Es **obligatorio** incluir:
        *   **Pasos para reproducir:** ¿Qué hiciste para encontrar el error?
        *   **Evidencia:** Capturas de pantalla (screenshots) o videos mostrando el problema.
    *   **Para Tareas:** Describe claramente qué se debe entregar.
6.  **Prioridad:**
    *   **High/Highest:** Si bloquea completamente tu trabajo o el de otros.
    *   **Medium:** Problemas estándar que deben resolverse.
    *   **Low:** Mejoras visuales menores o "nice to have".
7.  **Crear:** Haz clic en el botón **"Crear"** al final del formulario.

---

## 3. 🔗 Integración con el Flujo de Trabajo (Git/Bitbucket)

Una vez creada la tarea, Jira generará un **Identificador (Key)** único (ej. `PROY-124`).

> ⚠️ **IMPORTANTE:** Recuerda usar este identificador para crear tu rama en Bitbucket y en tus commits, tal como se detalla en la [Guía de Git y Bitbucket](../git_bitbucket.md).

*   **Rama:** `bugfix/PROY-124-fix-normales`
*   **Commit:** `PROY-124 Corregidas normales invertidas en la malla base`

Esto asegurará que tu corrección quede automáticamente vinculada al reporte del bug en Jira, cerrando el ciclo de trazabilidad.
