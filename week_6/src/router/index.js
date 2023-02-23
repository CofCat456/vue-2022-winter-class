import { createRouter, createWebHashHistory } from 'vue-router';

const { VITE_ROUTER_PATH = '' } = import.meta.env;

const routes = [
  {
    path: '/',
    component: () => import('../Layout/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'productList/:category?',
        name: 'ProductList',
        component: () => import('../views/front/ProductListView.vue')
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import('../views/front/CheckoutView.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/front/LoginView.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'AdminHome',
    component: () => import('../Layout/Dashboard.vue'),
    children: [
      {
        path: 'productList',
        name: 'AdminProductList',
        component: () => import('../views/admin/AdminProductList.vue')
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import('../views/admin/AdminOrders.vue')
      }
    ]
  }
];

export default createRouter({
  history: createWebHashHistory(VITE_ROUTER_PATH),
  linkActiveClass: 'active',
  routes,
  base: VITE_ROUTER_PATH
});
