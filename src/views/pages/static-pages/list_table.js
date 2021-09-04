// ** React Imports
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ** Table Columns
// import { columns } from './column'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { 
    ChevronDown, 
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
    Settings } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Button, Label, Input, CustomInput, Row, Col, Card, UncontrolledDropdown, Form, FormGroup,
DropdownMenu, DropdownToggle, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter, CardHeader, CardTitle, CardBody    } from 'reactstrap'

// ** Store & Actions
import { getData } from '../../invoices/store/actions'
import { useDispatch, useSelector } from 'react-redux'


// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const CustomHeader = ({ handleFilter, value, handleStatusValue, statusValue, handlePerPage, rowsPerPage }) => {
  return (
    <div className='invoice-list-table-header w-100 py-2'>
      <Row>
        <Col md='6' className='d-flex align-items-center px-0 px-lg-1'>
          <div className='d-flex align-items-center mr-2'>
            <Label for='rows-per-page'>Show</Label>
            <CustomInput
              className='form-control ml-50 pr-3 mr-1'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handlePerPage}
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </CustomInput>
            <Label for='rows-per-page'>Entries</Label>
          </div>
         
        </Col>
        <Col
          md='6'
          className='actions-right d-flex align-items-center justify-content-md-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0'
        >
          {/* <div className='d-flex align-items-center'>
            <Label for='search-invoice'>Search</Label>
            <Input
              id='search-invoice'
              className='ml-50 mr-2 w-100'
              type='text'
              value={value}
              onChange={e => handleFilter(e.target.value)}
              placeholder='Search Invoice'
            />
          </div> */}
          <Input className='w-auto mr-2 pr-3' type='select' value={statusValue} onChange={handleStatusValue}>
            <option value=''>Bulk Actions</option>
            <option value='Status'>Set Status</option>
            <option value='Published'>Published</option>
            <option value='draft'>Draft</option>
            <option value='archived'>Archived</option>
            <option value='Delete'>Delete</option>
            {/* <option value='downloaded'>Downloaded</option>
            <option value='draft'>Draft</option>
            <option value='paid'>Paid</option>
            <option value='partial payment'>Partial Payment</option>
            <option value='past due'>Past Due</option>
            <option value='partial payment'>Partial Payment</option> */}
          </Input>
          <Button.Ripple tag={Link}  color='primary'>
           Apply
          </Button.Ripple>
        </Col>
      </Row>
    </div>
  )
}

const Static_list = () => {
    
  const dispatch = useDispatch()
  const store = useSelector(state => state.invoice)

  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [statusValue, setStatusValue] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  useEffect(() => {
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        status: statusValue,
        q: value
      })
    )
  }, [dispatch])

  const handleFilter = val => {
    setValue(val)
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        status: statusValue,
        q: val
      })
    )
  }

  const handlePerPage = e => {
    dispatch(
      getData({
        page: currentPage,
        perPage: parseInt(e.target.value),
        status: statusValue,
        q: value
      })
    )
    setRowsPerPage(parseInt(e.target.value))
  }

  const handleStatusValue = e => {
    setStatusValue(e.target.value)
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        status: e.target.value,
        q: value
      })
    )
  }

  const handlePagination = page => {
    dispatch(
      getData({
        page: page.selected + 1,
        perPage: rowsPerPage,
        status: statusValue,
        q: value
      })
    )
    setCurrentPage(page.selected + 1)
  }

  const CustomPagination = () => {
    const count = Number((store.total / rowsPerPage).toFixed(0))

    return (
      <ReactPaginate
        pageCount={count || 1}
        nextLabel=''
        breakLabel='...'
        previousLabel=''
        activeClassName='active'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end p-1'}
        />
    )
  }

  const dataToRender = () => {
    const filters = {
      status: statusValue,
      q: value
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (store.data.length > 0) {
      return store.data
    } else if (store.data.length === 0 && isFiltered) {
      return []
    } else {
      return store.allData.slice(0, rowsPerPage)
    }
  }

  // ** Table columns
const columns = [
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
              <DropdownItem tag='a'  className='w-100' onClick={toggle}>
                <Settings size={14} className='mr-50' />
                <span className='align-middle'>Setting</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Archive size={14} className='mr-50' />
                <span className='align-middle'>Archieve</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Trash size={14} className='mr-50' />
                <span className='align-middle'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    }
  ]

  return (
    <div className='invoice-list-wrapper'>
      <Card>
        <div className='invoice-list-dataTable'>
          <DataTable
            noHeader
            pagination
            paginationServer
            subHeader={true}
            columns={columns}
            responsive={true}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            defaultSortField='invoiceId'
            paginationDefaultPage={currentPage}
            paginationComponent={CustomPagination}
            data={dataToRender()}
            selectableRows={true}
            subHeaderComponent={
              <CustomHeader
                value={value}
                statusValue={statusValue}
                rowsPerPage={rowsPerPage}
                handleFilter={handleFilter}
                handlePerPage={handlePerPage}
                handleStatusValue={handleStatusValue}
              />
            }
          />
        </div>
      </Card>
      <Modal isOpen={modal} toggle={toggle} centered={true} size='lg' >
         <ModalHeader toggle={toggle} Primary className="mb-0 h3" >  Page Setting </ModalHeader>         
        <ModalBody>
        <Row>
        <Col md={12}>
        <Form>
          <Row>
            <Col sm='12'>
              <FormGroup>
                <Label for='nameVertical'>Title</Label>
                <Input type='text' name='name' id='nameVertical' placeholder='Title' />
              </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup>
                <Label for='alternative'>Slug</Label>
                <Input type='text' name='alternative' id='alternative' placeholder='Slug' />
              </FormGroup>
            </Col>
            <Col sm='8'>
            <FormGroup>
                <Label for='alternative'>Parent</Label>
                <Input className='' type='select' value={statusValue} onChange={handleStatusValue}>
                <option value=''>Parent </option>
                <option value=''>Parent 1</option>
                <option value=''>Parent 2</option>
              </Input>
            </FormGroup>
            </Col>
            <Col sm='4'>
            <FormGroup>
                <Label for='alternative'>Order</Label>
                <Input className='' type='select' value={statusValue} onChange={handleStatusValue}>
                <option value=''>Order </option>
                <option value=''>Order  1</option>
                <option value=''>Order 2</option>
              </Input>
            </FormGroup>
            </Col>
            <Col sm='8'>
            <FormGroup>
                <Label for='alternative'>Protected Route</Label>
                <Input className='' type='select' value={statusValue} onChange={handleStatusValue}>
                <option value=''>Route</option>
                <option value=''>Route 1</option>
                <option value=''>Route 2</option>
              </Input>
            </FormGroup>
            </Col>
            <Col sm='4'>
            <FormGroup>
                <Label for='alternative'>Status</Label>
                <Input className='' type='select' value={statusValue} onChange={handleStatusValue}>
                <option value=''>Status </option>
                <option value=''>Status  1</option>
                <option value=''>Status  2</option>
              </Input>
            </FormGroup>
            </Col>
          </Row>
          </Form>
          </Col>
          </Row>
          
        </ModalBody>
        <ModalFooter className="border-0 justify-content-start">
          <Button.Ripple color='primary'>Update</Button.Ripple>
          <Button.Ripple color='danger' outline className="ml-auto">
            Delete
          </Button.Ripple>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Static_list
