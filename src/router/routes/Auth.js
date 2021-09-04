import { lazy } from 'react'

const PagesRoutes = [
  // Agency
  {
    path: '/login',
    component: lazy(() => import('../../views/auth/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/auth/Register')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/forgot-password',
    component: lazy(() => import('../../views/auth/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/reset-password',
    component: lazy(() => import('../../views/auth/ResetPassword')),
    layout: 'BlankLayout'
  },
  {
    path: '/reset-password',
    component: lazy(() => import('../../views/auth/ResetPassword')),
    layout: 'BlankLayout'
  },

  // Admin
  {
    path: '/admin/login',
    component: lazy(() => import('../../views/auth/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },

  // Buyer

  {
    path: '/advertiser/login',
    component: lazy(() => import('../../views/auth/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/advertiser/register',
    component: lazy(() => import('../../views/auth/buyers/Register')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/advertiser/forgot-password',
    component: lazy(() => import('../../views/auth/buyers/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/advertiser/reset-password',
    component: lazy(() => import('../../views/auth/buyers/ResetPassword')),
    layout: 'BlankLayout'
  },

  // Publisher

  {
    path: '/publisher/login',
    component: lazy(() => import('../../views/auth/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/publisher/register',
    component: lazy(() => import('../../views/auth/publishers/Register')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/publisher/forgot-password',
    component: lazy(() => import('../../views/auth/publishers/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/publisher/reset-password',
    component: lazy(() => import('../../views/auth/publishers/ResetPassword')),
    layout: 'BlankLayout'
  }
]

export default PagesRoutes
