<template>
  <div class="tags">
    <CardTags class="search" :tags="tags"></CardTags>
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
    const http = inject('$http')
    const data = ref([])
    const colors = inject('randomColor')
    const onload = async () => {
      const res = await http.article.getAssignedArticle({})
      const resTags = await http.tags.getTag()
      tags = resTags.data.data
      data.value = res.data.data
      const tags = new Array(data.value.length).fill(0).map(() => [])
      res.data.data.forEach((item, i) => {
        item.tags.forEach((tag) => {
          tags[i].push({
            name: tag, color: colors({
              luminosity: 'bright',
              format: 'rgb' // e.g. 'rgb(225,200,20)'
            })
          })
        })
      })
      data.value.forEach((item, i) => {
        item.tags = tags[i]
      })
      console.log(data, tags)
      // page.pageSize = 10
      // page.total = res.data.total
    }
    onBeforeMount(onload)
    return {
      tags,
      articles,
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