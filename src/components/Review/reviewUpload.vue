<template>
<div>
  <el-button @click="addDomain" style="margin-bottom: 20px">新增表单</el-button>
  <el-collapse v-model="dataReviewActiveNames" @change="handleChange" >
    <el-collapse-item  :title="'表单'+index" :name="index" v-for="(item,index) in dataReviewList"  :key="index">
      <el-form :label-position="labelPosition"   label-width="100px" :model="dataReviewList[index]" >
        <el-form-item label="数据名称" prop="name" required>
          <el-input v-model="dataReviewList[index].name">{{item.name}}}</el-input>
        </el-form-item>
        <el-form-item label="官网" prop="location" required>
          <el-input v-model="dataReviewList[index].location" >{{item.location}}}</el-input>
        </el-form-item>
        <el-form-item label="贡献者" prop="originator" required>
          <el-input v-model="dataReviewList[index].originator" >{{item.originator}}}</el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitReviewForm(index)">提交</el-button>
<!--          <el-button type="info" @click="resetForm('formLabelAlign')">重置</el-button>-->
          <el-button type="info" @click.prevent="removeDomain(item)">删除表单</el-button>
        </el-form-item>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</div>

</template>

<script>
import RequestService from "../../../config/api";
import {Message} from "element-ui";

export default {
  name: "reviewUpload",
  data(){
    return{
      dataReviewActiveNames: ['1'],
      dataReviewList:[
        {
          name: null,
          location: null,
          originator: null
        },
      ],
      labelPosition: 'left', // 表单标签左对齐
    }
  },
  methods:{
    // 新增表单
    addDomain(){
      this.dataReviewList.push({
        dataset_name: '',
        homepage: '',
        contributor: ''
      });
    },
    // 暂存用户填写的AIBOM表单
    save_AIBOM(index){
      const data={
        "user_id": 0,
        "dataset_aibom_info_list": []
      }
      // 暂时保存一个
      data.dataset_aibom_info_list.push(this.formSelect[index]);
      RequestService.saveAIBOM(data).then( res =>{
        console.log(res)
        Message({
          message:'保存成功',
          type: 'success'
        });
      })
    },
    // 提交review表单
    submitReviewForm(index){
      const data = {
        "user_id": 31,
        "dataset_review_list": []
      };
      data.dataset_review_list.push(this.dataReviewList[index]);
      RequestService.dataUpload(data).then( res =>{
        Message({
          message:'提交成功',
          type: 'success'
        });
        // 提交成功之后，应该将提交的表单删除
        if(index !== -1){
          this.dataReviewList.splice(index,1);
        }
        console.log(this.dataReviewList);
      });
    },
    // 删除表单
    removeDomain(item){
      const index = this.dataReviewList.indexOf(item);
      if(index !== -1){
        const  aa = this.dataReviewList.splice(index,1);
        Message({
          message:'删除表单成功',
          type: 'success'
        });
      }
    },
    // 重置表单内容
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    handleChange(val) {
      console.log(val);
    },
  }
}
</script>

<style scoped>

</style>
