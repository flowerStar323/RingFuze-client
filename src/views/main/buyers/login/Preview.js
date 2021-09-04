import { useState } from 'react'
import InputPasswordToggle from '@components/input-password-toggle'
import { Facebook, Mail } from 'react-feather'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  FormGroup,
  Label,
  CustomInput,
  Button
} from 'reactstrap'
import { Link } from 'react-router-dom'
import loginImg from '../../../../assets/images/logo/ringfuze-logo-dark.png'

const Preview = (props) => {
  const [email, setEmail] = useState('admin@demo.com')
  const [password, setPassword] = useState('admin')

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
                <Link
                  className='brand-logo'
                  to='#'
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={loginImg} alt='loginImg' />
                </Link>
                <CardTitle tag='h4' className='mb-1 mt-2'>
                  Welcome to RingFuze! 👋
                </CardTitle>
                <CardText className='mb-2'>
                  Please sign-in to your account
                </CardText>
                <AvForm className='auth-login-form mt-2'>
                  <FormGroup>
                    <Label className='form-label' for='login-email'>
                      Email
                    </Label>
                    <AvInput
                      required
                      autoFocus
                      type='email'
                      value={email}
                      id='login-email'
                      name='login-email'
                      placeholder='email@example.com'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <div className='d-flex justify-content-between'>
                      <Label className='form-label' for='login-password'>
                        Password
                      </Label>
                      <Link to='#'>
                        <small>Forgot Password?</small>
                      </Link>
                    </div>
                    <InputPasswordToggle
                      required
                      tag={AvInput}
                      value={password}
                      id='login-password'
                      name='login-password'
                      className='input-group-merge'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <CustomInput
                      type='checkbox'
                      className='custom-control-Primary'
                      id='remember-me'
                      label='Remember Me'
                    />
                  </FormGroup>
                  <Button.Ripple
                    color='primary'
                    block
                    disabled={!email.length || !password.length}
                  >
                    Sign in
                  </Button.Ripple>
                </AvForm>
                <p className='text-center mt-2'>
                  <span className='mr-25'>New on our platform?</span>
                  <Link to='#'>
                    <span>Create an account</span>
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
