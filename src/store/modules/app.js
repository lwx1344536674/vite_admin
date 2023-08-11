import Cookies from "js-cookie";
import { defineStore } from "pinia";
const app = defineStore("app", {
  state: () => {
    return {
      sidebar: {
        opened: Cookies.get("sidebarStatus")
          ? !!+Cookies.get("sidebarStatus")
          : true,
        withoutAnimation: false,
      },
      device: "desktop",
      size: Cookies.get("size") || "small",
    };
  },
  getters: {},
  actions: {
    toggleSideBar() {
      this.sidebar.opened = !this.sidebar.opened;
      this.sidebar.withoutAnimation = false;
      if (this.sidebar.opened) {
        Cookies.set("sidebarStatus", 1);
      } else {
        Cookies.set("sidebarStatus", 0);
      }
    },
    closeSideBar(withoutAnimation) {
      Cookies.set("sidebarStatus", 0);
      this.sidebar.opened = false;
      this.sidebar.withoutAnimation = withoutAnimation;
    },
    toggleDevice(device) {
      this.device = device;
    },
    setSize(size) {
      this.size = size;
      Cookies.set("size", size);
    },
  },
});

export default app;
