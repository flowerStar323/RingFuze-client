// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Invoice List Sidebar
import Sidebar from './Sidebar'

// ** Columns
import { columns } from './columns'

// ** Store & Actions
import { getAllData, getData } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, CardTitle, CardBody, Input, Row, Col, Label, CustomInput, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Header
const CustomHeader = ({ handlePerPage, rowsPerPage, handleFilter, searchTerm }) => {
  return (
    <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
      <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
          <div className='d-flex align-items-center w-100'>
            <Label for='rows-per-page'>Show</Label>
            <CustomInput
              className='form-control mx-50'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handlePerPage}
              style={{
                width: '5rem',
                padding: '0 0.8rem',
                backgroundPosition: 'calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0'
              }}
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </CustomInput>
            <Label for='rows-per-page'>Entries</Label>
          </div>
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
        >
          <div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
            <Label className='mb-0' for='search-invoice'>
              Search:
            </Label>
            <Input
              id='search-invoice'
              className='ml-50 w-100'
              type='text'
              value={searchTerm}
              onChange={e => handleFilter(e.target.value)}
            />
          </div>
          <Button.Ripple color='primary' href='/campaigns/create'>
            Create Campaign
          </Button.Ripple>
        </Col>
      </Row>
    </div>
  )
}

const UsersList = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.users)

  // ** States
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentIndustry, setCurrentIndustry] = useState({ value: '', label: 'Select Industry' })
  const [currentStatus, setCurrentStatus] = useState({ value: '', label: 'Select Status', number: 0 })

  // ** Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  // ** Get data on mount
  useEffect(() => {
    dispatch(getAllData())
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        industry: currentIndustry.value,
        status: currentStatus.value,
        q: searchTerm
      })
    )
  }, [dispatch])

  // ** User filter options
  const industryOptions = [
    {
      label: 'Auto',
      options: [
        { value: 'auto_auto-dealership', label: 'Auto Dealerships' },
        { value: 'auto_auto-repair', label: 'Auto Repair' },
        { value: 'auto_auto-parts', label: 'Auto Parts' },
        { value: 'auto_roadside-assistance', label: 'Roadside Assistance' },
        { value: 'auto_other', label: 'Auto Other' }
      ]
    },
    {
      label: 'Dating',
      options: [
        { value: 'dating', label: 'Dating' },
        { value: 'dating_other', label: 'Dating Other' }
      ]
    },
    {
      label: 'Financial',
      options: [
        { value: 'financial_credit-repair', label: 'Credit Repair' },
        { value: 'financial_debt-relief', label: 'Debt Relief' },
        { value: 'financial_debt-consolidation', label: 'Debt Consolidation' },
        { value: 'financial_credit-card-processing', label: 'Credit Card Processing' },
        { value: 'financial_mortgage', label: 'Mortgage' },
        { value: 'financial_payday-loan', label: 'Payday Loan' },
        { value: 'financial_student-loan-consolidation', label: 'Student Loan Consolidation' },
        { value: 'financial_tax-debt-relief', label: 'Tax Debt Relief' },
        { value: 'financial_other', label: 'Financial Other' }
      ]
    },
    {
      label: 'Business Services',
      options: [
        { value: 'business-services_personal-tax-preparation', label: 'Personal Tax Preparation' },
        { value: 'business-services_business tax-preparation', label: 'Business Tax Preparation' },
        { value: 'business-services_bookkeeping', label: 'Bookkeeping' },
        { value: 'business-services_certified-personal-accountant', label: 'Certified Personal Accountant' },
        { value: 'business-services_business-formation', label: 'Business Formation' },
        { value: 'business-services_payroll-services', label: 'Payroll Services' },
        { value: 'business-services_other', label: 'Business Cervices Other' }
      ]
    },
    {
      label: 'Home Services',
      options: [
        { value: 'home-services_appliance-repair', label: 'Appliance Repair' },
        { value: 'home-services_cable-satellite-tv', label: 'Cable / Satellite TV' },
        { value: 'home-services_cabinets-countertops', label: 'Cabinets & Countertops' },
        { value: 'home-services_door-installation', label: 'Door Installation' },
        { value: 'home-services_electrical', label: 'Electrical' },
        { value: 'home-services_flooring', label: 'Flooring' },
        { value: 'home-services_fences', label: 'Fences' },
        { value: 'home-services_garage-door', label: 'Garage Door' },
        { value: 'home-services_gutter', label: 'Gutter' },
        { value: 'home-services_handyman-service', label: 'Handyman Service' },
        { value: 'home-services_home-cleaner-maid', label: 'Home Cleaner / Maid' },
        { value: 'home-services_home-security', label: 'Home Security' },
        { value: 'home-services_hardscape', label: 'Hardscape' },
        { value: 'home-services_internet', label: 'Internet' },
        { value: 'home-services_lawncare', label: 'Lawncare' },
        { value: 'home-services_landscape', label: 'Landscape' },
        { value: 'home-services_locksmith', label: 'Locksmith' },
        { value: 'home-services_painting-staining', label: 'Painting & Staining' },
        { value: 'home-services_pest-control', label: 'Pest Control' },
        { value: 'home-services_plumbing', label: 'Plumbing' },
        { value: 'home-services_roofing', label: 'Roofing' },
        { value: 'home-services_solar', label: 'Solar' },
        { value: 'home-services_swimming-pools-spas', label: 'Swimming Pools & Spas' },
        { value: 'home-services_tree-removal', label: 'Tree Removal' },
        { value: 'home-services_mold-removal', label: 'Mold Removal' },
        { value: 'home-services_water-damage', label: 'Water Damage' },
        { value: 'home-services_window-installation-repair', label: 'Window Installation/Repair' },
        { value: 'home-services_fire-damage', label: 'Fire Damage' },
        { value: 'home-services_heating-cooling', label: 'Heating & Cooling' },
        { value: 'home-services_other', label: 'Home Services Other' }
      ]
    },
    {
      label: 'Identity Theft',
      options: [
        { value: 'identity-theft', label: 'Identity Theft' },
        { value: 'identity-theft_other', label: 'Identity Theft Other' }
    ]
    },
    {
      label: 'Insurance',
      options: [
        { value: 'insurance_pet', label: 'Pet Insurance' },
        { value: 'insurance_wedding-events', label: 'Wedding & Events Insurance' },
        { value: 'insurance_dental', label: 'Dental Insurance' },
        { value: 'insurance_vision', label: 'Vision Insurance' },
        { value: 'insurance_commercial', label: 'Commercial Insurance' },
        { value: 'insurance_auto', label: 'Auto Insurance' },
        { value: 'insurance_health', label: 'Health Insurance' },
        { value: 'insurance_home', label: 'Home Insurance' },
        { value: 'insurance_condo', label: 'Condo Insurance' },
        { value: 'insurance_renters', label: 'Renters Insurance' },
        { value: 'insurance_life', label: 'Life Insurance' },
        { value: 'insurance_other', label: 'Insurance Other' }
      ]
    },
    {
      label: 'IT Services',
      options: [
        { value: 'it-services_network-infrastructure', label: 'Network Infrastructure' },
        { value: 'it-services_hardware', label: 'Hardware' },
        { value: 'it-services_software', label: 'Software' },
        { value: 'it-services_mobile-cevice-repair', label: 'Mobile Device Repair' },
        { value: 'it-services_cloud-computing', label: 'Cloud Computing' },
        { value: 'it-services_cyber-security', label: 'Cyber Security' },
        { value: 'it-services_other', label: 'IT Service Other' }
      ]
    },
    {
      label: 'Legal',
      options: [
        { value: 'legal_criminal', label: 'Criminal' },
        { value: 'legal_bankruptcy', label: 'Bankruptcy' },
        { value: 'legal_divorce', label: 'Divorce' },
        { value: 'legal_family', label: 'Family' },
        { value: 'legal_medical', label: 'Medical' },
        { value: 'legal_personal-injury', label: 'Personal Injury' },
        { value: 'legal_workers-compensation', label: 'Workers Compensation' },
        { value: 'legal_immigration', label: 'Immigration' },
        { value: 'legal_estate-planning', label: 'Estate Planning' },
        { value: 'legal_intellectual-property', label: 'Intellectual Property' },
        { value: 'legal_corporate', label: 'Corporate' },
        { value: 'legal_tax', label: 'Tax' },
        { value: 'legal_other', label: 'Legal Other' }
      ]
    },
    {
      label: 'Medical',
      options: [
        { value: 'medical_dental', label: 'Dental' },
        { value: 'medical_diet-weight-loss', label: 'Diet / Weight Loss' },
        { value: 'medical_drug-rehab', label: 'Drug Rehab' },
        { value: 'medical_hair-removal', label: 'Hair Removal' },
        { value: 'medical_plastic-surgery', label: 'Plastic Surgery' },
        { value: 'medical_durable-medicalequipment', label: 'Durable Medical Equipment' },
        { value: 'medical_senior-care', label: 'Senior Care' },
        { value: 'medical_other', label: 'Medicare Other' }
      ]
    },
    {
      label: 'Psychic',
      options: [
        { value: 'psychic_online-pyschic', label: 'Online Pyschic' },
        { value: 'psychic_palm-reading', label: 'Palm Reading' },
        { value: 'psychic_tarot-card-readings', label: 'Tarot Card Readings' },
        { value: 'psychic_psychic-readings', label: 'Psychic Readings' },
        { value: 'psychic_chakra-balancing', label: 'Chakra Balancing' },
        { value: 'psychic_meditation-spiritual-healing', label: 'Meditation & Spiritual Healing' },
        { value: 'psychic_other', label: 'Psychic Other' }
      ]
    },
    {
      label: 'Travel',
      options: [
        { value: 'travel_airline-flight-booking', label: 'Airline Flight Booking' },
        { value: 'travel_cruise-lines', label: 'Cruise Lines' },
        { value: 'travel_hotel-bookings', label: 'Hotel Bookings' },
        { value: 'travel_rental-car-bookings', label: 'Rental Car Bookings' },
        { value: 'travel_travel-packages', label: 'Travel Packages' },
        { value: 'travel_other', label: 'Travel Other' }
      ]
    }
  ]

  const statusOptions = [
    { value: '', label: 'Select Status', number: 0 },
    { value: 'paused', label: 'Paused', number: 1 },
    { value: 'active', label: 'Active', number: 2 },
    { value: 'archived', label: 'Archived', number: 3 }
  ]

  // ** Function in get data on page change
  const handlePagination = page => {
    dispatch(
      getData({
        page: page.selected + 1,
        perPage: rowsPerPage,
        industry: currentIndustry.value,
        status: currentStatus.value,
        q: searchTerm
      })
    )
    setCurrentPage(page.selected + 1)
  }

  // ** Function in get data on rows per page
  const handlePerPage = e => {
    const value = parseInt(e.currentTarget.value)
    dispatch(
      getData({
        page: currentPage,
        perPage: value,
        industry: currentIndustry.value,
        status: currentStatus.value,
        q: searchTerm
      })
    )
    setRowsPerPage(value)
  }

  // ** Function in get data on search query change
  const handleFilter = val => {
    setSearchTerm(val)
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        industry: currentIndustry.value,
        status: currentStatus.value,
        q: val
      })
    )
  }

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Number((store.total / rowsPerPage).toFixed(0))

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end my-2 pr-1'}
      />
    )
  }

  // ** Table data to render
  const dataToRender = () => {
    const filters = {
      industry: currentIndustry.value,
      status: currentStatus.value,
      q: searchTerm
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

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='4'>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={industryOptions}
                value={currentIndustry}
                onChange={data => {
                  setCurrentIndustry(data)
                  dispatch(
                    getData({
                      page: currentPage,
                      perPage: rowsPerPage,
                      industry: data.value,
                      status: currentStatus.value,
                      q: searchTerm
                    })
                  )
                }}
              />
            </Col>
            <Col md='4'>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={statusOptions}
                W
                value={currentStatus}
                onChange={data => {
                  setCurrentStatus(data)
                  dispatch(
                    getData({
                      page: currentPage,
                      perPage: rowsPerPage,
                      industry: currentIndustry.value,
                      status: data.value,
                      q: searchTerm
                    })
                  )
                }}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <DataTable
          noHeader
          pagination
          subHeader
          responsive
          paginationServer
          columns={columns}
          sortIcon={<ChevronDown />}
          className='react-dataTable'
          paginationComponent={CustomPagination}
          data={dataToRender()}
          subHeaderComponent={
            <CustomHeader
              toggleSidebar={toggleSidebar}
              handlePerPage={handlePerPage}
              rowsPerPage={rowsPerPage}
              searchTerm={searchTerm}
              handleFilter={handleFilter}
            />
          }
        />
      </Card>

      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </Fragment>
  )
}

export default UsersList
