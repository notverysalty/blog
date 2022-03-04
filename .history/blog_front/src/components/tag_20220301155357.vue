<template>
  <div class="tag" :style="{backgroundColor: color, color: bgColor, border: '1px solid ' + bgColor}">
      {{ title }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    bgColor: {
      type: String,
      default: 'white'
    },
    color: {
      type: String,
      default: 'white',
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  box-sizing: border-box;
  height: 1.4rem;
  line-height: 0.5rem;
  margin-right: 0.6rem;
  padding: 0.4rem 0.6rem;
  border-radius: 0.3rem;
}
</style>