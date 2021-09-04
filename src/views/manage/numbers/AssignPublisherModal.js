import React, { Fragment, useState, useEffect } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label
} from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import { useDispatch } from 'react-redux'
import { X, UserPlus } from 'react-feather'

import { fetchUsersByPayload } from '../../../redux/actions/user'
import { FETCH_USERS_BY_PAYLOAD_SUCCESS } from '../../../redux/constants/user'
import { updateNumber, fetchNumbers } from '../../../redux/actions/numbers'
import { UPDATE_NUMBER_SUCCESS } from '../../../redux/constants/numbers'

export default function PurchaseModal({ isOpen, openModal, data }) {
  const dispatch = useDispatch()

<<<<<<< HEAD
  const [basicModal, setBasicModal] = useState(open)
  const [publishers, setPublishers] = useState([])
  const [publisher, setPublisher] = useState()
=======
    const [basicModal, setBasicModal] = useState(isOpen)
    const [publishers, setPublishers] = useState([])
    const [publisher, setPublisher] = useState()
>>>>>>> 97e5fbb275ee068e6d5d3ec5a0e7bb2c480b4064

  useEffect(() => {
    if (isOpen) {
      async function fetchData() {
        const result = await dispatch(fetchUsersByPayload({
          role: 'publisher'
        }))

        if (result.type === FETCH_USERS_BY_PAYLOAD_SUCCESS) {
          setPublishers(result.payload.data)
        }
      }

<<<<<<< HEAD
      fetchData()
    }
  }, [isOpen])
=======
    const handleClickSubmit = async () => {
      const result = await dispatch(updateNumber(data._id, { 
        publisher, 
        status: "Active"
      }))
>>>>>>> 97e5fbb275ee068e6d5d3ec5a0e7bb2c480b4064

  const handleClickSubmit = async () => {
    const result = await dispatch(updateNumber(data._id, { publisher, status: "Active" }))

    if (result.type === UPDATE_NUMBER_SUCCESS) {
      await dispatch(fetchNumbers())
      openModal()
    }
<<<<<<< HEAD
  }

  return (
    <Fragment>
      <div className='basic-modal'>
        <Modal isOpen={isOpen} toggle={openModal}>
          <ModalHeader>Assign Publisher</ModalHeader>
          <ModalBody>
            <AvForm>
              <FormGroup className='mt-2'>
                <AvInput type='select' id='publisher' name='publisher' onChange={(e) => setPublisher(e.target.value)} required>
                  <option value=''>Select Publisher</option>
                  {publishers?.map((item) => {
                    return (
                      <option key={item._id} value={item._id}>{item.username}</option>
                    )
                  })}
                </AvInput>
              </FormGroup>
            </AvForm>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={handleClickSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Fragment>
  )
=======
    
    return (
        <Fragment>
          <div className='basic-modal'>
            <Modal isOpen={isOpen} toggle={openModal}>
              <ModalHeader>Assign Publisher</ModalHeader>
              <ModalBody>
                <AvForm>
                  <FormGroup className='mt-2'>
                    <AvInput type='select' id='publisher' name='publisher' onChange={(e) => setPublisher(e.target.value)} required>
                      <option value=''>Select Publisher</option>
                      {publishers?.map((item) => {
                        return (
                            <option key={item._id} value={item._id}>{item.username}</option>  
                        )
                      })}
                    </AvInput>
                  </FormGroup>
                </AvForm>
              </ModalBody>
              <ModalFooter>
              <Button color='danger' outline onClick={openModal}>
                Cancel
              </Button>
              <Button color='primary' onClick={handleClickSubmit}>
                Submit
              </Button>
              </ModalFooter>
            </Modal>
          </div>
        </Fragment>
    )
>>>>>>> 97e5fbb275ee068e6d5d3ec5a0e7bb2c480b4064
}