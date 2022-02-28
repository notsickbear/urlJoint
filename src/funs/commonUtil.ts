export default {
  copyTextToClipBoard (text: string) {
    return navigator.clipboard.writeText(text).then(() => {
      console.log('复制成功')
    })
  }
}
