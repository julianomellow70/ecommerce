
const routes = [
  {
    path: '/',
    component: () => import('src/pages/home.page.vue'),
  },
  {
    path: '/bag',
    component: () => import('src/pages/bag.page.vue'),

  },
  {
    path: '/payment',
    component: () => import('src/pages/payment.page.vue'),

  },
  {
    path: '/payment/success',
    component: () => import('src/pages/payment-success.page.vue'),

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/errorNotFound.page.vue')
  }
]

export default routes
