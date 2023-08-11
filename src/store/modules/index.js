import { defineStore } from "pinia";
import api from "./api.js";
import app from "./app.js";
import user from "./user.js";
import tagsView from "./tagsView.js";
import permission from "./permission.js";

const common = defineStore("common", {
  state: () => {
    return {
      /*api: api(),
      app: app(),
      user: user(),
      tagsView: tagsView(),
      permission: permission(),*/
    };
  },
  getters: {
    /*deployUploadApi: () => this.api.deployUploadApi,
    databaseUploadApi: () => this.api.databaseUploadApi,
    size: () => this.app.size,
    sidebar: () => this.app.sidebar,
    device: () => this.app.device,
    token: () => this.user.token,
    visitedViews: () => this.tagsView.visitedViews,
    cachedViews: () => this.tagsView.cachedViews,
    roles: () => this.user.roles,
    user: () => this.user.user,
    loadMenus: () => this.user.loadMenus,
    permission_routers: () => this.permission.routers,
    addRouters: () => this.permission.addRouters,
    socketApi: () => this.api.socketApi,
    imagesUploadApi: () => this.api.imagesUploadApi,
    baseApi: () => this.api.baseApi,
    fileUploadApi: () => this.api.fileUploadApi,
    updateAvatarApi: () => this.api.updateAvatarApi,
    qiNiuUploadApi: () => this.api.qiNiuUploadApi,
    sqlApi: () => this.api.sqlApi,
    swaggerApi: () => this.api.swaggerApi,
    sidebarRouters: () => this.permission.sidebarRouters,*/
  },
});
export default common;
