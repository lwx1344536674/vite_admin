<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <!--          <img :src="user.avatarName ? baseApi + '/avatar/' + user.avatarName : Avatar" class="user-avatar">-->
          <img :src="Avatar" class="user-avatar" alt="" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <span style="display: block" @click="show = true">
            <el-dropdown-item> 布局设置 </el-dropdown-item>
          </span>
          <router-link to="/user/center">
            <el-dropdown-item> 个人中心 </el-dropdown-item>
          </router-link>
          <span style="display: block" @click="open">
            <el-dropdown-item divided> 退出登录 </el-dropdown-item>
          </span>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import { ElNotification } from "element-plus";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import Hamburger from "@/components/Hamburger/index.vue";
import Avatar from "@/assets/images/avatar.png";
import app from "@/store/modules/app.js";
import user from "@/store/modules/user.js";
import settings from "@/store/modules/settings.js";
import api from "@/store/modules/api.js";

const sidebar = computed(() => app().sidebar);
const device = computed(() => app().device);
const users = computed(() => user().user);
const baseApi = computed(() => api().baseApi);
const show = computed(() => settings().showSettings);
watch(show, (val) => {
  settings().changeSetting({ key: "showSettings", value: val });
});

const toggleSideBar = () => {
  app().toggleDevice("");
};
const open = () => {
  ElNotification({
    title: "确定注销并退出系统吗？",
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    this.logout();
  });
};
const logout = () => {
  user()
    .LogOut()
    .then(() => {
      location.reload();
    });
};
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #2788ed;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
}
</style>
