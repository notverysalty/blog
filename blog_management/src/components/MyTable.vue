<template>
  <a-card :title="title" :bordered="false">
    <a-table :columns="columns" :data-source="data" class="table">
      <template #tags="{ text: tags }">
        <span>
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template #action="{ text }">
        <span v-for="(item, index) in text" :key="item">
          <a-divider v-if="index !== 0" type="vertical" />
          <a @click="actionClick(item.even)">{{ item.name }}</a>
        </span>
      </template>
    </a-table>
  </a-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'myTable',
  setup(props, context) {
    const actionClick = (key) => {
      context.emit('actionClick', key)
    }
    return {
      actionClick
    }
  },
  props: {
    title: String,
    columns: Array,
    data: Array
  }
});
</script>

<style lang="scss" scoped>
  .table {
    text-align: center;
  }
</style>