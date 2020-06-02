<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect" :router="true">
      <el-menu-item index="/">个人主页</el-menu-item>
      <el-menu-item index="about">关于</el-menu-item>
      <el-menu-item index="login">Login</el-menu-item>
    </el-menu>
    <div class="line"></div>
    <router-view />
  </div>
</template>

<script>
import { Menu, MenuItem } from "element-ui";
import { Vue } from "vue-property-decorator";
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
export default {
  name: "app",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
