<template>
  <div class="container">
    <div class="flex-container">
      <div class="login">
        <el-form @submit.prevent="submit()" @submit.native.prevent ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-button type="primary" @click="submit" native-type="submit">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class LoginComponent extends Vue {
  form = {
    name: "",
    password: ""
  };

  submit() {
    console.log(this.form);
    this.$router.push('home');
  }

  constructor() {
    super();
  }
}
</script>
<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

.flex-container {
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
}

.login {
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
