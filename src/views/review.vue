<template>

  <div class="body-box">
    <!--Navigation bar-->
    <div class="licenseHeader-box">
      <!--  Top Bar    -->
      <template>
        <el-row :gutter="20" class="licenseHeader-top" style="padding-bottom: 10px">
          <el-col :span="2">
            <div>
              <img
                src="../assets/images/logo.png"
                alt=""
                style="width: 80px; height: 50px"
                @click="toHome()"
              />
            </div>
          </el-col>
          <el-col :span="2">
            <div style="width: 100px">
              <el-select class="license_color" v-model="curValue" placeholder="Review">
                <el-option
                  v-for="item in vague"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  @click.native="toHome()"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <searchDataset />
            </div>
          </el-col>
          <el-col :span="12">
            <template>
              <div style="width: 100px">
                <el-select class="license_color" v-model="value" placeholder="Menu">
                  <el-option
                    v-for="items in options"
                    :key="items.values"
                    :label="items.label"
                    :value="items.values"
                    @click.native="changenewClass"
                  >
                  </el-option>
                </el-select>
              </div>
            </template>
          </el-col>
        </el-row>
      </template>
      <!--  Welcome  -->
      <template>
        <el-row>
          <el-col :span="24">
            <p class="licenseWelcome-box">Welcome to Dataset Metadata Portal</p>
          </el-col>
        </el-row>
      </template>
    </div>

    <!-- 标签页切换 -->
    <div style="width:calc(100% - 20px);padding:0px 10px">
      <el-tabs v-model="activeName" @tab-click="tabOnclick">
        <el-tab-pane label="数据集review" name="first"></el-tab-pane>
        <el-tab-pane label="AIBOM填写" name="second"></el-tab-pane>
        <el-tab-pane label="AIBOM填写-table" name="third"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="aiBom-dataList" >
      <router-view></router-view>
    </div>

    <!-- Middle part-->
    <template>
      <div>
        <h5 style="text-align: center; color: #003261">Total : {{ totalNum }}</h5>
        <el-empty
          v-if="dataSetData.length === 0"
          description="No Data ..."
          v-show="false"
        >
        </el-empty>
        <div v-if="dataSetData.length !== 0">
          <!-- 总长度/列数  = 行数 -->
          <div class="list">
            <div v-for="o in dataSetData" :key="o.id">
              <el-card style="height: 120px">
                <!-- operate -->
                <div
                  slot="header"
                  class="clearfix"
                  style="height: 40px; color: #003261; font-size: 15px"
                  @click="toDataSetInfo(o.id)"
                >
                  {{ o["dataset_name"] }}
                </div>
                <div style="color: #a8a4a4; font-size: 10px">
                  {{ o["license_name"] }}
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </template>


    <!--  分页-->
    <div class="Dataset-paging">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="dataSetData.pageNum"
          :page-size="numDatasetData.pageSize"
          layout="total, prev, pager, next, jumper"
          :total="totalNum"
        >
        </el-pagination>
      </div>
    </div>

<!--    尾部-->
    <template>
      <div class="license-tail-box">
        <el-row>
          <el-col :span="24">
            <div class="bg-purple-dark tail_box_len">
              <p>* The above license analysis has not been reviewed by lawyers</p>
              <p>
                * All contents of the portal do not constitute any legal advice and
                guarantee
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </template>
  </div>
</template>
<script>
import searchDataset from "../components/Search/searchDataset.vue";
import { getDatasetDataAll, } from "../../config/api.env.js";

