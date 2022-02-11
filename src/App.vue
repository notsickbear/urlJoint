<script setup lang="ts">
import ColumnList from './components/column-list/ColumnList.vue'
import {ref} from 'vue'

</script>

<template>
  <div id='container'>
    <ColumnList :is-main-url="true"/>
    <ColumnList/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#container {
  width: 80%;
  display: flex;
  justify-content: space-around;
}
</style>
