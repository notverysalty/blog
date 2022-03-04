<template>
  <div class="archive">
    <TimeLine></TimeLine>
  </div>
</template>

<script>
import TimeLine from "../components/TimeLine";
export default {
  components: {
    TimeLine,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
  .archive {
    background-color: white;  
  }
</style>