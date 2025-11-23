# Texturizado con Atlas de Color y UVs

La optimización de rendimiento se logra a través del **Texture Atlas**.

* **Importar Atlas de Color:**
    * Descargar la **Paleta de Colores** o el **Atlas de Textura** del kit de Kenney o el personalizado correspondiente (suele ser un PNG muy pequeño).
    * Crear un **Nuevo Material** en Blender y asignar esta imagen como su **Textura Base** (Base Color). El kit entero debe usar **un solo material maestro** para optimizar los *Draw Calls*.

* **Mapeo UV para Atlas:**
    * Acceder al **Editor UV** (UV Editing Workspace).
    * **Seleccionar Caras por Color:** En el modo de Edición, seleccionar todas las caras que deben compartir un color específico (ej. todas las caras de "Madera").
    * **Colapsar Islas UV:** Presionar **S, 0, Enter** para escalar la selección UV a un solo punto.
    * **Asignar Coordenada:** Mover este punto UV sobre el píxel de color **Marrón** en la imagen del Atlas de Textura.
    * Repetir este proceso para todos los colores del modelo. **Nunca** crear un nuevo material para un color diferente; simplemente se asignan diferentes coordenadas UV a la misma textura de Atlas.
