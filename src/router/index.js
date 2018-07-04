import Vue from 'vue';
import Router from 'vue-router';
import First from '.././pages/first/first.vue';
import Search from '.././pages/search/search.vue';
import Detail from '.././pages/detail/detail.vue';
import Collt from '.././pages/collt/collt.vue';
import Login from '.././pages/login/login.vue';
import Shop from '.././pages/shop/shop.vue';
import User from '.././pages/user/user.vue';
import Order from '.././pages/order/order.vue';
import Register from '.././pages/register/register.vue';
import Step from '.././pages/step/step.vue';
import Address from '.././pages/address/Address.vue';
import CollectGoods from '.././pages/collectGoods/collectGoods.vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'first',
            component: First,
        },
        {
            path: '/search',
            name: 'search',
            component: Search,
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail,
        },
        {
            path: '/collt',
            name: 'collt',
            component: Collt,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop,
        },
        {
            path: '/user',
            name: 'user',
            component: User,
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
        },
        {
            path: '/collectGoods',
            name: 'collectGoods',
            component: CollectGoods,
        },
        {
            path: '/step',
            name: 'step',
            component: Step,
        },
        {
            path: '/address',
            name: 'address',
            component: Address,
        }
    ]
})

export default router;