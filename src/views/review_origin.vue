<!--<template>-->

<!--  <div class="body-box">-->
<!--    &lt;!&ndash;Navigation bar&ndash;&gt;-->
<!--    <div class="licenseHeader-box">-->
<!--      &lt;!&ndash;  Top Bar    &ndash;&gt;-->
<!--      <template>-->
<!--        <el-row :gutter="20" class="licenseHeader-top" style="padding-bottom: 10px">-->
<!--          <el-col :span="2">-->
<!--            <div>-->
<!--              <img-->
<!--                src="../assets/images/logo.png"-->
<!--                alt=""-->
<!--                style="width: 80px; height: 50px"-->
<!--                @click="toHome()"-->
<!--              />-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col :span="2">-->
<!--            <div style="width: 100px">-->
<!--              <el-select class="license_color" v-model="value" placeholder="Dataset">-->
<!--                <el-option-->
<!--                  v-for="item in vague"-->
<!--                  :key="item.value"-->
<!--                  :label="item.label"-->
<!--                  :value="item.value"-->
<!--                  @click.native="toHome()"-->
<!--                >-->
<!--                </el-option>-->
<!--              </el-select>-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col :span="8">-->
<!--            <div>-->
<!--              <searchDataset />-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col :span="12">-->
<!--            <template>-->
<!--              <div style="width: 100px">-->
<!--                <el-select class="license_color" v-model="value" placeholder="Menu">-->
<!--                  <el-option-->
<!--                    v-for="items in options"-->
<!--                    :key="items.values"-->
<!--                    :label="items.label"-->
<!--                    :value="items.values"-->
<!--                    @click.native="changenewClass"-->
<!--                  >-->
<!--                  </el-option>-->
<!--                </el-select>-->
<!--              </div>-->
<!--            </template>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </template>-->
<!--      &lt;!&ndash;  Welcome  &ndash;&gt;-->
<!--      <template>-->
<!--        <el-row>-->
<!--          <el-col :span="24">-->
<!--            <p class="licenseWelcome-box">Welcome to Dataset Metadata Portal</p>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </template>-->
<!--    </div>-->

