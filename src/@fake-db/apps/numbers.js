import NumbersActionDropdown from '../../views/manage/numbers/NumbersActionDropdown'

// ** Custom Components
import Avatar from '@components/avatar'
// ** Third Party Components
import axios from 'axios'
import moment from "moment"

import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

<<<<<<< HEAD
import NumbersActionDropdown from '../../views/manage/numbers/NumbersActionDropdown'
import AssignModal from "./assignModal";

=======
>>>>>>> 97e5fbb275ee068e6d5d3ec5a0e7bb2c480b4064
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

const status = [
  { title: 'Active', color: 'light-success' },
  { title: 'Paused', color: 'light-warning' },
  { title: 'Unassigned', color: 'light-secondary' }
]

export let data
// ** Get initial Data
axios.get('/api/numbersTable/initial-data').then((response) => {
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
    name: 'Publisher',
    selector: 'full_name',
    sortable: true,
    minWidth: '300px',
    cell: (row) => {
      if (row?.publisher && row.status !== "Unassigned") {
        return (
          <div className="d-flex align-items-center">
            {/* {row.avatar === '' ? (
              <Avatar
                color={`light-${states[row.status]}`}
                content={row.full_name}
                initials
              />
            ) : (
              <Avatar
                img={
                  require(`@src/assets/images/portrait/small/avatar-s-${row?.avatar}`)
                    .default
                }
              />
            )} */}
            <div className="user-info text-truncate ml-1">
              <span className="d-block font-weight-bold text-truncate">
                {row?.publisher[0]?.username}
              </span>
              <small>{row?.publisher[0]?.email}</small>
            </div>
          </div>
        )
      }
    }
  },
  {
    name: 'Number',
    selector: 'friendlyName',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Campaign',
    selector: 'campaign',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Purchase Date',
    selector: 'purchaseDate',
    sortable: true,
    minWidth: '150px',
    cell: (row) => {
      return (
        <div>{moment(row?.purchaseDate).format('YYYY MMM Do')}</div>
      )
    }
  },
  {
    name: 'Renewal Date',
    selector: 'created',
    sortable: true,
    minWidth: '150px',
    cell: (row) => {
      return (
        <div>{moment(row?.created).format('YYYY MMM Do')}</div>
      )
    }
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    minWidth: '150px',
    cell: (row) => {
      return (
        <>
          {row.status === 'Active' && (
            <Badge color='light-success' pill>
              {row.status}
            </Badge>
          )}
          {row.status === 'Paused' && (
            <Badge color='light-warning' pill>
              {row.status}
            </Badge>
          )}
          {row.status === 'Unassigned' && (
            <AssignModal row={row} />
          )}
        </>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: (rowData) => {
      return (
        <NumbersActionDropdown rowData={rowData} />
      )
    }
  }
]

export default Numbers
