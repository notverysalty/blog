<template>
  <Card class="myInformation" height="20rem" width="100%">
    <template v-slot:content>
      <div class="avatar"></div>
      <div class="name">yisakomi</div>
      <div class="info">
        <div class="left"><i>文章</i><i>21</i></div>
        <div class="right"><i>标签</i><i>11</i></div>
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
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .like {
    height: 2rem;
  }
  .icons {
    height: 3rem;
  }
}
</style>