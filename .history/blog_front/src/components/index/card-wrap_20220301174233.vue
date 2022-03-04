<template>
  <Card class="card-wrap" :width="'100%'" height="7rem">
    <template v-slot:content>
      <section class="title" @click="handleClick">
        <!-- <router-link :to="{name: 'article', params: {id: '1'}}"> -->
          {{ title }}
        <!-- </router-link> -->
      </section>
      <section class="date">{{ date }}</section>
      <section class="tags">
        <Tag
          class="tag"
          v-for="tag in tags"
          :key="tag.name"
          :bgColor="tag.bgColor"
          :title="tag.name"
          :color="tag.color"
        ></Tag>
      </section>
    </template>
  </Card>
</template>

<script>
import { defineComponent } from "vue";
import Card from "../card.vue";
import Tag from "../tag.vue";
import { useRouter } from 'vue-router'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
    },
  },
  components: {
    Card,
    Tag,
  },
  setup() {
    const router = useRouter()
    handleClick = () => {
      router.push({name: 'article', params: {id: '1'}})
    }
    return {
      handleClick
    }
  },
});
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
    margin-bottom: 0.3rem;
  }
  .title {
    font-weight: 600;
    font-size: 1.2rem;
  }
  .date {
    color: gray;
    font-size: 0.8rem;
  }
  .tags {
    font-size: 0.8rem;
  }
}
</style>