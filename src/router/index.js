import Vue from 'vue'
import Router from 'vue-router'

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
       * review
       */
      {
        path:"/review",
        component:()=>import("../views/review.vue"),
        redirect:'/review/review_upload',
        children:[
          {
            path:"/review/review_upload",
            component:()=>import("../components/Review/reviewUpload.vue"),
          },
          {
            path:"/review/appending_aibom",
            component:()=>import("../components/Review/apendingAIBOM"),
          },{
            name:"/review/appending_aibom_table",
            path:"/review/appending_aibom_table",
            component:()=>import("../components/Review/apendingAIBOM-table"),
          },
        ]
      },
    ]
  })
