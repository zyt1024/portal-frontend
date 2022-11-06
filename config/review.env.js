import axios from "axios";
// export { default } from "axios"
// axios.defaults.baseURL = "http://{Server-IP}}/api/v1";
axios.defaults.baseURL = "http://119.8.116.2:9215";
const ax = axios.create({
  timeout:5000,
  headers:{
    'Content-Type': "application/json; charset=utf-8"
  }
})
ax.interceptors.response.use(
    config => {
      if (config.status === 200) {

        return config.data;
      }
    },
    error => {
      error.message = '请求超时或服务器异常，请检查网络或联系管理员！'
      return Promise.reject(error)
    }
)
export default ax
