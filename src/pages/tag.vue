<template>
  <n-config-provider :theme="theme">
    <n-layout has-sider class="main">
      <lmenu />
      <n-layout class="box">
        <n-flex class="window">
          <n-card>
            路径:train/mg_crop_<n-input
              @input="
                getlable();
                getdblabel();
              "
              v-model:value="path_num"
              type="text"
              placeholder="图片序号"
              style="max-width: 80px"
            />.jpg
          </n-card>
          <n-card>
            <n-flex justify="center">
              <n-button>摆设</n-button>
              <n-image
                lazy
                width="100"
                style="margin: 0 auto"
                :src="
                  'https://image.2024ocr.top/train/mg_crop_' + path_num + '.jpg'
                "
              />
              <n-button @click="next">跳过</n-button>
            </n-flex>
          </n-card>
          <n-card>
            <n-flex vertical>
              官方原标注<n-tag :bordered="false"> {{ bdtag }} </n-tag>
              数据库标注<n-tag :bordered="false"> {{ dbtag }}</n-tag>
              你的新标注
              <n-input
                v-model:value="new_tag"
                type="text"
                placeholder="请输入新的标注"
              />
              <n-button @click="tag_submit">提交</n-button>
            </n-flex>
          </n-card>
          <n-card title="Tips">
            你的新标注会覆盖数据库标注<br />
            遇到模糊到无法识别的请标注###<br />
            遇到部分能看清，很大部分看不清或者水印明显的标注,,,<br />
            遇到不确定的请标注???<br />
            遇到打不出来的跳过<br />
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
import axios from "axios";

const new_tag = ref();
const path_num = ref("10");
const bdtag = ref();
const dbtag = ref();
const getlable = (num: string = path_num.value) => {
  fetch("/bd_label.json")
    .then((response) => {
      // 确保响应是ok的
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // 返回JSON解析后的数据
      return response.json();
    })
    .then((data) => {
      // 在这里处理你的数据
      console.log(data[num]);
      bdtag.value = data[num];
    })
    .catch((error) => {
      // 在这里处理错误
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      return { error: error };
    });
};

function getRandomElement<T>(array: T[]): T | undefined {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var null_num:any;
const getnull = () => {
  dbtag.value = "加载中......";
  axios
    .post("./getnull.php", {
      number: path_num.value,
    })
    .then(function (response) {
      null_num = response.data.split(",");
      path_num.value = getRandomElement(null_num)!;
      getdblabel();
      getlable();
    })
    .catch(function (error) {
      console.log(error);
      alert("连接服务器失败，请联系管理员解决问题");
    });
};
getnull();
const getdblabel = () => {
  dbtag.value = "加载中......";
  axios
    .post("./find.php", {
      number: path_num.value,
    })
    .then(function (response) {
      dbtag.value = response.data;
    })
    .catch(function (error) {
      console.log(error);
      alert("连接服务器失败，请联系管理员解决问题");
    });
};
// getdblabel()
getlable();

var n=0
const next = () =>{
  new_tag.value = "";
  path_num.value = getRandomElement(null_num)!;
  getdblabel();
  getlable();
  n=n+1
  if(n>10){
    axios
    .post("./getnull.php", {
      number: path_num.value,
    })
    .then(function (response) {
      null_num = response.data.split(",");
      console.log("null已更换")
    })
    .catch(function (error) {
      console.log(error);
      alert("连接服务器失败，请联系管理员解决问题");
    });
    n=0
  }
}
const tag_submit = () => {
  let num:string = path_num.value;
  let lab:string = new_tag.value;
  next();
  axios
    .post("./tag.php", {
      number: num,
      label: lab,
    })
    .then(function (response) {
      console.log(response.data);
      
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
.window {
  max-width: 400px;
  margin: 0 auto;
}
</style>