<!--    &lt;!&ndash;tab切换项&ndash;&gt;-->
<!--    <el-tabs v-model="activeName" @tab-click="handleClick">-->
<!--      <el-tab-pane label="数据集review" name="first">-->
<!--        &lt;!&ndash;数据集上传表单&ndash;&gt;-->
<!--        <el-button @click="addDomain">新增表单</el-button>-->
<!--        <div class="aiBom-dataList" >-->
<!--          <el-collapse v-model="dataReviewActiveNames" @change="handleChange" >-->
<!--            <el-collapse-item  :title="'表单'+index" :name="index" v-for="(item,index) in dataReviewList"  :key="index">-->
<!--              <el-form :label-position="labelPosition"   label-width="100px" :model="dataReviewList[index]" >-->
<!--                <el-form-item label="数据名称" prop="dataset_name" required>-->
<!--                  <el-input v-model="dataReviewList[index].dataset_name">{{item.dataset_name}}}</el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="官网">-->
<!--                  <el-input v-model="dataReviewList[index].homepage">{{item.homepage}}}</el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="贡献者">-->
<!--                  <el-input v-model="dataReviewList[index].contributor">{{item.contributor}}}</el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item>-->
<!--                  <el-button type="primary" @click="save_AIBOM(index)">保存</el-button>-->
<!--                  <el-button type="primary" @click="submitReviewForm(index)">提交</el-button>-->
<!--                  <el-button type="info" @click="resetForm('formLabelAlign')">重置</el-button>-->
<!--                  <el-button type="info" @click.prevent="removeDomain(item)">删除表单</el-button>-->
<!--                </el-form-item>-->
<!--              </el-form>-->
<!--            </el-collapse-item>-->
<!--          </el-collapse>-->
<!--        </div>-->
<!--      </el-tab-pane>-->
<!--      <el-tab-pane label="AIBOM填写" name="second">-->
<!--        &lt;!&ndash; 表单&ndash;&gt;-->
<!--        <div class="aiBom-dataList" >-->
<!--          <el-collapse v-model="activeNames" @change="handleChange" >-->
<!--            <el-collapse-item   :name="index" v-for="(item,index) in formContent"  :key="index">-->
<!--              <template slot="title" >-->
<!--                <span :class="index % 2==0 ?'coll_item_span_odd' : 'coll_item_span'">数据集id:{{item.id}}<i class="header-icon el-icon-info"></i></span>-->
<!--              </template>-->
<!--              <div class="collpase_form_div">-->
<!--                <el-form :label-position="labelPosition" :rules="rules" label-width="100px" :model="formSelect[index]" :ref="formSelect[index]">-->
<!--                  <el-form-item label="datasetName" prop="datasetName" required>-->
<!--                    <el-input v-model="formSelect[index].dataset_name">{{item.dataset_name}}}</el-input>-->
<!--                  </el-form-item>-->
<!--                  <el-form-item label="homepage">-->
<!--                    <el-input v-model="formSelect[index].homepage">{{item.homepage}}}</el-input>-->
<!--                  </el-form-item>-->
<!--                  <el-form-item label="license">-->
<!--                    <el-input v-model="formSelect[index].license">{{item.license}}}</el-input>-->
<!--                  </el-form-item>-->
<!--                  <el-form-item label="review">-->
<!--                    <el-input v-model="formSelect[index].review">{{item.review}}}</el-input>-->
<!--                  </el-form-item>-->
<!--                  <el-form-item label="copyright">-->
<!--                    <el-input v-model="formSelect[index].copyright">{{item.copyright}}}</el-input>-->
<!--                  </el-form-item>-->
<!--                  <el-form-item label="badge">-->
<!--                    <el-input v-model="formSelect[index].badge">{{item.badge}}}</el-input>-->
<!--                  </el-form-item>-->
<!--                  <el-form-item label="comment">-->
<!--                    <el-input v-model="formSelect[index].comment">{{item.comment}}}</el-input>-->
<!--                  </el-form-item>-->
<!--                  <el-form-item label="contributor">-->
<!--                    <el-input v-model="formSelect[index].contributor">{{item.contributor}}}</el-input>-->
<!--                  </el-form-item>-->
<!--                  <el-form-item label="notification">-->
<!--                    <el-input v-model="formSelect[index].notification">{{item.notification}}}</el-input>-->
<!--                  </el-form-item>-->
<!--                  <el-form-item label="type">-->
<!--                    <el-input v-model="formSelect[index].type">{{item.type}}}</el-input>-->
<!--                  </el-form-item>-->
<!--                  <el-form-item label="right">-->
<!--                    <el-input v-model="formSelect[index].right">{{item.right}}}</el-input>-->
<!--                  </el-form-item>-->
<!--                  <el-form-item label="message">-->
<!--                    <el-input v-model="formSelect[index].message">{{item.message}}}</el-input>-->
<!--                  </el-form-item>-->
<!--                  <el-form-item>-->
<!--                    <el-button type="primary" @click="save_AIBOM(index)">保存</el-button>-->
<!--                    <el-button type="primary" @click="submitForm(index)">提交</el-button>-->
<!--                    <el-button type="primary" @click="remove_AIBOM(index)">删除该项</el-button>-->
<!--&lt;!&ndash;                    <el-popover&ndash;&gt;-->
<!--&lt;!&ndash;                      placement="top"&ndash;&gt;-->
<!--&lt;!&ndash;                      width="160"&ndash;&gt;-->
<!--&lt;!&ndash;                      v-model="visibleList[index].visible">&ndash;&gt;-->
<!--&lt;!&ndash;                      <p>这是一段内容这是一段内容确定删除吗？</p>&ndash;&gt;-->
<!--&lt;!&ndash;                      <div style="text-align: right; margin: 0">&ndash;&gt;-->
<!--&lt;!&ndash;                        <el-button size="mini" type="text" @click="visibleList[index].visible= false">取消</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;                        <el-button type="primary" size="mini" @click="visibleList[index].visible = false">确定</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;                      </div>&ndash;&gt;-->
<!--&lt;!&ndash;                      <el-button slot="reference" >删除</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;                    </el-popover>&ndash;&gt;-->
<!--&lt;!&ndash;                    <el-button type="primary" @click="remove_AIBOM(index)">删除该项</el-button>&ndash;&gt;-->
<!--                    &lt;!&ndash;                  <el-button type="info" @click="resetForm('formLabelAlign')">重置</el-button>&ndash;&gt;-->
<!--                  </el-form-item>-->
<!--                </el-form>-->
<!--              </div>-->

