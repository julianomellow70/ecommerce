
const routes = [
  {
    path: '/',
    //component: () => import(),
    children: [
      { path: '', component: () => import('src/pages/home.page.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/errorNotFound.page.vue')
  }
]

export default routes
