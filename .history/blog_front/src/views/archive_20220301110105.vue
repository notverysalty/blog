<template>
  <div class="archive">
    <div>
      <div class="left"></div>
      <TimeLine></TimeLine>
      <div class="right"></div>
    </div>
    <div class="example-pagination-block">
      <el-pagination layout="prev, pager, next" :total="100"></el-pagination>
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