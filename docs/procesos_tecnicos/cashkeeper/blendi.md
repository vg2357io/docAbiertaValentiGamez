# Cashkeeper CKEasy node integration

Integrate node package to Cashkeeper devices.

This is a library owned by Valentí Gàmez and the company CicloTIC S.L. If you want to use it, you must contact either of the two parts to obtain permission.

## Install

Install DLL dependencies to Windows device: execute `./install/setupActiveXV2.exe`

Install CKEasyV2 registry ProgID to Windows device: execute `./install/register_ckeasyv2.bat`

## Install x86

Install package to your project and it's peer dependencies:

```npm
-- Edit package.json --
{
  ...
  "dependencies": {
    ...
    "winax": "^3.6.2",
    "@vg2357io/cashkeeper": "git+https://vgrdominik@bitbucket.org/vgrdominik/cashkeeper.git#v0.1.0"
  },
  ...
}

npm install
```

### Electron integration x86

https://docs.valentigamez.com/#/procesos_tecnicos/cashkeeper/electron/x86.

## Install x64

CKEasyV2 incompatible with x64. To bridge to x64 integration use x86 node command from `@vg2357io/cashkeeper-cmd@0.1.0`.

Install nodejs to Windows: https://nodejs.org/en/download/ If you need multiple versions, use nvm: https://nvmnode.com/

If needed configure PATH to use node: https://docs.valentigamez.com/#/procesos_tecnicos/configurar_acceso_exe_global

Install node command: `npm i -g https://vgrdominik@bitbucket.org/vgrdominik/cashkeeper-cmd.git#v0.1.0`

Use x86 command to comunicate with Cashkeeper devices: https://docs.valentigamez.com/#/procesos_tecnicos/cashkeeper/node_comando_x86.

### Electron integration x64

https://docs.valentigamez.com/#/procesos_tecnicos/cashkeeper/electron/x64.

## Author

Valentí Gàmez @vg2357io

- https://valentigamez.com
- https://github.com/vg2357io
- https://x.com/vg2357io
- https://instagram.com/vg2357io
- https://youtube.com/vg2357io
