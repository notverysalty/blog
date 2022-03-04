<template>
  <Card class="card-wrap" :width="'100%'" height="7rem">
    <template v-slot:content>
      <section class="tags">
        <Tag class="tag" v-for="tag in tags" :key="tag.name" :bgColor="tag.bgColor" :title="tag.name"></Tag>
      </section>
    </template>
  </Card>
</template>

<script>
import Card from '../card.vue'
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  components: {
    Card
  },
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>

</style>