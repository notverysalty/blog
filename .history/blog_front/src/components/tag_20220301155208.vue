<template>
  <div class="tag" :style="{backgroundColor: bgColor, color: color, border: color}">
      {{ title }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    bgColor: {
      type: String,
      required: true,
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