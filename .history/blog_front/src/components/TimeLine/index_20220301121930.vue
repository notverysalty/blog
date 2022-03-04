<template>
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp"
      :color="activity.color"
    >
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<script>
export default {
  setup() {
    const activities = [
      {
        content: "Event start",
        timestamp: "2018-04-15",
        color: "#DE5F55",
      },
      {
        content: "Approved",
        timestamp: "2018-04-13",
        color: "#DE5F55",
      },
      {
        content: "Success",
        timestamp: "2018-04-11",
        color: "#DE5F55",
      },
    ];
    return {
      activities,
    };
  },
};
</script>

<style lang="scss">
li {
  &:active {
    color: $main-color !important;
  }
  &:hover {
    color: $main-color !important;
  }
}
</style>