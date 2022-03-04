<template>
  <Card class="myInformation" height="20rem" width="100%">
    <template v-slot:content>
      <div class="avatar"></div>
      <div class="name">yisakomi</div>
      <div class="info">
        <div class="left"><div>文章</div><div>21</div></div>
        <div class="right"><div>标签</div><div>11</div></div>
      </div>
      <div class="like">
        <el-button type="danger" style="width: 100%;" plain>加入书签</el-button>
      </div>
      <div class="icons"></div>
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
.myInformation {
  // display: flex;
  .avatar {
    margin: 0 25%;
    box-sizing: border-box;
    border-radius: 1rem;
    background-image: url("../../../public/img/avatar.jpg");
    background-size: 100% 100%;
    height: 5rem;
  }
  .name {
    height: 2rem;
    padding-top: 0.2rem;
    font-size: 1.2rem;
    text-align: center;
  }
  .info {
    height: 4rem;
    padding: .5rem 10% 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
    text-align: center;
    > div {
      :first-child {
        font-size: 1.1rem;
        padding-bottom: .2rem;
      }
    }
  }
  .like {
    height: 2rem;
    width: 100%;
    padding: 0 10%;
  }
  .icons {
    height: 3rem;
  }
}
</style>