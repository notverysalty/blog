<template>
  <div class="archive">
    <div class="content">
      <div class="left">
        <img src="../../public/img/like.png" alt="" />
      </div>
      <div class="right"><TimeLine :activities="data"></TimeLine></div>
    </div>
    <div class="example-pagination-block pagination">
      <el-pagination
        layout="prev, pager, next"
        :page-size="10"
        :total="total"
        @current-change="handleChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import TimeLine from "../components/TimeLine";
import { ref, inject, onBeforeMount } from "vue";
export default {
  components: {
    TimeLine,
  },
  setup() {
    const http = inject("$http");
    const data = ref([]);
    const total = ref(0);
    const onload = async (page = 0, num = 10) => {
      const res = await http.article.getAssignedArticle({
        page: page * num,
        num,
      });
      data.value = res.data.data;
      console.log(data);
      total.value = res.data.total;
      // page.pageSize = 10
      // page.total = res.data.total
    };
    onBeforeMount(onload);
    const handleChange = (cur) => {
      onload(cur - 1);
    };
    return {
      data,
      total,
      handleChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.archive {
  padding-top: 5rem;
  background-color: white;
  display: flex;
  justify-content: center;
  min-height: 83vh;
  align-items: center;
  flex-wrap: wrap;
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
    // > div {
    //   flex: 1;
    // }
    .left {
      height: 40rem;
      // padding-left: 20%;
      width: 30%;
      text-align: center;
      img {
        border-radius: .5rem;
        width: 80%;
        height: 100%;
        max-width: 350px;
      }
    }
    .right {
      width: 30%;
    }
  }
  .pagination {
    padding: 1.2rem 0;
  }
}
</style>