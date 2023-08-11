import router from "./routers";
import user from "@/store/modules/user.js";

import Config from "@/settings";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // getToken from cookie
import { buildMenus } from "@/api/system/menu";
import permission, { filterAsyncRouter } from "@/store/modules/permission";
import Layout from "../layout/index.vue";
NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = [
  "/login",
  "/toPdf",
  "/interventionPlan",
  "/residentEvil",
  "/patientManagePdf",
]; // no redirect whitelist

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + " - " + Config.title;
    if (to.path === "/toPdf") {
      to.meta.title = to.query.patientName;
      document.title = to.meta.title + "-" + "检测报告";
    }
    if (to.path === "/interventionPlan") {
      to.meta.title = to.query.patientName;
      document.title = to.meta.title + "-" + "干预方案";
    }
    if (to.path === "/residentEvil") {
      to.meta.title = to.query.patientName;
      document.title = to.meta.title + "-" + "生化单";
    }
    if (to.path === "/patientManagePdf") {
      console.log(to.query, "query");
      to.meta.title = to.query.patientName;
      document.title = to.meta.title + "-" + "检测报告";
    }
    /* if (to.path === '/patientManageVipPdf') {
      console.log(to.query, 'query')
      to.meta.title = to.query.patientName
      document.title = to.meta.title + '-' + '检测报告'
    }*/
  }
  NProgress.start();
  if (getToken()) {
    // 已登录且要跳转的页面是登录页
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      if (user().roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        user()
          .GetInfo()
          .then(() => {
            // 拉取user_info
            // 动态路由，拉取菜单
            loadMenus(next, to);
          })
          .catch(() => {
            user()
              .LogOut()
              .then(() => {
                location.reload(); // 为了重新实例化vue-router对象 避免bug
              });
          });
        // 登录时未拉取 菜单，在此处拉取
      } else if (user().loadMenus) {
        // 修改成false，防止死循环
        user()
          .updateLoadMenus()
          .then(() => {
            loadMenus(next, to);
          });
      } else {
        next();
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next(`/login?redirect=${to.fullPath}`); // 否则全部重定向到登录页
      NProgress.done();
    }
  }
});

const loadMenus = (next, to) => {
  buildMenus().then((res) => {
    const sdata = JSON.parse(JSON.stringify(res));
    const rdata = JSON.parse(JSON.stringify(res));

    const rewriteRoutes = filterAsyncRouter(rdata, true);
    rewriteRoutes.push({ path: "*", redirect: "/404", hidden: true });
    console.log(66, rewriteRoutes);
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      // user.loginType == 0  loginType: 1 机构医院； 0 普通医院
      sdata.unshift({
        path: "/",
        component: Layout,
        redirect: "/home",
        hidden: false,
        children: [
          {
            path: "home",
            component: () => import("@/views/home.vue"),
            name: "Home",
            hidden: false,
            meta: { title: "首页", icon: "home", affix: true, noCache: true },
          },
        ],
      });
      router.addRoute({
        path: "/",
        component: Layout,
        redirect: "/home",
        hidden: false,
        children: [
          {
            path: "home",
            component: () => import("@/views/home.vue"),
            name: "home",
            hidden: false,
            meta: { title: "首页", icon: "home", affix: true, noCache: true },
          },
        ],
      });
    } else {
      /* router.addRoute(
        {
          path: "/",
          component: Layout,
          redirect: "/organ/organ-index",
        },
      );*/

      router.addRoute({
        path: "/",
        component: Layout,
        redirect: "/home",
        hidden: false,
        children: [
          {
            path: "home",
            component: () => import("@/views/home.vue"),
            name: "home",
            hidden: false,
            meta: { title: "首页", icon: "home", affix: true, noCache: true },
          },
        ],
      });
    }
    const sidebarRoutes = filterAsyncRouter(sdata);
    permission()
      .GenerateRoutes(rewriteRoutes)
      .then(() => {
        // 存储路由
        router.addRoute(rewriteRoutes); // 动态添加可访问路由表
        next({ ...to, replace: true });
      });
    permission().SetSidebarRouters(sidebarRoutes);
  });
};

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
