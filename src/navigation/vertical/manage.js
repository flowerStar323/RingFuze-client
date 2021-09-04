import {
  AlertTriangle,
  Crosshair,
  MessageSquare,
  Users,
  Phone,
  PhoneOff
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
    id: 'manageLeads',
    title: 'Leads',
    icon: <Crosshair size={20} />,
    navLink: '/leads/list'
  },
  {
    id: 'manageConversations',
    title: 'Conversations',
    icon: <MessageSquare size={20} />,
    navLink: '/chat'
  },
  {
    id: 'manageDisputes',
    title: 'Disputes',
    icon: <AlertTriangle size={20} />,
    permissions: ['admin', 'editor'],
    navLink: '/disputes/view'
  },
  {
    id: 'manageNumbers',
    title: 'Numbers',
    icon: <Phone size={20} />,
    navLink: '/numbers/view'
  },
  {
    id: 'manageBlockedNumbers',
    title: 'Blocked Numbers',
    icon: <PhoneOff size={20} />,
    permissions: ['admin', 'editor'],
    navLink: '/blocked-numbers/view'
  }
]
