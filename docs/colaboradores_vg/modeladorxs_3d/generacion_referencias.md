# Generación de Referencias y Bloqueo (Blocking)

El estilo debe priorizar la forma y la silueta. Las referencias deben ser simples y claras.

## Generación de Referencias (AI - Nano Banana Pro / Drive)
    * **Prompt Sugerido (si no hay referencias claras):** "Isometric low poly 3D asset concept for a modular game kit, matching the clean flat color style of CC0 Kenney assets. Front, side, and back views. Asset: [Nombre del Asset, ej: 'damaged stone wall corner']". Se pueden subir referencias de imágenes de Kenney o imágenes con una licencia permisiva para que la IA tenga la guía de estilo.
    * Guardar las imágenes generadas con la IA o encontradas con una licencia permisiva en una carpeta específica de **Google Drive** para el proyecto. Ruta: `Diseño/Assets3D/<nuevo asset>/Referencias`
    * Hacer comentario en tarea de Jira haciendo referencia a la carpeta de Google Drive donde se guardaron las imágenes.
    * **Colocación de Referencias en Blender:** Usar la función **Image as Planes** o importar las referencias como *Empty* en las vistas **Ortográficas** (Front/Side) para que sirvan de guía de escala y forma.

## Bloqueo (Blocking)
    * Comenzar a construir el asset utilizando **formas primitivas** (cubos, cilindros, etc).
    * En la vista ortográfica, estirar y escalar las primitivas hasta que coincidan con la silueta de las referencias.
    * **Punto de Pivote Crítico:** Antes de empezar la edición detallada, asegurarse de que el **Origen del Objeto** (Object Origin) esté en la **esquina inferior** o en el **centro de la base (Z=0)**, alineado con la rejilla. Esto es vital para el *snapping* en el motor de juego. Usar **Shift + S > Cursor to Selected** y luego **Object > Set Origin > Origin to 3D Cursor**.
