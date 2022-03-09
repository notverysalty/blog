<template>
  <div class="archive">
    <div class="content">
      <div class="left">
        <img src="../../public/img/like.png" alt="" />
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
import { ref, inject, onBeforeMount } from 'vue'
export default {
  components: {
    TimeLine,
  },
  setup() {
    const http = inject('$http')
    const data = ref([])
    const onload = async () => {
      const res = await http.article.getAssignedArticle({});
      data.value = res.data.data;
      console.log(data)
      // page.pageSize = 10
      // page.total = res.data.total
    };
    onBeforeMount(onload);
    return {
      data
    }
  },
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