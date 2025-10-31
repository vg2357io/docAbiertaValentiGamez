# Hacer un `.exe` accesible desde la consola añadiéndolo al **PATH de *usuario*** en Windows

> Esta guía cubre **método gráfico** y **métodos por línea de comandos** (PowerShell/CMD), verificación, actualización de la sesión, eliminación, y resolución de problemas.
> 
> Si quieres la versión más rápida sin conocimientos extensos mira solo los pasos 0 y 1.

## 0) Conceptos rápidos

* **PATH**: lista de carpetas que Windows recorre para encontrar comandos.
* **Usuario vs. Sistema**:

    * *Usuario*: solo afecta a tu cuenta (recomendado si no tienes privilegios de admin o solo tú usarás el exe).
    * *Sistema*: afecta a todos los usuarios (requiere admin).
* Añade **carpetas**, no archivos. Es decir, añade la carpeta donde vive `miapp.exe`.

## 1) Método gráfico (sin comandos)

1. Abre **Inicio → escribe** `variables de entorno` o `Path` y pulsa **Enter** (o: *Panel de control → Sistema → Configuración avanzada del sistema → Variables de entorno*).
2. En la sección **Variables de usuario para <tu_usuario>**, selecciona **Path** y haz clic en **Editar**.
3. Pulsa **Nuevo** y pega la carpeta donde está el `.exe`. Ejemplos:

    * `C:\Tools\MyApp\bin`
    * `D:\Portable\ffmpeg\bin`
4. **Sube** esa nueva ruta con *Mover arriba* si quieres priorizarla frente a otras.
5. Acepta todo con **Aceptar → Aceptar**.
6. **Cierra y reinicia** tus consolas (CMD/PowerShell/Terminal de VS Code/Jetbrains IDE) para que la nueva PATH se cargue.

> **Pro tip**: Si la ruta contiene espacios, no hace falta comillarla en el editor de Path; el editor moderno la maneja bien.

## 2) Método PowerShell (persistente para **usuario**)

ALERTA: No testeado.

> Abre **PowerShell** o **Terminal** *sin* admin (Win+X → Windows PowerShell).

### 2.1 Añadir una ruta

```powershell
# Cambia la ruta por la tuya
$New = 'C:\Tools\MyApp\bin'
$Current = [System.Environment]::GetEnvironmentVariable('PATH','User')
if (-not $Current.Split(';') -contains $New) {
  [System.Environment]::SetEnvironmentVariable('PATH', ($Current + ';' + $New).Trim(';'), 'User')
  'Añadido a PATH de usuario: ' + $New
} else {
  'La ruta ya estaba en PATH de usuario.'
}
```

### 2.2 Quitar una ruta

```powershell
$Remove = 'C:\Tools\MyApp\bin'
$parts = [System.Collections.Generic.List[string]]([System.Environment]::GetEnvironmentVariable('PATH','User').Split(';'))
if ($parts.Remove($Remove)) {
  [System.Environment]::SetEnvironmentVariable('PATH', ($parts -join ';').Trim(';'), 'User')
  'Eliminado de PATH de usuario: ' + $Remove
} else {
  'Esa ruta no estaba en PATH de usuario.'
}
```

> **Recarga**: cierra y abre la consola. Para recargar **solo esta sesión** sin cerrar, mira el apartado **4. Recargar la sesión**.

---

## 3) Método CMD con `setx` (persistente para **usuario**)

ALERTA: No testeado.

> Abre **CMD** normal desde inicio.

### 3.1 Añadir una ruta

```bat
setx PATH "%PATH%;C:\Tools\MyApp\bin"
```

> **Ojo**: `setx` trunca a ~1024–2048 caracteres en versiones antiguas. Si tu PATH es muy largo, usa PowerShell (método 2).

### 3.2 Ver la variable

```bat
echo %PATH%
```

*(Esto muestra el PATH **de la sesión actual**. La persistente se aplicará a nuevas consolas.)*

---

## 4) Recargar PATH en la **sesión actual** (sin cerrar la consola)

ALERTA: No testeado.

### PowerShell

