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
body {
  background: #000000CC;
}

* {
  position: relative;
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
