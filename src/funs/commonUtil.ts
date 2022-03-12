export default {
  copyTextToClipBoard (text: string) {
    return navigator.clipboard.writeText(text)
  }
}
