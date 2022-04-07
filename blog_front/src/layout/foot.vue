<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="copyright">©2020 - 2022 By yisakomi</div>
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
    color: white;
    box-sizing: border-box;
    background-color: #171d20;
    .footer-wrap {
      // .copyright {

      // }
      .info {
        a {
          color: $main-color;
          text-decoration: none;
        }
      }
    }
  }
</style>
