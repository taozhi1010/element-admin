import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import store from './store'
import api from './api'
import less from 'less'
import './styles/index.less' // global css

Vue.use(ElementUI);
Vue.use(less)
new Vue({
    el: '#app',
    router,
    store,
    api,
    render: h => h(App)
});