<template>
  <Card class="myInformation" height="21rem" width="100%">
    <template v-slot:content>
      <div class="avatar"></div>
      <div class="name">yisakomi</div>
      <div class="info">
        <div class="left">
          <div>文章</div>
          <div>{{ articleNum }}</div>
        </div>
        <div class="right">
          <div>标签</div>
          <div>{{ tagNum }}</div>
        </div>
      </div>
      <div class="like">
        <el-button type="danger" style="width: 100%" plain @click="handleClick('book')"><el-icon><flag /></el-icon>加入书签</el-button>
      </div>
      <div class="icons">
        <a  @click="handleClick('wechat')">
        <el-icon><chat-dot-round /></el-icon>
        </a>
        <a @click="handleClick('phone')">
        <el-icon ><iphone /></el-icon>
        </a>
        <a href="mailto:1197181269@qq.com">
          <el-icon><message /></el-icon>
        </a>
      </div>
    </template>
  </Card>
</template>

<script>
import Card from "../card.vue";
import { h } from "vue";
import { ElNotification } from "element-plus";
export default {
  props: {
    articleNum: {
      type: Number,
      require: true,
    },
    tagNum: {
      type: Number,
      require: true,
    },
  },
  components: {
    Card,
  },
  setup() {
    const handleClick = (type) => {
      let text = ''
      if (type === 'book') {
        text = "按下Ctrl + D键加入书签"
      } else if (type === 'phone') {
        text = "QQ号：1197181269"
      } else {
        text = "微信号：Yy_Smiling_Joker"
      }
      ElNotification({
        title: "",
        message: h("i", { style: "color: teal" }, text),
      });
    };
    return {
      handleClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.myInformation {
  // display: flex;
  padding: 5% 0;
  text-align: center;
  .avatar {
    margin: 0 25%;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 50%;
    background-image: url("../../../public/img/menma001.png");
    background-size: 100% 100%;
    width: 6rem;
    height: 6rem;
  }
  .name {
    height: 2rem;
    padding-top: 0.2rem;
    font-size: 1.2rem;
    text-align: center;
  }
  .info {
    height: 4rem;
    padding: 0.5rem 10% 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
    text-align: center;
    > div {
      :first-child {
        font-size: 1.1rem;
        padding-bottom: 0.2rem;
      }
    }
  }
  .like {
    height: 3rem;
    padding: 0.5rem 10% 0;
  }
  .icons {
    height: 3rem;
    display: flex;
    justify-content: space-around;
    font-size: 2rem;
    > a {
      cursor: pointer;
    }
  }
}
</style>