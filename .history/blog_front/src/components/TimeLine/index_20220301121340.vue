<template>
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp"
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
        color: 'rgb(121, 121, 121);'
      },
      {
        content: "Approved",
        timestamp: "2018-04-13",
        color: 'rgb(121, 121, 121);'
      },
      {
        content: "Success",
        timestamp: "2018-04-11",
        color: 'rgb(121, 121, 121);'
      },
    ];
    return {
      activities,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>