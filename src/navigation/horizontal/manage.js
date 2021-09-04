import {
  AlertTriangle,
  Circle,
  Users
} from 'react-feather'
export default [
  {
    header: 'Manage'
  },
  // {
  //   id: 'manageUsers',
  //   title: 'Users',
  //   icon: <Users size={20} />,
  //   navLink: '/users/list'
  // },
    {
    id: 'manageContacts',
    title: 'Contacts',
    icon: <Users size={20} />,
    navLink: '/leads/list'
  },
  {
    id: 'manageDisputes',
    title: 'Disputes',
    icon: <AlertTriangle size={20} />,
    permissions: ['admin', 'editor'],
    navLink: '/disputes/view'
  }
  // {
  //   id: 'manageNumbers',
  //   title: 'Numbers',
  //   icon: <Phone size={20} />,
  //   permissions: ['admin', 'editor'],
  //   navLink: '/numbers/view'
  // }
]
