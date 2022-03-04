<template>
  <div class="tags">
    <CardTags class="search" :tags="tags"></CardTags>
    <div class="content">
      <CardWrap v-if="article in articles"></CardWrap>
    </div>
  </div>
</template>

<script>
import CardTags from "../components/index/card-tags.vue";
import CardWrap from "../components/index/card-wrap.vue";
export default {
  components: {
    CardTags,
    CardWrap,
  },
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
      }, {
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
      }, {
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
      }, {
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
      }, {
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
      articles
    };
  },
};
</script>

<style lang="scss" scoped>
.tags {
  margin-top: 2rem;
  // background-color: #f4f4f4;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .search {
    width: 100%;
    padding: 2rem 2rem;
  }
  .content {
    width: 100%;
    > section {
      margin-top: 1.2rem;
    }
  }
}
</style>