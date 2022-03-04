<template>
  <header>
    <Head />
  </header>
  <main>
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
  background-color: #d7d7d7;
}
a {
  text-decoration: none;
  color: black;
}
.selected {
  border-bottom: 2px solid green;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
}
</style>
