import {UrlParam} from '../type/UrlParam'

export default {
  // 解析链接
  analysisUrl (url: string): UrlParam[] {
    return url.split('?')[1].split('&')
      .map((param, paramIndex) => {
        const index = param.indexOf('=')
        return {
          id: paramIndex,
          key: param.substring(0, index),
          value: param.substring(index + 1)
        }
      })
      .sort((a, b) => a.key > b.key ? 1 : -1)
  },
  // 重组链接
  recreateUrl (url: string, list: UrlParam[]): string {
    return url.split('?')[0] + '?' + list.map((param) => param.key + '=' + param.value).join('&')
  }
}
