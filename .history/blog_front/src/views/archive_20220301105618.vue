<template>
  <div class="archive">
    <TimeLine></TimeLine>
    <div class="example-pagination-block">
      <el-pagination layout="prev, pager, next" background :total="100"></el-pagination>
    </div>
  </div>
</template>

<script>
  import TimeLine from "../components/TimeLine";
  export default {
    components: {
      TimeLine,
    },
    setup() { },
  };
</script>

<style lang="scss" scoped>
  .archive {
    background-color: white;
  }
</style>