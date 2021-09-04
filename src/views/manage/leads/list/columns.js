// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getLead } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Briefcase, Key, Target, User, Layers, Edit, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Renders Agency Columns
const renderAgency = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.fullName || 'John Doe'} initials />
  }
}

// ** Renders Role Columns
const renderRole = row => {
  const roleObj = {
    lead: {
      class: 'text-primary',
      icon: User
    },
    buyer: {
      class: 'text-success',
      icon: Target
    },
    publisher: {
      class: 'text-warning',
      icon: Layers
    },
    agency: {
      class: 'text-info',
      icon: Briefcase
    },
    admin: {
      class: 'text-danger',
      icon: Key
    }
  }

  const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit

  return (
    <span className='text-truncate text-capitalize align-middle'>
      <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} mr-50`} />
      {row.role}
    </span>
  )
}

const dispositionObj = {
  new: 'light-primary',
  saleMade: 'light-success',
  callback: 'light-warning',
  notInterested: 'light-danger',
  disputePending: 'light-warning',
  disputeWon: 'light-success',
  disputeDenied: 'light-danger',
  credit: 'light-success'
}

export const columns = [
  {
    name: 'Lead',
    minWidth: '297px',
    selector: 'fullName',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderAgency(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/leads/view/${row.id}`}
            className='user-name text-truncate mb-0'
            onClick={() => store.dispatch(getLead(row.id))}
          >
            <span className='font-weight-bold'>{row.fullName}</span>
          </Link>
          <small className='text-truncate text-muted mb-0'>@{row.username}</small>
        </div>
      </div>
    )
  },
    {
    name: 'Phone',
    minWidth: '172px',
    selector: 'phone',
    sortable: true,
    cell: row => row.lead
  },
  {
    name: 'Email',
    minWidth: '320px',
    selector: 'email',
    sortable: true,
    cell: row => row.email
  },
  {
    name: 'Role',
    minWidth: '172px',
    selector: 'role',
    sortable: true,
    cell: row => renderRole(row)
  },
  {
    name: 'Campaign',
    minWidth: '138px',
    selector: 'campaign',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.campaign}</span>
  },
  {
    name: 'Disposition',
    minWidth: '138px',
    selector: 'disposition',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={dispositionObj[row.disposition]} pill>
        {row.disposition}
      </Badge>
    )
  },
  {
    name: 'Actions',
    minWidth: '100px',
    selector: 'fullName',
    sortable: true,
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
          <MoreVertical size={14} className='cursor-pointer' />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag={Link}
            to={`/leads/view/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getLead(row.id))}
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Details</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/leads/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getLead(row.id))}
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Edit</span>
          </DropdownItem>
          <DropdownItem className='w-100'>
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
