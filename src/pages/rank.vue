<template>
  <n-config-provider :theme="theme">
    <n-layout has-sider class="main">
      <lmenu />
      <n-layout class="box">
        <n-card class="login"> 标注排行榜(懒得美化) </n-card>
        <n-card class="login">
          <div v-for="(item, index) in rank" :key="index" class="rank-item">
            {{ item }}
          </div>
        </n-card>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script lang="ts" setup>
import lmenu from "@components/menu.vue";
import { NLayout, NCard, NConfigProvider } from "naive-ui";
import theme from "@/config/theme";
import { ref } from "vue";
import axios from "axios";
const rank = ref("");
const getrank = () => {
  axios
    .post("./rank.php", {})
    .then(function (response) {
      rank.value = response.data.split(",");
    })
    .catch(function (error) {
      console.log(error);
      alert("连接服务器失败，请联系管理员解决问题");
    });
};
getrank();
</script>

<style>
.main {
  width: 100%;
  height: 100vh;
}
.login {
  max-width: 400px;
  margin: 0 auto;
}
.box {
  margin: 10px 10px;
}
</style>
