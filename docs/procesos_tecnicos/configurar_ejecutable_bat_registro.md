# Configurar ejecutable .bat para registro/desregistro DLL

## Version x86

```
@echo off
setlocal EnableExtensions EnableDelayedExpansion
title Register / Unregister YourObject.dll (COM x86)

REM =========================
REM Usage:
REM   register_ckeasyv2.bat [ruta\YourObject.dll]
REM   register_ckeasyv2.bat /unregister [ruta\YourObject.dll]
REM Without route, try:
REM   %SystemRoot%\SysWOW64\YourObject.dll
REM   and try to "C:\Program Files (x86)\"
REM =========================

REM --- Comprobar/admin (elevar si hace falta)
net session >nul 2>&1
if errorlevel 1 (
  echo [i] Admin privilegies required. Retry elevated...

  REM --- Si hay argumentos, pásalos; si no, ejecuta sin ellos
  if "%~1"=="" (
    powershell -NoProfile -Command "Start-Process -FilePath '%~f0' -Verb RunAs"
  ) else (
    powershell -NoProfile -Command "Start-Process -FilePath '%~f0' -ArgumentList '%*' -Verb RunAs"
  )

  exit /b
)

set "MODE=REG"
set "ARG1=%~1"
set "ARG2=%~2"

if not "%ARG1%"=="" (
    if /I "%ARG1%"=="/unregister" (
      set "MODE=UNREG"
      set "DLL=%ARG2%"
    ) else (
      set "DLL=%ARG1%"
    )
)

REM --- Ruta por defecto si no se especifica
if not defined DLL (
  set "DLL=%SystemRoot%\SysWOW64\YourObject.dll"
)

REM --- Si no existe, intentar buscar en Program Files (x86)
if not exist "!DLL!" (
  echo [i] "%DLL%" not found
  echo [i] Searching YourObject.dll to "C:\Program Files (x86)\"...
  for /r "C:\Program Files (x86)" %%F in (YourObject.dll) do (
    set "FOUND=%%~fF"
    goto :found
  )
  echo [!] YourObject.dll not found. Send complete route as argument.
  echo     Ex. register_ckeasyv2.bat "C:\Windows\SysWOW64\YourObject.dll"
  exit /b 2
)

:found
if defined FOUND (
  set "DLL=%FOUND%"
  echo [i] "%DLL%" found
)

REM --- Verificación existencia final
if not exist "!DLL!" (
  echo [x] DLL noute not found "%DLL%"
  exit /b 2
)

REM --- Usar el regsvr32 de 32 bits
set "REGSVR32=%SystemRoot%\SysWOW64\regsvr32.exe"
if not exist "!REGSVR32!" (
  echo [x] regsvr32 to 32 bits not found to "%REGSVR32%"
  exit /b 2
)

echo.
echo DLL "%DLL%"
echo REGSVR32 "%REGSVR32%"
echo MODE "%MODE%"
if "!MODE!"=="UNREG" (
  echo [i] unregistering COM x86
  echo     "%REGSVR32%" /u "%DLL%"
  "!REGSVR32!" /u "%DLL%"
) else (
  echo [i] registering COM x86
  echo     "%REGSVR32%" "%DLL%"
  "!REGSVR32!" "%DLL%"
)

if errorlevel 1 (
  echo [x] regsvr32 errorlevel %errorlevel%.
  echo     Check to DLL 32 bits compatibility and all dependencies as ActiveXV2.
  exit /b %errorlevel%
) else (
  echo [v] Operation completed with exit.
)

REM --- Verificación opcional del ProgID mediante PowerShell 32-bit
echo.
set /p _DOCHK=¿Do you want to check ProgID "YourObject.EasyCashKeeper" now? (Y/N) :
if /I "%_DOCHK%"=="Y" (
  REM --- Rutas de PowerShell ---
  set "PS64=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
  set "PS32=%SystemRoot%\SysWOW64\WindowsPowerShell\v1.0\powershell.exe"

  REM --- Usaremos PS32 porque la DLL es x86 ---
  if exist "!PS32!" (
    echo [i] Checking COM x86 to "!PS32!"
    "!PS32!" -NoProfile -ExecutionPolicy Bypass -Command ^
      "try { $null = New-Object -ComObject 'YourObject.EasyCashKeeper'; 'OK'; exit 0 } catch { 'NO'; exit 1 }"
    if errorlevel 1 (
      echo [x] ProgID NO disponible no registrado o bitness incorrecta
    ) else (
      echo [v] ProgID disponible
    )
  ) else (
    echo [e] 32-bit PowerShell not found to "%PS32%"
  )
)

echo [i] Remember execute Electron/Node to IA32 architecture.
exit /b 0
```