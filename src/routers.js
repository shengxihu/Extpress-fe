import Vue from 'vue'
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import App from './app.vue';

Vue.use(VueRouter);
Vue.use(vueResource);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
var router = new VueRouter({
    // 是否开启HTML5的history模式,开启后,需服务端支持,否则404
    history: false
});

router.map({
    '/sign': {
        name: 'sign',
        title: 'Sign',
        component: function(resolve) {
            require(['./views/sign.vue'], resolve);
        }
    },
    '/mail': {
        name: 'mail',
        title: 'Mail',
        component: function(resolve) {
            require(['./views/mail.vue'], resolve);
        }
    },
    '/express': {
        name: 'express',
        title: 'Express',
        component: function(resolve) {
            require(['./views/express.vue'], resolve);
        }
    },
    '/order': {
        name: 'order',
        title: 'Order',
        component: function(resolve) {
            require(['./views/order.vue'], resolve);
        }
    },
    '/index': {
        name: 'index',
        title: 'Index',
        component: function(resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/item': {
        name: 'item',
        title: 'Item',
        component: function(resolve) {
            require(['./views/item.vue'], resolve);
        }
    },
});

//访问记录
window.routeList = [];

router.beforeEach(function(transition) {

    if (routeList.length > 1 && transition.to.name == routeList[routeList.length - 2]['name']) {
        routeList.splice(routeList.length - 1, 1);
        //console.log(routeList);
    } else {
        routeList.push({
            name: transition.to.name,
            path: transition.to.path,
            query: transition.to.query,
            params: transition.to.params,
            timer: +new Date
        });
    }

    //切换title
    document.title = transition.to.title || document.title

    transition.next();
});

router.afterEach(function() {

});

router.redirect({
    '/': "/item"
});
router.start(App, '#app');