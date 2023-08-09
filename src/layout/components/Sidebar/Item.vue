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
  render(context) {
    const { icon, title } = context.props;
    const vnodes = [];

    if (icon) {
      // vnodes.push(<svg-icon icon-class={icon}/>)
      vnodes.push(h("svg-icon", { "icon-class": icon }));
    }

    if (title) {

      vnodes.push(h("span", { slot: "title", innerHTML: title }));
    }
    return vnodes;
  },
};
</script>
