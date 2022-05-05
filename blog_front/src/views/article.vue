<template>
  <div class="article">
    <Card class="title" height="9rem">
      <template v-slot:content>
        <h1>{{ data.title }}</h1>
        <div class="information">
          <div class="date">{{ data.create_time }}</div>
          <div class="watch">观看数：{{ data.watch_num }}</div>
        </div>
      </template>
    </Card>
    <v-md-editor :model-value="data.body" mode="preview"></v-md-editor>
    <Reply @handleReply="handleReply" />
    <div class="comment_title" v-if="comments.length">评论</div>
    <Comment
      :id="comment.comment_id"
      v-for="comment in comments"
      @replyByOne="handleReply"
      :key="comment.id"
      :comment="comment"
    >
      <template v-slot:reply>
        <Comment
          :id="child.comment_id"
          v-for="child in comment.children"
          :child="true"
          :key="child.id"
          @replyByOne="handleReply"
          style="fontsize: 12px"
          :comment="child"
        />
      </template>
    </Comment>
  </div>
</template>

<script>
import Card from "../components/card.vue";
import Reply from "../components/Comment/Reply.vue";
import Comment from "../components/Comment";
// import { ElMessage } from 'element-plus'
import { ref, inject, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
export default {
  components: {
    Card,
    Reply,
    Comment,
  },
  setup() {
    const route = useRoute();
    const http = inject("$http");
    const data = ref([]);
    const comments = ref([
      {
        nickname: "有利",
        date: "2020-1-1",
        content: "111111",
      },
    ]);
    const onload = async () => {
      const res = await http.article.getArticle({ id: route.params.id });
      data.value = res.data.data;
      loadComment();
    };
    const loadComment = async () => {
      const res = await http.article.getComment({ id: route.params.id });
      const cms = res?.data?.data
      const data = []
      cms.forEach(o => {
        if (o.p_id === 0) {
          data.push(o)
        }
      })
      data.forEach(o => {
        o.children = cms.filter(s => s.p_id === o.comment_id)
      })
      comments.value = data
    };
    const handleReply = async (reply) => {
      await http.article.addComment({
        article_id: route.params.id,
        nickname: reply.nickname,
        email: reply.email,
        content: reply.content,
        p_id: reply.p_id ?? 0,
      });
      loadComment();
    };
    onBeforeMount(onload);
    return {
      data,
      comments,
      handleReply,
    };
  },
};
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  padding: 0 25%;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  min-height: 90vh;
  align-items: center;
  flex-wrap: wrap;
  .title {
    flex: 1;
    box-sizing: border-box;
    .information {
      display: flex;
      justify-content: space-between;
      .date {
        color: #909399;
      }
      .watch {
        font-size: 1.1rem;
      }
    }
  }
  .content {
    width: 100%;
  }
  .comment_title {
    margin: 1rem 0;
    width: 100%;
    text-align: left;
    font-size: 1.3rem;
    font-weight: 600;
    color: #555;
  }
}
</style>