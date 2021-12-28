<template>
  <div class="head">
    <router-link to="/" class="home-link">yisakomi</router-link>
    <div class="links">
      <div class="search-box">
        <input type="text" autocomplete="off" spellcheck="false" aria-label="Search">
      </div>
      <nav class="nav-links">
        <div class="nav-item">首页</div>
        <div class="nav-item">标签</div>
        <div class="nav-item">类型</div>
        <div class="nav-item">友链</div>
      </nav>
    </div>
  </div>  
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'head',
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
  .head {
    display: flex;
    .home-link {
      flex: 1;
    }
    .links {
      flex: 1;
      text-align: right;
      margin-right: 30px;
      .search-box {
        display: inline-block;
      }
      .nav-links {
        display: inline-block;
        .nav-item {
          display: inline-block;
          margin-left: 1.5rem;
          line-height: 2rem;
        }
      }
    }
  }
</style>