<script setup lang='ts'>
import {ref} from 'vue'
import {useMainStore} from '../stores/mainUrl'
import ColumnList from './column-list/ColumnList.vue'
import urlUtil from '../funs/urlUtil'
import commonUtil from '../funs/commonUtil'
import {UrlParam} from '../type/UrlParam'

const props = defineProps<{
  listId: string
}>()

const mainStore = useMainStore()

const url = ref<string>('')
const list = ref<UrlParam[]>([])
const onAnalysisClick = () => {
  const paramList = urlUtil.analysisUrl(url.value)
  list.value = paramList
  mainStore.setParamList(props.listId, paramList)
}
const onRecreateClick = () => {
  const newUrl = urlUtil.recreateUrl(url.value, list.value)
  commonUtil.copyTextToClipBoard(newUrl)
}
const clearUrl = () => {
  url.value = ''
}
</script>

<template>
  <div class='list-container'>
    <!-- 输入框 -->
    <div class='input-area'>
      <input type='text' class='url-input' v-model='url' placeholder='在这里贴入想要修改参数的网页链接' @blur='onAnalysisClick' />
      <div class='clear-btn' @click.stop='clearUrl'>X</div>
    </div>
    <!-- 功能按键 -->
    <div class='button-area'>
      <button @click.stop='onAnalysisClick'>重新解析旧链接</button>
      <button @click.stop='onRecreateClick'>生成新链接并复制</button>
    </div>
    <!-- 参数列表 -->
    <column-list :list='list' />
  </div>
</template>

<style lang='less' scoped>
@import "src/common-less/btn.less";
@import "src/common-less/flex.less";
@import "src/common-less/scrollbar.less";
.list-container {
  .mixins-column-flex();
}

.input-area {
  margin-bottom: .4rem;

  .url-input {
    font-size: 20px;
    border: #00000077 1px solid;
    padding: .4rem 2.5rem .4rem .5rem;
    border-radius: .4rem;
    width: 500px;
    .mixins-no-scrollbar();
  }

  .clear-btn {
    position: absolute;
    right: .5rem;
    top: 50%;
    transform: translateY(-50%);
    color: #4c4c4c;
    opacity: .5;
    .mixins-btn(2px; calc(-50% + 2px));
  }
}

.button-area {
  button {
    border: #00000077 1px solid;
    background: #4c4c4c;
    color: #e5dcdc;
    padding: .2em .5em;
    margin: .4em 1em;
    border-radius: 8px;
    font-size: 20px;
    .mixins-btn();

    &:hover {
      background: #737373;
    }
  }
}
</style>
