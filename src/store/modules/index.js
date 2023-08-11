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
    /*deployUploadApi: (state) => state.api.deployUploadApi,
    databaseUploadApi: (state) => state.api.databaseUploadApi,
    size: (state) => state.app.size,
    sidebar: (state) => state.app.sidebar,
    device: (state) => state.app.device,
    token: (state) => state.user.token,
    visitedViews: (state) => state.tagsView.visitedViews,
    cachedViews: (state) => state.tagsView.cachedViews,
    roles: (state) => state.user.roles,
    user: (state) => state.user.user,
    loadMenus: (state) => state.user.loadMenus,
    permission_routers: (state) => state.permission.routers,
    addRouters: (state) => state.permission.addRouters,
    socketApi: (state) => state.api.socketApi,
    imagesUploadApi: (state) => state.api.imagesUploadApi,
    baseApi: (state) => state.api.baseApi,
    fileUploadApi: (state) => state.api.fileUploadApi,
    updateAvatarApi: (state) => state.api.updateAvatarApi,
    qiNiuUploadApi: (state) => state.api.qiNiuUploadApi,
    sqlApi: (state) => state.api.sqlApi,
    swaggerApi: (state) => state.api.swaggerApi,
    sidebarRouters: (state) => state.permission.sidebarRouters,*/
  },
});
export default common;
