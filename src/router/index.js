/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description router全局配置，如有必要可分文件抽离，其中asyncRoutes只有在intelligence模式下才会用到，vip文档中已提供路由的基础图标与小清新图标的配置方案，请仔细阅读
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts";
import EmptyLayout from "@/layouts/EmptyLayout";
import { publicPath, routerMode } from "@/config/settings";

Vue.use(VueRouter);
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/register",
    component: () => import("@/views/register/index"),
    hidden: true,
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/401"),
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404"),
    hidden: true,
  },
];

export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "index",
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/views/index/index"),
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
        },
      },
    ],
  },

  // {
  //   path: "/personnelManagement",
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   alwaysShow: true,
  //   name: "PersonnelManagement",
  //   meta: { title: "舆情事件态势评估和引导策略", icon: "align-justify", permissions: ["admin"] },
  //   children: [
  //     {
  //       path: "userManagement",
  //       name: "UserManagement",
  //       component: () =>
  //         import("@/views/personnelManagement/new/index"),
  //       meta: { title: "舆情事件态势评估",icon:"list-ul"},
  //     },
  //     {
  //       path: "userManagement1",
  //       component: EmptyLayout,
  //       alwaysShow: true,
  //       name: "UserManagement1",
  //       meta: { title: "舆情事件态势预测分析", icon: "list-ul", permissions: ["admin"] },
  //       children: [
  //         {
  //           path: "c2",
  //           name: "C2",
  //           component: () => import("@/views/forecast/new/index2"),
  //           meta: {
  //             title: "基于背景图的影响力量化评估",
  //             icon:"link",
  //           },
  //         },
  //         {
  //           path: "c1",
  //           name: "C1",
  //           component: () => import("@/views/forecast/new/index1"),
  //           meta: {
  //             title: "基于信息传播模型的传播预测",
  //             icon:"link",
  //             noKeepAlive: true,
  //           },
  //           children: null,
  //         },
  //         {
  //           path: "c4",
  //           name: "C4",
  //           component: () => import("@/views/forecast/new/index5"),
  //           meta: {
  //             title: "基于时空特征的传播预测",
  //             icon:"link",
  //             noKeepAlive: true,
  //           },
  //           children: null,
  //         },
  //
  //       ],
  //     },
  //     {
  //       path: "strategyplan",
  //       name: "Strategyplan",
  //       component: () =>
  //         import("@/views/personnelManagement/new/strategy_plan"),
  //       meta: { title: "弹性引导策略配置预案" },
  //       hidden: true,
  //     },
  //     {
  //       path: "detail/:eventId",
  //       name: "person.detail",
  //       component: () => import("@/views/personnelManagement/new/detailed"),
  //       meta: {title: "详情页面"},
  //       hidden: true,
  //       props:true
  //     }
  //   ],
  // },
  // {
  //   path: "/vab",
  //   component: Layout,
  //   redirect: "noRedirect",
  //   alwaysShow: true,
  //   name: "Vab",
  //   meta: { title: "意见领袖发现与跟踪", icon: "align-justify", permissions: ["admin"]  },
  //   children: [
  //     {
  //       path: "weaklink",
  //       name: "weaklink",
  //       component: () => import("@/views/vab/weaklink/index"),
  //       meta: {
  //         title: "基于主题的意见领袖发现",
  //         icon:"link",
  //       },
  //     },
  //     {
  //       path: "permissions",
  //       name: "Permission",
  //       component: () => import("@/views/vab/permissions/index"),
  //       meta: {
  //         title: "基于事件的意见领袖发现",
  //         icon:"link",
  //       },
  //     },
  //     {
  //       path: "permissions2",
  //       name: "Permissions2",
  //       component: () =>
  //         import("@/views/vab/permissions/index2"),
  //       meta: { title: "意见领袖详细信息" },
  //       hidden: true,
  //     },
  //     {
  //       path: "permissions1",
  //       name: "Permission1",
  //       component: () => import("@/views/vab/permissions/index1"),
  //       meta: {
  //         title: "基于表征的意见领袖跟踪",
  //         icon:"link",
  //       },
  //     },
  //
  //   ],
  // },
  // {
  //   path: "/mall",
  //   component: Layout,
  //   redirect: "noRedirect",
  //   name: "Mall",
  //   meta: {
  //     title: "引导策略工具库和效果展示",
  //     icon: "align-justify",
  //     permissions: ["admin"],
  //   },
  //
  //   children: [
  //     {
  //       path: "Multiple",
  //       name: "Multiple",
  //       component: () => import("@/views/mall/Multiple/index"),
  //       meta: {
  //         title: "基于竞争传播热度消减的引导策略",
  //         icon:"link",
  //       },
  //     },
  //     {
  //       path: "contentgeneration",
  //       name: "contentgeneration",
  //       component: () => import("@/views/mall/contentgeneration/index"),
  //       meta: {
  //         title: "基于内容生成的引导策略",
  //         icon:"link",
  //       },
  //     },
  //     {
  //       path: "pay",
  //       name: "Pay",
  //       component: () => import("@/views/mall/pay/index"),
  //       meta: {
  //         title: "基于传播优化的引导策略",
  //         icon:"link",
  //         noKeepAlive: true,
  //       },
  //       children: null,
  //     },
  //     {
  //       path: "Results_show1",
  //       name: "Results_show1",
  //       component: () => import("@/views/mall/new/index1"),
  //
  //     },
  //     {
  //       path: "Results_show1_1",
  //       name: "Results_show1_1",
  //       component: () => import("@/views/mall/new/index1_1"),
  //
  //     },
  //     {
  //       path: "Results_show1_2",
  //       name: "Results_show1_2",
  //       component: () => import("@/views/mall/new/index1_2"),
  //
  //     },
  //     {
  //       path: "Results_show2",
  //       name: "Results_show2",
  //       component: () => import("@/views/mall/new/index2"),
  //
  //     },
  //     {
  //       path: "Results_show2_1",
  //       name: "Results_show2_1",
  //       component: () => import("@/views/mall/new/index2_1"),
  //
  //     },
  //     {
  //       path: "Results_show2_2",
  //       name: "Results_show2_2",
  //       component: () => import("@/views/mall/new/index2_2"),
  //
  //     },
  //     {
  //       path: "instructions",
  //       name: "instructions",
  //       // redirect:"instructions/index",
  //       component: () => import("@/views/mall/bupt_instructions/index"),
  //       meta: {
  //         title: "基于心理干预的引导策略",
  //         icon:"link",
  //       },
  //
  //     },
  //     {
  //       path: "strategy",
  //       name: "strategy",
  //       // redirect:"instructions/index",
  //       component: () => import("@/views/mall/bupt_instructions/strategy"),
  //       meta: {
  //         title: "策略库",
  //         // icon:"link",
  //       },
  //       hidden: true,
  //       props:true
  //     },
  //     {
  //       path: "strategy2",
  //       name: "strategy2",
  //       // redirect:"instructions/index",
  //       component: () => import("@/views/mall/bupt_instructions/strategy2"),
  //       meta: {
  //         title: "策略库",
  //         // icon:"link",
  //       },
  //       hidden: true,
  //       props:true
  //     },
  //     {
  //       path: "comparison",
  //       name: "comparison",
  //       // redirect:"instructions/index",
  //       component: () => import("@/views/mall/bupt_instructions/comparison"),
  //       meta: {
  //         title: "干预效果",
  //         // icon:"link",
  //       },
  //       hidden: true,
  //       props:true
  //     },
  //
  //
  //   ],
  // },
  {
    path: "/GroupAction",
    component: Layout,
    redirect: "noRedirect",
    name: "GroupAction",
    meta: {
      title: "基于因果推理的网络群体行为理解与预测技术",
      icon: "align-justify",
      permissions: ["admin"],
    },

    children: [
      {
        path: "CauseInference",
        name: "CauseInference",
        component: () => import("@/views/GroupAction/CauseInference/index"),
        meta: {
          title: "网络用户群体行为溯因理解技术",
          icon:"link",
        },
      },
      {
        path: "KeyUser",
        name: "KeyUser",
        component: () => import("@/views/GroupAction/KeyUser/index"),
        meta: {
          title: "群体行为中关键个体发现技术",
          icon:"link",
        },
      },
      {
        path: "FutureKey",
        name: "FutureKey",
        component: () => import("@/views/GroupAction/FutureKey/index"),
        meta: {
          title: "群体行为中未来关键性人物预测技术",
          icon:"link",
        },
      },
      {
        path: "TrendPredict",
        name: "TrendPredict",
        component: () => import("@/views/GroupAction/TrendPredict/index"),
        meta: {
          title: "网络用户群体行为趋势预测技术",
          icon:"link",
        },
      },
    ],
  },
  // {
  //   path: "/error",
  //   component: EmptyLayout,
  //   redirect: "noRedirect",
  //   name: "Error",
  //   meta: { title: "错误页", icon: "bug" },
  //   children: [
  //     {
  //       path: "401",
  //       name: "Error401",
  //       component: () => import("@/views/401"),
  //       meta: { title: "401" },
  //     },
  //     {
  //       path: "404",
  //       name: "Error404",
  //       component: () => import("@/views/404"),
  //       meta: { title: "404" },
  //     },
  //   ],
  // },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  base: publicPath,
  mode: routerMode,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
});
//注释的地方是允许路由重复点击，如果你觉得框架路由跳转规范太过严格可选择放开
/* const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
}; */

export function resetRouter() {
  router.matcher = new VueRouter({
    base: publicPath,
    mode: routerMode,
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  }).matcher;
}

export default router;
