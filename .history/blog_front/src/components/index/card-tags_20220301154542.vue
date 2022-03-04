<template>
  <Card class="card-tags" :width="'100%'" height="7rem">
    <template v-slot:content>
      <section class="tags">
        <Tag
          v-for="tag in tags"
          :key="tag.name"
          :bgColor="tag.bgColor"
          :title="tag.name"
        ></Tag>
      </section>
    </template>
  </Card>
</template>

<script>
import Card from "../card.vue";
import Tag from '../tag.vue'
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  components: {
    Card,
    Tag
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.card-tags {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 1.2rem;
  border-radius: 8px;
  background: #fff;
  transition: all 0.3s;
  display: flex;
  flex-wrap: wrap;
  .tags {
    width: 100%;
    font-size: 0.8rem;
  }
}
</style>