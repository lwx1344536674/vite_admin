<template>
  <div class="login" :style="{ backgroundImage: `url(${Background})` }">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      label-position="left"
      label-width="0px"
      class="login-form"
    >
      <h3 class="title">后台管理系统</h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          autocomplete="off"
          placeholder="账号"
        >
          <template #prefix>
            <svg-icon icon-class="user" class="el-input__icon input-icon" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter="handleLogin"
        >
          <template #prefix>
            <svg-icon icon-class="password" class="el-input__icon input-icon" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          v-model="loginForm.code"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          @keyup.enter="handleLogin"
        >
          <template #prefix>
            <svg-icon
              icon-class="validCode"
              class="el-input__icon input-icon"
            />
          </template>
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" @click="getCode" alt="" />
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin: 0 0 25px 0">
        记住我
      </el-checkbox>
      <el-form-item style="width: 100%">
        <el-button
          :loading="loading"
          type="primary"
          style="width: 100%"
          @click.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup name="login">
import { ref, watch, onMounted, reactive, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import { encrypt } from "@/utils/rsaEncrypt.js";
import Config from "@/settings";
import { getCodeImg } from "@/api/login";
import Cookies from "js-cookie";
import Background from "@/assets/images/background.jpg";
import { getOcr } from "@/api/biochemical/biochemical";

import user from "@/store/modules/user.js";
const userStore = user();

const codeUrl = ref("");
const cookiePass = ref("");
const loading = ref(false);
const redirect = ref(undefined);
const $router = useRouter();
const $route = useRoute();
let loginForm = reactive({
  name: "",
  username: "",
  password: "",
  rememberMe: false,
  code: "",
  uuid: "",
});

const loginFormRef = ref();

console.log("loginForm", loginForm);
const loginRules = {
  username: [{ required: true, trigger: "blur", message: "用户名不能为空" }],
  password: [{ required: true, trigger: "blur", message: "密码不能为空" }],
  code: [{ required: true, trigger: "change", message: "验证码不能为空" }],
};

watchEffect(() => {
  console.log($route.query.redirect, "route.query.redirect");
  redirect.value = $route.query && $route.query.redirect;
});

onMounted(() => {
  // 获取验证码
  getCode();
  // 获取用户名密码等Cookie
  getCookie();
  // token 过期提示
  point();
});

const getCode = () => {
  getCodeImg().then((res) => {
    codeUrl.value = res.img;
    loginForm.uuid = res.uuid;
  });
};
const getCookie = () => {
  const username = Cookies.get("username");
  let password = Cookies.get("password");
  const rememberMe = Cookies.get("rememberMe");
  // 保存cookie里面的加密后的密码
  cookiePass.value = password === undefined ? "" : password;
  password = password === undefined ? loginForm.password : password;

  loginForm.username = username === undefined ? loginForm.username : username;
  loginForm.password = password;
  loginForm.rememberMe = rememberMe === undefined ? false : Boolean(rememberMe);
};
const handleLogin = () => {
  loginFormRef.value.validate((valid) => {
    const user = {
      username: loginForm.username,
      password: loginForm.password,
      rememberMe: loginForm.rememberMe,
      code: loginForm.code,
      uuid: loginForm.uuid,
    };
    if (user.password !== cookiePass.value) {
      user.password = encrypt(user.password);
    }
    if (valid) {
      loading.value = true;
      if (user.rememberMe) {
        Cookies.set("username", user.username, {
          expires: Config.passCookieExpires,
        });
        Cookies.set("password", user.password, {
          expires: Config.passCookieExpires,
        });
        Cookies.set("rememberMe", user.rememberMe, {
          expires: Config.passCookieExpires,
        });
      } else {
        Cookies.remove("username");
        Cookies.remove("password");
        Cookies.remove("rememberMe");
      }
      userStore
        .Login(user)
        .then(() => {
          debugger;
          /* loading.value = false;
          console.log(redirect.value, "redirect.value");
          $router.push({ path: redirect.value || "/" });*/
        })
        .then(() => {
          getOcr().then((res) => {
            if (res["echartsVOS"]) {
              localStorage.setItem("showBar", "true");
            } else {
              localStorage.setItem("showBar", "false");
            }
          });
        })
        .catch(() => {
          loading.value = false;
          getCode();
        });
    } else {
      console.log("error submit!!");
      return false;
    }
  });
};
const point = () => {
  const point = Cookies.get("point") !== undefined;
  if (point) {
    ElNotification({
      title: "提示",
      message: "当前登录状态已过期，请重新登录！",
      type: "warning",
      duration: 5000,
    });
    Cookies.remove("point");
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-size: cover;
}
.title {
  margin: 0 auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 385px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  display: inline-block;
  height: 38px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
</style>
