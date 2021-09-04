import { Fragment, useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { CheckCircle, MoreVertical, XCircle, Edit, PauseCircle, UserX } from 'react-feather'

import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter
} from 'reactstrap'

import PurchaseModal from '../../views/manage/numbers/purchase/PurchaseModal'

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
  1: { title: 'Active', color: 'light-success' },
  2: { title: 'Paused', color: 'light-warning' },
  3: { title: 'Unassigned', color: 'light-secondary' }
}

export let data

// ** Get initial Data
axios.get('/api/purchaseNumberTable/initial-data').then((response) => {
  data = response.data
})

// ** Table Common Column
export const columns = [
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
    minWidth: '150px'
  },
  {
    name: 'Monthly Fee',
    selector: 'monthly_fee',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: (row) => {
      return (
        <PurchaseModal data={row} />
      )
    }
  }
]

