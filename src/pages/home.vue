<template>
  <n-config-provider :theme="theme">
    <n-layout has-sider class="main">
      <lmenu />
      <n-layout class="box">
        <n-flex>
          <n-card style="width: 450px">
            <n-row>
              <n-col :span="12">
                <n-statistic label="总标记数据" :value="99">
                  <template #prefix>
                    <n-icon>
                      <md-save />
                    </n-icon>
                  </template>
                  <template #suffix> / 122387 </template>
                </n-statistic>
                涓涓细流终将汇聚成海
              </n-col>
              <n-col :span="12">
                <n-statistic label="活跃用户"> 1 </n-statistic>
              </n-col>
            </n-row>
          </n-card>
          <n-card style="width: 450px">
            <n-statistic label="你一共处理了" tabular-nums>
              <n-number-animation
                ref="numberAnimationInstRef"
                :from="0"
                :to="12039"
              />
              <template #suffix> 个图片 </template>
            </n-statistic>
            花时间、花精力、花心思，愿你每一份努力都不负所望
          </n-card>
          <n-table :single-line="false">
            <thead>
              <tr>
                <th>路径</th>
                <th>修改前</th>
                <th>修改后</th>
                <th>模型建议</th>
                <th>最后修改者</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>放弃</td>
                <td>反常的</td>
                <td>彻底废除</td>
                <td>...</td>
                <td>干！我刚才背的是啥</td>
              </tr>
              <tr>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
            </tbody>
          </n-table>
          <n-card> 主页懒得做了，原谅我 </n-card>
          <n-button @click="getxt">更新数据集</n-button>
        </n-flex>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script lang="ts" setup>
import lmenu from "@components/menu.vue";
import {
  NLayout,
  NCol,
  NStatistic,
  NRow,
  NIcon,
  NConfigProvider,
  NCard,
  NFlex,
  NTable,
  NButton,
} from "naive-ui";
import theme from "@/config/theme";
import { MdSave } from "@vicons/ionicons4";
import axios from "axios";
const getxt = () => {
  axios
    .post("./getxt.php", {})
    .then(function (response) {
      alert(response.data);
    })
    .catch(function (error) {
      console.log(error);
      alert("连接服务器失败，请联系管理员解决问题");
    });
};
</script>

<style>
.main {
  width: 100%;
  height: 100vh;
}
.box {
  margin: 10px 10px;
}
</style>
