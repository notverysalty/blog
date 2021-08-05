<template>
  <div>
    <MyTable
      title="标签列表"
      :data="data"
      :columns="columns"
      @actionClick="actionClick"
    />
  </div>
</template>
<script>
import { defineComponent, inject, onBeforeMount } from "vue";
import MyTable from "../../components/MyTable.vue";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    slots: {
      customRender: "tags",
    },
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    slots: {
      customRender: "action",
    },
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    action: [
      {
        name: "编辑",
        even: "edit",
      },
      {
        name: "删除",
        even: "edit",
      },
      {
        name: "查看",
        even: "edit",
      },
    ],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
    action: [
      {
        name: "编辑",
        even: "edit",
      },
      {
        name: "删除",
        even: "edit",
      },
      {
        name: "查看",
        even: "read",
      },
    ],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    action: [
      {
        name: "编辑",
        even: "edit",
      },
      {
        name: "删除",
        even: "edit",
      },
      {
        name: "查看",
        even: "edit",
      },
    ],
  },
];
const actionClick = (key) => {
  console.log(key);
};
export default defineComponent({
  setup() {
    const http = inject("$http")
    onBeforeMount(async () => {
      await http.tag.getTag();
    })
    return {
      data,
      columns,
      actionClick,
    };
  },

  components: {
    MyTable,
  },
});
</script>

<style lang="scss" scoped>
</style>