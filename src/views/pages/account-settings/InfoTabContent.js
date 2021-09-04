import { useState } from 'react'
import Flatpickr from 'react-flatpickr'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import { Label, Input, FormGroup, Row, Col, Button } from 'reactstrap'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const InfoTabContent = ({ data }) => {
  const [bio, setBio] = useState(data.bio ? data.bio : '')
  const [dob, setDob] = useState(data.dob ? data.dob : '')
  const [phone, setPhone] = useState(data.phone ? data.phone : '')
  const [website, setWebsite] = useState(data.website ? data.website : '')
  const [country, setCountry] = useState(data.country ? data.country : '')

  return (
    <AvForm onSubmit={e => e.preventDefault()}>
      <Row>
        <Col sm='12'>
          <FormGroup>
            <Label for='bio'>Bio</Label>
            <Input
              id='bio'
              type='textarea'
              rows='4'
              placeholder='Your Bio data here...'
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='birth-date'>Birth Date</Label>
            <AvInput
              tag={Flatpickr}
              name='dob'
              className='form-control'
              value={dob}
              onChange={date => setDob(date)}
              id='birth-date'
              placeholder='Birth Date'
              required
            />
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='country'>Country</Label>
            <Input id='country' type='select' value={country} onChange={e => setCountry(e.target.value)}>
              <option value='USA'>USA</option>
              <option value='France'>France</option>
              <option value='Canada'>Canada</option>
            </Input>
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='website'>Website</Label>
            <AvInput
              type='url'
              id='website'
              name='website'
              value={website}
              onChange={e => setWebsite(e.target.value)}
              placeholder='Website Address'
              required
            />
          </FormGroup>
        </Col>
        <Col sm='6'>
          <FormGroup>
            <Label for='phone'>Phone</Label>
            <Input id='phone' value={phone} onChange={e => setPhone(e.target.value)} placeholder='Phone Number' />
          </FormGroup>
        </Col>
        <Col className='mt-1' sm='12'>
          <Button.Ripple className='mr-1' color='primary'>
            Save changes
          </Button.Ripple>
          <Button.Ripple color='secondary' outline>
            Cancel
          </Button.Ripple>
        </Col>
      </Row>
    </AvForm>
  )
}

export default InfoTabContent
