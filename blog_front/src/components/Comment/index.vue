<template>
  <Card class="comment">
    <template v-slot:content>
      <img
        class="cimg"
        src="https://gravatar.loli.net/avatar/d41d8cd98f00b204e9800998ecf8427e?d=robohash&v=1.4.4"
        alt=""
      />
      <section class="container">
        <div class="head">{{ comment.nickname }}</div>
        <div class="meta">{{ comment.date }}</div>
        <div class="content">{{ comment.content }}</div>
        <div class="quote">
          <slot name="reply"></slot>
        </div>
      </section>
    </template>
  </Card>
</template>

<script>
import Card from "../card.vue";
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  components: {
    Card,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.comment {
  width: 100%;
}
</style>