<template>
  <div class="tags">
    <CardTags class="search"></CardTags>
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