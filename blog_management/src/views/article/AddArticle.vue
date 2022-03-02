<template>
  <ArticleBase />
  <!-- <v-md-editor v-model="text" height="400px"></v-md-editor> -->
</template>

<script>
import { defineComponent } from 'vue'
import ArticleBase from '../../components/article/ArticleBase.vue'
export default defineComponent({
  components: {
    ArticleBase
  },
  setup () {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
