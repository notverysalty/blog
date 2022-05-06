<template>
  <div class="links">
    <Card class="card" width="100%">
      <template v-slot:content>
        <div>
          <div>名字：yisakomi</div>
          <div>
            地址：<a href="http://www.yisakomi.cn" style="color: #2d8cf0"
              >http://www.yisakomi.cn</a
            >
          </div>
          <div>描述：叙说我的生活</div>
        </div>
      </template>
    </Card>
    <div class="body">
      <el-row :gutter="12">
        <el-col v-for="link of links" :key="link.link_id" :span="12" style="margin-top: 2rem">
          <el-card shadow="hover" style="padding-left: 2rem; border-radius: 0.5rem;">
            <div>
              <a target="_blank" :href="'http://' + link.link" style="color: #2d8cf0"
                >{{link.name}}</a
              >
            </div>
            <p style="color: rgba(0,0,0,.6);">{{link.suggest}}</p>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Card from "../components/card.vue";
import { inject, ref, onBeforeMount } from 'vue'
export default {
  components: {
    Card,
  },
  setup() {
    const http = inject('$http')
    const links = ref([])
    const onload = async () => {
      const res = await http.link.getLink()
      links.value = res.data.data
    }
    onBeforeMount(onload)
    return {
      links
    }
  },
};
</script>

<style lang="scss" scoped>
.links {
  width: 100%;
  padding: 3rem 20%;
  box-sizing: border-box;
  text-align: center;
  .card {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      width: 80%;
      height: 90%;
      border: 1px dashed #ccc;
      border-radius: 0.8rem;
      text-align: center;
    }
  }
  .body {
    max-width: 730px;
    width: 100%;
    margin: 0 auto;
    text-align: left;
  }
}
</style>