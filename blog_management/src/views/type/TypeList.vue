<template>
  <div>
    <MyTable title="类型列表" :loading="loading" :pagination="page" :isButton="true" :data="data" :columns="columns" @actionClick="actionClick" @addClick="addClick" :rowEdit="true" />
    <ShowModal :title="title" :visible="visible" @handleOk="handleOk" @handleCancel="handleCancel">
      <a-form-item style="width: 70%;" label="类型名">
        <a-input v-model:value="value" />
      </a-form-item>
    </ShowModal>
  </div>
</template>
<script>
import { defineComponent, inject, onBeforeMount, ref } from 'vue'
import MyTable from '../../components/MyTable.vue'
import ShowModal from '../../components/ShowModal.vue'
import { message } from 'ant-design-vue'
const columns = [
  {
    title: '类型名',
    key: 'name',
    width: '25%',
    slots: {
      customRender: 'name',
    },
  },
  {
    title: '关联数量',
    dataIndex: 'num',
    key: 'num',
  },
  {
    title: '是否启用',
    key: 'status',
    slots: {
      customRender: 'status',
    },
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
    // 定义变量
    const http = inject('$http')
    const title = '添加类型'
    const visible = ref(false)
    const value = ref('')
    const data = ref([])
    const loading = ref(true)
    const page = {}
    // 定义方法
    const getType = async () => {
      const res = await http.type.getType()
      data.value = res.data.data
      loading.value = false
      page.pageSize = 10
      page.total = res.data.total
    }
    const actionClick = async (key, target) => {
      let res = ''
      switch (key) {
        case 'edit':
          res = await http.type.updateType(target)
          break
        case 'delete':
          res = await http.type.removeType({ name: target.name })
          message.success('删除成功')
          break
        case 'read':
          break
      }
      console.log(res)
      getType()
    }
    onBeforeMount(getType)
    const addClick = async () => {
      visible.value = true
    }
    const handleCancel = () => {
      value.value = ''
      visible.value = false
    }
    const handleOk = async () => {
      if (!value.value) {
        return
      }
      const res = await http.type.addType({ name: value.value })
      console.log(res)
      message.success(res.data.msg)
      getType()
      value.value = ''
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