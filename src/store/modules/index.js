import { defineStore } from "pinia";
import getters from "../getters.js";
const common = defineStore("common", {
  state: () => {},
  getters: {
    ...getters,
  },
  actions: {},
});
export default common;
