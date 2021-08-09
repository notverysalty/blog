<template>
  <div>
    <a-modal :title="title" :visible="visible" :confirm-loading="!visible" @ok="handleOk" @cancel="handleCancel" cancelText="取消" okText="提交">
      <slot></slot>
    </a-modal>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ShowModl',
  props: {
    title: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  setup(props, ctx) {

    const handleCancel = () => {
      ctx.emit('handleCancel')
    }
    const handleOk = () => {
      ctx.emit('handleOk')
    }

    return {
      handleOk,
      handleCancel
    }
  },
})
</script>