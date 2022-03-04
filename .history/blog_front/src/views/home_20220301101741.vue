<template>
  <CardWrap title="hh" date="hh" :tags="[]"></CardWrap>
</template>

<script>
import { defineComponent } from "vue";

import CardWrap from "../components/index/card-wrap.vue";
export default defineComponent({
  setup() {},
  components: {
    CardWrap,
  },
});
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
</style>