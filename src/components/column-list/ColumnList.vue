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

const addNewParam = () => {props.list.push({key: '', value: ''})}
</script>

<template>
  <div class='list-main-container'>
    <div v-for='(item) in list' :key='item.key' class='list-item'
         :class='{unActive: selectKey && item.key !== selectKey}'
         @mouseenter.stop='setSelectKey(item.key)' @mouseleave.stop='setSelectKey()'>
      <!-- 参数键名 -->
      <textarea class='list-item-key' v-model='item.key' @blur.stop='setSelectKey(item.key)' />
      <!-- 参数值 -->
      <textarea class='list-item-value' v-model='item.value' />
      <!-- 侧边功能按钮 -->
      <transition name='fold-btns'>
        <div class='fold-btns-area' v-show='selectKey && item.key === selectKey'>
          <fold-round-btn class='btn' text='删除这个参数' @click='deleteKey(item.key)'/>
          <fold-round-btn class='btn' text='应用到所有同名参数' @click='setAllParam(item)'/>
        </div>
      </transition>
    </div>
    <!-- 新增 -->
    <div class='list-item add-item' @click.stop='addNewParam'><span>+</span></div>
  </div>
</template>

<style src='./columnList.less'></style>

