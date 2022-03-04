<template>
  <div class="home">
    <div class="content">
      <div>
        <CardWrap title="hh" date="hh" :tags="tags"></CardWrap>
      </div>
    </div>
    <div class="slider">

    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import CardWrap from "../components/index/card-wrap.vue";
export default defineComponent({
  setup() {
    const tags = [
      {
        name: "js",
        color: "red",
      },
      {
        name: "html",
        color: "#ccc",
      },
      {
        name: "css",
        color: "green",
      },
      {
        name: "jq",
        color: "yellow",
      },
    ];
    return {
      tags,
    };
  },
  components: {
    CardWrap,
  },
});
</script>

<style lang="scss" scoped>
  .home {
    box-sizing: border-box;
    padding: 0 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .content {
      width: 70%;
    }
  }
</style>