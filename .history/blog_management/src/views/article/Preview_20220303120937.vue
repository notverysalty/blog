<template>
  <div>
    <a-page-header title="预览" sub-title="" @back="() => $router.back()" />
    <a-card :title="data.title" style="border: 0.5px solid rgb(235, 237, 240)" :bordered="false">
      <!-- <section v-html="data.body"></section> -->
      <v-md-editor :value="data.body" mode="preview"></v-md-editor>
    </a-card>
  </div>
</template>

<script>
import { defineComponent, inject, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup() {
    const data = ref({
      title: '',
      body: '',
    })
    const http = inject('$http')
    const route = useRoute()
    const onLoad = async () => {
      console.log(route.params.id)
      const id = route.params.id
      const res = await http.article.getArticle({ id })
      data.value = res.data.data
    }
    onBeforeMount(() => {
      onLoad()
    })
    return {
      data,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>