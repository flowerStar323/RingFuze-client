import { useState, useContext, Fragment } from 'react'
import Avatar from '@components/avatar'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { toast, Slide } from 'react-toastify'
import { authenticate } from '@store/actions/auth'
import { AUTHENTICATE_SUCCESS, AUTHENTICATE_FAILURE } from '@store/constants/auth'
import { AbilityContext } from '@src/utility/context/Can'
import { Link, useHistory, useLocation } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
import { getHomeRouteForLoggedInUser } from '@utils'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee } from 'react-feather'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import {
  Alert,
  Card,
  CardBody,
  CardTitle,
  CardText,
  FormGroup,
  Label,
  CustomInput,
  Button,
  UncontrolledTooltip
} from 'reactstrap'
import loginImg from '../../assets/images/logo/ringfuze-logo-dark.png'
import '@styles/base/pages/page-auth.scss'

const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully logged in as an {role} user to RingFuze. Now you can get back to work. Enjoy!</span>
    </div>
  </Fragment>
)

const Login = props => {
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const path = location.pathname.split('/login')[0]

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  const handleSubmit = async (event, errors) => {
    event.preventDefault()

    if (errors && !errors.length) {
      if (isSubmitting) return
      setIsSubmitting(true)
      setErrorMessage('')

      const payload = { email, password }
      const result = await dispatch(authenticate(payload))
      setIsSubmitting(false)

      if (result.type === AUTHENTICATE_SUCCESS) {
        // history.push('/')
        window.location.replace("/dashboard")
      }

      if (result.type === AUTHENTICATE_FAILURE) {
        const error = result?.errors?.response?.data?.message
        setErrorMessage(error ? error : "Login failed!")
      }
    }
  }

    return (
      <div className='auth-wrapper auth-v1 px-2'>
        <div className='auth-inner py-2'>
          <Card className='mb-0'>
            <CardBody>
              <Link className='brand-logo' to='https://ringfuze.com' onClick={e => e.preventDefault()}>
                <img src={loginImg} alt="loginImg" />
              </Link>
              <CardTitle tag='h4' className='mb-1'>
               Welcome to RingFuze! 👋
             </CardTitle>
              <CardText className='mb-2'>Please sign-in to your account</CardText>
              <Alert color='primary'>
              <div className='alert-body font-small-2'>
                <p>
                  <small className='mr-50'>
                    <span className='font-weight-bold'>Admin:</span> admin@demo.com | admin
                  </small>
                </p>
                <p>
                  <small className='mr-50'>
                    <span className='font-weight-bold'>Client:</span> client@demo.com | client
                  </small>
                </p>
                <p>
                  <small className='mr-50'>
                    <span className='font-weight-bold'>Buyer:</span> buyer@demo.com | buyer
                  </small>
                </p>
                <p>
                  <small className='mr-50'>
                    <span className='font-weight-bold'>Publisher:</span> publisher@demo.com | publisher
                  </small>
                </p>
              </div>
              <HelpCircle
                id='login-tip'
                className='position-absolute'
                size={18}
                style={{ top: '10px', right: '10px' }}
              />
              <UncontrolledTooltip target='login-tip' placement='left'>
                This is just for ACL demo purpose.
              </UncontrolledTooltip>
            </Alert>
              <AvForm action='/' className='auth-login-form mt-2' onSubmit={handleSubmit}>
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
                    onChange={e => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/forgot-password'>
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
                  onChange={e => setPassword(e.target.value)}
                />
              </FormGroup>
              <Alert color="danger">
                {errorMessage && (<p className='font-small-2 pl-1'>{errorMessage}</p>)}
              </Alert>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button.Ripple type="submit" color='primary' block disabled={!email.length || !password.length}>
                Sign in
              </Button.Ripple>
              </AvForm>
              <p className='text-center mt-2'>
                <span className='mr-25'>New on our platform?</span>
                <Link to={`${path}/register`}>
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
   )
}

export default Login
