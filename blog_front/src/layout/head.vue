<template>
  <div class="head">
    <section class="logo">
      <router-link to="/" class="home-link">yisakomi</router-link>
    </section>
    <div class="links">
      <!-- <div class="search-box">
        <input type="text" autocomplete="off" spellcheck="false" aria-label="Search" @change="handleSearch" placeholder="文章" />
      </div> -->
      <nav class="nav-links">
        <div class="nav-item" v-for="item in menu" :key="item.link">
          <router-link :to="item.link">{{ item.name }}</router-link>
        </div>
        <!-- <div class="nav-item">
          <router-link to="">标签</router-link>
        </div>
        <div class="nav-item">
          <router-link to="">类型</router-link>
        </div>
        <div class="nav-item">
          <router-link to="">友链</router-link> -->
        <!-- </div> -->
      </nav>
    </div>
  </div>
</template>

<script>
  import { defineComponent, reactive } from 'vue'
  // import { useRoute } from 'vue-router'
  export default defineComponent({
    name: 'head',
    setup() {
      const menu = new reactive([
        {
          name: '首页',
          link: '/'
        }, {
          name: '归档',
          link: '/archive'
        }, {
          name: '标签',
          link: '/tags'
        }, {
          name: '分类',
          link: '/types'
        }, 
        // {
        //   name: '生活',
        //   link: '/life'
        // }, 
        {
          name: '友链',
          link: '/links'
        }
      ])
      return {
        menu
      }
    },
  })
</script>

<style lang="scss" scoped>
  .head {
    padding: 0.8rem 0;
    display: flex;
    background-color: rgba($color: white, $alpha: 0.8);
    box-sizing: border-box;
    position: fixed;
    z-index: 1000;
    .logo {
      padding-left: 5rem;
      height: 2rem;
      line-height: 2rem;
      font-size: 1.3rem;
      font-weight: 400;
    }

    .home-link {
      flex: 1;
      border: none;
      font-size: 2rem;
      font-weight: 600;
      font-family: fantasy;
      font-style: oblique;
      color: $main-color;
    }

    .links {
      flex: 1;
      text-align: right;
      margin-right: 3rem;

      .search-box {
        display: inline-block;
        position: relative;

        input {
          &:focus {
            border-color: $main-color;
            outline: none;
            // color: $main-color;
          }

          display: inline-block;
          // position: absolute;
          box-sizing: border-box;
          height: 2rem;
          font-size: 0.9rem;
          color: rgb(121, 121, 121);
          line-height: 2rem;
          padding: 0 0.8rem;
          border-radius: 2rem;
          border: 1px solid rgb(121, 121, 121);
        }
      }

      .nav-links {
        display: inline-block;
        margin-right: 4rem;
        .nav-item {
          display: inline-block;
          margin-left: 1.5rem;
          line-height: 2rem;
          cursor: pointer;
          > a:hover {
            border-bottom: 2px solid $main-color;
          }
        }
      }
    }
  }
</style>