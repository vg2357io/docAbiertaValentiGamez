import { marked } from "marked";

export const openHandler = () => {
    if (window?.sindriFiles?.openDialog) {
        window.sindriFiles.openDialog()
    }
}

// Reacción opcional al archivo abierto: cargamos el contenido
export const fileOpenedHandler = (markdownContent, htmlContent, filePath) => {
    return (e: Event) => {
        const detail = (e as CustomEvent<SindriFilePayload>).detail
        if (detail && !detail.canceled) {
            markdownContent.value = (detail.content?.toString() ?? '') || ''
            htmlContent.value = marked(detail.content?.toString() ?? '') || ''
            filePath.value = (detail.path?.toString() ?? '') || ''
        }
    }
}
