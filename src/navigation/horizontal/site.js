import { Circle, Target, Filter, Layers, Copy } from 'react-feather'
export default [
  {
    id: 'campaigns',
    title: 'Campaigns',
    icon: <Filter size={20} />,
    action: 'read',
    resource: 'ACL',
    navLink: '/campaigns'
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
        navLink: '/buyers/register'
      },
      {
        id: 'buyersLogin',
        title: 'Login Page',
        icon: <Circle size={12} />,
        navLink: '/buyers/login'
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
        navLink: '/publishers/register'
      },
      {
        id: 'publisherLogin',
        title: 'Login Page',
        icon: <Circle size={12} />,
        navLink: '/publishers/login'
      }
    ]
  }
]
