<template>
  <div class="article">
    <Card class="title" height="9rem">
      <template v-slot:content>
        <h2>{{data.title}}</h2>
        <div class="information">
          <div class="date">{{data.date}}</div>
          <div class="watch">观看数：{{data.watch}}</div>
        </div>
      </template>
    </Card>
    <!-- <div class="content" v-html="'<p>你好</p>'"></div> -->
    <v-md-editor :model-value="data.body" mode="preview"></v-md-editor>
  </div>
</template>

<script>
import Card from '../components/card.vue'
import { reactive } from 'vue'
export default {
  components: {
    Card
  },
  setup() {
    const data = reactive({
      title: '标题',
      date: '2022-3-3',
      watch: '111',
      body: '# we are happy'
    })
    return {
      data
    }
  },
}
</script>

<style lang="scss" scoped>
  .article {
    width: 100%;
    padding: 2rem 25%;
    background-color: white;
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
          font-size: 1.1rem;
        }
      }
    }
    .content {
      width: 100%;
    }
  }
</style>