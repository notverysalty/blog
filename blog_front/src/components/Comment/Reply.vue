<template>
  <Card class="reply" width="100%" height="17rem">
    <template v-slot:content>
      <section class="header">
        <el-input v-model="reply.nickname" placeholder="昵称" />
        <el-input v-model="reply.email" placeholder="邮箱" />
      </section>
      <section class="edit">
        <el-input v-model="reply.content" type="textarea" :autosize="{ minRows: 7, maxRows: 7 }" placeholder="Please input" />
      </section>
      <section class="submit">
        <el-button @click="handleSubmit">提交</el-button>
      </section>
    </template>
  </Card>
</template>

<script>
import Card from "../card.vue"
import { reactive } from 'vue'
export default {
  components: {
    Card,
  },
  setup(props, context) {
    const reply = reactive({
      nickname: '',
      email: '',
      content: ''
    })
    const handleSubmit = () => {
      if (!reply.nickname || !reply.email || !reply.content) {
        return
      }
      context.emit('handleReply', reply)
    }
    return {
      reply,
      handleSubmit
    }
  },
};
</script>

<style lang="scss" scoped>
.reply {
  border: 1px solid #f0f0f0;
  .header {
    display: flex;
    height: 3rem;
    border-bottom: 1px dashed #ccc;
    margin-bottom: 1rem;
    div {
      flex: 1;
    }
  }
  .edit {
    height: 11rem;
  }
  .submit {
    text-align: right;
  }
}
</style>