<!--            </el-collapse-item>-->
<!--          </el-collapse>-->
<!--        </div>-->
<!--      </el-tab-pane>-->
<!--      <el-tab-pane label="AIBOM填写-table" name="third">-->
<!--        &lt;!&ndash; 表单&ndash;&gt;-->
<!--        <div class="aiBom-dataList" >-->
<!--          <el-table-->
<!--            :data="tableData"-->
<!--            border-->
<!--            stripe-->
<!--            style="width: 100%">-->
<!--            <el-table-column-->

<!--              prop="date"-->
<!--              label="日期"-->
<!--             >-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="name"-->
<!--              label="姓名"-->
<!--              width="120">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="province"-->
<!--              label="省份"-->
<!--              width="120">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="city"-->
<!--              label="市区"-->
<!--              width="120">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="address"-->
<!--              label="地址"-->
<!--              width="300">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              prop="zip"-->
<!--              label="邮编"-->
<!--              width="120">-->
<!--            </el-table-column>-->
<!--            <el-table-column-->
<!--              fixed="right"-->
<!--              label="操作"-->
<!--              width="100">-->
<!--              <template slot-scope="scope">-->
<!--                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
<!--                <el-button type="text" size="small">编辑</el-button>-->
<!--              </template>-->
<!--            </el-table-column>-->
<!--          </el-table>-->
<!--        </div>-->
<!--      </el-tab-pane>-->
<!--    </el-tabs>-->

<!--    &lt;!&ndash; Middle part&ndash;&gt;-->
<!--    <template>-->
<!--      <div>-->
<!--        <h5 style="text-align: center; color: #003261">Total : {{ totalNum }}</h5>-->
<!--        <el-empty-->
<!--          v-if="dataSetData.length === 0"-->
<!--          description="No Data ..."-->
<!--          v-show="false"-->
<!--        >-->
<!--        </el-empty>-->
<!--        <div v-if="dataSetData.length !== 0">-->
<!--          &lt;!&ndash; 总长度/列数  = 行数 &ndash;&gt;-->
<!--          <div class="list">-->
<!--            <div v-for="o in dataSetData" :key="o.id">-->
<!--              <el-card style="height: 120px">-->
<!--                &lt;!&ndash; operate &ndash;&gt;-->
<!--                <div-->
<!--                  slot="header"-->
<!--                  class="clearfix"-->
<!--                  style="height: 40px; color: #003261; font-size: 15px"-->
<!--                  @click="toDataSetInfo(o.id)"-->
<!--                >-->
<!--                  {{ o["dataset_name"] }}-->
<!--                </div>-->
<!--                <div style="color: #a8a4a4; font-size: 10px">-->
<!--                  {{ o["license_name"] }}-->
<!--                </div>-->
<!--              </el-card>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </template>-->


<!--&lt;!&ndash;    &lt;!&ndash;  分页&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="Dataset-paging">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="block">&ndash;&gt;-->
<!--&lt;!&ndash;        <el-pagination&ndash;&gt;-->
<!--&lt;!&ndash;          @size-change="handleSizeChange"&ndash;&gt;-->
<!--&lt;!&ndash;          @current-change="handleCurrentChange"&ndash;&gt;-->
<!--&lt;!&ndash;          :current-page="dataSetData.pageNum"&ndash;&gt;-->
<!--&lt;!&ndash;          :page-size="numDatasetData.pageSize"&ndash;&gt;-->
<!--&lt;!&ndash;          layout="total, prev, pager, next, jumper"&ndash;&gt;-->
<!--&lt;!&ndash;          :total="totalNum"&ndash;&gt;-->
<!--&lt;!&ndash;        >&ndash;&gt;-->
<!--&lt;!&ndash;        </el-pagination>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--    &lt;!&ndash;尾部&ndash;&gt;-->

<!--    <template>-->
<!--      <div class="license-tail-box">-->
<!--        <el-row>-->
<!--          <el-col :span="24">-->
<!--            <div class="bg-purple-dark tail_box_len">-->
<!--              <p>* The above license analysis has not been reviewed by lawyers</p>-->
<!--              <p>-->
<!--                * All contents of the portal do not constitute any legal advice and-->
<!--                guarantee-->
<!--              </p>-->
<!--            </div>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </div>-->
<!--    </template>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--import searchDataset from "../components/Search/searchDataset.vue";-->
<!--import { getDatasetDataAll, } from "../../config/api.env.js";-->
<!--import RequestService from '../../config/api'-->
<!--import { Message } from "element-ui";-->

