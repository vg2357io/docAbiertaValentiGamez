** Plantilla genérica para cualquier asset 3D

Crea un asset 3D siguiendo como **ejemplo de estructura, formato y requisitos** el documento adjunto: `./ejemplo_tarea_jira.md` .

El asset a crear será: **`<nombre_del_asset>`**.
Forma parte del proyecto: **`<nombre_del_proyecto>`**.
Debe cumplir lo siguiente:

---

### **1. Descripción del Asset**

Modelar un **`<tipo_de_asset>`** que será usado en **`<motor_o_contexto_de_uso>`**.
Requisitos específicos del asset:

* `<característica_1>`
* `<característica_2>`
* `<característica_3>`

---

### **2. Estilo Visual**

El asset debe seguir el estilo visual **Low Poly de color plano limpio**, similar al ejemplo del documento adjunto.
Incluir referencias obligatorias:

* Documentación del modelador: `<url_documentación>`
* Paquete de estilo o kit base: `<url_kit_base>`
* Carpeta de referencias visuales: `<url_referencias>`
* Ruta de destino del asset: `<ruta_drive>`

---

### **3. Checklist obligatorio antes de entregar**

El modelador debe completar y verificar:

[ ] El asset está modelado en **Low Poly** con el mínimo número de polígonos.
[ ] Usa un **solo material** y un **atlas de color**.
[ ] El objeto en Blender está renombrado como: **`<prefijo_estándar>_<nombre_del_asset>_<versión>`**.
[ ] El **Object Origin** está en la base (Z=0) y alineado a la rejilla.
[ ] Se han eliminado caras internas u ocultas.
[ ] Se han aplicado escala y rotación (Apply All Transforms).
[ ] Se ha exportado el archivo final en **.glb**.
[ ] Se ha importado en **`<motor_de_validación>`** para verificar escala y snapping.
[ ] Se ha creado el Pull Request en Bitbucket con el código de Jira: **`<JIRA-ID>`**.
[ ] La rama lleva el mismo identificador: **`<JIRA-ID>`**.
[ ] Se han subido a Google Drive los archivos **.blend** y **.glb**.

---

### **4. Objetivo del resultado**

El prompt debe generar instrucciones claras y sistemáticas para que cualquier modelador pueda producir el asset siguiendo el mismo estándar mostrado en el archivo adjunto.
