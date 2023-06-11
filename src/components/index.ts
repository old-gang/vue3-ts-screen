import { App } from "vue";
import svgIcon from "./SvgIcon/index.vue";

// 全局组件对象
const allGlobalComponent: any = { svgIcon };
export default {
  install(app: App) {
    // 注册项目的全局组件
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key]);
    });
  },
};
