<template>
  <section class="tag">
    <article>
      {{title}}
    </article>  
  </section>    
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    bgColor: {
      type: String,
      required: true
    },
    bdColor: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
  .tag {
    
  }
</style>