<template>
  <div>
    <MyTable
      title="评论列表"
      :loading="loading"
      :pagination="page"
      :data="comments"
      :columns="columns"
      :rowEdit="true" 
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
    title: "评论内容",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "昵称",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "邮箱",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "评论时间",
    dataIndex: "watch_num",
    key: "watch_num",
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
      const res = await http.comment.getComment({article_id: key});
      comments.value = res.data.data
    }
    const actionClick = async (key, target) => {
      let res = "";
      switch (key) {
        case "edit":
          router.push({
            name: "editArticle",
            params: { id: target.article_id },
          });
          break;
        case "delete":
          res = await http.article.removeArticle({ id: target.article_id });
          message.success("删除成功");
          break;
        case "read":
          router.push({ name: "preview", params: { id: target.article_id } });
          break;
      }
      console.log(res);
      onload();
    };
    return {
      data,
      columns,
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
