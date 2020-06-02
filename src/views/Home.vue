<template>
  <div class="home">
    <h1>我的个人主页</h1>
    <el-divider></el-divider>
    <el-row :gutter="20">
      <el-col :span="12"
        ><div class="grid-content bg-purple text-right">姓名:</div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple text-left">王梓晨</div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"
        ><div class="grid-content bg-purple text-right">年龄:</div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple text-left">27</div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"
        ><div class="grid-content bg-purple text-right">出生日期:</div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple text-left">1992-12-15</div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"
        ><div class="grid-content bg-purple text-right">目前职业:</div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple text-left">
          前端Web工程师
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  }
};
</script>
