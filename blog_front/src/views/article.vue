<template>
  <div class="article">
    <Card class="title" height="9rem">
      <template v-slot:content>
        <h1>{{data.title}}</h1>
        <div class="information">
          <div class="date">{{data.date}}</div>
          <div class="watch">观看数：{{data.watch_num}}</div>
        </div>
      </template>
    </Card>
    <!-- <div class="content" v-html="'<p>你好</p>'"></div> -->
    <v-md-editor :model-value="data.body" mode="preview"></v-md-editor>
  </div>
</template>

<script>
import Card from '../components/card.vue'
import { ref, inject, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
export default {
  components: {
    Card
  },
  setup() {
    const route = useRoute()
    const http = inject('$http')
    const data = ref([])
    const onload = async () => {
      const res = await http.article.getArticle({id: route.params.id})
      data.value = res.data.data
      console.log(data)
    }
    onBeforeMount(onload)
    return {
      data
    }
  },
}
</script>

<style lang="scss" scoped>
  .article {
    width: 100%;
    padding: 0 25%;
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