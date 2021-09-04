// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import {
  Eye,
  TrendingUp,
  Send,
  MoreVertical,
  Download,
  Edit,
  Trash,
  Copy,
  CheckCircle,
  Save,
  ArrowDownCircle,
  Info,
  PieChart,
  Archive,
  Settings
} from 'react-feather'


// ** Bootstrap Checkbox Component


// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

// ** renders client column
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-50  rounded-0 custom-image' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color} className='mr-50 rounded-0 custom-image' content={row.client ? row.client.name : 'John Doe'} initials />
  }
}

// ** Table columns
export const columns = [
  {
    name: 'ID#',
    minWidth: '107px',
    selector: 'id',
    cell: row => <div className>123456</div>
  },
  // {
  //   name: <TrendingUp size={14} />,
  //   minWidth: '102px',
  //   selector: 'invoiceStatus',
  //   sortable: true,
  //   cell: row => {
  //     const color = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].color : 'primary',
  //       Icon = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].icon : Edit
  //     return <Avatar color={color} icon={<Icon size={14} />} />
  //   }
  // },
  {
    name: 'Title',
    minWidth: '250px',
    selector: 'client',
    sortable: true,
    cell: row => {
      const name = row.client ? row.client.name : 'John Doe',
        email = row.client ? row.client.companyEmail : 'johnDoe@email.com'
      return (
        <div className='d-flex justify-content-left align-items-center'>
          {/* {renderClient(row)} */}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{name}</h6>
            {/* <small className='text-truncate text-muted mb-0'>{email}</small> */}
          </div>
        </div>
      )
    }
  },
  {
    name: 'Author',
    minWidth: '250px',
    selector: 'email',
    sortable: true,
    cell: row => {
      const name = row.client ? row.client.name : 'John Doe',
        email = row.client ? row.client.companyEmail : 'johnDoe@email.com'
      return (
        <div className='d-flex justify-content-left align-items-center'>
          {/* {renderClient(row)} */}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{email}</h6>
            {/* <small className='text-truncate text-muted mb-0'>{email}</small> */}
          </div>
        </div>
      )
    }
  },
  {
    name: 'Published',
    selector: 'dueDate',
    sortable: true,
    minWidth: '200px',
    cell: row => row.dueDate
  },
  // {
  //   name: 'Size',
  //   selector: 'size',
  //   sortable: true,
  //   minWidth: '70px',
  //   cell: row => '1.2mb'
  // },
  // {
  //   name: 'modified',
  //   selector: 'dueDate',
  //   sortable: true,
  //   minWidth: '150px',
  //   cell: row => row.dueDate
  // },
  {
    name: 'Action',
    minWidth: '50px',
    maxWidth: '100px',
    selector: '',
    sortable: true,
    center:true,
    cell: row => (
      <div className='column-action d-flex align-items-center justify-content-center'>
        {/* <Send size={17} /> */}
        {/* <Link to={`/apps/invoice/preview/${row.id}`}>
          <Eye size={17} className='mx-1' />
        </Link> */}
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu right>
            {/* <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Download size={14} className='mr-50' />
              <span className='align-middle'>Download</span>
            </DropdownItem> */}
             <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Eye size={14} className='mr-50' />
              <span className='align-middle'>View</span>
            </DropdownItem>
            <DropdownItem tag={Link} to={`/apps/invoice/edit/${row.id}`} className='w-100'>
              <Edit size={14} className='mr-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Trash size={14} className='mr-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Archive size={14} className='mr-50' />
              <span className='align-middle'>Archieve</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Settings size={14} className='mr-50' />
              <span className='align-middle'>Setting</span>
            </DropdownItem>
           
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]
