<template>
  <div>
    <a-modal title="Title" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk" @cancel="handleCancel">
      <p>{{ modalText }}</p>
    </a-modal>
  </div>
</template>
<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'ShowModl',
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  setup(props, ctx) {
    const modalText = ref('Content of the modal')
    const confirmLoading = ref(false)

    const handleCancel = () => {
      ctx.emit('handleCancel')
    }
    const handleOk = () => {
      ctx.emit('handleOk')
    }

    return {
      modalText,
      confirmLoading,
      handleOk,
      handleCancel
    }
  },
})
</script>