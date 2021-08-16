<template>
  <div class="login">
    <a-card class="card" title="Welcome login blog" :bordered="false">
      <a-form layout="horizontal" :model="formState" @finish="handleFinish" @finishFailed="handleFinishFailed">
        <a-form-item>
          <a-input v-model:value="formState.nickname" placeholder="Username">
            <template #prefix>
              <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="formState.password" type="password" placeholder="Password">
            <template #prefix>
              <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="formState.verify" placeholder="请输入验证码">
            <template #suffix>
              <img :src="formState.verify" alt="" width="70" height="20">
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" shape="round" block :disabled="formState.nickname === '' || formState.password === '' || formState.verify === ''">
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { defineComponent, inject, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import util from '../util/util'
export default defineComponent({
  setup() {
    const formState = reactive({
      nickname: '',
      password: '',
      verify: ''
    })
    const http = inject('$http')
    const router = useRouter()
    const getVerify = async () => {
      const res = await http.login.verify()
      if (res.data.code !== 200) {
        message.error('获取验证码失败')
      }
      formState.verify = res.data.data
    }
    const handleFinish = async () => {
      const { data } = await http.login.login(formState)
      util.setLocal('token', data.data)
      console.log(data)
      if (data) {
        router.push({ name: 'home' })
      }
    }

    const handleFinishFailed = (errors) => {
      console.log(errors)
    }

    return {
      formState,
      vImg,
      handleFinish,
      handleFinishFailed,
    }
  },

  components: {
    UserOutlined,
    LockOutlined,
  },
})
</script>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
  background-image: url('../assets/miku.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    width: 330px;
    height: 400px;
    background-color: rgba($color: #fff, $alpha: 0.5);
  }
}
</style>