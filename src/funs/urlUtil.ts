import {UrlParam} from '../type/UrlParam'

export default {
  analysisUrl (url: string) {
    return url.split('?')[1].split('&')
      .map((param) => {
        const index = param.indexOf('=')
        return {
          key: param.substring(0, index),
          value: param.substring(index + 1)
        }
      })
      .sort((a, b) => a.key > b.key ? 1 : -1)
  },
  recreateUrl (url: string, list: UrlParam[]) {
    return url.split('?')[0] + '?' + list.map((param) => param.key + '=' + param.value).join('&')
  }
}
