import axios from "axios";
import router from "@/router/routers";
import { ElNotification } from "element-plus";
import { getToken } from "@/utils/auth";
import Config from "@/settings";
import Cookies from "js-cookie";
// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // api 的 base_url
  timeout: Config.timeout, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers["poctipAdminToken"] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// response 拦截器
service.interceptors.response.use(
  (response) => {
    const code = response.data.code;
    if (code === 200) {
      return response.data.data || response.data.msg;
    } else if (code === 603) {
      const errorMsg = response.data.msg;
      ElNotification.error({
        title: errorMsg,
        duration: 5000,
        onClose: () => {
          /*store.dispatch('LogOut').then(() => {
            // 用户登录界面提示
            Cookies.set('point', 401)
            location.reload()
          })*/
        },
      });
      // eslint-disable-next-line no-undef
      return Promise.reject(err);
    } else if (response.config.responseType === "blob") {
      if (response.data.type === "application/json") {
        const reader = new FileReader();
        reader.readAsText(response.data);
        reader.onload = () => {
          var message = JSON.parse(reader.result);
          console.log(message, "message");
          ElNotification.error({
            title: message.msg,
            duration: 5000,
          });
        };
        return;
      }
      return response.data;
    } else {
      const errorMsg = response.data.msg || "服务器返回异常";
      ElNotification.error({
        title: errorMsg,
        duration: 5000,
      });
      // eslint-disable-next-line no-undef
      return Promise.reject(errorMsg);
    }
  },
  (error) => {
    // 兼容blob下载出错json提示
    if (
      error.response.data instanceof Blob &&
      error.response.data.type.toLowerCase().indexOf("json") !== -1
    ) {
      const reader = new FileReader();
      reader.readAsText(error.response.data, "utf-8");
      reader.onload = () => {
        const errorMsg = JSON.parse(reader.result).message;
        ElNotification.error({
          title: errorMsg,
          duration: 5000,
        });
      };
    } else {
      let code = 0;
      try {
        code = error.response.data.status;
      } catch (e) {
        if (error.toString().indexOf("Error: timeout") !== -1) {
          ElNotification.error({
            title: "网络请求超时",
            duration: 5000,
          });
          return Promise.reject(error);
        }
      }
      console.log(code);
      if (code) {
        if (code === 401) {
          /*store.dispatch('LogOut').then(() => {
            // 用户登录界面提示
            Cookies.set('point', 401)
            location.reload()
          })*/
        } else if (code === 403) {
          router.push({ path: "/401" });
        } else {
          const errorMsg = error.response.data.message;
          if (errorMsg !== undefined) {
            ElNotification.error({
              title: errorMsg,
              duration: 5000,
            });
          }
        }
      } else {
        ElNotification.error({
          title: "接口请求失败",
          duration: 5000,
        });
      }
    }
    return Promise.reject(error);
  },
);
export default service;
