<template>
  <div class="example-pagination-block">
    <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    }
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
</style>