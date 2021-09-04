import { DollarSign, Settings, Globe, Zap, Circle } from 'react-feather'
import * as TokenService from '../../services/TokenService'

const userRole = TokenService.getUserData()?.role

export default 
(userRole === 'admin' || userRole === 'agency') ? (
  [
    {
      header: 'Settings'
    },
    {
      id: 'settingAccount',
      title: 'Account',
      icon: <Settings size={12} />,
      action: 'read',
      resource: 'ACL',
      navLink: '/settings/account'
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: <Zap size={20} />,
      children: [
        // {
        //   id: "integrateAnalytics",
        //   title: "Analytics",
        //   icon: <Circle size={12} />,
        //   navLink: "/integrations/analytics"
        // },
        {
          id: "integrateEmail",
          title: "Email",
          icon: <Circle size={12} />,
          navLink: "/integrations/email"
        },
        {
          id: "integrateTracking",
          title: "Call Tracking",
          icon: <Circle size={12} />,
          navLink: "/integrations/call-tracking"
        },
        {
          id: "integratePayments",
          title: "Payment Gateways",
          icon: <Circle size={12} />,
          navLink: "/integrations/payment"
        }
      ]
    },
    {
      id: 'settingDomains',
      title: 'Domain',
      icon: <Globe size={12} />,
      navLink: '/settings/domain'
    },
    {
      id: 'settingBilling',
      title: 'Billing',
      icon: <DollarSign size={12} />,
      navLink: '/settings/billing'
    }
  ]
) : (userRole === 'buyer') ? (
  [
    {
      header: 'Settings'
    },
    {
      id: 'settingAccount',
      title: 'Account',
      icon: <Settings size={12} />,
      action: 'read',
      resource: 'ACL',
      navLink: '/settings/account'
    },
    {
      id: 'settingBilling',
      title: 'Billing',
      icon: <DollarSign size={12} />,
      navLink: '/settings/billing'
    }
  ]
) :  (
  [
    {
      header: 'Settings'
    },
    {
      id: 'settingAccount',
      title: 'Account',
      icon: <Settings size={12} />,
      action: 'read',
      resource: 'ACL',
      navLink: '/settings/account'
    }
  ]
)
