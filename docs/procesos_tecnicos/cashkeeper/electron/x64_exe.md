# Electron Integration x64 exe proxy

## Requirements

Electron x86. CKEasyV2 incompatible with x64. Proxy with `/bin/Vg2357ioCKEasy.exe`

## Install

Install DLL dependencies to Windows device: execute `/install/setupActiveXV2.exe`

Install CKEasyV2 registry ProgID to Windows device: execute `/install/register_ckeasyv2.bat`

Install package to your project and it's peer dependencies:

```npm
-- Edit package.json --
{
  ...
  "dependencies": {
    ...
    "@vg2357io/cashkeeper": "git+https://vgrdominik@bitbucket.org/vgrdominik/cashkeeper.git#v0.1.5"
  },
  ...
}

npm install
```

Copy /bin to your electron project, to main folder. Rename bin folder as `cashkeeper`.

Copy ./main/* folder to your electron project, to new cashkeeper in main folder.

Copy preload folder to your electron project, to preload folder. Rename as `cashkeeper`.

Copy renderer folder to your electron project, to renderer/src/utils folder. Rename as `cashkeeper`.

```ts

// main/index.ts
...
import { cashKeeperInitialSetup } from './cashkeeper/cashkeeper-main'
...
app.whenReady().then(() => {
    ...
    const yourCKEnabledVar = false
    const yourCKIpVar = 'localhost'
    const cashKeeperEnabled = yourCKEnabledVar ?? false
    if (cashKeeperEnabled) {
        const cashKeeperIp = yourCKIpVar ?? 'localhost'
        cashKeeperInitialSetup(cashKeeperIp)
    }
    ...
})
...
```

## Usage

Add boot from index render file:

```ts
import { bootCashkeeper } from '@renderer/utils/cashkeeper/cashkeeper'

bootCashkeeper()

```