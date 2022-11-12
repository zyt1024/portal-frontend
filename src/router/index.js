import Vue from 'vue'
import Router from 'vue-router'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
    routes: [

      /**
       *
       * Home page
       *
       */
      {
        path: '/',
        component: () => import('../views/licenseAll.vue')
      },
      {
        path: '/licenseAll',
        component: () => import('../views/licenseAll.vue')
      },{
        path: '/licenseInfo',
        component: () => import('../views/licenseInfo.vue'),
        props: route => ({id: route.query.id})
      },{
        path: '/dataSetAll',
        component: () => import('../views/dataSetAll.vue'),
      },{
        path: '/dataSetInfo',
        component: () => import('../views/dataSetInfo.vue'),
        props: route => ({id: route.query.id})
      },


      /**
       * Type page
       *
       *  */
     {
        path:"/typeLicense",
        component:()=>import("../views/typeLicense.vue"),
      },{
        path:"/typeDataSpecificLicense",
        component:()=>import("../views/typeDataSpecificLicense.vue"),
      },{
        path:"/typeDataSourceTermsofUse",
        component:()=>import("../views/typeDataSourceTermsofUse.vue"),
      },
      /**
       * Search components
       *
       *  */
       {
        path:"/searchLicense",
        component:()=>import("../components/Search/searchLicense.vue"),
      },{
        path:"/searchDataset",
        component:()=>import("../components/Search/searchDataset.vue"),
      },
      {
        path:"/searchTypeLicense",
        component:()=>import("../components/Search/searchTypeLicense.vue"),
      },
      {
        path:"/searchTypeDataSpecificLicense",
        component:()=>import("../components/Search/searchTypeDataSpecificLicense.vue"),
      },{
        path:"/searchTypeDataSourceTermsofUse",
        component:()=>import("../components/Search/searchTypeDataSourceTermsofUse.vue"),
      },{
        path:"/searchDatasetInfo",
        component:()=>import("../components/Search/searchDatasetInfo.vue"),
      },{
        path:"/searchLicenseInfo",
        component:()=>import("../components/Search/searchLicenseInfo.vue"),
      },


      /**
       *
       * Export
       *
       *
       */
      {
        path:"/Export",
        component:()=>import("../components/Export/Export.vue"),
      },
      /**
       *
       * format
       *
       */
       {
        path: '/dataSetFormat',
        component: () => import('../components/Template/dataSetFormat.vue'),
      }, {
        path: '/dataSetSymbol',
        component: () => import('../components/Template/dataSetSymbol.vue'),
      },


      /*
    *
    * login
    * */

      {
        path: "/loginPage",
        component: () => import("../components/Login/loginPage.vue"),
      }, {
        path: "/registerPage",
        component: () => import("../components/Login/registerPage.vue"),
      },
      /*
      *
      * upload
      *
      *
      * */
      {
        path: "/uploadLicense",
        component: () => import("../components/Skill/uploadLicense"),
      },


      /*
       *
       * review user
       */
      {
        path:"/review",
        component:()=>import("../views/review.vue"),
        redirect:'/review/review_upload',
        children:[
          {
            path:"/review/review_upload",
            component:()=>import("../components/Review/reviewUpload.vue"),
            meta:{requireAuth:true}
          },
          {
            path:"/review/reviewUploadByFile",
            component:()=>import("../components/Review/reviewUploadByFile"),
            meta:{requireAuth:true}
          },{
            name:"/review/appending_aibom",
            path:"/review/appending_aibom",
            component:()=>import("../components/Review/apendingAIBOM"),
            meta:{requireAuth:true}
          },{
            name:"/review/reviewedDataSet",
            path:"/review/reviewedDataSet",
            component:() => import("../components/Review/reviewedDataSet"),
            meta:{requireAuth:true}
          }
        ]
      },

      /*
      *
      * inspect page
      */
      {
        path: '/inspectDataSet',
        component: () => import('../views/inspectDataSetAll.vue'),
      },

    ]
  })
