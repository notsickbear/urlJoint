<script setup lang="ts">
import { ref } from 'vue';
import { useMainUrlStore } from '../../stores/mainUrl';
import { UrlParam } from '../../type/UrlParam';

const mainUrlStore = useMainUrlStore();
const props = defineProps({
  isMainUrl: {
    type: Boolean,
    default: false
  }
})

const url = ref<string>('')
const list = ref<UrlParam[]>([])

const onBlur = (event: FocusEvent) => {
  const val: string = event.target?.value || ''
  url.value = val
  list.value = val.split('?')[1].split('&').map((param) => {
    const index = param.indexOf('=')
    return {
      key: param.substring(0, index),
      value: param.substring(index + 1)
    }
  })
  if (props.isMainUrl) {
    mainUrlStore.setMainParamList(list.value)
  } else {
    let formatList = new Array<UrlParam>(mainUrlStore.mainParamList.length)
      .fill({ key: '', value: '' })
    list.value.forEach((param) => {
      const index = mainUrlStore.paramKeyIndexMap.get(param.key)
      if (index > -1) formatList[index] = param
      else formatList.push(param)
    })
    list.value = formatList
  }
}
</script>

<template>
  <div class="list-container">
    <input class="list-header" @blur.stop="onBlur" />
    <div class="list-main-container">
      <div v-for="(item) in list" :key="item.key" class="list-item">
        <div class="list-item-key">{{ item.key }}</div>
        <div class="list-item-value">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<style src='./columnList.less'></style>

