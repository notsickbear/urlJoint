<script setup lang='ts'>
import {computed} from 'vue'
import {UrlParam} from '../../type/UrlParam'
import {useMainStore} from '../../stores/mainUrl'
import FoldRoundBtn from '../round-btn/FoldRoundBtn.vue'
import commonUtil from '../../funs/commonUtil'
import {Notify} from 'vant'

const props = withDefaults(
    defineProps<{
      // 参数列表
      list?: UrlParam[]
    }>(),
    {
      list: () => []
    }
)
const mainStore = useMainStore()

// 选中的参数 key
const selectKey = computed(() => mainStore.selectKey)

// 设置选中的参数 key
const setSelectKey = (key?: string) => {
  mainStore.setSelectKey(key)
}

// 根据 key 删除参数
const deleteKey = (key: string) => {
  props.list.splice(props.list.findIndex((param) => param.key === key), 1)
}

// 设置所有相同 key 的参数（包括其他列表）为当前参数的值
const setAllParam = (param: UrlParam) => {
  mainStore.setOtherParam(param)
}

// 添加先的参数
const addNewParam = () => {props.list.push({id: props.list.length + 1, key: '', value: ''})}

// 复制参数的值
const copyValue = (value: string | undefined) => {
  if (value) commonUtil.copyTextToClipBoard(value)
      .then(() => Notify({ type: 'success', message: '已复制选中参数的值'}))
  else Notify({ type: 'warning', message: '复制的值为空值'})
}

// 粘贴并替换值
const pasteValue = (param: UrlParam) => {
  commonUtil.getTextFromClipBoard()
      .then((text) => {
        param.value = text
        Notify({ type: 'success', message: '已粘贴并替换选中参数的值'})
      })
      .catch(() => Notify({ type: 'warning', message: '粘贴失败'}))
}
</script>

<template>
  <div class='list-main-container'>
    <!-- 列表部分 -->
    <div v-for='(item) in list' :key='item.id' class='list-item'
         :class='{unActive: selectKey && item.key !== selectKey}'
         @mouseenter.stop='setSelectKey(item.key)' @mouseleave.stop='setSelectKey()'>
      <!-- 参数键名 -->
      <textarea class='list-item-key' v-model='item.key' @blur.stop='setSelectKey(item.key)' />
      <!-- 参数值 -->
      <textarea class='list-item-value' v-model='item.value' />
      <!-- 侧边功能按钮 -->
      <transition name='fold-btns'>
        <div class='fold-btns-area' v-show='selectKey && item.key === selectKey'>
          <fold-round-btn class='btn' text='删除' @click='deleteKey(item.key)'/>
          <fold-round-btn class='btn' text='同步值' @click='setAllParam(item)'/>
          <fold-round-btn class='btn' text='复制值' @click='copyValue(item.value)'/>
          <fold-round-btn class='btn' text='清空值' @click='item.value = ""'/>
          <fold-round-btn class='btn' text='粘贴并替换值' @click='pasteValue((item))'/>
        </div>
      </transition>
    </div>
    <!-- 新增 -->
    <div class='list-item add-item' @click.stop='addNewParam'><span>+</span></div>
  </div>
</template>

<style src='./columnList.less'></style>

