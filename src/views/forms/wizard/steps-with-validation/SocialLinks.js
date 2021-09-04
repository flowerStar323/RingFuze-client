import { Fragment } from 'react'
import { ArrowLeft } from 'react-feather'
import { Label, FormGroup, Row, Col, Button } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

const SocialLinks = ({ stepper, type }) => {
  const onSubmit = (event, errors) => {
    if (!errors.length) {
      alert('submitted')
    }
    event.preventDefault()
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Social Links</h5>
        <small>Enter Your Social Links.</small>
      </div>
      <AvForm onSubmit={onSubmit}>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`twitter-${type}`}>
              Twitter
            </Label>
            <AvInput
              required
              type='text'
              id={`twitter-${type}`}
              name={`twitter-${type}`}
              placeholder='https://twitter.com/abc'
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`facebook-${type}`}>
              Facebook
            </Label>
            <AvInput
              required
              type='text'
              id={`facebook-${type}`}
              name={`facebook-${type}`}
              placeholder='https://facebook.com/abc'
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for={`google-${type}`}>
              Google+
            </Label>
            <AvInput
              required
              type='text'
              id={`google-${type}`}
              name={`google-${type}`}
              placeholder='https://plus.google.com/abc'
            />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label' for='linkedin'>
              Linkedin
            </Label>
            <AvInput
              required
              type='text'
              id={`linkedin-${type}`}
              name={`linkedin-${type}`}
              placeholder='https://linkedin.com/abc'
            />
          </FormGroup>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button.Ripple>
          <Button.Ripple type='submit' color='success' className='btn-submit'>
            Submit
          </Button.Ripple>
        </div>
      </AvForm>
    </Fragment>
  )
}

export default SocialLinks
