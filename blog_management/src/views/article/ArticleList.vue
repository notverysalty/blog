<template>
  <div>
    <MyTable title="我的文章" :loading="loading" :pagination="page" :data="data" :columns="columns" @actionClick="actionClick" />
  </div>
</template>
<script>
import { defineComponent, inject, onBeforeMount, ref } from 'vue'
import MyTable from '../../components/MyTable.vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
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
export default defineComponent({
  setup() {
    const http = inject('$http')
    const loading = ref(true)
    const page = {}
    const data = ref([])
    const router = useRouter()
    const onload = async () => {
      const res = await http.article.getAssignedArticle({})
      data.value = res.data.data
      console.log(data, 11111111)
      loading.value = false
      page.pageSize = 10
      page.total = res.data.total
    }
    onBeforeMount(onload)
    const actionClick = async (key, target) => {
      let res = ''
      switch (key) {
        case 'edit':
          router.push({name: 'editArticle', params: {id: target.article_id}})
          break
        case 'delete':
          res = await http.article.removeArticle({id: target.article_id})
          message.success('删除成功')
          break
        case 'read':
          router.push({name: 'preview', params: {id: target.article_id}})
          break
      }
      console.log(res)
      onload()
    }
    return {
      data,
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
