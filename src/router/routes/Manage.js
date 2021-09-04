import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const ManageRoutes = [

  // leads

  {
    path: '/leads/list',
    component: lazy(() => import('../../views/manage/leads/list'))
  },
  {
    path: '/leads/edit',
    exact: true,
    component: () => <Redirect to="/leads/edit/1" />
  },
  {
    path: '/leads/edit/:id',
    component: lazy(() => import('../../views/manage/leads/edit')),
    meta: {
      navLink: '/leads/edit'
    }
  },
  {
    path: '/leads/view',
    exact: true,
    component: () => <Redirect to="/leads/view/1" />
  },
  {
    path: '/leads/view/:id',
    component: lazy(() => import('../../views/manage/leads/view')),
    meta: {
      navLink: '/leads/view'
    }
  },

  // User List

  {
    path: '/users/list',
    component: lazy(() => import('../../views/users/list'))
  },
  {
    path: '/users/edit',
    exact: true,
    component: () => <Redirect to="/users/edit/1" />
  },
  {
    path: '/users/edit/:id',
    component: lazy(() => import('../../views/users/edit')),
    meta: {
      navLink: '/users/edit'
    }
  },
  {
    path: '/users/view',
    exact: true,
    component: () => <Redirect to="/users/view/1" />
  },
  {
    path: '/users/view/:id',
    component: lazy(() => import('../../views/users/view')),
    meta: {
      navLink: '/users/view'
    }
  },

  // Converstaions

  {
    path: '/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/manage/conversations'))
  },

  // Disputes

  {
    path: '/disputes/view',
    component: lazy(() => import('../../views/manage/disputes')),
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    path: '/disputes/review',
    component: lazy(() => import('../../views/manage/disputes/review')),
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },

  // Numbers

  {
    path: '/numbers/view',
    component: lazy(() => import('../../views/manage/numbers')),
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
  {
    path: '/numbers/purchase',
    component: lazy(() => import('../../views/manage/numbers/purchase')),
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },

  // Blocked Numbers

  {
    path: '/blocked-numbers/view',
    component: lazy(() => import('../../views/manage/blocked-numbers')),
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  }
]

export default ManageRoutes
