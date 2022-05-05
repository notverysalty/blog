<template>
  <div class="home">
    <div class="banner">
      <div class="text">
        <h1>记录我的生活</h1>
        <p>从现在开始</p>
      </div>
    </div>
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
        <MyInformation
          class="myInfo"
          :articleNum="num.articleNum"
          :tagNum="num.tagNum"
        ></MyInformation>
        <div class="carousel">
          <el-carousel height="350px" direction="vertical" :autoplay="true">
            <el-carousel-item v-for="item in 4" :key="item">
              <div class="item" :style="{backgroundImage: `url(http://localhost:3001/images/like${item}.png)`}">
                <!-- <img src="../../public/img/like.png" alt="" height="350" /> -->
                <div class="text">
                  <h2>要好好敲代码</h2>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
          <CardTags
            class="tags"
            :tags="sTags"
            @handleClick="handleClick"
          ></CardTags>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, onBeforeMount, ref } from "vue";
import CardWrap from "../components/index/card-wrap.vue";
import CardTags from "../components/index/card-tags.vue";
import MyInformation from "../components/index/myInformation.vue";
import { giveColor, tagsColor } from "../util";
export default defineComponent({
  setup() {
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
    ];
    const http = inject("$http");
    const data = ref([]);
    const num = ref({
      articleNum: 0,
      tagNum: 0,
    });
    const sTags = ref([]);
    const onload = async () => {
      const res = await http.article.getAssignedArticle({});
      data.value = res.data.data;
      const tags = giveColor(res.data.data);
      data.value.forEach((item, i) => {
        item.tags = tags[i];
      });
      console.log(data, tags);
      const resTags = await http.tag.getTag();
      sTags.value = tagsColor(resTags.data.data);
      console.log(tags);
      num.value = {
        articleNum: res.data.total,
        tagNum: resTags.data.total,
      };
      // page.pageSize = 10
      // page.total = res.data.total
    };
    onBeforeMount(onload);
    const handleClick = async (id) => {
      const query = {};
      if (id !== "全部") {
        query["tags"] = id;
      }
      const res = await http.article.getAssignedArticle({ term: query });
      const articleTags = giveColor(res.data.data);
      data.value = res.data.data;
      data.value.forEach((item, i) => {
        item.tags = articleTags[i];
      });
    };
    return {
      articles,
      data,
      num,
      sTags,
      handleClick,
    };
  },
  components: {
    CardWrap,
    CardTags,
    MyInformation,
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
    background-image: url("../../public/img/back.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    .text {
      color: white;
      position: absolute;
      left: 50%;
      top: -50%;
    }
    // z-index: 999;
  }
  .context {
    margin-top: 38rem;
    // margin-top: 3rem;
    box-sizing: border-box;
    padding: 0 10%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    .content {
      width: 50%;
      box-sizing: border-box;
      margin-right: 2rem;
      .item {
        max-width: 850px;
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
        max-width: 300px;
        // flex: 1;
        margin-bottom: 2rem;
      }
      .tags {
        width: 100%;
        box-sizing: border-box;
        height: 6rem;
      }
      .carousel {
        width: 100%;
        height: 25rem;
        max-width: 300px;
        border-radius: 0.5rem;
        .item {
          height: 400px;
          // background-image: url("../../public/img/like.png");
          background-size: 100% 100%;
          border-radius: 0.5rem;
          color: white;
          .text {
            position: absolute;
            left: 50px;
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>