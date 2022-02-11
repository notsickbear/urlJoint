import {defineStore} from 'pinia';
import {UrlParam} from '../type/UrlParam';

export const useMainUrlStore = defineStore({
  id: 'mainUrl',
  state: (): {
    mainParamList: UrlParam[],
    paramKeyIndexMap: Map<string, number>
  } => ({
    mainParamList: [],
    paramKeyIndexMap: new Map<string, number>()
  }),
  actions: {
    setMainParamList (list: UrlParam[]): void {
      this.mainParamList = list
      this.paramKeyIndexMap.clear()
      list.forEach((param, index) => {
        this.paramKeyIndexMap.set(param.key, index)
      })
    },
    setMainParam (param: UrlParam): void {
      const index = this.paramKeyIndexMap.get(param.key)
      if (index && index > -1) this.mainParamList[index] = param
      else this.mainParamList.push(param)
    }
  }
})
