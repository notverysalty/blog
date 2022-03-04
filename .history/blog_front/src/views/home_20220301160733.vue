<template>
  <div class="home">
    <div class="content">
      <div>
        <CardWrap v-for="article in articles" :key="article.title" :title="article.title" :date="article.date" :tags="article.tags"></CardWrap>
      </div>
    </div>
    <div class="slider"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import CardWrap from "../components/index/card-wrap.vue";
export default defineComponent({
  setup() {
    const articles = [
      {
        title: "关于我的博客",
        date: "2022-3-1",
        tags: [
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
        ],
      },
      {
        title: "关于我的博客",
        date: "2022-3-1",
        tags: [
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
        ],
      },
      {
        title: "关于我的博客",
        date: "2022-3-1",
        tags: [
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
        ],
      },
      {
        title: "关于我的博客",
        date: "2022-3-1",
        tags: [
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
        ],
      },
      {
        title: "关于我的博客",
        date: "2022-3-1",
        tags: [
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
        ],
      },
    ];
    return {
      articles
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