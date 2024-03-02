<template>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="60"
      :width="170"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="60"
        :collapsed-icon-size="22"
        :options="menuOptions"
        key-field="whateverKey"
        label-field="whateverLabel"
        children-field="whateverChildren"
      />
    </n-layout-sider>
</template>

<script lang="ts" setup>
import { h, ref, Component } from "vue";
import { NIcon, NLayoutSider } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { PersonOutline, HomeOutline, PencilOutline, MedalOutline } from "@vicons/ionicons5";
import { RouterLink } from 'vue-router'
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
  {
    whateverLabel: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/login'
          }
        },
        { default: () => '登录' }
      ),
    whateverKey: "hear-the-wind-sing",
    icon: renderIcon(PersonOutline),
  },
  {
    whateverLabel: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/home'
          }
        },
        { default: () => '主页' }
      ),
    whateverKey: "a-wild-sheep-chase",
    icon: renderIcon(HomeOutline),
  },
  {
    whateverLabel: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/tag'
          }
        },
        { default: () => '标注' }
      ),
    whateverKey: "a-wild-sheep-chase",
    icon: renderIcon(PencilOutline),
  },
  {
    whateverLabel: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/rank'
          }
        },
        { default: () => '排行榜' }
      ),
    whateverKey: "a-wild-sheep-chase",
    icon: renderIcon(MedalOutline),
  },
];

const collapsed = ref(true);
</script>
