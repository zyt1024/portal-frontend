import axios from "./review.env";
// import axios from "axios";
export default {
  // query dataset graph data
  // queryDatasetGraph(params) {
  //   return axios({
  //     method: 'get',
  //     url: 'v1/mindinsight/datasets/dataset_graph',
  //     params: params,
  //   });
  // },
  dataUpload(data){
    return axios.request({
      url: "/user/dataset_review/review_upload",
      method: "post",
      data:data
    });
  },
  saveAIBOM(data){
    return axios.request({
      url: "/user/dataset_review/save_AIBOM",
      method: "post",
      data:data
    });
  },
  deleteAIBOM(data){
    return axios.request({
      url: "/user/dataset_review/remove_AIBOM",
      method: "post",
      data:data
    });
  },
  pendingAIBOM(params){
    return axios.request({
      url: "/user/dataset_review/pending_AIBOM",
      method: "get",
      params:{
        user_id:params.user_id,
      }
      // params: params
    });
  },
  submitAIBOM(data){
    return axios.request({
      url: "user/dataset_review/submit_AIBOM",
      method: "post",
      data:data
      // params: params
    });
  }
}
// export const dataUpload = (data = {}) => {
//   return axios.request({
//     url: "/dataset_review/upload",
//     method: "post",
//     // headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     data:data
//   });
// };
