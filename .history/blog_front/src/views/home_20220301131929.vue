<template>
  <CardWrap title="hh" date="hh" :tags="tags"></CardWrap>
</template>

<script>
import { defineComponent } from "vue";

import CardWrap from "../components/index/card-wrap.vue";
export default defineComponent({
  setup() {
    const tags = [
      {
        name: 'js',
        color: 'red'
      }, {
        name: 'html',
        color: '#ccc'
      }, {
        name: 'css',
        color: 'green'
      }, {
        name: 'jq',
        color: 'yellow'
      },
    ]
    return {
      tags
    }
  },
  components: {
    CardWrap,
  },
});
</script>

<style lang="scss" scoped>
</style>