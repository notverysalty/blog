<template>
  <div class="home">
    <div class="banner"></div>
    <div class="context">
      <div class="content">
        <CardWrap
          class="item"
          v-for="article in data"
          :key="article.article_id"
          :id="article.article_id"
          :title="article.title"
          :date="article.create_time"
          :tags="article.tags"
        ></CardWrap>
      </div>
      <div class="slider">
        <MyInformation class="myInfo"></MyInformation>
        <div class="carousel">
          <el-carousel height="350px" direction="vertical" :autoplay="true">
            <el-carousel-item v-for="item in 4" :key="item">
              <img src="../../public/img/like.png" alt="" height="350" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, onBeforeMount, ref } from "vue"
import CardWrap from "../components/index/card-wrap.vue"
import MyInformation from "../components/index/myInformation.vue"
import { giveColor } from '../util'
export default defineComponent({
  setup () {
    const articles = [
      {
        title: "关于我的博客",
        date: "2022-3-1",
        tags: [
          {
            name: "js",
            color: "red",
          },
          {
            name: "html",
            color: "#ccc",
          },
          {
            name: "css",
            color: "green",
          },
          {
            name: "jq",
            color: "yellow",
          },
        ],
      },
      {
        title: "关于我的博客",
        date: "2022-3-1",
        tags: [
          {
            name: "js",
            color: "red",
          },
          {
            name: "html",
            color: "#ccc",
          },
          {
            name: "css",
            color: "green",
          },
          {
            name: "jq",
            color: "yellow",
          },
        ],
      },
      {
        title: "关于我的博客",
        date: "2022-3-1",
        tags: [
          {
            name: "js",
            color: "red",
          },
          {
            name: "html",
            color: "#ccc",
          },
          {
            name: "css",
            color: "green",
          },
          {
            name: "jq",
            color: "yellow",
          },
        ],
      },
      {
        title: "关于我的博客",
        date: "2022-3-1",
        tags: [
          {
            name: "js",
            color: "red",
          },
          {
            name: "html",
            color: "#ccc",
          },
          {
            name: "css",
            color: "green",
          },
          {
            name: "jq",
            color: "yellow",
          },
        ],
      },
      {
        title: "关于我的博客",
        date: "2022-3-1",
        tags: [
          {
            name: "js",
            color: "red",
          },
          {
            name: "html",
            color: "#ccc",
          },
          {
            name: "css",
            color: "green",
          },
          {
            name: "jq",
            color: "yellow",
          },
        ],
      }, {
        title: "关于我的博客",
        date: "2022-3-1",
        tags: [
          {
            name: "js",
            color: "red",
          },
          {
            name: "html",
            color: "#ccc",
          },
          {
            name: "css",
            color: "green",
          },
          {
            name: "jq",
            color: "yellow",
          },
        ],
      }, {
        title: "关于我的博客",
        date: "2022-3-1",
        tags: [
          {
            name: "js",
            color: "red",
          },
          {
            name: "html",
            color: "#ccc",
          },
          {
            name: "css",
            color: "green",
          },
          {
            name: "jq",
            color: "yellow",
          },
        ],
      }, {
        title: "关于我的博客",
        date: "2022-3-1",
        tags: [
          {
            name: "js",
            color: "red",
          },
          {
            name: "html",
            color: "#ccc",
          },
          {
            name: "css",
            color: "green",
          },
          {
            name: "jq",
            color: "yellow",
          },
        ],
      },
    ];
    const http = inject('$http')
    const data = ref([])
    const onload = async () => {
      const res = await http.article.getAssignedArticle({})
      data.value = res.data.data
      const tags = giveColor(res.data.data)
      data.value.forEach((item, i) => {
        item.tags = tags[i]
      })
      console.log(data, tags)
      // page.pageSize = 10
      // page.total = res.data.total
    }
    onBeforeMount(onload)
    return {
      articles,
      data
    };
  },
  components: {
    CardWrap,
    MyInformation
  },
});
</script>

<style lang="scss" scoped>
.home {
  .banner {
    height: 40rem;
    position: absolute;
    top: 0;
    width: 100%;
    background-image: url('../../public/img/avatar.jpg');
    background-size: 100% 100%;
    // z-index: 999;
  }
  .context {
    margin-top: 38rem;
    // margin-top: 3rem;
    box-sizing: border-box;
    padding: 0 10%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    .content {
      width: 70%;
      box-sizing: border-box;
      .item {
        margin-bottom: 1.2rem;
      }
    }
    .slider {
      width: 22rem;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .myInfo {
        width: 100%;
        // flex: 1;
        margin-bottom: 2rem;
      }
      .carousel {
        width: 100%;
        height: 25rem;
        border-radius: 0.5rem;
        img {
          width: 100%;
          border-radius: 0.5rem;
        }
      }
    }
  }
}
</style>