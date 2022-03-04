<template>
  <Card class="myInformation"> 
    <template v-slot:content>
      <div><img src="../../../public/img/like.png" alt=""></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
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
  }
</style>