import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRoutes = [{
    path: '/',
    component: () =>
        import ('@/views/manager/index'),
    name: "ManagerIndex",
    hidden: true
}, {
    path: '/login',
    component: () =>
        import ('@/views/login/index'),
    name: "Login",
    hidden: true
}];



const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})

const router = createRouter()

//登陆鉴权 全局前置路由守卫
router.beforeEach((to, from, next) => {
    let isLogin = localStorage.getItem("isLogin");
    if (to.name !== 'Login' && !isLogin) next({
        name: 'Login'
    })
    else next()
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router