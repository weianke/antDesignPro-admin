/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  // 登录模块
  {
    path: '/login',
    layout: false,
    component: './User/Login',
  },
  {
    path: '/',
    redirect: '/dashboard/sysInfo',
  },
  // 系统模块
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    routes: [
      {
        path: '/dashboard',
        // 重定向
        redirect: '/dashboard/sysInfo',
      },
      {
        path: '/dashboard/sysInfo',
        name:'系统介绍',
        icon: 'WindowsOutlined',
        component: './Dashboard/SysInfo',
      },
      {
        path: '/dashboard/dashboard',
        name:'dashboard',
        icon:'Bold',
        component: './Dashboard/Dashboard',
      },
      {
        path: '/dashboard/addGoods',
        name:'添加商品',
        icon: 'Plus',
        component: './Dashboard/AddGoods',
      },
    ],
  },
  // 首页配置模块
  {
    path: '/home',
    name: '首页配置',
    icon: 'home',
    routes: [
      {
        path: '/home',
        // 重定向
        redirect: '/home/banner',
      },
      {
        path: '/home/banner',
        name:'轮播图配置',
        icon: '',
        component: './Home/Banner',
      },
      {
        path: '/home/hotsale',
        name:'热销商品配置',
        icon:'',
        component: './Home/HotSale',
      },
      {
        path: '/home/new',
        name:'新品上线配置',
        icon: '',
        component: './Home/New',
      },
      {
        path: '/home/recommend',
        name:'为你推荐配置',
        icon: '',
        component: './Home/Recommend',
      },
    ],
  },
  // 模块管理
  {
    path: '/module',
    name: '模块管理',
    icon: 'Appstore',
    routes: [
      {
        path: '/module',
        // 重定向
        redirect: '/module/classify',
      },
      {
        path: '/module/classify',
        name:'分类管理',
        icon: '',
        component: './Module/Classify',
      },
      {
        path: '/module/goods',
        name:'商品管理',
        icon:'',
        component: './Module/Goods',
      },
      {
        path: '/module/member',
        name:'会员管理',
        icon: '',
        component: './Module/Member',
      },
      {
        path: '/module/order',
        name:'订单管理',
        icon: '',
        component: './Module/Order',
      },
    ],
  },
  // 系统管理
  {
    path: '/sys',
    name: '系统管理',
    icon: 'setting',
    routes: [
      {
        path: '/sys',
        redirect: '/sys/changepwd',
      },
      {
        path: '/sys/changepwd',
        name:'修改密码',
        icon: '',
        component: './Sys/ChangePwd',
      }
    ]
  },
  // 404页面
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
