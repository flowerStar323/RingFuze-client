import { lazy } from 'react'

const PagesRoutes = [
  {
    path: '/not-authorized',
    component: lazy(() => import('../../views/misc/NotAuthorized')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/maintenance',
    component: lazy(() => import('../../views/misc/Maintenance')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/misc/Error')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/coming-soon',
    component: lazy(() => import('../../views/misc/ComingSoon')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  }
]

export default PagesRoutes
