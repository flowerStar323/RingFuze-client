import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Third Party Components
import { Button, FormGroup, Label, FormText, CustomInput, Alert } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import Cleave from 'cleave.js/react'

import { fetchUsersByPayload } from '../../../redux/actions/user'
import { FETCH_USERS_BY_PAYLOAD_SUCCESS } from '../../../redux/constants/user'
// import { fetchSignedPublishers } from '../../../redux/actions/numbers'
// import { FETCH_SIGNED_PUBLISHERS_SUCCESS } from '../../../redux/constants/numbers'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [publishers, setPublishers] = useState([])
  const [formState, setFormState] = useState({
    country: '',
    type: 'tollFree',
    prefix: '',
    publisher: null
  })
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
      async function fetchData() {
        const result = await dispatch(fetchUsersByPayload({
          role: 'publisher'
        }))
  
        if (result.type === FETCH_USERS_BY_PAYLOAD_SUCCESS) {
          setPublishers(result.payload.data)
        }
      }
  
      fetchData()
  }, [])

  const options = { blocks: [3], uppercase: true }

  const onChangeInput = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  // ** Function to handle form submit
  const onSubmit = (event, errors) => {
    if (!errors.length) {
      toggleSidebar()
    }
    event.preventDefault()

    if (formState.country === '') { 
      setErrorMessage('Select a country') 
    } else {
      history.push('/numbers/purchase', { params: formState })
    }
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='Purchase Number'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <AvForm onSubmit={onSubmit}>
        <FormGroup>
          <Label for='full-name'>Country</Label>
          <AvInput type='select' id='publisher' name='country' onChange={onChangeInput} required>
            <option value=''>Select Country</option>
            <option value='US'>United States of America</option>
            <option value='GBR'>United Kingdom</option>
            <option value='CAN'>Canada</option>
            <option value='MEX'>Mexico</option>
          </AvInput>
        </FormGroup>
         <Label for='number-type'>Type</Label>
        <FormGroup>
          <CustomInput type='radio' id='toll-free' name='type' value='tollFree' inline label='Toll-Free' onChange={onChangeInput} defaultChecked />
          <CustomInput type='radio' id='local' name='type' value='local' inline label='Local' onChange={onChangeInput} />
        </FormGroup>
        <FormGroup>
          <Label for='prefix'>Prefix</Label>
          <Cleave className='form-control' placeholder='' options={options} id='blocks' name="prefix" onChange={onChangeInput} />
          <FormText color='muted'>You can specify the area code or toll free prefix. (optional)</FormText>
        </FormGroup>
        <FormGroup>
          <Label for='publisher'>Assign Publisher</Label>
          <AvInput type='select' id='publisher' name='publisher' onChange={onChangeInput} required>
            <option value=''>Select Publisher</option>
            {publishers?.map((item) => {
              return (
                <option key={item._id} value={item._id}>{item.username}</option>  
              )
            })}
          </AvInput>
        </FormGroup>
        <Alert color="danger">
          {errorMessage && (<p className='font-small-2 pl-1'>{errorMessage}</p>)}
        </Alert>
        <Button type='submit' className='mr-1' color='primary'>
          Search Numbers
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </AvForm>
    </Sidebar>
  )
}

export default SidebarNewUsers
