<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="copyright">©2020 - 2021 By yisakomi</div>
      <div class="info">
        <a href="http://beian.miit.gov.cn/">赣ICP备2021007902号</a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style lang="scss">
  .footer {
    box-sizing: border-box;
    background-color: rgba($color: white, $alpha: 0.3);
    .footer-wrap {
      .copyright {

      }
      .info {
        a {
          color: $main-color;
          text-decoration: none;
        }
      }
    }
  }
</style>
