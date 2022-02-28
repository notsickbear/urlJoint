<script setup lang="ts">
import MainUrlList from './components/MainUrlList.vue'

</script>

<template>
  <div id='container'>
    <main-url-list></main-url-list>
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
}

textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#container {
  width: 80%;
  display: flex;
  justify-content: space-around;
}
</style>
