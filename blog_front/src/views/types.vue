<template>
  <div class="tags">
    <CardTags class="search" :tags="tags" @handleClick="handleClick"></CardTags>
    <div class="content">
      <CardWrap
        class="item"
        v-for="article in data"
        :key="article.article_id"
        :id="article.article_id"
        :title="article.title"
        :date="article.create_time"
        :tags="article.tags"
      ></CardWrap>
    </div>
  </div>
</template>

<script>
import CardTags from "../components/index/card-tags.vue";
import CardWrap from "../components/index/card-wrap.vue";
import { inject, ref, onBeforeMount } from "vue";
import { giveColor, tagsColor } from "../util";
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
    const tags = ref([]);
    const http = inject("$http");
    const data = ref([]);
    const onload = async () => {
      const res = await http.article.getAssignedArticle({});
      const resTags = await http.tag.getTag();
      tags.value = tagsColor(resTags.data.data);
      data.value = res.data.data;
      const articleTags = giveColor(res.data.data);
      data.value.forEach((item, i) => {
        item.tags = articleTags[i];
      });
      // page.pageSize = 10
      // page.total = res.data.total
    };
    onBeforeMount(onload);

    const handleClick = async (id) => {
      const query = {};
      if (id !== "全部") {
        query["tags"] = id;
      }
      const res = await http.article.getAssignedArticle({ term: query });
      const articleTags = giveColor(res.data.data);
      data.value = res.data.data;
      data.value.forEach((item, i) => {
        item.tags = articleTags[i];
      });
    };
    return {
      tags,
      data,
      articles,
      handleClick,
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
  padding: 0 30%;
  min-width: 700px;
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