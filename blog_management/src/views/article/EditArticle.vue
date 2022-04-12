<template>
  <div>
    <a-page-header title="编辑" sub-title="" @back="() => $router.back()" />
    <ArticleBase :data="formState" :mode="'edit'" />
  </div>

</template>

<script>
import { defineComponent, inject, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import ArticleBase from '../../components/article/ArticleBase.vue'
export default defineComponent({
  components: {
    ArticleBase,
  },
  setup() {
    const formState = ref({
      title: '',
      body: '',
      type: [],
      tags: [],
    })
    const route = useRoute()
    const http = inject('$http')
    const getArticle = async () => {
      const id = route.params.id
      const res = await http.article.getArticle({ id })
      formState.value = {...res.data.data, oldtype: res.data.data.type, oldtags: res.data.data.tags}
    }
    onBeforeMount(() => {
      getArticle()
    })
    return {
      formState,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
