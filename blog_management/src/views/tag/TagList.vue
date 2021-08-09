<template>
  <div>
    <MyTable title="标签列表" :loading="loading" :pagination="page" :isButton="true" :data="data" :columns="columns" @actionClick="actionClick" @addClick="addClick" />
    <ShowModal :title="title" :visible="visible" @handleOk="handleOk" @handleCancel="handleCancel">
      <a-form-item style="width: 70%;" label="标签名">
        <a-input v-model:value="value" />
      </a-form-item>
    </ShowModal>
  </div>
</template>
<script>
import { defineComponent, inject, onBeforeMount, ref } from 'vue'
import MyTable from '../../components/MyTable.vue'
import ShowModal from '../../components/ShowModal.vue'
const columns = [
  {
    title: '标签名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '关联数量',
    dataIndex: 'num',
    key: 'num',
  },
  {
    title: '是否启用',
    dataIndex: 'status',
    key: 'status',
  },{
    title: 'Action',
    key: 'action',
    slots: {
      customRender: 'action',
    },
  },
]
const actionClick = (key) => {
  console.log(key)
}
export default defineComponent({
  setup() {
    const http = inject('$http')
    const visible = ref(false)
    const title = '添加标签'
    const value = ref('')
    const data = ref([])
    const loading = ref(true)
    const page = {}
    const getTag = async () => {
      const res = await http.tag.getTag()
      data.value = res.data.data
      loading.value = false
      page.pageSize = 10
      page.total = res.data.total
    }
    onBeforeMount(getTag)
    const addClick = () => {
      visible.value = true
    }
    const handleCancel = () => {
      visible.value = false
    }
    const handleOk = async () => {
      if (!value.value) {
        return
      }
      const res = await http.tag.addTag({name: value.value})
      console.log(res)
      getTag()
      visible.value = false
    }
    return {
      data,
      columns,
      visible,
      title,
      value,
      loading,
      page,
      actionClick,
      addClick,
      handleOk,
      handleCancel,
    }
  },

  components: {
    MyTable,
    ShowModal,
  },
})
</script>

<style lang="scss" scoped>
</style>