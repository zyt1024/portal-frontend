<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 98%"
      max-height="600"
    >
      <el-table-column
        prop="name"
        label="name"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="location"
        label="location"
        width="120">
      </el-table-column>
      <el-table-column
        prop="originator"
        label="originator"
        width="120">
      </el-table-column>
      <el-table-column
        prop="license_location"
        label="license_location"
        width="140">
      </el-table-column>
      <el-table-column
        prop="concluded_license"
        label="concluded_license"
        width="150">
      </el-table-column>
      <el-table-column
        prop="declared_license"
        label="declared_license"
        width="150">
      </el-table-column>
      <el-table-column
        prop="type"
        label="type"
        width="120">
        <template slot-scope="scope" v-if="scope.row.type !== null">
          <el-tag type="success">{{ scope.row.type }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="size"
        label="size"
        width="120">
      </el-table-column>
      <el-table-column
        prop="intended_use"
        label="intended_use"
        width="140">
      </el-table-column>
      <el-table-column
        prop="checksum"
        label="checksum"
        width="120">
      </el-table-column>
      <el-table-column
        prop="data_collection_process"
        label="data_collection_process"
        width="200">
      </el-table-column>
      <el-table-column
        align="center"
        prop="known_biases"
        label="known_biases"
        width="140">
        <template slot-scope="scope" v-if="scope.row.known_biases !== null">
          <el-tag :type="scope.row.known_biases ? 'success' : 'error'">{{ scope.row.known_biases }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="sensitive_personal_information"
        label="sensitive_personal_information"
        width="250">
        <template slot-scope="scope" v-if="scope.row.sensitive_personal_information !== null">
          <el-tag :type="scope.row.sensitive_personal_information ? 'success' : 'error'">{{ scope.row.sensitive_personal_information }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="offensive_content"
        label="offensive_content"
        width="150">
        <template slot-scope="scope" v-if="scope.row.offensive_content !== null">
          <el-tag :type="scope.row.offensive_content ? 'success' : 'error'">{{ scope.row.offensive_content }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="rejection_notes"
        label="rejection_notes"
        width="150">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="250">
        <template slot-scope="scope">
          <el-button  size="mini" @click="handleEdit(scope.$index, scope.row)">填写</el-button>
          <el-button  size="mini" type="primary" @click="submitCurrentData(scope.$index, scope.row)">提交</el-button>
          <el-button  size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 对话框-->
    <el-dialog title="填写AIBOM" :visible.sync="dialogFormVisible">
      <el-form :model="currentData"  ref="ruleForm">
        <el-form-item label="name" :label-width="formLabelWidth" prop="name" required >
          <el-input v-model="currentData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="location" :label-width="formLabelWidth" prop="location" required >
          <el-input v-model="currentData.location" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="originator" :label-width="formLabelWidth" prop="originator" required>
          <el-input v-model="currentData.originator" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="license_location" :label-width="formLabelWidth"prop="license_location" required>
          <el-input v-model="currentData.license_location" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="concluded_license" :label-width="formLabelWidth">
          <el-input v-model="currentData.concluded_license" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="declared_license" :label-width="formLabelWidth">
          <el-input v-model="currentData.declared_license" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="type" :label-width="formLabelWidth" prop="type" required>
          <el-input v-model="currentData.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="size" :label-width="formLabelWidth" prop="size" required >
          <el-input v-model="currentData.size" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="intended_use" :label-width="formLabelWidth" prop="intended_use" required>
          <el-input v-model="currentData.intended_use" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="checksum" :label-width="formLabelWidth">
          <el-input v-model="currentData.checksum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="data_collection_process" :label-width="formLabelWidth" >
          <el-input v-model="currentData.data_collection_process" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="known_biases" :label-width="formLabelWidth">
<!--          <el-select v-model="currentData.known_biases" placeholder="please select true or false" style="width: 100%">-->
<!--            <el-option label="true" :value="true"></el-option>-->
<!--            <el-option label="false" :value="false"></el-option>-->
<!--          </el-select>-->
          <el-radio-group v-model="currentData.known_biases">
            <el-radio :label="true" border></el-radio>
            <el-radio :label="false" border></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="sensitive_personal_information" :label-width="formLabelWidth" >
<!--          <el-select v-model="currentData.sensitive_personal_information" placeholder="please select true or false" style="width: 100%">-->
<!--            <el-option label="true" :value="true"></el-option>-->
<!--            <el-option label="false" :value="false"></el-option>-->
<!--          </el-select>-->
          <el-radio-group v-model="currentData.sensitive_personal_information">
            <el-radio :label="true" border></el-radio>
            <el-radio :label="false" border></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="offensive_content" :label-width="formLabelWidth">
<!--          <el-select v-model="" placeholder="please select true or false" style="width: 100%">-->
<!--            <el-option label="true" :value="true"></el-option>-->
<!--            <el-option label="false" :value="false"></el-option>-->
<!--          </el-select>-->
          <el-radio-group v-model="currentData.offensive_content">
            <el-radio :label="true" border></el-radio>
            <el-radio :label="false" border></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveAIbom('ruleForm')">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import RequestService from '../../../config/api'
import { Message } from "element-ui";
export default {
  name: "apendingAIBOM-table",
  data() {
    return {
      currentData: {
        id: null,
        name: "",
        location: "",
        originator: "",
        license_location: "",
        concluded_license: "",
        declared_license: "",
        type: "",
        size: "",
        intended_use: "",
        checksum: "",
        data_collection_process: "",
        known_biases: true,
        sensitive_personal_information: true,
        offensive_content: true,
        user_id: null,
        rejection_notes: ""
      },
      ruleForm:{
        name: "",
        location: "",
        originator: "",
        license_location: "",
        type: "",
        intended_use: "",
      },
      tableData: [],
      dialogFormVisible: false,
      formLabelWidth: '220px',
    }
  },
  created() {
    this.getAIBOMData();
  },
  methods: {
    getAIBOMData(){
      const params={
        user_id:this.$route.params.user_id,
      }
      console.log("params",params)
      RequestService.pendingAIBOM(params).then( res =>{
        console.log(res)
        this.tableData = res.pending_aibom_list;
      })
    },
    handleClick(row) {
      console.log(row);
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.currentData=row;
      this.dialogFormVisible = true;
    },

    // 删除该项
    handleDelete(index, row) {
      console.log(index, row);
      const data = {
        user_id: row.user_id,
        pending_aibom_review_ids: [
          row.id
        ],
        rejection_notes: [""]
      }
      RequestService.deleteAIBOM(data).then( res => {
        console.log(res);
        this.tableData.splice(index,1)
        this.tipMessage("delete success","success")
      })
    },
    saveAIbom(formRule){
      if((this.currentData.declared_license === null || this.currentData.declared_license.length === 0) &&
        (this.currentData.concluded_license === null  || this.currentData.concluded_license.length === 0)){
        this.tipMessage("declared_license 和 concluded_license 不能同时为空","warning");
        return false;
      }
      this.$refs[formRule].validate((valid) => {
        if (valid) {
            const data = {
              pending_aibom_list:[],
            }
            data.pending_aibom_list.push(this.currentData)
            RequestService.saveAIBOM(data).then( res => {
              console.log(res)
              this.tipMessage(res.message,"success")
              this.dialogFormVisible = false;
            })
        } else {
          console.log('error submit!!');
          this.tipMessage("部分必填信息未填","warning")
          return false;
        }
      });

    },
    // 提交已经填好的AIBOM
    submitCurrentData(index, row){
      if((this.currentData.declared_license === null || this.currentData.declared_license.length === 0) &&
        (this.currentData.concluded_license === null  || this.currentData.concluded_license.length === 0)){
        this.tipMessage("declared_license 和 concluded_license 不能同时为空","warning");
        return false;
      }
      let valid = true;
      if(row.name === null || row.name.length === 0) valid = false;
      if(row.location === null || row.location.length === 0) valid = false;
      if(row.originator === null || row.originator.length === 0) valid = false;
      if(row.type === null || row.type.length === 0) valid = false;
      if(row.license_location === null || row.license_location.length === 0) valid = false;
      if(row.intended_use === null || row.intended_use.length === 0) valid = false;
      if (valid) {
        const data = {
          pending_aibom_list:[],
        }
        data.pending_aibom_list.push(row);
        RequestService.submitAIBOM(data).then( res => {
          // submit
          this.tableData.splice(index,1)
          this.tipMessage("提交成功","success")
        }).catch( err => {
          this.tipMessage("异常","error")
        });
      } else {
        console.log('error submit!!');
        this.tipMessage("部分必填信息未填,请点击填写按钮进行填写","warning")
        return false;
      }
    },
    tipMessage(message,type){
      Message({
        message:message,
        type:type
      })
    },
    // formatBoolean: function (row, column, cellValue) {
    //   var ret = ''  //你想在页面展示的值
    //   if (cellValue) {
    //     ret = "是"  //根据自己的需求设定
    //   } else {
    //     ret = "否"
    //   }
    //   return ret;
    // },
  },
}
</script>

<style >

</style>
