<template>
  <div>
    <MyTable
      title="评论列表"
      :loading="loading"
      :pagination="page"
      :data="comments"
      :columns="columns"
      :onlyDelete="true"
      @actionClick="actionClick"
    >
      <template v-slot:head>
        <span style="display: inline-block; font-size: 16px; margin-right: 10px;">选择文章：</span>
        <a-select
          ref="select"
          v-model:value="value"
          style="width: 300px;margin-right:10vw;"
          @focus="focus"
          @change="handleChange"
        >
          <a-select-option v-for="article in data" :key="article.article_id" :value="article.article_id">{{article.title}}</a-select-option>
        </a-select>
      </template>
    </MyTable>
  </div>
</template>
<script>
import { defineComponent, inject, onBeforeMount, ref } from "vue";
import MyTable from "../../components/MyTable.vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
const columns = [
  {
    title: "昵称",
    dataIndex: "nickname",
    key: "nickname",
  },
  {
    title: "评论内容",
    dataIndex: "content",
    key: "content",
  },
  {
    title: "邮箱",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "评论时间",
    dataIndex: "create_time",
    key: "create_time",
  },
  {
    title: "操作",
    key: "action",
    slots: {
      customRender: "action",
    },
  },
];
export default defineComponent({
  setup() {
    const http = inject("$http");
    const loading = ref(true);
    const page = {};
    const data = ref([]);
    const router = useRouter();
    const value = ref("");
    const comments = ref([])
    let preKey = ''
    const onload = async () => {
      const res = await http.article.getAssignedArticle({});
      data.value = res.data.data;
      console.log(data, 11111111);
      loading.value = false;
      page.pageSize = 10;
      page.total = res.data.total;
    };
    onBeforeMount(onload);
    const handleChange = async (key) => {
      const res = await http.comment.getComment({id: key});
      comments.value = res.data.data
      preKey = key
    }
    const actionClick = async (key, target) => {
      switch (key) {
        case "edit":
          router.push({
            name: "editArticle",
            params: { id: target.article_id },
          });
          break;
        case "delete":
          await http.comment.removeComment({ id: target.comment_id });
          message.success("删除成功");
          break;
        case "read":
          router.push({ name: "preview", params: { id: target.comment_id } });
          break;
      }
      handleChange(preKey);
    };
    return {
      data,
      columns,
      comments,
      value,
      page,
      loading,
      handleChange,
      actionClick,
    };
  },

  components: {
    MyTable,
  },
});
</script>

<style lang="scss" scoped></style>
