<template>
  <a-layout>
    <a-layout-header class="header">
      <a-row type="flex">
        <a-col flex="1 1 200px" class="left">
          <h1>Blog Admin</h1>
        </a-col>
        <a-col flex="0 1 300px" class="right">
          <a-dropdown :trigger="['click']">
            <a-avatar :size="large" style="cursor: pointer;">
              <template #icon><UserOutlined /></template>
            </a-avatar>
            <template #overlay>
              <a-menu>
                <a-menu-item key="1"> <UserOutlined />个人中心</a-menu-item>
                <a-menu-item key="2"> <ExportOutlined />退出</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <span class="name">yisakomi</span>
        </a-col>
      </a-row>

      <!-- <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu> -->
    </a-layout-header>
    <a-layout class="main">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                文章
              </span>
            </template>
            <a-menu-item key="1"
              ><router-link :to="{name: 'articleList'}">我的文章 </router-link></a-menu-item
            >
            <a-menu-item key="2"
              ><router-link :to="{name: 'addArticle'}">新增文章 </router-link></a-menu-item
            >
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                类型
              </span>
            </template>
            <a-menu-item key="5"
              ><router-link :to="{name: 'typeList'}">类型列表 </router-link></a-menu-item
            >
            <a-menu-item key="6"
              ><router-link to="/about">新增类型 </router-link></a-menu-item
            >
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <notification-outlined />
                标签
              </span>
            </template>
            <a-menu-item key="9"
              ><router-link :to="{name: 'tagList'}">标签列表 </router-link></a-menu-item
            >
            <a-menu-item key="10"
              ><router-link to="/about">新增标签 </router-link></a-menu-item
            >
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <template #title>
              <span>
                <notification-outlined />
                评论
              </span>
            </template>
            <a-menu-item key="13">option9</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0px">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
          }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ExportOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    ExportOutlined,
  },

  setup() {
    return {
      selectedKeys1: ref(["2"]),
      selectedKeys2: ref(["1"]),
      collapsed: ref(false),
      openKeys: ref(["sub1"]),
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  box-sizing: border-box;
  z-index: 10;
  box-shadow: 0 2px 8px #f0f1f2;
  max-width: 100%;
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
    font-size: 14px;
    .name {
      display: inline-block;
      margin-left: 10px;
    }
  }
}
.main {
  padding: 20px 0 0;
  background-color: #fff;
}
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
