<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="settings.uniqueOpened"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permission.sidebarRouters"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import Logo from "./Logo.vue";
import SidebarItem from "./SidebarItem.vue";
import variables from "@/assets/styles/variables.module.scss";
import settings from "@/store/modules/settings.js";
import permission from "@/store/modules/permission.js";
import app from "@/store/modules/app.js";

export default {
  components: { SidebarItem, Logo },
  computed: {
    permission() {
      return permission();
    },
    settings() {
      return settings();
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return settings().sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return app().sidebar.opened;
    },
  },
};
</script>
