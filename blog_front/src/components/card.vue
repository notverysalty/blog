<template>
  <section class="card" :style="{width: width, height: height}">
    <slot name="content">
    </slot>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    width: {
      type: String,
      default: '6rem'
    },
    height: {
      type: String,
      default: '5rem'
    }
  },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
  .card {
    border-radius: .5rem;
    background-color: white;
    padding: 1rem;
  }
</style>
