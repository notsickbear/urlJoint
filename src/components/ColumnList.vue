<script setup lang="ts">
const props = defineProps({
  list: Array
})
</script>

<template>
  <div class='list-container'>
    <div class='list-header'>表头</div>
    <div class='list-main-container'>
      <div v-for='(item) in list' :key='item.key' class='list-item'>
        <div class='list-item-key'>{{ item.key }}</div>
        <div class='list-item-value'>{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<style src='./columnList.less'></style>

