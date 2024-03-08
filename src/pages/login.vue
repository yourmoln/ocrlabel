<template>
  <n-config-provider :theme="theme">
    <n-layout has-sider class="main">
      <lmenu />
      <n-layout class="box">
        <n-card class="login">
          <n-tabs
            v-if="!islogin"
            default-value="signin"
            size="large"
            justify-content="space-evenly"
          >
            <n-tab-pane name="signin" tab="登录">
              <n-form>
                <n-form-item-row label="用户名">
                  <n-input
                    v-model:value="username"
                    placeholder="你叫什么喵(^･ω･^=)~"
                  />
                </n-form-item-row>
                <n-form-item-row label="密码">
                  <n-input
                    type="password"
                    show-password-on="click"
                    v-model:value="password"
                    placeholder="与我分享秘密喵~(=^–^)"
                  />
                </n-form-item-row>
              </n-form>
              <n-button type="primary" block secondary strong @click="_login()" :disabled="able"> 登录 </n-button>
            </n-tab-pane>
            <n-tab-pane name="signup" tab="注册">
              <n-form>
                <n-form-item-row label="用户名">
                  <n-input
                    v-model:value="username"
                    placeholder="你叫什么喵(^･ω･^=)~"
                  />
                </n-form-item-row>
                <n-form-item-row label="密码">
                  <n-input
                    type="password"
                    show-password-on="click"
                    v-model:value="password"
                    placeholder="我会好好保管秘密喵(ะ`・ω・´ะ) "
                  />
                </n-form-item-row>
                <n-form-item-row label="重复密码">
                  <n-input
                    id = "apsw"
                    type="password"
                    show-password-on="click"
                    v-model:value="apassword"
                    placeholder="这是真的喵~(=･ｪ･=?"
                    status="warning"
                  />
                </n-form-item-row>
                <n-form-item-row label="学校">
                  <n-select
                    placeholder="学校喵~(=･ｪ･=?"
                    v-model:value="school"
                    :options="options"
                  />
                </n-form-item-row>
                <n-form-item-row label="邀请码">
                  <n-input placeholder="喵累了喵" v-model:value="inv" />
                </n-form-item-row>
              </n-form>
              <n-button type="primary" block secondary strong @click="reg()" :disabled="able"> 注册 </n-button>
            </n-tab-pane>
          </n-tabs>
          <n-flex v-else>
            你已经登录了</br>
            欢迎登录标注系统喵~(=^–^)
          </n-flex>
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
  NForm,
  NTabPane,
  NButton,
  NFormItemRow,
  NInput,
  NTabs,
  NConfigProvider,
  NSelect,
  NFlex
} from "naive-ui";
import theme from "@/config/theme";
import register from "@/api/register";
import { ref } from "vue";

import axios from "axios";
const getid = () => {
  axios
    .post("./user/getid.php", {
    })
    .then(function (response) {
      console.log(response.data)
      if (response.data != "请先登录"){
        islogin.value = true
      }
    })
    .catch(function (error) {
      console.log(error);
      islogin.value = false
      alert("连接服务器失败，请联系管理员解决问题");
    });
};
getid()


const able = ref(false)
const school = ref(null)
const islogin = ref(false)
const options = [
  {
    label: "广州航海学院",
    value: 1,
  },
  {
    label: "河南理工大学",
    value: 2,
  },
];
const username = ref(null);
const password = ref(null);
const apassword = ref(null);
const inv = ref(null);
const reg = () => {
  if (password.value!=apassword.value){
    alert("两次密码不同")
  }else if(password.value == null || username.value == null || inv.value == null || school.value==null){ 
    alert("请输入完整")
  }else{
    register(username.value,password.value,inv.value,school.value)
  }
}
import { HmacSHA256 } from "crypto-js";
const _login = () => {
  if(password.value == null || username.value == null){ 
    alert("请输入完整")
  }else{
    axios
    .post("./login/login.php", {
      username: username.value,
      password: HmacSHA256(password.value, "ocr").toString(),
    })
    .then(function (response) {
      alert(response.data);
      getid()
    })
    .catch(function (error) {
      console.log(error);
      alert("连接服务器失败，请联系管理员解决问题");
    });
  }

}

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
