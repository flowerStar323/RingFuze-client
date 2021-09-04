import { Fragment, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

const AccountDetails = ({ stepper, type }) => {
  const [password, setPassword] = useState(''),
    [confirmPassword, setConfirmPassword] = useState('')

  const onSubmit = (event, errors) => {
    if (!errors.length) {
      if (password === confirmPassword) {
        stepper.next()
      } else {
        alert('Passwords do not match')
      }
    }
    event.preventDefault()
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Account Details</h5>
        <small className='text-muted'>Enter Your Account Details.</small>
      </div>
      <AvForm onSubmit={onSubmit}>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`username-${type}`}>
              Username
            </Label>
            <AvInput required type='text' name={`username-${type}`} id={`username-${type}`} placeholder='johndoe' />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`email-${type}`}>
              Email
            </Label>
            <AvInput
              required
              type='email'
              name={`email-${type}`}
              id={`email-${type}`}
              placeholder='john.doe@email.com'
              aria-label='john.doe'
            />
          </FormGroup>
        </Row>
        <Row>
          <div className='form-group form-password-toggle col-md-6'>
            <Label className='form-label' for={`password-val-${type}`}>
              Password
            </Label>
            <AvInput
              required
              type='password'
              value={password}
              name={`password-val-${type}`}
              id={`password-val-${type}`}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='form-group form-password-toggle col-md-6'>
            <Label className='form-label' for='confirm-password-val'>
              Confirm Password
            </Label>
            <AvInput
              required
              type='password'
              value={confirmPassword}
              name='confirm-password-val'
              id='confirm-password-val'
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='secondary' className='btn-prev' outline disabled>
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

export default AccountDetails
