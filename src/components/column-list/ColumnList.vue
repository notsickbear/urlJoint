<script setup lang='ts'>
import {computed} from 'vue'
import {UrlParam} from '../../type/UrlParam'
import {useMainStore} from '../../stores/mainUrl'
import FoldRoundBtn from '../round-btn/FoldRoundBtn.vue'

const props = withDefaults(
    defineProps<{
      list?: UrlParam[]
    }>(),
    {
      list: () => []
    }
)
const mainStore = useMainStore()

const selectKey = computed(() => mainStore.selectKey)

const setSelectKey = (key?: string) => {
  mainStore.setSelectKey(key)
}

const deleteKey = (key: string) => {
  props.list.splice(props.list.findIndex((param) => param.key === key), 1)
}

const setAllParam = (param: UrlParam) => {
  mainStore.setOtherParam(param)
}
</script>

<template>
  <div class='list-main-container'>
    <div v-for='(item) in list' :key='item.key' class='list-item'
         :class='{unActive: selectKey && item.key !== selectKey}'
         @mouseenter.stop='setSelectKey(item.key)' @mouseleave.stop='setSelectKey()'>
      <textarea class='list-item-key' v-model='item.key' @blur.stop='setSelectKey(item.key)' />
      <textarea class='list-item-value' v-model='item.value' />
      <div class='fold-btns-area' v-show='selectKey && item.key === selectKey'>
        <fold-round-btn class='btn' text='删除这个参数' @click='deleteKey(item.key)'/>
        <fold-round-btn class='btn' text='应用到所有相同键名的参数' @click='setAllParam(item)'/>
      </div>
    </div>
  </div>
</template>

<style src='./columnList.less'></style>

