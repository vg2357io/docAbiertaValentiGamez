// ...

import { setupOpenFilesIpc } from './openFiles'
import { setupSaveFilesIpc } from './saveAsFiles'

// ...

// Inicialización de la app
app.whenReady().then(() => {
  // ...

    setupOpenFilesIpc()
    setupSaveFilesIpc()

  // ...
})

// ...
