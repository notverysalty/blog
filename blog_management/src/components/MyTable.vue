<template>
  <a-card :title="title" :bordered="false">
    <template #extra>
      <a-button v-if="isButton" type="primary" @click="addClick">新增</a-button>
      <slot name="head"> </slot>
    </template>
    <a-table
      :row-key="(record) => record"
      :columns="columns"
      :data-source="data"
      :loading="loading"
      :pagination="pagination"
      class="table"
    >
      <template #name="{ record }">
        <a-input
          v-if="edit"
          v-model:value="record.name"
          style="margin: -5px 0"
        />
        <template v-else>
          {{ record.name }}
        </template>
      </template>
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
      <template #status="{ record }">
        <span>
          <a-switch
            checked-children="启用"
            un-checked-children="禁用"
            :disabled="!edit"
            v-model:checked="record.status"
          />
        </span>
      </template>
      <template #action="{ text, record }">
        <span v-if="!edit" @click="actionClick($event, text)">
          <a id="edit">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm title="Sure to cancel?" @confirm="handleDelete(text)">
            <a id="delete">删除</a>
          </a-popconfirm>
          <a-divider v-if="!rowEdit" type="vertical" />
          <a id="read" v-if="!rowEdit">查看</a>
        </span>
        <span v-else>
          <a @click="save(record)">Save</a>
          <a-divider type="vertical" />
          <a-popconfirm title="Sure to cancel?" @confirm="cancel">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
      </template>
    </a-table>
  </a-card>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

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
    rowEdit: {
      type: Boolean,
      default: false,
    },
  },
  setup (props, context) {
    onMounted (() => {
      console.log(props.data)
    })
    const edit = ref(false)
    const actionClick = (e, target) => {
      if (props.rowEdit && e.target.id === 'edit') {
        edit.value = true
        return
      }
      if (e.target.id === 'delete') {
        return
      }
      context.emit('actionClick', e.target.id, target)
    }
    const addClick = () => {
      context.emit('addClick')
    }
    const save = (record) => {
      edit.value = false
      context.emit('actionClick', 'edit', record)
    }
    const cancel = () => {
      edit.value = false
    }
    const handleDelete = (target) => {
      console.log(target)
      context.emit('actionClick', 'delete', target)
    }
    return {
      actionClick,
      addClick,
      cancel,
      handleDelete,
      save,
      edit
    }
  },
})
</script>

<style lang="scss" scoped>
.table {
  text-align: center;
}
</style>