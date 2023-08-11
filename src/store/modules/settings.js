import variables from "@/assets/styles/element-variables.scss";
import defaultSettings from "@/settings.js";
import { defineStore } from "pinia";
const {
  tagsView,
  fixedHeader,
  sidebarLogo,
  uniqueOpened,
  showFooter,
  footerTxt,
  caseNumber,
} = defaultSettings;

const settings = defineStore("settings", {
  state: () => ({
    theme: variables.theme,
    showSettings: false,
    tagsView: tagsView,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo,
    uniqueOpened: uniqueOpened,
    showFooter: showFooter,
    footerTxt: footerTxt,
    caseNumber: caseNumber,
  }),
  actions: {
    changeSetting(data) {
      const { key, value } = data;
      if (this.hasOwnProperty(key)) {
        this[key] = value;
      }
    },
  },
});

export default settings;
