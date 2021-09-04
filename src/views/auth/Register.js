import { Fragment, useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { AbilityContext } from '@src/utility/context/Can'
import InputPasswordToggle from '@components/input-password-toggle'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import { AvForm, AvInput, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation-safe'
import { Card, CardBody, CardTitle, CardText, FormGroup, Label, Button, Alert } from 'reactstrap'
import classnames from 'classnames'
import useJwt from '@src/auth/jwt/useJwt'
import { authenticate } from '@store/actions/auth'
import { createUser } from '../../redux/actions/user'
import { createTwilloSubAccount } from  '@store/actions/numbers'
import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from '@store/constants/user'
import { AUTHENTICATE_SUCCESS, AUTHENTICATE_FAILURE } from '@store/constants/auth'
import { CREATE_TWILLO_SUB_ACCOUNT_SUCCESS } from '@store/constants/numbers'

import loginImg from '../../assets/images/logo/ringfuze-logo-dark.png'
import '@styles/base/pages/page-auth.scss'

const Register = () => {
  const ability = useContext(AbilityContext)
  const history = useHistory()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const [errors, setErrors] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const Terms = () => {
    return (
      <Fragment>
        I agree to
        <a className='ml-25' href='/' onClick={e => e.preventDefault()}>
          privacy policy & terms
        </a>
      </Fragment>
    )
  }

  const handleSubmit = async (event, errors) => {
    event.preventDefault()
    
    if (errors && !errors.length) {
      if (isSubmitting) return
      setIsSubmitting(true)
      setErrorMessage('')

      const payload = {
        username, name, phone, email, password, role: 'agency', terms
      }

      const createUserResult = await dispatch(createUser(payload))

      if (createUserResult.type === CREATE_USER_SUCCESS) {
        const createdUser = createUserResult.payload
        console.log(createUserResult)

        // create agency twillo sub account
        const resCreateTwilloSubAccount = await dispatch(createTwilloSubAccount({
          userId: createdUser._id,
          username
        }))

        if (resCreateTwilloSubAccount.type === CREATE_TWILLO_SUB_ACCOUNT_SUCCESS) {
          // login
          const loginResult = await dispatch(
            authenticate({
              password,
              email
            })
          )

          if (loginResult.type === AUTHENTICATE_SUCCESS) {
            // history.push("/dashboard")
            window.location.replace("/dashboard")
          }
    
          if (loginResult.type === AUTHENTICATE_FAILURE) {
            const error = loginResult?.errors?.response?.data?.message
            setErrorMessage(error ? error : "Login failed!")
          }
        } else {
          const error = createUserResult?.errors?.response?.data?.message
          setErrorMessage(error ? error : "Create a twillo SubAccount failed!")
        }
      }

      if (createUserResult.type === CREATE_USER_FAILURE) {
        const error = createUserResult?.errors?.response?.data?.message
        setErrorMessage(error ? error : "Sign up failed!")
      }
      setIsSubmitting(false)
    }
  }

  const handleUsernameChange = e => {
    const errs = errors
    if (errs.username) delete errs.username
    setUsername(e.target.value)
    setErrors(errs)
  }

  const handleNameChange = e => {
    const errs = errors
    if (errs.name) delete errs.name
    setName(e.target.value)
    setErrors(errs)
  }

  const handlePhoneChange = e => {
    const errs = errors
    if (errs.phone) delete errs.phone
    setPhone(e.target.value)
    setErrors(errs)
  }

  const handleEmailChange = e => {
    const errs = errors
    if (errs.email) delete errs.email
    setEmail(e.target.value)
    setErrors(errs)
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
              Get Ready for Takeoff 🚀
            </CardTitle>
            <CardText className='mb-2'>Pay-Per-Call management software made easy!</CardText>
            <AvForm action='/' className='auth-register-form mt-2' onSubmit={handleSubmit}>
              <FormGroup>
                <Label className='form-label' for='register-username'>
                  Username
                </Label>
                <AvInput
                  required
                  autoFocus
                  type='text'
                  placeholder='johndoe'
                  id='register-username'
                  name='register-username'
                  value={username}
                  onChange={handleUsernameChange}
                  className={classnames({ 'border-danger': Object.keys(errors).length && errors.username })}
                />
                {Object.keys(errors).length && errors.username ? (
                  <small className='text-danger'>{errors.username}</small>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-name'>
                  Name
                </Label>
                <AvInput
                  required
                  type='text'
                  placeholder='John Doe'
                  id='register-name'
                  name='register-name'
                  value={name}
                  onChange={handleNameChange}
                  className={classnames({ 'border-danger': Object.keys(errors).length && errors.name })}
                />
                {Object.keys(errors).length && errors.name ? (
                  <small className='text-danger'>{errors.name}</small>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-phone'>
                  Phone
                </Label>
                <AvInput
                  required
                  type='text'
                  placeholder='+1 (555) 234-8800'
                  id='register-phone'
                  name='register-phone'
                  value={phone}
                  onChange={handlePhoneChange}
                  className={classnames({ 'border-danger': Object.keys(errors).length && errors.phone })}
                />
                {Object.keys(errors).length && errors.phone ? (
                  <small className='text-danger'>{errors.phone}</small>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-email'>
                  Email
                </Label>
                <AvInput
                  required
                  type='email'
                  id='register-email'
                  name='register-email'
                  value={email}
                  placeholder='john@example.com'
                  onChange={handleEmailChange}
                  className={classnames({ 'border-danger': Object.keys(errors).length && errors.email })}
                />
                {Object.keys(errors).length && errors.email ? (
                  <small className='text-danger'>{errors.email}</small>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <InputPasswordToggle
                  required
                  tag={AvInput}
                  id='register-password'
                  name='register-password'
                  value={password}
                  className='input-group-merge'
                  onChange={e => setPassword(e.target.value)}
                />
              </FormGroup>
              <Alert color="danger">
                {errorMessage && (<p className='font-small-2 pl-1'>{errorMessage}</p>)}
              </Alert>
              <AvCheckboxGroup name='Remember Me' checked={terms} required>
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
                disabled={!email.length || !password.length || !username.length || !terms}
              >
                Sign up
              </Button.Ripple>
            </AvForm>
            <p className='text-center mt-2'>
              <span className='mr-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Sign in instead</span>
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

export default Register
