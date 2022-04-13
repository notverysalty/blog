<template>
  <Card class="reply" width="100%" height="17rem">
    <template v-slot:content>
      <section class="header">
        <el-input v-model="input" placeholder="昵称" />
        <el-input v-model="input" placeholder="邮箱" />
      </section>
      <section class="edit">
        <el-input v-model="input" type="textarea" :autosize="{ minRows: 7, maxRows: 7 }" placeholder="Please input" />
      </section>
      <section class="submit">
        <el-button>提交</el-button>
      </section>
    </template>
  </Card>
</template>

<script>
import Card from "../card.vue";
export default {
  components: {
    Card,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.reply {
  border: 1px dashed #ccc;
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