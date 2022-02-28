<script setup lang="ts">
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="list-main-container">
    <div v-for="(item) in list" :key="item.key" class="list-item">
      <div class="list-item-key">{{ item.key }}</div>
      <input class="list-item-value" v-model='item.value'/>
    </div>
  </div>
</template>

<style src='./columnList.less'></style>