```powershell
$Env:Path = [System.Environment]::GetEnvironmentVariable('PATH','User') + ';' + [System.Environment]::GetEnvironmentVariable('PATH','Machine')
```

### CMD

No hay forma nativa fiable; lo más seguro es **cerrar y abrir** la ventana.

---<

## 5) Verificación

1. Abre una **nueva** consola.
2. Ejecuta:

```bat
where miapp
```

Deberías ver la ruta al `miapp.exe`. Si no aparece, revisa:

* La carpeta añadida es la **que contiene** el `.exe`.
* Es una **nueva** consola.
* No hay un `.exe` homónimo antes en el PATH (ver prioridad en el punto 6).

---

## 6) Prioridad y conflictos

ALERTA: No testeado.

* Windows busca en orden de **arriba a abajo** en PATH. Si hay dos `miapp.exe`, se ejecuta el primero encontrado.
* En el editor gráfico, usa **Mover arriba/abajo** para ajustar prioridad.
* En PowerShell, pon tu ruta **primera** si necesitas prioridad:

```powershell
$u = [System.Environment]::GetEnvironmentVariable('PATH','User')
$new = 'C:\Tools\MyApp\bin'
$parts = ($new + ';' + $u) -split ';' | Select-Object -Unique
[System.Environment]::SetEnvironmentVariable('PATH', ($parts -join ';').Trim(';'), 'User')
```

---

## 7) Alias/"shim" opcional (cuando el exe tiene nombre incómodo)

ALERTA: No testeado.

Crea un archivo `C:\Users\<tu_usuario>\bin\miapp.cmd` con:

```bat
@echo off
"C:\Ruta Con Espacios\Mi App\my-very-long-app-name.exe" %*
```

Añade `C:\Users\<tu_usuario>\bin` al PATH (método 1–3). Podrás ejecutar `miapp` desde cualquier carpeta.

> **Pro tip**: Si el `miapp.cmd` es muy largo, puedes usar un script de PowerShell en su lugar.
> 
> **Pro tip 2**: Consulta legalmente los contratos necesarios y métodos para usar un sistema así para consultorías de seguridad y privacidad o para generar nuevo software compatible con las licencias expedidas.

---

## 8) Buenas prácticas

* Evita rutas temporales (Descargas) → usa `C:\Tools\...` o `%LOCALAPPDATA%\Programs\...`.
* **Una entrada por carpeta**; no añadas duplicados.
* Mantén el PATH corto: demasiadas entradas ralentizan el arranque de shells y `where`.
* Para herramientas *portables*, guarda todo en `C:\Portable\<tool>\bin` y añade solo `bin`.

---

## 9) Problemas comunes y soluciones

* **No funciona tras añadir**: abre **nueva** consola; muchas apps cachean el entorno.
* **Ruta con espacios**: no necesitas comillas en el editor de PATH; si usas scripts, sí: `"C:\Mi App\bin"`.
* **PATH muy largo / truncado**: usa PowerShell (método 2) en lugar de `setx`.
* **Consolas diferentes**: Git Bash/MSYS no siempre leen el PATH de Windows hasta reabrir. WSL tiene su propio entorno.
* **VS Code Terminal/Jetbrains IDE**: a veces hay que **cerrar todas** las ventanas del IDE y reabrir.

---

## 10) *Cheat‑sheet* rápido

* **GUI**: *Variables de entorno/Path en inicio → Path (usuario) → Nuevo → pega carpeta del exe → Aceptar → reabrir consola*.
* **PowerShell añadir**:

```powershell
[Environment]::SetEnvironmentVariable('PATH', ([Environment]::GetEnvironmentVariable('PATH','User') + ';C:\Tools\MyApp\bin').Trim(';'), 'User')
```

* **Verificar**: `where miapp`
* **Quitar** (PS): ver bloque **2.2**.

---

### Ejemplo completo

1. Descarga `myapp.exe` a `C:\Tools\MyApp\bin`
2. Añade `C:\Tools\MyApp\bin` al **PATH de usuario** (método 1 ó 2)
3. Cierra y abre PowerShell
4. Ejecuta `where myapp` → muestra `C:\Tools\MyApp\bin\myapp.exe`
5. Ejecuta `myapp --help`
