<script setup lang='ts'>
import {ref} from 'vue'

defineProps<{
  text: string
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
const handler = () => emit('click')

const isUnfold = ref<boolean>(false)

const unfold = () => (isUnfold.value = true)
const fold = () => (isUnfold.value = false)
</script>

<template>
  <div class='fold-btn-area' @click.stop='handler'
       @mouseenter.stop='unfold' @mouseleave.stop='fold'>
    <div class='round-btn'>
      <slot>{{text.substring(0, 1)}}</slot>
    </div>
    <div class='fold-text' v-show='isUnfold'>{{text}}</div>
  </div>
</template>

<style lang='less' scoped>
.fold-btn-area {
  padding: 1px;
  display: flex;
  flex-direction: row-reverse;
  border-radius: 13px;
  background: #4c4c4c;
  color: white;
  cursor: pointer;
  user-select: none;
}

.fold-text {
  font-size: 14px;
  padding: 0 .2em;
  border-radius: inherit;
}

.round-btn {
  font-size: 16px;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  background: #4faffd;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
