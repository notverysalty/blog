<template>
  <a-card :title="title" :bordered="false">
    <a-table :row-key="record => record" :columns="columns" :data-source="data" :loading="loading" :pagination="pagination" class="table">
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
      <template #action>
        <span @click="actionClick">
          <a id="edit">编辑</a>
          <a-divider type="vertical" />
          <a id="delete">删除</a>
          <a-divider type="vertical" />
          <a id="read">查看</a>
        </span>
      </template>
    </a-table>
  </a-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'myTable',
   props: {
    title: String,
    columns: Array,
    data: Array,
    loading: {
      type: Boolean,
      default: false
    },
    pagination: Object
  },
  setup(props, context) {
    console.log(props.data)
    const actionClick = (e) => {
      context.emit('actionClick', e.target.id)
    }
    return {
      actionClick
    }
  }
});
</script>

<style lang="scss" scoped>
  .table {
    text-align: center;
  }
</style>