<script setup lang="ts">
import MainUrlList from './components/UrlList.vue'

</script>

<template>
  <div id='container'>
    <main-url-list list-id='main'></main-url-list>
    <main-url-list list-id='sub'></main-url-list>
  </div>
</template>

<style>
body {
  background: #000000CC;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
}

textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#container {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
</style>
