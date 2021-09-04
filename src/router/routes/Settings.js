import { lazy } from 'react'

const SettingsRoutes = [
  {
    path: '/settings/account',
    component: lazy(() => import('../../views/settings/account')),
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  },
    {
    path: '/integrations/call-tracking',
    component: lazy(() => import('../../views/Integrations/CallTracking'))
  },
  {
    path: '/integrations/payment',
    component: lazy(() => import('../../views/Integrations/payment_gateway'))
  },
  {
    path: '/integrations/analytics',
    component: lazy(() => import('../../views/Integrations/analytics'))
  },
  {
    path: '/integrations/email',
    component: lazy(() => import('../../views/Integrations/email'))
  },
  {
    path: '/settings/domain',
    component: lazy(() => import('../../views/settings/domain'))
  },
  {
    path: '/settings/billing',
    component: lazy(() => import('../../views/settings/billing'))
  },
  {
    path: '/settings/subscription',
    component: lazy(() => import('../../views/settings/subscription'))
  }
]

export default SettingsRoutes
