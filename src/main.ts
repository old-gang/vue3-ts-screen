import { createApp } from "vue";
import App from "@/App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 引入全局样式
import "@/styles/index.scss";

// svg插件需要配置的代码
import "virtual:svg-icons-register";

// 引入自定义全局组件
import globalComponents from "@/components/index";

const app = createApp(App);
app.use(ElementPlus);
app.use(globalComponents);
app.mount("#app");
