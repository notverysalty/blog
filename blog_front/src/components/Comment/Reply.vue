<template>
  <Card class="reply">
    <section class="header">
      <el-input v-model="input" placeholder="Please input" />
      <el-input v-model="input" placeholder="Please input" />
    </section>
    <section class="edit">
      <el-input v-model="input" placeholder="Please input" />
    </section>
    <section class="submit">
      <el-button>中文</el-button>
    </section>
  </Card>
</template>

<script>
import Card from '../card.vue'
export default {
  components: {
    Card
  },
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>

</style>