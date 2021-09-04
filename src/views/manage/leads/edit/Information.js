// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { User, MapPin, Edit2 } from 'react-feather'
import { Row, Col, Button, Label, FormGroup, Input } from 'reactstrap'
import {
  AvForm,
  AvGroup,
  AvInput,
  AvRadioGroup,
  AvCheckboxGroup,
  AvRadio,
  AvCheckbox
} from 'availity-reactstrap-validation-safe'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const LeadInfoTab = ({ selectedLead }) => {
  // ** States
  const [dob, setDob] = useState('')

  // ** Handles dob change
  const handledob = date => setDob(date)

  return (
    <AvForm onSubmit={e => e.preventDefault()}>
      <Row className='mt-1'>
        <Col sm='12'>
          <h4 className='mb-1'>
            <User size={20} className='mr-50' />
            <span className='align-middle'>Personal Information</span>
          </h4>
        </Col>
        <Col lg='4' md='6'>
          <AvGroup>
            <Label className='d-block' for='dob'>
              Date of birth
            </Label>
            <AvInput
              required
              id='dob'
              tag={Flatpickr}
              name='dob'
              className='form-control'
              options={{ dateFormat: 'Y-m-d' }}
              value={dob}
              onChange={handledob}
              placeholder='YYYY-MM-DD'
              required
            />
          </AvGroup>
        </Col>
        <Col lg='4' md='6'>
          <AvGroup>
            <Label for='lead'>Phone</Label>
            <AvInput type='number' id='lead' name='lead' placeholder='' defaultValue={selectedLead.lead} />
          </AvGroup>
        </Col>
        <Col lg='4' md='6'>
          <AvGroup>
            <Label for='website'>Website</Label>
            <AvInput
              type='url'
              id='website'
              name='website'
              placeholder='https://www.yoursite.com'
              value=''
            />
          </AvGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <Label for='languages'>Languages</Label>
            <AvInput type='select' name='status' id='languages'>
              <option value='English'>English</option>
              <option value='Spanish'>Spanish</option>
              <option value='French'>French</option>
              <option value='Russian'>Russian</option>
              <option value='German'>German</option>
              <option value='Arabic'>Arabic</option>
              <option value='Sanskrit'>Sanskrit</option>
            </AvInput>
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <label className='d-block mb-1'>Gender</label>
            <AvRadioGroup inline name='gender' required>
              <AvRadio customInput label='Male' value='Male' />
              <AvRadio customInput label='Female' value='Female' checked />
            </AvRadioGroup>
          </FormGroup>
        </Col>
        <Col lg='4' md='6'>
          <FormGroup>
            <label className='d-block mb-1'>Lead Options</label>
            <AvCheckboxGroup inline name='terms' required>
              <AvCheckbox customInput value='Email' label='Email' />
              <AvCheckbox customInput value='Messages' label='Messages' />
              <AvCheckbox customInput value='Phone' label='Phone' />
            </AvCheckboxGroup>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <h4 className='mb-1 mt-2'>
            <MapPin size={20} className='mr-50' />
            <span className='align-middle'>Address</span>
          </h4>
        </Col>
        <Col lg='4' md='6'>
          <AvGroup>
            <Label for='address-1'>Address Line 1</Label>
            <AvInput value='' placeholder='Street Address' id='address-1' name='address-1' required />
          </AvGroup>
        </Col>
        <Col lg='4' md='6'>
          <AvGroup>
            <Label for='address-2'>Address Line 2</Label>
            <AvInput value='' placeholder='Unit, Suite, Apartment #' id='address-2' name='address-2' required />
          </AvGroup>
        </Col>
        <Col lg='4' md='6'>
          <AvGroup>
            <Label for='postcode'>Postcode</Label>
            <AvInput value='' placeholder='Zip Code' id='postcode' name='postcode' required />
          </AvGroup>
        </Col>
        <Col lg='4' md='6'>
          <AvGroup>
            <Label for='city'>City</Label>
            <AvInput value='' placeholder='City' id='city' name='city' required />
          </AvGroup>
        </Col>
        <Col lg='4' md='6'>
          <AvGroup>
            <Label for='state'>State</Label>
            <AvInput value='' placeholder='State' id='state' name='state' required />
          </AvGroup>
        </Col>
        <Col lg='4' md='6'>
          <AvGroup>
            <Label for='country'>Country</Label>
            <AvInput value='' placeholder='Country' id='country' name='country' required />
          </AvGroup>
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <h4 className='mb-1 mt-2'>
            <Edit2 size={20} className='mr-50' />
            <span className='align-middle'>Notes</span>
          </h4>
        </Col>
        <Col sm='12'>
        <Input type='textarea' name='leadNotes' id='leadNotes' rows='3' placeholder='Enter your notes here...' />
        </Col>
        <Col className='d-flex flex-sm-row flex-column mt-2'>
          <Button type='submit' color='primary' className='mb-1 mb-sm-0 mr-0 mr-sm-1'>
            Save Changes
          </Button>
          <Button type='reset' color='secondary' outline>
            Reset
          </Button>
        </Col>
      </Row>
    </AvForm>
  )
}
export default LeadInfoTab
