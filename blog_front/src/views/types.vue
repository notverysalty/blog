<template>
  <div class="tags">
    <el-card shadow="always" class="search">
      <el-row :gutter="20">
        <el-radio-group v-model="radio1" @change="handleChange">
          <el-col :span="6">
            <el-radio label=""> 全部：<el-tag>{{total}}篇</el-tag> </el-radio>
          </el-col>
          <el-col v-for="type in types" :key="type.name" :span="6">
            <el-radio :label="type.name">
              {{ type.name }}：<el-tag>{{ type.num }}篇</el-tag>
            </el-radio>
          </el-col>
        </el-radio-group>
      </el-row>
    </el-card>
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
  </div>
</template>

<script>
import CardWrap from "../components/index/card-wrap.vue";
import { inject, ref, onBeforeMount } from "vue";
import { giveColor } from "../util";
export default {
  components: {
    CardWrap,
  },
  setup() {
    const radio1 = ref("");
    const types = ref([]);
    const http = inject("$http");
    const data = ref([]);
    const total = ref(0)
    const onload = async () => {
      const res = await http.article.getAssignedArticle({});
      const resType = await http.type.getType();
      data.value = res.data.data;
      total.value = res.data.total
      const articleTags = giveColor(res.data.data);
      data.value.forEach((item, i) => {
        item.tags = articleTags[i];
      });
      types.value = resType.data.data.filter((o) => o.status === true);
    };
    onBeforeMount(onload);

    const handleChange = async (name) => {
      const term = {}
      if (name) {
        term.type = name
      } 
      const res = await http.article.getAssignedArticle({term});
      data.value = res.data.data;
      const articleTags = giveColor(res.data.data);
      data.value.forEach((item, i) => {
        item.tags = articleTags[i];
      });
    };
    return {
      types,
      data,
      total,
      radio1,
      handleChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.tags {
  margin-top: 2rem;
  // background-color: #f4f4f4;
  width: 100%;
  box-sizing: border-box;
  padding: 0 30%;
  min-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .search {
    width: 100%;
    // padding: 2rem 2rem;
    background-color: white;
    border-radius: 0.5rem;
  }
  .content {
    width: 100%;
    > section {
      margin-top: 1.2rem;
    }
  }
}
</style>