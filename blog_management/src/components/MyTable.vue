<template>
  <a-card :title="title" :bordered="false">
    <template #extra>
      <a-button v-if="isButton" type="primary" @click="addClick">新增</a-button>
    </template>
    <a-table :row-key="record => record" :columns="columns" :data-source="data" :loading="loading" :pagination="pagination" class="table">
      <template #tags="{ text: tags }">
        <span>
          <a-tag v-for="tag in tags" :key="tag" :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            ">
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'myTable',
  props: {
    title: String,
    columns: Array,
    data: Array,
    loading: {
      type: Boolean,
      default: false,
    },
    pagination: Object,
    isButton: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    console.log(props.loading)
    const actionClick = (e) => {
      context.emit('actionClick', e.target.id)
    }
    const addClick = () => {
      context.emit('addClick')
    }
    return {
      actionClick,
      addClick,
    }
  },
})
</script>

<style lang="scss" scoped>
.table {
  text-align: center;
}
</style>