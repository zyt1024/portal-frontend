<template>
<div>
  <el-collapse v-model="activeNames" @change="handleChange" >
    <el-collapse-item   :name="index" v-for="(item,index) in formContent"  :key="index">
      <template slot="title" >
        <span :class="index % 2==0 ?'coll_item_span_odd' : 'coll_item_span'">数据集id:{{item.id}}<i class="header-icon el-icon-info"></i></span>
      </template>
      <div class="collpase_form_div">
        <el-form :label-position="labelPosition" :rules="rules" label-width="100px" :model="formSelect[index]" :ref="formSelect[index]">
          <el-form-item label="datasetName" prop="datasetName" required>
            <el-input v-model="formSelect[index].dataset_name">{{item.dataset_name}}}</el-input>
          </el-form-item>
          <el-form-item label="homepage">
            <el-input v-model="formSelect[index].homepage">{{item.homepage}}}</el-input>
          </el-form-item>
          <el-form-item label="license">
            <el-input v-model="formSelect[index].license">{{item.license}}}</el-input>
          </el-form-item>
          <el-form-item label="review">
            <el-input v-model="formSelect[index].review">{{item.review}}}</el-input>
          </el-form-item>
          <el-form-item label="copyright">
            <el-input v-model="formSelect[index].copyright">{{item.copyright}}}</el-input>
          </el-form-item>
          <el-form-item label="badge">
            <el-input v-model="formSelect[index].badge">{{item.badge}}}</el-input>
          </el-form-item>
          <el-form-item label="comment">
            <el-input v-model="formSelect[index].comment">{{item.comment}}}</el-input>
          </el-form-item>
          <el-form-item label="contributor">
            <el-input v-model="formSelect[index].contributor">{{item.contributor}}}</el-input>
          </el-form-item>
          <el-form-item label="notification">
            <el-input v-model="formSelect[index].notification">{{item.notification}}}</el-input>
          </el-form-item>
          <el-form-item label="type">
            <el-input v-model="formSelect[index].type">{{item.type}}}</el-input>
          </el-form-item>
          <el-form-item label="right">
            <el-input v-model="formSelect[index].right">{{item.right}}}</el-input>
          </el-form-item>
          <el-form-item label="message">
            <el-input v-model="formSelect[index].message">{{item.message}}}</el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="save_AIBOM(index)">保存</el-button>
            <el-button type="primary" @click="submitForm(index)">提交</el-button>
            <el-button type="primary" @click="remove_AIBOM(index)">删除该项</el-button>
            <el-popover
              placement="top"
              width="160"
              v-model="visibleList[index].visible">
              <p>这是一段内容这是一段内容确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visibleList[index].visible= false">取消</el-button>
                <el-button type="primary" size="mini" @click="visibleList[index].visible = false">确定</el-button>
              </div>
              <el-button slot="reference" >删除</el-button>
            </el-popover>
          </el-form-item>
        </el-form>
      </div>

    </el-collapse-item>
  </el-collapse>
</div>
</template>

<script>
import RequestService from "../../../config/api";
import {Message} from "element-ui";

export default {
  name: "apendingAIBOM",
  data(){
    return{
      rules:{
        datasetName:'',
      },
      visibleList:[{
        visible:false
      },{
        visible:false
      },{
        visible:false
      },{
        visible:false
      }],
      labelPosition:'left',
      activeNames: ['1'],
      formContent:[
        {
          dataset_name:"",
          homepage:"",
          license:"",
          review:"",
          copyright:"",
          badge:"",
          comment:"",
          contributor:"",
          notification:"",
          type:"",
          right:"",
        },
        {
          dataset_name:"",
          homepage:"",
          license:"",
          review:"",
          copyright:"",
          badge:"",
          comment:"",
          contributor:"",
          notification:"",
          type:"",
          right:"",
        },
        {
          dataset_name:"",
          homepage:"",
          license:"",
          review:"",
          copyright:"",
          badge:"",
          comment:"",
          contributor:"",
          notification:"",
          type:"",
          right:"",
        },
        {
          dataset_name:"",
          homepage:"",
          license:"",
          review:"",
          copyright:"",
          badge:"",
          comment:"",
          contributor:"",
          notification:"",
          type:"",
          right:"",
        },
      ],
      formSelect:[ // 将formContent复制为formSelect
        {
          dataset_name:"",
          homepage:"",
          license:"",
          review:"",
          copyright:"",
          badge:"",
          comment:"",
          contributor:"",
          notification:"",
          type:"",
          right:"",
        },
        {
          dataset_name:"",
          homepage:"",
          license:"",
          review:"",
          copyright:"",
          badge:"",
          comment:"",
          contributor:"",
          notification:"",
          type:"",
          right:"",
        },
        {
          dataset_name:"",
          homepage:"",
          license:"",
          review:"",
          copyright:"",
          badge:"",
          comment:"",
          contributor:"",
          notification:"",
          type:"",
          right:"",
        },
        {
          dataset_name:"",
          homepage:"",
          license:"",
          review:"",
          copyright:"",
          badge:"",
          comment:"",
          contributor:"",
          notification:"",
          type:"",
          right:"",
        },
      ],
    }
  },
  created() {
    this.aa()
  },
  methods:{
    handleChange(val) {
      console.log(val);
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
    //删除该数据集
    remove_AIBOM(index){
      const data={
        "user_id": 0,
        "dataset_aibom_info_list": []
      }
      // 暂时保存一个
      data.dataset_aibom_info_list.push(this.formSelect[index]);
      RequestService.deleteAIBOM(data).then( res =>{
        console.log(res)
        const index_s = this.formSelect.indexOf(this.formSelect[index]);
        const index_c = this.formContent.indexOf(this.formSelect[index]);
        if(index_s !== -1 && index_c !== -1){
          this.formSelect.splice(index_s,1);
          this.formContent.splice(index_c,1);
        }
        Message({
          message:'删除成功',
          type: 'success'
        });
      })
    },

    //提交表单
    submitForm(index) {
      console.log(this.formSelect[index]);
      console.log(this.formSelect[index].name);
      console.log(this.formSelect[index].region);
      console.log(this.formSelect[index].type);
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    aa(){
       const params={
         user_id : 31,
       };
      RequestService.pendingAIBOM(params).then((res)=>{
          console.log(res)
          // this.formContent = res.dataset_aibom_info_list;
          // this.formSelect =  res.dataset_aibom_info_list;
        for (var i = 1; i <=  this.formSelect.length; i++) {
          this.visibleList.push({visible: false})
        }

        });
    }
  }
}
</script>

<style >
.aiBom-dataList .coll_item_span{
  width: 100%;
  background-color: rgba(73,204,144,.1);
  padding-left:10px;
}
.aiBom-dataList .coll_item_span_odd{
  width: 100%;
  background-color: #fff;
  padding-left:10px;
}
</style>
