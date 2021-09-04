import { Fragment } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

const Address = ({ stepper, type }) => {
  const onSubmit = (event, errors) => {
    if (!errors.length) {
      stepper.next()
    }
    event.preventDefault()
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Address</h5>
        <small>Enter Your Address.</small>
      </div>
      <AvForm onSubmit={onSubmit}>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`address-${type}`}>
              Address
            </Label>
            <AvInput
              required
              type='text'
              id={`address-${type}`}
              name={`address-${type}`}
              placeholder='98  Borough bridge Road, Birmingham'
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`landmark-${type}`}>
              Landmark
            </Label>
            <AvInput
              required
              type='text'
              name={`landmark-${type}`}
              id={`landmark-${type}`}
              placeholder='Borough bridge'
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`pincode-${type}`}>
              Pincode
            </Label>
            <AvInput required type='text' name={`pincode-${type}`} id={`pincode-${type}`} placeholder='658921' />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`city-${type}`}>
              City
            </Label>
            <AvInput required type='text' name={`city-${type}`} id={`city-${type}`} placeholder='Birmingham' />
          </FormGroup>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev'>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </AvForm>
    </Fragment>
  )
}

export default Address
