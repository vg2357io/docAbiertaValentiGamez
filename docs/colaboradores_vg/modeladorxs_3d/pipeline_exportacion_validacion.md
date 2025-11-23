# Pipeline de Exportación y Validación

El activo solo está "Game Ready" después de una exportación validada.

* **Aplicar Transformaciones Finales:**
    * En el **Modo Objeto** (Object Mode), seleccionar el asset.
    * Presionar **Ctrl + A** y seleccionar **Scale** (Escala) y **Rotation** (Rotación). Esto "congela" las transformaciones, asegurando que el motor de juego interprete la escala como **(1, 1, 1)** y la rotación como **(0, 0, 0)**, previniendo errores de volteo o escalado.

* **Nomenclatura Estándar:**
    * Renombrar el objeto de Blender siguiendo la convención de nomenclatura de assets (ej. `tipo_subtipo_variacion`, como `wall_corner_damaged`).

* **Exportación a glTF/GLB:**
    * Ir a **File > Export > glTF 2.0 (.glb/.gltf)**.
    * Seleccionar **GLB** (binario incrustado) como formato, ya que incluye las texturas y datos del material en un único archivo compacto.
    * Asegurarse de que las opciones de exportación son compatibles con el motor Godot y que la dirección del eje Z/Y es la correcta (aunque GLB a menudo maneja esto automáticamente).

* **Validación:**
    * Importar el archivo `.glb` en una escena de prueba de Godot para verificar:
        * Que la escala es correcta (ej. un cubo de 1m en Blender es 1 unidad en el motor).
        * Que el punto de pivote está en la base y permite el *snapping* correcto con la rejilla del motor.
