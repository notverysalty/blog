<template>
  <div>
    <MyTable
      title="我的文章"
      :loading="loading"
      :pagination="page"
      :data="data"
      :columns="columns"
      @actionClick="actionClick"
      @addClick="addClick"
      :isButton="true"
    />
    <ShowModal
      :title="editId === -1 ? '新增' : '编辑'"
      :visible="visible"
      @handleOk="handleOk"
      @handleCancel="handleCancel"
    >
      <a-form
        ref="formRef"
        :model="modalData"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item ref="name" label="网站名" name="name">
          <a-input v-model:value="modalData.name" />
        </a-form-item>
        <a-form-item ref="link" label="网站链接" name="link">
          <a-input v-model:value="modalData.link" />
        </a-form-item>
        <a-form-item ref="suggest" label="网站简介" name="suggest">
          <a-input v-model:value="modalData.suggest" />
        </a-form-item>
        <a-form-item ref="author" label="作者" name="author">
          <a-input v-model:value="modalData.author" />
        </a-form-item>
      </a-form>
    </ShowModal>
  </div>
</template>
<script>
import { defineComponent, inject, onBeforeMount, reactive, ref } from "vue";
import MyTable from "../../components/MyTable.vue";
import ShowModal from "../../components/ShowModal.vue";
import { message } from "ant-design-vue";
const columns = [
  {
    title: "网站名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "网站链接",
    dataIndex: "link",
    key: "link",
  },
  {
    title: "网站简介",
    key: "suggest",
    dataIndex: "suggest",
  },
  {
    title: "作者",
    dataIndex: "author",
    key: "author",
  },
  // {
  //   title: "是否启用",
  //   key: "status",
  //   slots: {
  //     customRender: "status",
  //   },
  // },
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
    const loading = ref(true);
    const page = {};
    const data = ref([]);
    const visible = ref(false);
    const formRef = ref();
    const modalData = reactive({
      name: "",
      link: "",
      suggest: "",
      author: "",
    });
    const rules = reactive({
      name: {
        required: true,
        message: "Please input name",
        trigger: "blur",
      },

      link: {
        required: true,
        message: "Please input link",
        trigger: "blur",
      },

      suggest: {
        required: true,
        message: "Please input suggest",
        trigger: "blur",
      },

      author: {
        required: true,
        message: "Please input author",
        trigger: "blur",
      },
    });
    const editId = ref(-1);
    const onload = async () => {
      const res = await http.link.getLink({});
      data.value = res.data.data;
      loading.value = false;
      page.pageSize = 10;
      page.total = res.data.total;
    };
    onBeforeMount(onload);
    const actionClick = async (key, target) => {
      switch (key) {
        case "edit":
          handleEdit(target.link_id);
          return;
        case "delete":
          await http.link.removeLink({ id: target.link_id });
          message.success("删除成功");
          break;
        case "read":
          window.open("http://" + target.link, "_blank");
          break;
      }
      onload();
    };
    const addClick = () => {
      visible.value = true;
    };
    const handleEdit = async (id) => {
      const res = await http.link.getLink({ link_id: id });
      const data = res?.data?.data[0];
      modalData.name = data.name;
      modalData.link = data.link;
      modalData.suggest = data.suggest;
      modalData.author = data.author;
      editId.value = id;
      visible.value = true;
    };
    const handleCancel = () => {
      visible.value = false;
      editId.value = -1;
      modalData.name = "";
      modalData.link = "";
      modalData.suggest = "";
      modalData.author = "";
    };
    const handleOk = async () => {
      formRef.value.validate().then(async () => {
        if (editId.value !== -1) {
          const data = modalData;
          data.id = editId.value;
          await http.link.updateLink(data);
          editId.value = -1;
          message.success("修改成功");
        } else {
          await http.link.addLink(modalData);
          message.success("添加成功");
        }
        visible.value = false;
        modalData.name = "";
        modalData.link = "";
        modalData.suggest = "";
        modalData.author = "";
        onload();
      });
    };
    return {
      data,
      columns,
      visible,
      page,
      loading,
      modalData,
      rules,
      formRef,
      editId,
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      actionClick,
      addClick,
      handleCancel,
      handleOk,
    };
  },

  components: {
    MyTable,
    ShowModal,
  },
});
</script>

<style lang="scss" scoped></style>
