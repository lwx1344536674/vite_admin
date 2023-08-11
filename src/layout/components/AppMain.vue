<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <div style="padding: 16px">
          <router-view :key="key" />
        </div>
      </keep-alive>
    </transition>
    <!--    <div v-if="$store.state.settings.showFooter" id="el-main-footer">-->
    <!--      <span v-html="$store.state.settings.footerTxt" />-->
    <!--      <span> ⋅ </span>-->
    <!--      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">{{ $store.state.settings.caseNumber }}</a>-->
    <!--    </div>-->
  </section>
</template>

<script>
import tagsView from "@/store/modules/tagsView.js";
export default {
  name: "AppMain",
  computed: {
    cachedViews() {
      return tagsView().cachedViews;
    },
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
