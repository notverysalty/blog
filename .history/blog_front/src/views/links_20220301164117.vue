<template>
  <div class="links">
    <Card class="card">
      <template v-slot:content>
        <div>yisakomi</div>
        <div>www.yisakomi.cn</div>
        <div>叙说我的生活</div>
      </template>
    </Card>
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
  .links {
    width: 100%;
  }
</style>