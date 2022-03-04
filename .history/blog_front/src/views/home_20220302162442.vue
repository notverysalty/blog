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
      <MyInformation class="myInfo"></MyInformation>
      <div class="carousel">
        <el-carousel height="350px" direction="vertical" :autoplay="true">
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="../../public/img/like.png" alt="" height="350">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import CardWrap from "../components/index/card-wrap.vue";
import MyInformation from '../components/index/myInformation.vue'
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
    MyInformation
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
    flex-wrap: wrap;
    .myInfo {
      width: 100%;
      // flex: 1;
      margin-bottom: 2rem;
    }
    .carousel {
      flex: 1;
      height: 25rem;
      border-radius: .5rem;
      img {
        width: 100%;
        border-radius: .5rem;
      }
    }
  }
}
</style>