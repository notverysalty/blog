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
        bgColor: "red",
      },
      {
        name: "html",
        bgColor: "#ccc",
      },
      {
        name: "css",
        bgColor: "green",
      },
      {
        name: "jq",
        bgColor: "yellow",
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
      width: 75%;

    }
    .slider {
      width: 25%;
    }
  }
</style>