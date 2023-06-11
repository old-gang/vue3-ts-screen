import axios from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use((config) => {
  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    // 失败的回调
    let msg = "";
    const status = err.response.status;
    switch (status) {
      case 401:
        msg = "登录过期，请重新登录";
        break;
      case 403:
        msg = "没有权限，请联系管理员";
        break;
      case 404:
        msg = "请求地址出错，请联系管理员";
        break;
      case 500:
        msg = "服务器内部错误，请联系管理员";
        break;
      default:
        msg = "网络异常";
        break;
    }
    ElMessage.error(msg);
    return Promise.reject(err);
  }
);

// 对外暴露
export default request;
