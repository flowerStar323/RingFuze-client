import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { MoreVertical, XCircle, Edit, PauseCircle, PlayCircle, UserX, UserPlus } from 'react-feather'

import AssignPublisherModal from './AssignPublisherModal'

import { fetchNumbers, updateNumber, deleteNumber, releaseTwilloNumber, acceptTwilloCall, rejectTwilloCall } from '../../../redux/actions/numbers'
import { PURCHASE_TWILLO_NUMBER_SUCCESS, ACCEPT_TWILLO_CALL_SUCCESS, REJECT_TWILLO_CALL_SUCCESS } from '../../../redux/constants/numbers'

export default function NumbersActionDropdown({ rowData }) {
  const dispatch = useDispatch()

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isActive, setIsActive] = useState(rowData.status === 'Active')
  const [isAssign, setIsAssign] = useState(rowData.publisher === null)

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handleClickAction = (type) => async (e) => {
    e.preventDefault()

    if (type === 'isActive') {
      const payload = {
        status: isActive ? 'Paused' : 'Active'
      }

      if (isActive) {
        // const result = await dispatch(rejectTwilloCall({ phoneNumber: rowData.phoneNumber }))

        // if (result.type === ACCEPT_TWILLO_CALL_SUCCESS) {
        await dispatch(updateNumber(rowData._id, payload))
        setIsActive(!isActive)
        // }
      } else {
        // const result = await dispatch(acceptTwilloCall())

        // if (result.type === ACCEPT_TWILLO_CALL_SUCCESS) {
        await dispatch(updateNumber(rowData._id, payload))
        setIsActive(!isActive)
        // }
      }

    } else if (type === 'isAssign') {
      setIsAssign(!isAssign)

      if (!isAssign) {
        const payload = {
          status: 'Unassigned'
        }

        await dispatch(updateNumber(rowData._id, payload))
      } else {
        setIsOpenModal(true)
      }
    } else if (type === 'delete') {
      console.log(rowData)
      // const result = await dispatch(releaseTwilloNumber({ number: rowData.phoneNumber || rowData.friendlyName }))
      // console.log(result);
      // if (result.type === PURCHASE_TWILLO_NUMBER_SUCCESS) {
      await dispatch(deleteNumber(rowData._id))
      // }
    }
    await dispatch(fetchNumbers())
  }

  return (
    <div className="d-flex">
      <UncontrolledDropdown>
        <DropdownToggle tag="div" className="btn btn-sm">
          <MoreVertical size={14} className="cursor-pointer" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag="a"
            className="w-100"
            onClick={handleClickAction('isActive')}
          >
            {isActive ? (
              <>
                <PauseCircle size={14} />
                <span className="align-middle ml-50">Pause</span>
              </>
            ) : (
              <>
                <PlayCircle size={14} />
                <span className="align-middle ml-50">Active</span>
              </>
            )}
          </DropdownItem>
          <DropdownItem
            tag="a"
            className="w-100"
            onClick={handleClickAction('isAssign')}
          >
            {isAssign ? (
              <>
                <UserPlus size={14} />
                <span className="align-middle ml-50">Assign</span>
              </>
            ) : (
              <>
                <UserX size={14} />
                <span className="align-middle ml-50">Unassign</span>
              </>
            )}
          </DropdownItem>
          <DropdownItem
            tag="a"
            className="w-100"
            onClick={handleClickAction('delete')}
          >
            <XCircle size={14} />
            <span className="align-middle ml-50">Delete</span>
          </DropdownItem>
        </DropdownMenu>
        <AssignPublisherModal isOpen={isOpenModal} openModal={handleOpenModal} data={rowData} />
      </UncontrolledDropdown>
    </div>
  )
}