// import {dataUpload} from '../../config/api.js'
export default {
  components: { searchDataset },
  name: "review",
  data() {
    return {
      value:[],
      curValue:"Review",
      vague: [
        {
          value: "1",
          label: "License",
        },
        // {
        //   value: "2",
        //   label: "Review",
        // },
      ],
      rules:{
        datasetName:'',
      },
      options: [
        {
          values: "Template",
          label: "Template",
        },
        {
          values: "Badges",
          label: "Badges",
        },
      ],
      dataSetData: [],
      totalNum: 0,
      numDatasetData: {
        pageSize: 12,
        pageNum: 1,
      },
      basicInfoId: {},
      activeName: 'first',// tab激活哪一项
      userId:sessionStorage.getItem("userId")
    };

  },
  created(){
    this.clickForm()
    this.$router.push({
      path:'/review/review_upload',
    })
  },
  methods: {
    changenewClass() {
      console.log(this.value);
      if (this.value === "Template") {
        // 另外添加一个跳转页面
        this.$router.push({
          path: "/dataSetFormat",
        });
      } else if (this.value === "Badges") {
        // 另外添加跳转页面
        this.$router.push({
          path: "/dataSetSymbol",
        });
      }
      this.$forceUpdate();
    },
    toHome() {
      this.$router.push({
        path: "/licenseAll",
      });
    },
    toDataSetInfo(id) {
      this.$router.push({
        path: "/dataSetInfo",
        query: { id },
      });
    },
    async getDatasetData() {
      const { data, totalNum } = await getDatasetDataAll(this.numDatasetData);
      this.dataSetData = data;
      this.totalNum = totalNum;
    },
    //分页监听 监听尺寸改变
    handleSizeChange(newSize) {
      this.numDatasetData.pageSize = newSize;
      this.getDatasetData();
    },
    //监听页码改变
    handleCurrentChange(newPage) {
      this.numDatasetData.pageNum = newPage;
      this.getDatasetData();
      // console.log(newPage)
    },

    handleChange(val) {
      console.log(val);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    clickForm(){
      console.log("hello");

    },

    // 当点击tab标签页的时候，切换路由
    tabOnclick(tab){
      console.log(tab.name,"   ",this.activeName)
      if(tab.name === 'first'){
        this.$router.push({
          path:'/review/review_upload',
        })
      }else if(tab.name === 'second'){
        this.$router.push({
          path:'/review/appending_aibom',
        })
      }else if(tab.name === 'third'){
        this.$router.push({
          // path:'/review/appending_aibom_table',
          name:"/review/appending_aibom_table",
          params:{
            user_id:this.userId,
          }
        })
      }
    },
    getTotal(){
      this.totalNum = 1;
    }
  },
};
</script>
<style scoped>
/*Header-top Part*/
.licenseHeader-top {
  margin: 0 !important;
  padding-bottom: 10px;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 50%);
}

/*Header Part*/
.licenseHeader-box {
  padding-top: 20px;
  background-color: #003261;
  padding-bottom: 30px;
  height: 217px;
}

/*Welcome*/
.licenseWelcome-box {
  text-align: center;
  font-size: 27px;
  color: #ffffffff;
  margin-top: 50px;
}

/*Middle part*/
.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}

/*Pagination 分页*/
.Dataset-paging {
  margin-top: 30px;
  text-align: center;
}
/* license -> dataset select tip text placeholder color*/
.license_color >>> input::-webkit-input-placeholder {
  color: #fff !important;
  text-align: center !important;
}
/*Tail-box*/
.tail_box_len {
  width: 100%;
  height: 40px;
}

.license-tail-box {
  color: #ffffff;
  font-size: 1px;
  margin-top: 9px;
}

.license-tail-box .bg-purple-dark {
  background: #003261 !important;
}
.aiBom-dataList{
  width: 90%;
  margin: 0 auto;
  overflow: auto ;
}
/deep/ .aiBom-dataList .el-collapse-item__header {
  /*background-color: #4c8efc ;*/
}
/deep/ .aiBom-dataList .el-input__inner {
  -webkit-appearance: none !important;
  background-color: #fff !important;
  background-image: none !important;
  border-radius: 4px !important;
  border: 1px solid #dcdfe6 !important;
  box-sizing: border-box !important;
  color: #606266 !important;
  display: inline-block !important;
  font-size: inherit !important;
  height: 40px !important;
  line-height: 40px !important;
  outline: none !important;
  padding: 0 15px !important;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1) !important;
  width: 100% !important;
}
/*/deep/ .el-collapse-item__header{*/
/*  background-color: beige ;*/
/*}*/

/deep/ .el-collapse-item {
  margin-bottom: 10px;
}
/deep/ .el-collapse-item .el-collapse-item__header{
  border: 1px solid #EBEEF5;
  margin-bottom: 10px;
}
/deep/ .aiBom-dataList .el-form-item__content{
  margin-left: 220px !important;
}
.collpase_form_div{
  width: 98%;
  padding: 10px;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  box-shadow: 0px -1px 5px #888888;
}
</style>
