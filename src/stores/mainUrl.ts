import {defineStore} from 'pinia';
import {UrlParam} from '../type/UrlParam';

export const useMainStore = defineStore({
  id: 'mainUrl',
  state: (): {
    paramListMap: Map<string, UrlParam[]>,
    selectKey: string | undefined
  } => ({
    paramListMap: new Map<string, UrlParam[]>(),
    selectKey: undefined
  }),
  actions: {
    setParamList (listId: string, list: UrlParam[]): void {
      this.paramListMap.set(listId, list);
    },
    setOtherParam (param: UrlParam): void {
      this.paramListMap.forEach((paramList) => {
        const index = paramList.findIndex((oldParam) => oldParam.key === param.key)
        if (index > -1) paramList[index] = param
        })
    },
    setSelectKey (key: string | undefined) {
      this.selectKey = key;
    }
  }
})
