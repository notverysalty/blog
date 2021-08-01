<template>
  <div class="login">
    <a-card class="card" title="Welcome login blog" :bordered="false">
      <a-form
        layout="horizontal"
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item>
          <a-input v-model:value="formState.user" placeholder="Username">
            <template #prefix
              ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-model:value="formState.password"
            type="password"
            placeholder="Password"
          >
            <template #prefix
              ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            shape="round"
            block
            :disabled="formState.user === '' || formState.password === ''"
          >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const formState = reactive({
      user: "",
      password: "",
    });

    const handleFinish = (values) => {
      console.log(values, formState);
    };

    const handleFinishFailed = (errors) => {
      console.log(errors);
    };

    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },

  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
  background-image: url("../assets/miku.png");
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