import { login, getInfo, logout } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth.js";
import { defineStore } from "pinia";

const user = defineStore("user", {
  state: () => {
    return {
      token: getToken(),
      user: {},
      roles: [],
      // 第一次加载菜单时用到
      loadMenus: false,
    };
  },
  actions: {
    // 登录
    Login(userInfo) {
      const rememberMe = userInfo.rememberMe;
      return new Promise((resolve, reject) => {
        login(
          userInfo.username,
          userInfo.password,
          userInfo.code,
          userInfo.uuid,
        )
          .then((res) => {
            setToken(res.token, rememberMe);
            localStorage.setItem("hosTreeNode", res.user.hosTreeNode);
            localStorage.setItem("user", JSON.stringify(res.user));
            if (res.hospital) {
              localStorage.setItem("hospital", JSON.stringify(res.hospital));
              localStorage.setItem("crcIds", JSON.stringify(res.crcIds));
            }
            this.token = res.token;
            setUserInfo(res);
            // 第一次加载菜单时用到， 具体见 src 目录下的 permission.js
            this.loadMenus = true;
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    GetInfo() {
      return new Promise((resolve, reject) => {
        getInfo()
          .then((res) => {
            setUserInfo(res);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // 登出
    LogOut() {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            logOut();
            resolve();
          })
          .catch((error) => {
            logOut();
            reject(error);
          });
      });
    },

    updateLoadMenus(loadMenus) {
      return new Promise(() => {
        this.loadMenus = loadMenus;
      });
    },
  },
});

export const logOut = () => {
  this.token = "token";
  this.roles = [];
  localStorage.removeItem("hospital");
  localStorage.removeItem("crcIds");
  removeToken();
};

export const setUserInfo = (res) => {
  // 如果没有任何权限，则赋予一个默认的权限，避免请求死循环
  if (res.roles.length === 0) {
    this.roles = ["ROLE_SYSTEM_DEFAULT"];
  } else {
    this.roles = res.roles;
  }
  this.user = res.user;
};

export default user;
