import { constantRouterMap } from "@/router/routers.js";
import Layout from "@/layout/index.vue";
import ParentView from "@/components/ParentView/index.vue";
import { defineStore } from "pinia";
const modules = import.meta.glob("./../../views/**/*.vue");

const permission = defineStore("permission", {
  state: () => {
    return {
      routers: constantRouterMap,
      addRouters: [],
      sidebarRouters: [],
    };
  },
  actions: {
    GenerateRoutes(routers) {
      return new Promise((resolve) => {
        this.addRouters = routers;
        this.routers = constantRouterMap.concat(routers);
        resolve();
      });
    },
    SetSidebarRouters(routers) {
      this.sidebarRouters = constantRouterMap.concat(routers);
    },
  },
});

export const filterAsyncRouter = (routers, isRewrite = false) => {
  // 遍历后台传来的路由字符串，转换为组件对象
  return routers.filter((router) => {
    if (isRewrite && router.children) {
      router.children = filterChildren(router.children);
    }
    if (router.component) {
      if (router.component === "Layout") {
        // Layout组件特殊处理
        router.component = Layout;
      } else if (router.component === "ParentView") {
        router.component = ParentView;
      } else {
        const component = router.component;
        router.component = loadView(component);
      }
    }
    if (router.children && router.children.length) {
      router.children = filterAsyncRouter(router.children, isRewrite);
    }
    return true;
  });
};

function filterChildren(childrenMap) {
  var children = [];
  childrenMap.forEach((el) => {
    if (el.children && el.children.length) {
      if (el.component === "ParentView") {
        el.children.forEach((c) => {
          c.path = el.path + "/" + c.path;
          if (c.children && c.children.length) {
            children = children.concat(filterChildren(c.children, c));
            return;
          }
          children.push(c);
        });
        return;
      }
    }
    children = children.concat(el);
  });
  return children;
}
export const loadView = (view) => {
  let res;
  for (const path in modules) {
    const dir = path.split("views/")[1].split(".vue")[0];
    if (dir === view) {
      res = () => modules[path]();
    }
  }
  return res;
};

export default permission;
