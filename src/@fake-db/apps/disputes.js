// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { CheckCircle, MoreVertical, XCircle, Edit } from 'react-feather'

import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

// ** Vars
const states = [
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'primary',
  'secondary'
]

const status = {
  1: { title: 'Pending', color: 'light-warning' },
  2: { title: 'Approved', color: 'light-success' },
  3: { title: 'Denied', color: 'light-danger' }
}

export let data

// ** Get initial Data
axios.get('/api/disputesTable/initial-data').then((response) => {
  data = response.data
})

// ** Expandable table component
const Disputes = ({ data }) => {
  return (
    <div className="expandable-content p-2">
      <p>
        <span className="font-weight-bold">City:</span> {data.city}
      </p>
      <p>
        <span className="font-weight-bold">Experience:</span> {data.experience}
      </p>
      <p className="m-0">
        <span className="font-weight-bold">Post:</span> {data.post}
      </p>
    </div>
  )
}

// ** Table Common Column
export const columns = [
  {
    name: 'Requested By',
    selector: 'full_name',
    sortable: true,
    minWidth: '300px',
    cell: (row) => (
      <div className="d-flex align-items-center">
        {row.avatar === '' ? (
          <Avatar
            color={`light-${states[row.status]}`}
            content={row.full_name}
            initials
          />
        ) : (
          <Avatar
            img={
              require(`@src/assets/images/portrait/small/avatar-s-${row.avatar}`)
                .default
            }
          />
        )}
        <div className="user-info text-truncate ml-1">
          <span className="d-block font-weight-bold text-truncate">
            {row.full_name}
          </span>
          <small>{row.email}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Business',
    selector: 'business',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Requested',
    selector: 'created_date',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Sold Date',
    selector: 'lead_sold_date',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Lead Price',
    selector: 'lead_price',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    minWidth: '150px',
    cell: (row) => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: (row) => {
      return (
        <div className="d-flex">
          <UncontrolledDropdown>
            <DropdownToggle tag="div" className="btn btn-sm">
              <MoreVertical size={14} className="cursor-pointer" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem
                tag="a"
                href="/disputes/review"
                className="w-100"
              >
                <Edit size={14} />
                <span className="align-middle ml-50">Review</span>
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                className="w-100"
                onClick={(e) => e.preventDefault()}
              >
                <CheckCircle size={14} />
                <span className="align-middle ml-50">Approve</span>
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                className="w-100"
                onClick={(e) => e.preventDefault()}
              >
                <XCircle size={14} />
                <span className="align-middle ml-50">Deny</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    }
  }
]

export default Disputes
