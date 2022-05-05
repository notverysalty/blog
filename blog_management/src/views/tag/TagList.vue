<template>
  <div>
    <MyTable
      title="标签列表"
      :loading="loading"
      :pagination="page"
      :isButton="true"
      :data="data"
      :columns="columns"
      @actionClick="actionClick"
      @addClick="addClick"
      :rowEdit="true"
    />
    <ShowModal
      :title="title"
      :visible="visible"
      @handleOk="handleOk"
      @handleCancel="handleCancel"
    >
      <a-form-item style="width: 70%" label="标签名">
        <a-input v-model:value="value" />
      </a-form-item>
    </ShowModal>
  </div>
</template>
<script>
import { defineComponent, inject, onBeforeMount, ref } from "vue";
import MyTable from "../../components/MyTable.vue";
import ShowModal from "../../components/ShowModal.vue";
import { message } from "ant-design-vue";
const columns = [
  {
    title: "标签名",
    key: "name",
    width: "25%",
    slots: {
      customRender: "name",
    },
  },
  {
    title: "关联数量",
    dataIndex: "num",
    key: "num",
  },
  {
    title: "是否启用",
    key: "status",
    slots: {
      customRender: "status",
    },
  },
  {
    title: "Action",
    key: "action",
    slots: {
      customRender: "action",
    },
  },
];
export default defineComponent({
  setup() {
    const http = inject("$http");
    const visible = ref(false);
    const title = "添加标签";
    const value = ref("");
    const data = ref([]);
    const loading = ref(true);
    const page = {};
    const getTag = async () => {
      const res = await http.tag.getTag();
      data.value = res.data.data;
      loading.value = false;
      page.pageSize = 10;
      page.total = res.data.total;
    };
    const actionClick = async (key, target) => {
      let res = "";
      switch (key) {
        case "edit":
          res = await http.tag.updateTag(target);
          if (res.data.code == 0) {
            message.error(res.data.msg);
          } else {
            message.success("修改成功");
          }
          break;
        case "delete":
          res = await http.tag.removeTag({ name: target.name });
          if (res.data.code == 0) {
            message.error(res.data.msg);
          } else {
            message.success("删除成功");
          }
          break;
        case "read":
          break;
      }
      console.log(res);
      getTag();
    };
    onBeforeMount(getTag);
    const addClick = () => {
      visible.value = true;
    };
    const handleCancel = () => {
      value.value = "";
      visible.value = false;
    };
    const handleOk = async () => {
      if (!value.value) {
        return;
      }
      const res = await http.tag.addTag({ name: value.value });
      message.success("保存成功");
      console.log(res);
      getTag();
      value.value = "";
      visible.value = false;
    };
    return {
      data,
      columns,
      visible,
      title,
      value,
      loading,
      page,
      actionClick,
      addClick,
      handleOk,
      handleCancel,
    };
  },

  components: {
    MyTable,
    ShowModal,
  },
});
</script>

<style lang="scss" scoped>
</style>