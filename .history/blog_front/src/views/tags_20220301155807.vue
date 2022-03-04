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
}
</script>

<style lang="scss" scoped>
  .tags {
    margin-top: 2rem;
    background-color: #f4f4f4;
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