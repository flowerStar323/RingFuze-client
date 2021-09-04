import { Circle, Target, Filter, Layers, Copy } from 'react-feather'
import * as TokenService from '../../services/TokenService'

const userRole = TokenService.getUserData()?.role

export default 
(userRole === 'admin' || userRole === 'agency') ? (
  [
    {
      id: 'campaigns',
      title: 'Campaigns',
      icon: <Filter size={20} />,
      action: 'read',
      resource: 'ACL',
      navLink: '/campaigns/list'
    },
    {
      id: 'reports',
      title: 'Reports',
      icon: <Copy size={20} />,
      action: 'read',
      resource: 'ACL',
      navLink: '/reports'
    },
    {
      id: 'buyers',
      title: 'Buyers',
      icon: <Target size={20} />,
      children: [
        {
          id: 'createBuyers',
          title: 'Create',
          icon: <Circle size={12} />,
          navLink: '/buyers/create'
        },
        {
          id: 'manageBuyers',
          title: 'Manage',
          icon: <Circle size={12} />,
          navLink: '/buyers/manage'
        },
        {
          id: 'buyersRegister',
          title: 'Register Page',
          icon: <Circle size={12} />,
          navLink: '/buyers/edit/register'
        },
        {
          id: 'buyersLogin',
          title: 'Login Page',
          icon: <Circle size={12} />,
          navLink: '/buyers/edit/login'
        }
      ]
    },
    {
      id: 'publishers',
      title: 'Publishers',
      icon: <Layers size={20} />,
      children: [
        {
          id: 'createPublisher',
          title: 'Create',
          icon: <Circle size={12} />,
          navLink: '/publishers/create'
        },
        {
          id: 'managePublisher',
          title: 'Manage',
          icon: <Circle size={12} />,
          navLink: '/publishers/manage'
        },
        {
          id: 'publisherRegister',
          title: 'Register Page',
          icon: <Circle size={12} />,
          navLink: '/publishers/edit/register'
        },
        {
          id: 'publisherLogin',
          title: 'Login Page',
          icon: <Circle size={12} />,
          navLink: '/publishers/edit/login'
        }
      ]
    }
  ]
) : (
  [
    {
      id: 'campaigns',
      title: 'Campaigns',
      icon: <Filter size={20} />,
      action: 'read',
      resource: 'ACL',
      navLink: '/campaigns/list'
    },
    {
      id: 'reports',
      title: 'Reports',
      icon: <Copy size={20} />,
      action: 'read',
      resource: 'ACL',
      navLink: '/reports'
    }
  ]
)
