<template>
  <Card class="myInformation" height="21rem" width="100%">
    <template v-slot:content>
      <div class="avatar"></div>
      <div class="name">yisakomi</div>
      <div class="info">
        <div class="left"><div>文章</div><div>21</div></div>
        <div class="right"><div>标签</div><div>11</div></div>
      </div>
      <div class="like">
        <el-button type="danger" style="width: 100%;" plain><el-icon><flag /></el-icon>加入书签</el-button>
      </div>
      <div class="icons">
        <!-- <el-icon><star /></el-icon>
        <el-icon><iphone /></el-icon>
        <el-icon><message /></el-icon> -->
      </div>
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
  padding: 5% 0;
  text-align: center;
  .avatar {
    margin: 0 25%;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 50%;
    background-image: url("../../../public/img/menma001.png");
    background-size: 100% 100%;
    width: 6rem;
    height: 6rem;
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
    height: 3rem;
    padding: .5rem 10% 0;
  }
  .icons {
    height: 3rem;
  }
}
</style>