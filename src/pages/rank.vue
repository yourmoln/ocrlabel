<template>
    <n-config-provider :theme="theme">
    <n-layout has-sider class="main">
      <lmenu />
      <n-layout class = "box">
        <n-card class="login">
            标注排行榜
        </n-card>
      </n-layout>
    </n-layout>
  </n-config-provider>
  </template>
  
  <script lang="ts" setup>
  import lmenu from "@components/menu.vue";
  import {
    NLayout,
    NCard,
    NConfigProvider,
  } from "naive-ui";
  import theme from '@/config/theme'
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
  