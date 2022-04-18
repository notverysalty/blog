<template>
  <Card class="comment" width="100%" height="100%">
    <template v-slot:content>
      <img
        class="cimg"
        src="https://gravatar.loli.net/avatar/d41d8cd98f00b204e9800998ecf8427e?d=robohash&v=1.4.4"
        alt=""
      />
      <section class="container">
        <div class="header">{{ comment.nickname }}</div>
        <div class="meta">
          <span class="date">{{ comment.date }}</span>
          <span class="reply" @click="handleSwitch">回复</span>
        </div>
        <div class="content">
          <p>{{ comment.content }}</p>
        </div>
        <div class="wrapper" :style="disabled ? 'display: none' : 'display: block'">
          <Reply />
        </div>
        <div class="quote">
          <slot name="reply"></slot>
        </div>
      </section>
    </template>
  </Card>
</template>

<script>
import Card from "../card.vue";
import Reply from './Reply.vue'
import { ref } from 'vue'
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  components: {
    Card,
    Reply
  },
  setup() {
    const disabled = ref(true)
    const handleSwitch = () => {
      disabled.value = !disabled.value
    }
    return {
      disabled,
      handleSwitch
    }
  },
};
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  padding: 0;
  font-size: 15px;
  .cimg {
    width: 3em;
    height: 3em;
    border-radius: 50%;
    border: 1px solid #f5f5f5;
    margin-right: 1em;
  }
  .container {
    width: 100%;
    .header {
    }
    .meta {
      display: flex;
      justify-content: space-between;
      .date {
        font-size: 0.8em;
        color: #909399;
      }
      .reply {
        font-size: .9rem;
        color: $main-color;
        cursor: pointer;
      }
    }
    .wrapper {
      margin-bottom: 1em;
    }
    .quote {
      padding-left: .5em;
      border-left: 1px dashed hsla(0,0%,93%,.5);
    }
  }
}
</style>