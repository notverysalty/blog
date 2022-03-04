<template>
  <Card class="card-wrap" :width="'100%'" height="7rem">
    <template v-slot:content>
      <section class="title">关于我的博客</section>
      <section class="date">日期</section>
      <section class="tags">
        <div class="tag" v-for="tag in tags" :key="tag.name" :style="{backgroundColor: tag.color}">
          {{tag.name}}
        </div>
      </section>
    </template>
  </Card>
</template>

<script>
import { defineComponent } from 'vue'
import Card from '../card.vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  },
  components: {
    Card
  },
  setup () {

  },
})
</script>

<style lang="scss" scoped>
.card-wrap {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 1.2rem;
  border-radius: 8px;
  background: #fff;
  transition: all 0.3s;
  > section {
    margin-bottom: .3rem;
  }
  .title {
    font-weight: 600;
    font-size: 1.2rem;
  }
  .date {
    color: gray;
    font-size: .8rem;
  }
  .tags {
    font-size: .8rem;
    > div {
      display: inline-block;
      box-sizing: border-box;
      height: 1.4rem;
      line-height: .6rem;
      margin-right: .8rem;
      padding: .5rem .8rem;
      border-radius: .3rem;
    }
  }
}
</style>