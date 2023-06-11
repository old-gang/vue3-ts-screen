<template>
  <div>
    <h1>测试svg</h1>
    <svg>
      <use xlink:href="#icon-phone" fill="red"></use>
    </svg>
    <svg-icon name="uploadImg" color="red"></svg-icon>
    <svg-icon name="phone" color="var(--el-color-primary)"></svg-icon>
    <svg-icon name="welcome"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import request from "@/utils/request";
import { onMounted } from "vue";

onMounted(() => {
  request
    .post("/api/user/login", {
      username: "admin",
      password: "111111",
    })
    .then((res) => {
      console.log(res);
    });
});
</script>

<style scoped lang="scss">
h1 {
  color: $color-primary;
}
</style>
