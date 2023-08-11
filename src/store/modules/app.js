import Cookies from "js-cookie";
import { defineStore, storeToRefs } from "pinia";
const app = defineStore("app", {
  state: () => ({
    sidebar: {
      opened: Cookies.get("sidebarStatus")
        ? !!+Cookies.get("sidebarStatus")
        : true,
      withoutAnimation: false,
    },
    device: "desktop",
    size: Cookies.get("size") || "small",
  }),
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
      this.$patch((state) => {
        state.sidebar.withoutAnimation = withoutAnimation;
      });
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
