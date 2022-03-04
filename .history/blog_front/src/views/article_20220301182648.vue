<template>
  <div class="article">
    <Card class="title" height="9rem">
      <template v-slot:content>
        <h2>文章标题</h2>
        <div class="information">
          <div class="date">2022-3-1</div>
          <div class="watch">观看数：111</div>
        </div>
      </template>
    </Card>
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
      box-sizing: border-box;
      .information {
        display: flex;
        justify-content: space-between;
        .date {
          color: #909399;
        }
        .watch {
          font-size: 1.2rem;
        }
      }
    }
    .content {
      width: 100%;
    }
  }
</style>