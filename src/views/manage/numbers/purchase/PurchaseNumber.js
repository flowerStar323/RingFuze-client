// ** React Imports
import React, { Fragment, useState, useEffect, forwardRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// ** Invoice List Sidebar
import Sidebar from './Sidebar'
import PurchaseModal from './PurchaseModal'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Plus } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Row,
  Col
} from 'reactstrap'

import * as TokenService from "../../../../services/TokenService"
import { fetchTwilloNumbers, pricingTwilloNumber } from '../../../../redux/actions/numbers'
import { FETCH_TWILLO_NUMBERS_SUCCESS, PRICING_TWILLO_NUMBER_SUCCESS } from '../../../../redux/constants/numbers'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className="custom-control custom-checkbox">
    <input
      type="checkbox"
      className="custom-control-input"
      ref={ref}
      {...rest}
    />
    <label className="custom-control-label" onClick={onClick} />
  </div>
))

const DisputesTable = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const currentUser = TokenService.getUserData()

  const columns = [
    {
      name: 'Number',
      selector: 'friendlyName',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Type',
      selector: 'type',
      sortable: true,
      minWidth: '150px',
      cell: (row) => {
        const params = location.state?.params
        if (params.type === "tollFree") {
          return (
            <div>Toll Free</div>
          )
        }
        if (params.type === "local") {
          return (
            <div>Local</div>
          )
        }
      }
    },
    {
      name: 'Monthly Fee',
      selector: 'monthly_fee',
      sortable: true,
      minWidth: '150px',
      cell: (row) => {
        return (
          <div>${row.monthly_fee} / month</div>
        )
      }
    },
    {
      name: 'Actions',
      allowOverflow: true,
      cell: (row) => {
        const payload = {
          friendlyName: row.friendlyName,
          phoneNumber: row.phoneNumber,
          monthly_fee: row.monthly_fee,
          type: row.type,
          publisher: location.state?.params.publisher,
          areaCode: location.state?.params.prefix,
          currentUser
        }
        return (
          <PurchaseModal data={payload} />
        )
      }
    }
  ]

  // ** States
  const [phoneNumbers, setPhoneNumbers] = useState([])
  const [pricingNumbers, setPricingNumbers] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    if (location.state) {
      const params = location.state.params
      async function fetchData() {
        const numbersResult = await dispatch(fetchTwilloNumbers(params))

        if (numbersResult.type === FETCH_TWILLO_NUMBERS_SUCCESS) {
          const resNumbers = numbersResult.payload

          const pricingResult = await dispatch(pricingTwilloNumber({ isoCountry: params.country }))
          if (pricingResult.type === PRICING_TWILLO_NUMBER_SUCCESS) {
            setPricingNumbers(pricingResult.payload)

            const resPricingNumbers = pricingResult.payload
            if (resPricingNumbers?.phoneNumberPrices) {
              const localPrice = resPricingNumbers?.phoneNumberPrices[0].current_price
              const tollFreePrice = resPricingNumbers?.phoneNumberPrices[1].current_price

              let monthly_fee
              if (params.type === "tollFree") {
                monthly_fee = tollFreePrice
              }
              if (params.type === "local") {
                monthly_fee = localPrice
              }

              resNumbers.forEach(item => {
                item.monthly_fee = monthly_fee
              })
              setPhoneNumbers(resNumbers)
            }
          }
        }
      }

      fetchData()
    }
  }, [location])

  // ** Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  // ** Function to handle filter
  const handleFilter = (e) => {
    const value = e.target.value
    const updatedData = []
    setSearchValue(value)

    const status = {
      1: { title: 'Pending', color: 'light-warning' },
      2: { title: 'UnderReview', color: 'light-primary' },
      3: { title: 'Approved', color: 'light-success' },
      4: { title: 'Denied', color: 'light-danger' }
    }

    const queryLowered = value.toLowerCase()
    if (value.length) {
      phoneNumbers.forEach((item => {
        if (item.friendlyName.includes(queryLowered)) {
          updatedData.push(item)
        }
      }))

      // updatedData = phoneNumbers?.filter((item) => {
      //   console.log(queryLowered)

      // const startsWith =
      //   item.friendlyName?.toLowerCase().includes(queryLowered) ||
      //   item.type.toLowerCase().includes(queryLowered) ||
      //   item.monthly_fee?.toLowerCase().includes(queryLowered)

      // const includes =
      //   item.friendlyName?.toLowerCase().includes(queryLowered) ||
      //   item.type.toLowerCase().includes(queryLowered) ||
      //   item.monthly_fee?.toLowerCase().includes(queryLowered)

      // if (startsWith) {
      //   return startsWith
      // } else if (!startsWith && includes) {
      //   return includes
      // } else return null
      // })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=""
      nextLabel=""
      forcePage={currentPage}
      onPageChange={(page) => handlePagination(page)}
      pageCount={
        searchValue.length ? filteredData.length / 7 : phoneNumbers.length / 7 || 1
      }
      breakLabel="..."
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      nextLinkClassName="page-link"
      nextClassName="page-item next"
      previousClassName="page-item prev"
      previousLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"
    />
  )

  return (
    <Fragment>
      <Card>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">Buy a Number</CardTitle>
        </CardHeader>
        <Row className="justify-content-end mx-0">
          <Col
            className="d-flex align-items-center justify-content-end mt-1"
            md="6"
            sm="12"
          >
            <Label className="mr-1" for="search-input">
              Search
            </Label>
            <Input
              className="dataTable-filter mb-50"
              type="text"
              bsSize="sm"
              id="search-input"
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>
        <DataTable
          noHeader
          pagination
          selectableRows
          columns={columns}
          paginationPerPage={7}
          className="react-dataTable"
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : phoneNumbers}
          selectableRowsComponent={BootstrapCheckbox}
        />
      </Card>
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </Fragment>
  )
}

export default DisputesTable
