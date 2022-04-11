export default {
  copyTextToClipBoard (text: string) {
    return navigator.clipboard.writeText(text)
  },
  getTextFromClipBoard () {
    return navigator.clipboard.readText()
  }
}
