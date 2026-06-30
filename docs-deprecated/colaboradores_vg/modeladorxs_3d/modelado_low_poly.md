# Modelado Low Poly de Precisión y Modularidad

El objetivo es alcanzar la silueta con la mínima cantidad de polígonos.

* **Economía de Geometría:** Modelar utilizando la menor cantidad de caras posible. Evitar añadir bucles de soporte (*edge loops*) innecesarios. El estilo Low Poly se basa en la manipulación explícita de vértices, no en el suavizado automático de alta densidad.

* **Adhesión a la Rejilla:** Usar el **Snapping** continuamente durante el modelado para asegurar que todos los bordes y caras terminan en incrementos exactos de la rejilla (ej. 0.5m o 1m). Esto garantiza que el asset se conecte sin huecos ni *z-fighting* con otros módulos.

* **Limpieza de Topología:**
    * Eliminar **caras internas u ocultas** que el motor de juego no debería renderizar.
    * Buscar y corregir **N-gons** (caras con más de 4 vértices), aunque la topología final se triangule en la exportación, trabajar con *quads* facilita la edición.

* **Sombreado (Shading):**
    * Seleccionar el objeto, ir a las propiedades de **Datos de Objeto** (Object Data Properties) y activar **Auto Smooth**. Esto permite que ciertas caras se vean *suaves* (ej. un tronco de árbol) mientras que los bordes duros (*hard edges*) permanecen facetados. Evitar la subdivisión innecesaria.
