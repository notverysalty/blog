<template>
  <div class="article">
    <Card class="title"></Card>
    <div class="content" v-html="'<p>你好</p>'"></div>
  </div>
</template>

<script>
import Card from '../components/card.vue'
export default {
  components: {
    Card
  },
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
  .article {
    width: 100%;
    padding: 2rem 15%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .title {
      flex: 1;
    }
    .content {
      width: 100%;
    }
  }
</style>