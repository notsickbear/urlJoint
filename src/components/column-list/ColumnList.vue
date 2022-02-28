<script setup lang="ts">
import {PropType} from 'vue'
import {UrlParam} from '../../type/UrlParam'

const props = defineProps({
  list: {
    type: Array as PropType<UrlParam[]>,
    default: () => []
  }
})
</script>

<template>
  <div class="list-main-container">
    <div v-for="(item) in list" :key="item.key" class="list-item">
      <textarea class="list-item-key" v-model='item.key'/>
      <textarea class="list-item-value" v-model='item.value'/>
    </div>
  </div>
</template>

<style src='./columnList.less'></style>

