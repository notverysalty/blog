<template>
  <div class="tags">
    <CardTags class="search" :tags="tags"></CardTags>
    <div class="content">
      <CardWrap></CardWrap>
    </div>
  </div>
</template>

<script>
import CardTags from '../components/index/card-tags.vue'
import CardWrap from '../components/index/card-wrap.vue'
export default {
  components: {
    CardTags,
    CardWrap
  },
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
}
</script>

<style lang="scss" scoped>
  .tags {
    margin-top: 2rem;
    background-color: #d7d7d7;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .search {
      width: 100%;
      padding: 2rem 3rem;
    }
    .content {
      width: 100%;
      > section {
        margin-top: 1.2rem;
      }
    }
  }
</style>