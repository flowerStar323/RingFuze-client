// ** Third Party Components
import { Card, Label, FormGroup, CardHeader, CardTitle, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

const Address = props => {
  // ** Props
  const { stepper } = props

  // ** On form submit if there are no errors then go to next step
  const onSubmit = (event, errors) => {
    if (!errors.length) {
      stepper.next()
    }
    event.preventDefault()
  }

  return (
    <AvForm className='list-view product-checkout' onSubmit={onSubmit}>
      <Card>
        <CardHeader className='flex-column align-items-start'>
          <CardTitle tag='h4'>Add New Address</CardTitle>
          <CardText className='text-muted mt-25'>
            Be sure to check "Deliver to this address" when you have finished
          </CardText>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-name'>Full Name:</Label>
                <AvInput name='checkout-name' id='checkout-name' placeholder='John Doe' required />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-number'>Number:</Label>
                <AvInput type='number' name='checkout-number' id='checkout-number' placeholder='0123456789' required />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-apt-number'>Flat, House No:</Label>
                <AvInput
                  type='number'
                  name='checkout-apt-number'
                  id='checkout-apt-number'
                  placeholder='9447 Glen Eagles Drive'
                  required
                />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-landmark'>Landmark e.g. near apollo hospital:</Label>
                <AvInput name='checkout-landmark' id='checkout-landmark' placeholder='Near Apollo Hospital' required />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-city'>Town/City:</Label>
                <AvInput name='checkout-city' id='checkout-city' placeholder='Tokyo' required />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-pincode'>Pincode:</Label>
                <AvInput type='number' name='checkout-pincode' id='checkout-pincode' placeholder='201301' required />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='checkout-state'>State:</Label>
                <AvInput name='checkout-state' id='checkout-state' placeholder='California' required />
              </FormGroup>
            </Col>
            <Col md='6' sm='12'>
              <FormGroup className='mb-2'>
                <Label for='add-type'>Address Type:</Label>
                <AvInput type='select' name='add-type' id='add-type' required>
                  <option value='home'>Home</option>
                  <option value='work'>Work</option>
                </AvInput>
              </FormGroup>
            </Col>
            <Col sm='12'>
              <Button.Ripple type='submit' className='btn-next delivery-address' color='primary'>
                Save And Deliver Here
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <div className='customer-card'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>John Doe</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText className='mb-0'>9447 Glen Eagles Drive</CardText>
            <CardText>Lewis Center, OH 43035</CardText>
            <CardText>UTC-5: Eastern Standard Time (EST)</CardText>
            <CardText>202-555-0140</CardText>
            <Button
              block
              type='button'
              color='primary'
              onClick={() => stepper.next()}
              className='btn-next delivery-address mt-2'
            >
              Deliver To This Address
            </Button>
          </CardBody>
        </Card>
      </div>
    </AvForm>
  )
}

export default Address
