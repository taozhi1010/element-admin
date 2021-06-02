import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import store from './store'
import api from './api'
import less from 'less'
import utils from '@/utils/utils'
import './styles/index.less' // global css
console.log(api)
Vue.use(ElementUI);
Vue.use(less)
Vue.prototype.$api = api
Vue.prototype.$utils = utils
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});