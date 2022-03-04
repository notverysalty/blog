<template>
  <div class="archive">
    <TimeLine></TimeLine>
    <!-- <Pagination></Pagination> -->
  </div>
</template>

<script>
import TimeLine from "../components/TimeLine";
import Pagination from '../components/Pagination'
export default {
  components: {
    TimeLine,
    Pagination
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
  .archive {
    background-color: white;  
  }
</style>