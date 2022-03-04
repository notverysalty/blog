<template>
  <div class="archive">
    <div class="content">
      <div class="left">
        <img src="../../public/img/like.png" alt="">
      </div>
      <TimeLine></TimeLine>
      <div class="right"></div>
    </div>
    <div class="example-pagination-block pagination">
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
    padding-top: 5rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .content {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      > div {
        flex: 1;
      }
      .left {
        height: 40rem;
        padding-left: 20%;
        img {
          width: 80%;
          height: 100%;
        }
      }
    }
    .pagination {
      padding: 1.2rem 0;
    }
  }
</style>