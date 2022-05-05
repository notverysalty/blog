<template>
  <el-timeline>
    <el-timeline-item
      v-for="activity in activities"
      :key="activity.article_id"
      :timestamp="activity.create_time"
      :hollow="true"
    >
      <a style="cursor: pointer;color:#2d8cf0" @click="handleClick(activity.article_id)">
        {{ activity.title }}
      </a>
    </el-timeline-item>
  </el-timeline>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  props: {
    activities: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const router = useRouter()
    const handleClick = (id) => {
      router.push({name: 'article', params: { id }})
    }
    return {
      handleClick
    }
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
.active {
  color: $main-color !important;
}
</style>