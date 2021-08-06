<template>
  <div>
    <MyTable title="我的文章" :loading="loading" :pagination="page" :data="data1" :columns="columns" @actionClick="actionClick" />
  </div>
</template>
<script>
import { defineComponent, inject, onBeforeMount, ref } from 'vue'
import MyTable from '../../components/MyTable.vue'
const columns = [
  {
    title: '文章标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '文章类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '文章标签',
    key: 'tags',
    dataIndex: 'tags',
    slots: {
      customRender: 'tags',
    },
  },
  {
    title: '观看数量',
    dataIndex: 'watch_num',
    key: 'watch_num',
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Action',
    key: 'action',
    slots: {
      customRender: 'action',
    },
  },
]
const data = [
  {
    key: '1',
    title: 'John Brown',
    watch_num: 32,
    type: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    action: [
      {
        name: '编辑',
        even: 'edit',
      },
      {
        name: '删除',
        even: 'edit',
      },
      {
        name: '查看',
        even: 'edit',
      },
    ],
  },
  {
    key: '2',
    title: 'Jim Green',
    watch_num: 42,
    type: 'London No. 1 Lake Park',
    tags: ['loser'],
    action: [
      {
        name: '编辑',
        even: 'edit',
      },
      {
        name: '删除',
        even: 'edit',
      },
      {
        name: '查看',
        even: 'read',
      },
    ],
  },
  {
    key: '3',
    title: 'Joe Black',
    watch_num: 32,
    type: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    action: [
      {
        name: '编辑',
        even: 'edit',
      },
      {
        name: '删除',
        even: 'edit',
      },
      {
        name: '查看',
        even: 'edit',
      },
    ],
  },
]
const actionClick = (key) => {
  console.log(key)
}
export default defineComponent({
  setup() {
    const http = inject('$http')
    let loading = false
    const page = {}
    const data1 = ref([])
    onBeforeMount(async () => {
      const res = await http.article.getAssignedArticle({})
      data1.value = res.data.data
      console.log(data1)
      loading = true
      page.pageSize = 10
      page.total = data1.value.length
    })
    return {
      data,
      data1,
      columns,
      page,
      loading,
      actionClick,
    }
  },

  components: {
    MyTable,
  },
})
</script>

<style lang="scss" scoped></style>
