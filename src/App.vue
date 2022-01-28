<script setup lang="ts">
import ColumnList from './components/ColumnList.vue'
import {ref} from 'vue'

const list1 = ref([
  { value: "Jesus", key: 1 },
  { value: "Paul", key: 2 },
  { value: "Peter", key: 3 }
])

const list2 = ref([
      { value: "Luc", key: 5 },
      { value: "Thomas", key: 6 },
      { value: "John", key: 7 }
    ]
)
</script>

<template>
  <div id='container'>
    <ColumnList :list='list1'></ColumnList>
    <ColumnList :list='list2'></ColumnList>
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
