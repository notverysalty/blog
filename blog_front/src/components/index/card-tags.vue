<template>
  <Card class="card-tags" :width="'100%'" height="7rem">
    <template v-slot:content>
      <section id="tags" class="tags" @click="tagSelect">
        <Tag
          v-for="tag in tags"
          :key="tag.name"
          :class="{ checked: tag.name == select }"
          :id="tag.name"
          :bgColor="tag.bgColor"
          :color="tag.color"
          :title="tag.name"
        ></Tag>
      </section>
    </template>
  </Card>
</template>

<script>
import Card from "../card.vue";
import Tag from '../tag.vue'
import { ref } from 'vue'
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
  setup (props, context) {
    let select = ref('全部')
    const tagSelect = (e) => {
      let id = e.target.id === 'tags' ? '全部' : e.target.id
      select.value = id
      context.emit('handleClick', id)
    }
    return {
      select,
      tagSelect
    }
  },
};
</script>

<style lang="scss">
.card-tags {
  width: 100%;
  box-sizing: border-box;
  // padding: 1rem 1.2rem;
  border-radius: 8px;
  background: #fff;
  transition: all 0.3s;
  display: flex;
  flex-wrap: wrap;
  .tags {
    font-size: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    > div {
      cursor: pointer;
      &.checked {
        background-color: $main-color !important;
        border: 1px solid $main-color !important;
        color: white !important;
      }
    }
  }
}
</style>