<!--// import {dataUpload} from '../../config/api.js'-->
<!--export default {-->
<!--  components: { searchDataset },-->
<!--  name: "review",-->
<!--  data() {-->
<!--    return {-->
<!--      visibleList:[{-->
<!--        visible:false-->
<!--      }],-->
<!--      dialogFormVisible: false,-->
<!--      form: {-->
<!--        name: '',-->
<!--        region: '',-->
<!--        date1: '',-->
<!--        date2: '',-->
<!--        delivery: false,-->
<!--        type: [],-->
<!--        resource: '',-->
<!--        desc: ''-->
<!--      },-->
<!--      formLabelWidth: '120px',-->
<!--      activeNames: ['1'],-->
<!--      dataReviewActiveNames: ['1'],-->
<!--      value: [],-->
<!--      vague: [-->
<!--        {-->
<!--          value: "1",-->
<!--          label: "License",-->
<!--        },-->
<!--      ],-->
<!--      rules:{-->
<!--        datasetName:'',-->
<!--      },-->
<!--      options: [-->
<!--        {-->
<!--          values: "Template",-->
<!--          label: "Template",-->
<!--        },-->
<!--        {-->
<!--          values: "Badges",-->
<!--          label: "Badges",-->
<!--        },-->
<!--      ],-->
<!--      dataSetData: [],-->
<!--      totalNum: 0,-->
<!--      numDatasetData: {-->
<!--        pageSize: 12,-->
<!--        pageNum: 1,-->
<!--      },-->
<!--      basicInfoId: {},-->
<!--      labelPosition: 'left',-->
<!--      formContent:[-->
<!--        {-->
<!--          dataset_name:"",-->
<!--          homepage:"",-->
<!--          license:"",-->
<!--          review:"",-->
<!--          copyright:"",-->
<!--          badge:"",-->
<!--          comment:"",-->
<!--          contributor:"",-->
<!--          notification:"",-->
<!--          type:"",-->
<!--          right:"",-->
<!--        },-->
<!--        {-->
<!--          dataset_name:"",-->
<!--          homepage:"",-->
<!--          license:"",-->
<!--          review:"",-->
<!--          copyright:"",-->
<!--          badge:"",-->
<!--          comment:"",-->
<!--          contributor:"",-->
<!--          notification:"",-->
<!--          type:"",-->
<!--          right:"",-->
<!--        },-->
<!--        {-->
<!--          dataset_name:"",-->
<!--          homepage:"",-->
<!--          license:"",-->
<!--          review:"",-->
<!--          copyright:"",-->
<!--          badge:"",-->
<!--          comment:"",-->
<!--          contributor:"",-->
<!--          notification:"",-->
<!--          type:"",-->
<!--          right:"",-->
<!--        },-->
<!--        {-->
<!--          dataset_name:"",-->
<!--          homepage:"",-->
<!--          license:"",-->
<!--          review:"",-->
<!--          copyright:"",-->
<!--          badge:"",-->
<!--          comment:"",-->
<!--          contributor:"",-->
<!--          notification:"",-->
<!--          type:"",-->
<!--          right:"",-->
<!--        },-->
<!--      ],-->
<!--      formSelect:[ // 将formContent复制为formSelect-->
<!--        {-->
<!--          dataset_name:"",-->
<!--          homepage:"",-->
<!--          license:"",-->
<!--          review:"",-->
<!--          copyright:"",-->
<!--          badge:"",-->
<!--          comment:"",-->
<!--          contributor:"",-->
<!--          notification:"",-->
<!--          type:"",-->
<!--          right:"",-->
<!--        },-->
<!--        {-->
<!--          dataset_name:"",-->
<!--          homepage:"",-->
<!--          license:"",-->
<!--          review:"",-->
<!--          copyright:"",-->
<!--          badge:"",-->
<!--          comment:"",-->
<!--          contributor:"",-->
<!--          notification:"",-->
<!--          type:"",-->
<!--          right:"",-->
<!--        },-->
<!--        {-->
<!--          dataset_name:"",-->
<!--          homepage:"",-->
<!--          license:"",-->
<!--          review:"",-->
<!--          copyright:"",-->
<!--          badge:"",-->
<!--          comment:"",-->
<!--          contributor:"",-->
<!--          notification:"",-->
<!--          type:"",-->
<!--          right:"",-->
<!--        },-->
<!--        {-->
<!--          dataset_name:"",-->
<!--          homepage:"",-->
<!--          license:"",-->
<!--          review:"",-->
<!--          copyright:"",-->
<!--          badge:"",-->
<!--          comment:"",-->
<!--          contributor:"",-->
<!--          notification:"",-->
<!--          type:"",-->
<!--          right:"",-->
<!--        },-->
<!--      ],-->
<!--      formLabelAlign: {-->
<!--        name: '',-->
<!--        region: '',-->
<!--        type: ''-->
<!--      },-->
<!--      dataForm:{-->
<!--        dataset_name: '',-->
<!--        homepage: '',-->
<!--        contributor: ''-->
<!--      },-->
<!--      dataReviewList:[-->
<!--        {-->
<!--          dataset_name: '',-->
<!--          homepage: '',-->
<!--          contributor: ''-->
<!--        },-->
<!--      ],-->
<!--      activeName: 'first',// tab激活哪一项-->
<!--      tableData: [{-->
<!--        date: '2016-05-02',-->
<!--        name: '王小虎',-->
<!--        province: '上海',-->
<!--        city: '普陀区',-->
<!--        address: '上海市普陀区金沙江路 1518 弄',-->
<!--        zip: 200333-->
<!--      }, {-->
<!--        date: '2016-05-04',-->
<!--        name: '王小虎',-->
<!--        province: '上海',-->
<!--        city: '普陀区',-->
<!--        address: '上海市普陀区金沙江路 1517 弄',-->
<!--        zip: 200333-->
<!--      }, {-->
<!--        date: '2016-05-01',-->
<!--        name: '王小虎',-->
<!--        province: '上海',-->
<!--        city: '普陀区',-->
<!--        address: '上海市普陀区金沙江路 1519 弄',-->
<!--        zip: 200333-->
<!--      }, {-->
<!--        date: '2016-05-03',-->
<!--        name: '王小虎',-->
<!--        province: '上海',-->
<!--        city: '普陀区',-->
<!--        address: '上海市普陀区金沙江路 1516 弄',-->
<!--        zip: 200333-->
<!--      }]-->
<!--    };-->
<!--  },-->
<!--  watch:{-->
<!--    activeName:{-->
<!--      handler(newValue,oldValue){-->

<!--      },-->
<!--      immediate: true-->
<!--    },-->
<!--  },-->
<!--  // mounted: {}, // 如果钩子函数mounted{}-->
<!--  // created: function () {-->
<!--  //   this.getDatasetData();-->
<!--  // },-->
<!--  created(){-->
<!--    this.clickForm()-->
<!--  },-->
<!--  methods: {-->
<!--    changenewClass() {-->
<!--      console.log(this.value);-->
<!--      if (this.value === "Template") {-->
<!--        // 另外添加一个跳转页面-->
<!--        this.$router.push({-->
<!--          path: "/dataSetFormat",-->
<!--        });-->
<!--      } else if (this.value === "Badges") {-->
<!--        // 另外添加跳转页面-->
<!--        this.$router.push({-->
<!--          path: "/dataSetSymbol",-->
<!--        });-->
<!--      }-->
<!--      this.$forceUpdate();-->
<!--    },-->
<!--    toHome() {-->
<!--      this.$router.push({-->
<!--        path: "/licenseAll",-->
<!--      });-->
<!--    },-->
<!--    toDataSetInfo(id) {-->
<!--      this.$router.push({-->
<!--        path: "/dataSetInfo",-->
<!--        query: { id },-->
<!--      });-->
<!--    },-->
<!--    async getDatasetData() {-->
<!--      const { data, totalNum } = await getDatasetDataAll(this.numDatasetData);-->
<!--      this.dataSetData = data;-->
<!--      this.totalNum = totalNum;-->
<!--    },-->
<!--    //分页监听 监听尺寸改变-->
<!--    handleSizeChange(newSize) {-->
<!--      this.numDatasetData.pageSize = newSize;-->
<!--      this.getDatasetData();-->
<!--    },-->
<!--    //监听页码改变-->
<!--    handleCurrentChange(newPage) {-->
<!--      this.numDatasetData.pageNum = newPage;-->
<!--      this.getDatasetData();-->
<!--      // console.log(newPage)-->
<!--    },-->

<!--    //提交表单-->
<!--    submitForm(index) {-->
<!--      console.log(this.formSelect[index]);-->
<!--      console.log(this.formSelect[index].name);-->
<!--      console.log(this.formSelect[index].region);-->
<!--      console.log(this.formSelect[index].type);-->
<!--    },-->

<!--    // 提交review表单-->
<!--    submitReviewForm(index){-->
<!--      console.log();-->
<!--      const data = {-->
<!--        "user_id": 31,-->
<!--        "dataset_review_list": []-->
<!--      };-->
<!--      data.dataset_review_list.push(this.dataReviewList[index]);-->
<!--      RequestService.dataUpload(data).then( res =>{-->
<!--        Message({-->
<!--          message:'提交成功',-->
<!--          type: 'success'-->
<!--        });-->
<!--        console.log("this.dataset_review_list");-->
<!--        console.log(res);-->
<!--        // 提交成功之后，应该将提交的表单删除-->
<!--        this.removeDomain(this.dataReviewList[index]);-->
<!--        console.log(this.dataReviewList);-->

<!--        // this.dataReviewList.reduce(this.dataReviewList[index]);-->
<!--      });-->
<!--    },-->

<!--    handleChange(val) {-->
<!--      console.log(val);-->
<!--    },-->
<!--    handleClick(tab, event) {-->

<!--      // 当切换tab的时候发送请求-->
<!--      if(tab.name === "second"){-->
<!--        const params={-->
<!--          user_id : 31,-->
<!--        };-->
<!--       RequestService.pendingAIBOM(params).then((res)=>{-->
<!--           console.log(res)-->
<!--           this.formContent = res.dataset_aibom_info_list;-->
<!--           this.formSelect =  res.dataset_aibom_info_list;-->
<!--         for (var i = 1; i <=  this.formSelect.length; i++) {-->
<!--           this.visibleList.push({visible: false})-->
<!--         }-->

<!--         });-->

<!--      }-->
<!--      console.log("tab",tab);-->
<!--      console.log("event");-->
<!--      console.log(event);-->
<!--    },-->
<!--    resetForm(formName) {-->
<!--      this.$refs[formName].resetFields();-->
<!--    },-->
<!--    clickForm(){-->
<!--      console.log("hello");-->

<!--    },-->

<!--    // 新增表单-->
<!--    addDomain(){-->
<!--      this.dataReviewList.push({-->
<!--        dataset_name: '',-->
<!--        homepage: '',-->
<!--        contributor: ''-->
<!--      });-->
<!--    },-->
<!--    // 删除表单-->
<!--    removeDomain(item){-->
<!--      const index = this.dataReviewList.indexOf(item);-->
<!--      if(index !== -1){-->
<!--        const  aa = this.dataReviewList.splice(index,1);-->
<!--        Message({-->
<!--          message:'删除表单成功',-->
<!--          type: 'success'-->
<!--        });-->
<!--      }-->
<!--    },-->
<!--    // 暂存用户填写的AIBOM表单-->
<!--    save_AIBOM(index){-->
<!--      const data={-->
<!--        "user_id": 0,-->
<!--        "dataset_aibom_info_list": []-->
<!--      }-->
<!--      // 暂时保存一个-->
<!--      data.dataset_aibom_info_list.push(this.formSelect[index]);-->
<!--      RequestService.saveAIBOM(data).then( res =>{-->
<!--        console.log(res)-->
<!--        Message({-->
<!--          message:'保存成功',-->
<!--          type: 'success'-->
<!--        });-->
<!--      })-->
<!--    },-->
<!--    //删除该数据集-->
<!--    remove_AIBOM(index){-->
<!--      const data={-->
<!--        "user_id": 0,-->
<!--        "dataset_aibom_info_list": []-->
<!--      }-->
<!--      // 暂时保存一个-->
<!--      data.dataset_aibom_info_list.push(this.formSelect[index]);-->
<!--      RequestService.deleteAIBOM(data).then( res =>{-->
<!--        console.log(res)-->
<!--        const index_s = this.formSelect.indexOf(this.formSelect[index]);-->
<!--        const index_c = this.formContent.indexOf(this.formSelect[index]);-->
<!--        if(index_s !== -1 && index_c !== -1){-->
<!--          this.formSelect.splice(index_s,1);-->
<!--          this.formContent.splice(index_c,1);-->
<!--        }-->
<!--        Message({-->
<!--          message:'删除成功',-->
<!--          type: 'success'-->
<!--        });-->
<!--      })-->
<!--    }-->
<!--  },-->
<!--};-->
<!--</script>-->
<!--<style scoped>-->
<!--/*Header-top Part*/-->
<!--.licenseHeader-top {-->
<!--  margin: 0 !important;-->
<!--  padding-bottom: 10px;-->
<!--  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 50%);-->
<!--}-->

