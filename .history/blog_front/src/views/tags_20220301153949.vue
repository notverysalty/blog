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
    background-color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20%;
    display: flex;
    justify-content: center;
    .search {
      flex: 1;
    }
  }
</style>