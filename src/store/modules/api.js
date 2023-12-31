// 适配 Nginx 反向代理
import { defineStore } from "pinia";
const baseUrl =
  import.meta.env.VITE_APP_BASE_API === "/"
    ? ""
    : import.meta.env.VITE_APP_BASE_API;
const api = defineStore("api", {
  state: () => {
    return {
      // 部署包上传
      deployUploadApi: baseUrl + "/api/deploy/upload",
      // SQL脚本上传
      databaseUploadApi: baseUrl + "/api/database/upload",
      // 实时控制台
      socketApi: baseUrl + "/websocket?token=kl",
      // 图片上传
      imagesUploadApi: baseUrl + "sysAdmin/api/file/upload",
      // 修改头像
      updateAvatarApi: baseUrl + "/api/users/updateAvatar",
      // 上传文件到七牛云
      qiNiuUploadApi: baseUrl + "/api/qiNiuContent",
      // Sql 监控
      sqlApi: baseUrl + "/druid/index.html",
      // swagger
      swaggerApi: baseUrl + "/swagger-ui.html",
      // 文件上传
      fileUploadApi: baseUrl + "/api/localStorage",
      // baseUrl，
      baseApi: baseUrl,
    };
  },
});
export default api;
