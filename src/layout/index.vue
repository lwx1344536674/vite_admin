<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <sidebar class="sidebar-container" />
    <div :class="{ hasTagsView: needTagsView }" class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar />
        <template v-if="needTagsView">
          <tags-view />
        </template>
      </div>
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>
    <!--  防止刷新后主题丢失  -->
    <template v-show="false">
      <Theme ref="theme" />
    </template>
  </div>
</template>
<script setup name="layout">
import Cookies from "js-cookie";
import { ref, reactive, computed, watch, watchEffect, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Settings from "./components/Settings/index.vue";
import Sidebar from "./components/Sidebar/index.vue";
import TagsView from "./components/TagsView/index.vue";
import AppMain from "./components/AppMain.vue";
import Theme from "@/components/ThemePicker/index.vue";
import RightPanel from "@/components/RightPanel/index.vue";

import ResizeMixin from "./mixin/ResizeHandler";
import app from "@/store/modules/app.js";
import settings from "@/store/modules/settings.js";
const theme = ref();

const sidebar = computed(() => app().sidebar);
const device = computed(() => app().device);
const showSettings = computed(() => settings().showSettings);
const needTagsView = computed(() => settings().tagsView);
const fixedHeader = computed(() => settings().fixedHeader);
const classObj = computed(() => {
  return {
    hideSidebar: !app().sidebar.opened,
    openSidebar: app().sidebar.opened,
    withoutAnimation: app().sidebar.withoutAnimation,
    mobile: device.value === "mobile",
  };
});

onMounted(() => {
  if (Cookies.get("theme")) {
    theme.value.theme = Cookies.get("theme");
    settings().changeSetting({
      key: "theme",
      value: Cookies.get("theme"),
    });
  }
});

const handleClickOutside = () => {
  app().closeSideBar({ withoutAnimation: false });
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixin.scss";
@import "@/assets/styles/variables.module.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
  padding: 0;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
