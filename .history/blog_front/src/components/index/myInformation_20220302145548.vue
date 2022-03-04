<template>
  <Card class="myInformation"> 
    <template v-slot:content>
      <div class="avatar"><img src="../../../public/img/like.png" alt=""></div>
      <div class="name"></div>
      <div class="info"></div>
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
    display: flex;
    height: 20rem;
    .avatar {
      width: 100%;
      height: 4rem;
    }
    .name {
      height: 1rem;
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