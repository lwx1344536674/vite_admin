<template>
  <div
    v-if="isExternalVal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
  />
  <svg v-else :class="svgClass" aria-hidden="true" >
    <use :href="iconName" />
  </svg>
</template>
<script setup>
import { computed } from "vue";
import { isExternal } from "@/utils/validate";

const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});

const isExternalVal = computed(() => {
  return isExternal(props.iconClass);
});
const iconName = computed(() => {
  return `#icon-${props.iconClass}`;
});
const svgClass = computed(() => {
  if (props.className) {
    return "svg-icon " + props.className;
  } else {
    return "svg-icon";
  }
});
const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.iconClass}) no-repeat 50% 50%`,
    "-webkit-mask": `url(${props.iconClass}) no-repeat 50% 50%`,
  };
});
</script>

<style scoped lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
