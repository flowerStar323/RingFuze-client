import { lazy } from 'react'

const SiteRoutes = [
  // create campaign

  {
    path: '/campaigns/create',
    component: lazy(() => import('../../views/main/campaigns/create')),
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },

  // manage campaigns

  {
    path: '/campaigns',
    component: lazy(() => import('../../views/main/campaigns/manage/list'))
  },
  {
    path: '/campaigns/edit',
    exact: true,
    component: () => <Redirect to="/campaigns/edit/1" />
  },
  {
    path: '/campaigns/edit/:id',
    component: lazy(() => import('../../views/main/campaigns/manage/edit')),
    meta: {
      navLink: '/campaigns/edit'
    }
  },
  {
    path: '/campaigns/view',
    exact: true,
    component: () => <Redirect to="/campaigns/view/1" />
  },
  {
    path: '/campaigns/view/:id',
    component: lazy(() => import('../../views/main/campaigns/manage/view')),
    meta: {
      navLink: '/campaigns/view'
    }
  },

  // reports

  {
    path: '/reports',
    component: lazy(() => import('../../views/main/reports')),
    exact: 'true',
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },

  // Buyer

  {
    path: '/buyers/create',
    component: lazy(() => import('../../views/users/list'))
  },
  {
    path: '/buyers/manage',
    component: lazy(() => import('../../views/users/list'))
  },
  {
    path: '/buyers/edit/register',
    component: lazy(() => import('../../views/main/buyers/register')),
    exact: 'true'
  },
  {
    path: '/buyers/edit/login',
    component: lazy(() => import('../../views/main/buyers/login')),
    exact: 'true'
  },

  // Publisher

  {
    path: '/publishers/create',
    component: lazy(() => import('../../views/users/list'))
  },
  {
    path: '/publishers/manage',
    component: lazy(() => import('../../views/users/list'))
  },
  {
    path: '/publishers/edit/register',
    component: lazy(() => import('../../views/main/publishers/register')),
    exact: 'true'
  },
  {
    path: '/publishers/edit/login',
    component: lazy(() => import('../../views/main/publishers/login')),
    exact: 'true'
  }
]

export default SiteRoutes
