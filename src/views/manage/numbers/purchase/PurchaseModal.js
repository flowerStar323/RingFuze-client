import React, { Fragment, useState } from 'react'
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
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { purchaseTwilloNumber, createNewNumber } from '../../../../redux/actions/numbers'
import { PURCHASE_TWILLO_NUMBER_SUCCESS, CREATE_NUMBER_SUCCESS } from '../../../../redux/constants/numbers'

export default function PurchaseModal(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const { friendlyName, monthly_fee, phoneNumber, type, areaCode, publisher, currentUser } = props.data

  const [basicModal, setBasicModal] = useState(false)

<<<<<<< HEAD
  const handleClickPurchase = async () => {
    const result = await dispatch(purchaseTwilloNumber({
      friendlyName,
      phoneNumber,
      areaCode,
      subAccountSid: currentUser.twilloSubAccountSid
    }))
=======
    const handleClickPurchase = async () => {
        const result = await dispatch(purchaseTwilloNumber({ 
          phoneNumber, 
          areaCode, 
          subAccountSid: currentUser.twilloSubAccountSid
        }))
        
        if (result.type === PURCHASE_TWILLO_NUMBER_SUCCESS) {
          const payload = {
            publisherId: publisher,
            phoneNumber: result.payload.phoneNumber,
            friendlyName: result.payload.friendlyName,
            monthlyFee: monthly_fee,
            status: 'Active',
            purchaseDate: result.payload.dateCreated
          }
>>>>>>> 97e5fbb275ee068e6d5d3ec5a0e7bb2c480b4064

    if (result.type === PURCHASE_TWILLO_NUMBER_SUCCESS) {
      const payload = {
        publisherId: publisher,
        phoneNumber: result.payload.phoneNumber,
        friendlyName: result.payload.friendlyName,
        monthlyFee: monthly_fee,
        status: 'Paused',
        purchaseDate: result.payload.dateCreated
      }

      const createNumber = await dispatch(createNewNumber(payload))

      if (createNumber.type === CREATE_NUMBER_SUCCESS) {
        history.push('/numbers/view')
      } else {
        console.log('error')
      }
    }
  }

  return (
    <Fragment>
      <div className="d-flex">
        <Button.Ripple color='primary' onClick={() => setBasicModal(!basicModal)}>
          Buy
        </Button.Ripple>
      </div>
      <div className='basic-modal'>
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader>Review Phone Number</ModalHeader>
          <ModalBody>
            <h2 className='mt-1 mb-1'>{friendlyName}</h2>
            You'll be charged <strong>${monthly_fee}</strong> immediately. Afterwards, you'll be charged <strong>${monthly_fee} / month</strong> in addition to the usage you incur on the phone number.
          </ModalBody>
          <ModalFooter>
            <Button color='danger' outline onClick={() => setBasicModal(!basicModal)}>
              Cancel
            </Button>
            <Button color='primary' onClick={handleClickPurchase}>
              Purchase
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Fragment>
  )
}