import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/order'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'

Vue.use(Router);

export default new Router({
    routers: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index
                }, {
                    path: '/product/:id',
                    name: 'product',
                    component: Product
                }, {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail
                }
            ]
        }, {
            path: '/cart',
            name: 'cart',
            component: Cart
        }, {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: '/list',
                    name: 'orderList',
                    component: OrderList
                }, {
                    path: '/pay',
                    name: 'orderPay',
                    component: OrderPay
                }, {
                    path: 'confirm',
                    name: 'orderConfirm',
                    component: OrderConfirm
                }
            ]
        }
    ]
});