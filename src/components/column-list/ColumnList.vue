<script setup lang='ts'>
import {computed, PropType} from 'vue'
import {UrlParam} from '../../type/UrlParam'
import {useMainStore} from '../../stores/mainUrl'

const props = defineProps({
  list: {
    type: Array as PropType<UrlParam[]>,
    default: () => []
  }
})
const mainStore = useMainStore()

const selectKey = computed(() => mainStore.selectKey)

const setSelectKey = (key?:string) => {
  mainStore.setSelectKey(key)
}
</script>

<template>
  <div class='list-main-container'>
    <div v-for='(item) in list' :key='item.key' class='list-item'
         :class='{unActive: selectKey && item.key !== selectKey}'
         @mouseenter.stop='setSelectKey(item.key)' @mouseleave.stop='setSelectKey()'>
      <textarea class='list-item-key' v-model='item.key' @blur.stop='setSelectKey(item.key)' />
      <textarea class='list-item-value' v-model='item.value' />
    </div>
  </div>
</template>

<style src='./columnList.less'></style>

