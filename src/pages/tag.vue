<template>
  <n-config-provider :theme="theme">
    <n-layout has-sider class="main">
      <lmenu />
      <n-layout class="box">
        <n-flex class="window">
          <n-card>
            路径:train/mg_crop_<n-input v-model:value="path_num" type="text" placeholder="图片序号" style="max-width: 80px"/>.jpg
          </n-card>
          <n-card>
            <n-flex justify="center">
              <n-button>上一张</n-button>
              <n-image
                lazy
                width="100"
                style="margin: 0 auto"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
              />
              <n-button>下一张</n-button>
            </n-flex>
          </n-card>
          <n-card>
            <n-flex vertical>
              官方标注<n-tag :bordered="false"> 爱在西元前 </n-tag>
              预训练模型标注<n-tag :bordered="false"> 爱在西元前 </n-tag>
              你的标注
              <n-input
                v-model:value="value"
                type="text"
                placeholder="请输入新的标注"
              />
              <n-button>提交</n-button>
            </n-flex>
          </n-card>
          <n-card title="Tips">
            遇到模糊到无法识别的请标注###<br />
            遇到部分能看清，很大部分看不清的标注,,,<br />
            遇到不确定的请标注???<br />
            此三类标注以便于后台脚本筛选，后续可根据需要个性化生成train.txt
          </n-card>
        </n-flex>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script lang="ts" setup>
import lmenu from "@components/menu.vue";
import {
  NLayout,
  NCard,
  NFlex,
  NButton,
  NImage,
  NConfigProvider,
  NInput,
  NTag,
} from "naive-ui";
import theme from "@/config/theme";
import { ref } from "vue";
const value = ref(null);
const path_num = ref(null);
</script>

<style>
.main {
  width: 100%;
  height: 100vh;
}
.box {
  margin: 10px 10px;
}
.window {
  max-width: 400px;
  margin: 0 auto;
}
</style>
