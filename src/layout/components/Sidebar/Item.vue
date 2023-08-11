<script>
import { h } from "vue";
export default {
  name: "MenuItem",
  functional: true,
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  render() {
    const vnodes = [];

    if (this.icon) {
      // vnodes.push(<svg-icon icon-class={icon}/>)
      vnodes.push(h("svg-icon", { "icon-class": this.icon }));
    }

    if (this.title) {
      vnodes.push(h("span", { slot: "title", innerHTML: this.title }));
    }
    return vnodes;
  },
};
</script>
