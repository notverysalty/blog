<template>
  <div class="home">
    <div class="content">
      <CardWrap
        class="item"
        v-for="article in articles"
        :key="article.title"
        :title="article.title"
        :date="article.date"
        :tags="article.tags"
      ></CardWrap>
    </div>
    <div class="slider">
      <!-- <div></div> -->
      <div class="carousel">
        <el-carousel height="300px" direction="vertical" :autoplay="true">
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="../../public/img/like.png" alt="" width="400" height="400">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
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
      articles,
    };
  },
  components: {
    CardWrap,
  },
});
</script>

<style lang="scss" scoped>
.home {
  margin-top: 1.2rem;
  box-sizing: border-box;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .content {
    width: 70%;
    .item {
      margin-bottom: 1.2rem;
    }
  }
  .slider {
    width: 30%;
    display: flex;
    padding-left: 3rem;
    justify-content: center;
    align-items: center;
    > div {
      flex: 1;
    }
    .carousel {
      
    }
  }
}
</style>