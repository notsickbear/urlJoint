<script setup lang='ts'>
import {ref} from 'vue'
import {useMainStore} from '../stores/mainUrl'
import ColumnList from './column-list/ColumnList.vue'
import urlUtil from '../funs/urlUtil'
import commonUtil from '../funs/commonUtil'
import {UrlParam} from '../type/UrlParam'

const mainStore = useMainStore()

const url = ref<string>('')
const list = ref<UrlParam[]>([])
const onAnalysisClick = () => {
  const paramList = urlUtil.analysisUrl(url.value)
  list.value = paramList
  mainStore.setMainParamList(paramList)
}
const onRecreateClick = () => {
  const newUrl = urlUtil.recreateUrl(url.value, list.value)
  commonUtil.copyTextToClipBoard(newUrl)
}
</script>

<template>
  <div class='list-container'>
    <!-- 输入框 -->
    <input type='text' class='url-input' v-model='url' aria-placeholder='在这里输入链接'/>
    <!-- 功能按键 -->
    <div class='button-area'>
      <button @click.stop='onAnalysisClick'>解析旧链接</button>
      <button @click.stop='onRecreateClick'>生成新链接并复制</button>
    </div>
    <!-- 参数列表 -->
    <column-list :list='list' />
  </div>
</template>

<style lang='less'>
.list-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.url-input {
  border: #00000077 1px solid;
  padding: .4em .5em;
  border-radius: 8px;
  font-size: 20px;
  margin-bottom: .4em;
  width: 500px;

  ::-webkit-scrollbar {
    display: none;
  }
}

.button-area {
  button {
    border: #00000077 1px solid;
    padding: .2em .5em;
    margin: .4em 1em;
    border-radius: 8px;
    font-size: 20px;
  }
}
</style>
