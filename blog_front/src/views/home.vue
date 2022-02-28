<template>
  <header>
    <Head />
  </header>
  <main>
    <CardWrap title="hh" date="hh" :tags="[]"></CardWrap>
    <!-- <router-view></router-view> -->
  </main>
  <footer class="footer">
    <Foot />
  </footer>
</template>

<script>
import { defineComponent } from 'vue'
import Head from '../layout/head.vue'
import Foot from '../layout/foot.vue'
import CardWrap from '../components/index/card-wrap.vue'
export default defineComponent({
  setup () {

  },
  components: {
    Head,
    Foot,
    CardWrap
  }
})
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
</style>