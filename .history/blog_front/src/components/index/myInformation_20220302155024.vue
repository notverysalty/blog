<template>
  <Card class="myInformation" height="20rem" width="100%">
    <template v-slot:content>
      <div class="avatar"></div>
      <div class="name">yisakomi</div>
      <div class="info">
        <div class="left"><span>文章</span><span>21</span></div>
        <div class="right"><span>标签</span><span>11</span></div>
      </div>
      <div class="like"></div>
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
  }
  .like {
    height: 2rem;
  }
  .icons {
    height: 3rem;
  }
}
</style>