<!--/*Header Part*/-->
<!--.licenseHeader-box {-->
<!--  padding-top: 20px;-->
<!--  background-color: #003261;-->
<!--  padding-bottom: 30px;-->
<!--  height: 217px;-->
<!--}-->

<!--/*Welcome*/-->
<!--.licenseWelcome-box {-->
<!--  text-align: center;-->
<!--  font-size: 27px;-->
<!--  color: #ffffffff;-->
<!--  margin-top: 50px;-->
<!--}-->

<!--/*Middle part*/-->
<!--.list {-->
<!--  display: grid;-->
<!--  grid-template-columns: 1fr 1fr 1fr;-->
<!--  gap: 10px;-->
<!--  width: 80%;-->
<!--  margin: 0 auto;-->
<!--  margin-top: 30px;-->
<!--}-->

<!--/*Pagination 分页*/-->
<!--.Dataset-paging {-->
<!--  margin-top: 30px;-->
<!--  text-align: center;-->
<!--}-->
<!--/* license -> dataset select tip text placeholder color*/-->
<!--.license_color >>> input::-webkit-input-placeholder {-->
<!--  color: #fff !important;-->
<!--  text-align: center !important;-->
<!--}-->
<!--/*Tail-box*/-->
<!--.tail_box_len {-->
<!--  width: 100%;-->
<!--  height: 40px;-->
<!--}-->

