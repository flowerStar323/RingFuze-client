// ** React Imports
import { Link } from 'react-router-dom'

// ** Store & Actions
import { getUser } from '../store/actions'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledTooltip } from 'reactstrap'
import { Trash2, Play, Pause, Edit, Copy, Archive } from 'react-feather'


// Render Status Column
const statusObj = {
  archived: 'light-danger',
  active: 'light-success',
  paused: 'light-warning'
}

export const columns = [
  {
    name: 'Campaign Name',
    minWidth: '400px',
    selector: 'name',
    sortable: true,
    cell: row => row.name
  },
  {
    name: 'Industry',
    minWidth: '176px',
    selector: 'industry',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.industry}</span>
  },
  {
    name: 'Total Calls',
    minWidth: '100px',
    selector: 'totalCalls',
    sortable: true,
    cell: row => row.totalCalls
  },
  {
    name: 'Status',
    minWidth: '100px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
        {row.status}
      </Badge>
    )
  },
  {
    name: 'Actions',
    minWidth: '100px',
    selector: 'status2',
    sortable: true,
    cell: row => (
      <div className='d-flex'>
        <Link href='#'>
          <Play id='activate' size={14} className='mr-75' />
        </Link>
        <UncontrolledTooltip placement='top' target='activate'>
          Activate Campaign
        </UncontrolledTooltip>

        <Link href='#'>
          <Pause id='pause' size={14} className='mr-75' />
        </Link>
        <UncontrolledTooltip placement='top' target='pause'>
          Pause Campaign
        </UncontrolledTooltip>

        <Link href='#'>
          <Edit id='edit' size={14} className='mr-75' />
        </Link>
        <UncontrolledTooltip placement='top' target='edit'>
          Edit Campaign
        </UncontrolledTooltip>

        <Link href='#'>
          <Copy id='duplicate' size={14} className='mr-75' />
        </Link>
        <UncontrolledTooltip placement='top' target='duplicate'>
          Duplicate Campaign
        </UncontrolledTooltip>

        <Link href='#'>
          <Archive id='archive' size={14} className='mr-75' />
        </Link>
        <UncontrolledTooltip placement='top' target='archive'>
          Archive Campaign
        </UncontrolledTooltip>

        <Link href='#'>
          <Trash2 id='delete' size={14} className='mr-75' />
        </Link>
        <UncontrolledTooltip placement='top' target='delete'>
          Delete Campaign
        </UncontrolledTooltip>
      </div>
    )
  }
]
