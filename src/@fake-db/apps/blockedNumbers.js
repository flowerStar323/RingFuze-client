// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { Badge, UncontrolledTooltip } from 'reactstrap'
import { Play } from 'react-feather'

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
  1: { title: 'Blocked', color: 'light-danger' }
}

export let data

// ** Get initial Data
axios.get('/api/blockedNumbersTable/initial-data').then((response) => {
  data = response.data
})

// ** Expandable table component
const Numbers = ({ data }) => {
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
    name: 'Blocked By',
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
    name: 'Number',
    selector: 'number',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Block Date',
    selector: 'blocked_date',
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
          <Link href='#'>
          <Play id='activate' size={14} className='mr-75' />
        </Link>
        <UncontrolledTooltip placement='top' target='activate'>
          Unblock Number
        </UncontrolledTooltip>
        </div>
      )
    }
  }
]

export default Numbers