<!--.license-tail-box {-->
<!--  color: #ffffff;-->
<!--  font-size: 1px;-->
<!--  margin-top: 9px;-->
<!--}-->

<!--.license-tail-box .bg-purple-dark {-->
<!--  background: #003261 !important;-->
<!--}-->
<!--.aiBom-dataList{-->
<!--  width: 90%;-->
<!--  margin: 0 auto;-->
<!--  overflow: auto ;-->
<!--}-->
<!--/deep/ .aiBom-dataList .el-collapse-item__header {-->
<!--  /*background-color: #4c8efc ;*/-->
<!--}-->
<!--/deep/ .aiBom-dataList .el-input__inner {-->
<!--  -webkit-appearance: none !important;-->
<!--  background-color: #fff !important;-->
<!--  background-image: none !important;-->
<!--  border-radius: 4px !important;-->
<!--  border: 1px solid #dcdfe6 !important;-->
<!--  box-sizing: border-box !important;-->
<!--  color: #606266 !important;-->
<!--  display: inline-block !important;-->
<!--  font-size: inherit !important;-->
<!--  height: 40px !important;-->
<!--  line-height: 40px !important;-->
<!--  outline: none !important;-->
<!--  padding: 0 15px !important;-->
<!--  transition: border-color .2s cubic-bezier(.645,.045,.355,1) !important;-->
<!--  width: 100% !important;-->
<!--}-->
<!--/*/deep/ .el-collapse-item__header{*/-->
<!--/*  background-color: beige ;*/-->
<!--/*}*/-->
<!--.aiBom-dataList .coll_item_span{-->
<!--  width: 100%;-->
<!--  background-color: rgba(73,204,144,.1);-->
<!--  padding-left:10px;-->
<!--}-->
<!--.aiBom-dataList .coll_item_span_odd{-->
<!--  width: 100%;-->
<!--  background-color: #fff;-->
<!--  padding-left:10px;-->
<!--}-->
<!--/deep/ .el-collapse-item {-->
<!--  margin-bottom: 10px;-->
<!--}-->
<!--/deep/ .el-collapse-item .el-collapse-item__header{-->
<!--  border: 1px solid #EBEEF5;-->
<!--  margin-bottom: 10px;-->
<!--}-->
<!--/deep/ .aiBom-dataList .el-form-item__content{-->
<!--  margin-left: 100px !important;-->
<!--}-->
<!--.collpase_form_div{-->
<!--  width: 98%;-->
<!--  padding: 10px;-->
<!--  margin: 0 auto;-->
<!--  border: 1px solid #dbdbdb;-->
<!--  box-shadow: 0px -1px 5px #888888;-->
<!--}-->
<!--</style>-->
