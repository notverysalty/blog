<template>
  <header class="head">
    <Head />
  </header>
  <main class="main">
    <router-view></router-view>
  </main>
  <footer class="footer">
    <Foot />
  </footer>
</template>

<script>
import Head from "./layout/head.vue";
import Foot from "./layout/foot.vue";

export default {
  components: {
    Head,
    Foot,
  },
};
</script>

<style lang="scss">
* body {
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}
a {
  text-decoration: none;
  color: black;
}
.selected {
  border-bottom: 2px solid green;
}
.head {
  width: 100%;
  height: 4rem;
}
// .main {
//   // margin-top: 3rem;
// }
.router-link-active {
  // border-bottom: 2px solid $main-color;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  // padding-top: 2rem;
}
</style>
