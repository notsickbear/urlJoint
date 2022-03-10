<script setup lang="ts">
import UrlList from './components/UrlList.vue'

</script>

<template>
  <div id='container'>
    <url-list list-id='main'></url-list>
    <url-list list-id='sub'></url-list>
  </div>
</template>

<style>
@import "common-less/golbal.less";
#container {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
</style>
