import { useState, Fragment } from 'react'
import classnames from 'classnames'
import InputPasswordToggle from '@components/input-password-toggle'
import { Facebook, Mail } from 'react-feather'
import { AvForm, AvInput, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation-safe'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  FormGroup,
  Label,
  Button
} from 'reactstrap'
import { Link } from 'react-router-dom'
import loginImg from '../../../../assets/images/logo/ringfuze-logo-dark.png'

const Preview = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)

  const Terms = () => {
    return (
      <Fragment>
        I agree to
        <a className='ml-25' href='#' onClick={e => e.preventDefault()}>
          privacy policy & terms
        </a>
      </Fragment>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Preview</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='auth-wrapper auth-v1 px-2'>
      <div className='auth-inner py-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
             <img src={loginImg} alt="loginImg" />
            </Link>
            <CardTitle tag='h4' className='mb-1 mt-2'>
              Get Ready for Takeoff 🚀
            </CardTitle>
            <CardText className='mb-2'>Pay-Per-Call management software made easy!</CardText>
            <AvForm action='/' className='auth-register-form mt-2'>
              <FormGroup>
                <Label className='form-label' for='register-username'>
                  Username
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  placeholder='johndoe'
                  id='register-username'
                  name='register-username'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-name'>
                  Name
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  placeholder='John Doe'
                  id='register-name'
                  name='register-name'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-phone'>
                  Phone
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  placeholder='+1 (555) 234-8800'
                  id='register-phone'
                  name='register-phone'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-email'>
                  Email
                </Label>
                <AvInput
                  type='email'
                  id='register-email'
                  name='register-email'
                  placeholder='john@example.com'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <InputPasswordToggle
                  tag={AvInput}
                  id='register-password'
                  name='register-password'
                  className='input-group-merge'
                />
              </FormGroup>
              <AvCheckboxGroup name='Remember Me' checked={terms}>
                <AvCheckbox
                  customInput
                  type='checkbox'
                  id='remember-me'
                  value='Remember Me'
                  label={<Terms />}
                  className='custom-control-Primary'
                  onChange={e => setTerms(e.target.checked)}
                />
              </AvCheckboxGroup>
              <Button.Ripple
                block
                color='primary'
              >
                Sign up
              </Button.Ripple>
            </AvForm>
            <p className='text-center mt-2'>
              <span className='mr-25'>Already have an account?</span>
              <Link to='#'>
                <span>Login</span>
              </Link>
            </p>
            <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button.Ripple color='facebook'>
                <Facebook size={14} />
              </Button.Ripple>
              <Button.Ripple color='google'>
                <Mail size={14} />
              </Button.Ripple>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
      </CardBody>
    </Card>
  )
}

export default Preview
