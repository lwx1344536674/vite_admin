import { defineStore } from "pinia";

const tagsView = defineStore("tagsView", {
  state: () => {
    return {
      visitedViews: [],
      cachedViews: [],
    };
  },
  actions: {
    addView({ dispatch }, view) {
      dispatch("addVisitedView", view);
      dispatch("addCachedView", view);
    },
    addVisitedView(view) {
      if (this.visitedViews.some((v) => v.path === view.path)) return;
      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || "no-name",
        }),
      );
    },
    addCachedView(view) {
      if (this.cachedViews.includes(view.name)) return;
      if (!view.meta.noCache) {
        this.cachedViews.push(view.name);
      }
    },

    delView(view) {
      return new Promise((resolve) => {
        this.delVisitedView(view);
        this.delCachedView(view);
        resolve({
          visitedViews: [...this.visitedViews],
          cachedViews: [...this.cachedViews],
        });
      });
    },
    delVisitedView(view) {
      return new Promise((resolve) => {
        for (const [i, v] of this.visitedViews.entries()) {
          if (v.path === view.path) {
            this.visitedViews.splice(i, 1);
            break;
          }
        }
        resolve([...this.visitedViews]);
      });
    },
    delCachedView(view) {
      return new Promise((resolve) => {
        for (const i of this.cachedViews) {
          if (i === view.name) {
            const index = this.cachedViews.indexOf(i);
            this.cachedViews.splice(index, 1);
            break;
          }
        }
        resolve([...this.cachedViews]);
      });
    },

    delOthersViews(view) {
      return new Promise((resolve) => {
        this.delOthersCachedViews(view);
        this.delOthersCachedViews(view);
        resolve({
          visitedViews: [...this.visitedViews],
          cachedViews: [...this.cachedViews],
        });
      });
    },
    delOthersVisitedViews(view) {
      return new Promise((resolve) => {
        this.visitedViews = this.visitedViews.filter((v) => {
          return v.meta.affix || v.path === view.path;
        });
        resolve([...this.visitedViews]);
      });
    },
    delOthersCachedViews(view) {
      return new Promise((resolve) => {
        for (const i of this.cachedViews) {
          if (i === view.name) {
            const index = this.cachedViews.indexOf(i);
            this.cachedViews = this.cachedViews.slice(index, index + 1);
            break;
          }
        }
        resolve([...this.cachedViews]);
      });
    },

    delAllViews(view) {
      return new Promise((resolve) => {
        this.delAllVisitedViews(view);
        this.delAllCachedViews(view);
        resolve({
          visitedViews: [...this.visitedViews],
          cachedViews: [...this.cachedViews],
        });
      });
    },
    delAllVisitedViews() {
      return new Promise((resolve) => {
        this.visitedViews = this.visitedViews.filter((tag) => tag.meta.affix);
        resolve([...this.visitedViews]);
      });
    },
    delAllCachedViews() {
      return new Promise((resolve) => {
        this.cachedViews = [];
        resolve([...this.cachedViews]);
      });
    },

    updateVisitedView(view) {
      for (let v of this.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view);
          break;
        }
      }
    },
  },
});

export default tagsView;
