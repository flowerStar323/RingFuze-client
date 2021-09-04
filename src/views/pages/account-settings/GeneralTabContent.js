import { Fragment, useState } from 'react'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert } from 'reactstrap'

const GeneralTabs = ({ data }) => {
  const [email, setEmail] = useState(data.email ? data.email : '')
  const [name, setName] = useState(data.fullName ? data.fullName : '')
  const [avatar, setAvatar] = useState(data.avatar ? data.avatar : '')
  const [company, setCompany] = useState(data.company ? data.company : '')
  const [username, setUsername] = useState(data.username ? data.username : '')

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  return (
    <Fragment>
      <Media>
        <Media className='mr-25' left>
          <Media object className='rounded mr-50' src={avatar} alt='Generic placeholder image' height='80' width='80' />
        </Media>
        <Media className='mt-75 ml-1' body>
          <Button.Ripple tag={Label} className='mr-75' size='sm' color='primary'>
            Upload
            <Input type='file' onChange={onChange} hidden accept='image/*' />
          </Button.Ripple>
          <Button.Ripple color='secondary' size='sm' outline>
            Reset
          </Button.Ripple>
          <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
        </Media>
      </Media>
      <AvForm className='mt-2' onSubmit={e => e.preventDefault()}>
        <Row>
          <Col sm='6'>
            <FormGroup>
              <Label for='username'>Username</Label>
              <AvInput
                id='username'
                name='username'
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder='Username'
                required
              />
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='name'>Name</Label>
              <AvInput
                id='name'
                name='fullname'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Name'
                required
              />
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='email'>E-mail</Label>
              <AvInput
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Email'
                required
              />
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='company'>Company</Label>
              <AvInput
                id='company'
                name='company'
                value={company}
                onChange={e => setCompany(e.target.value)}
                placeholder='Company Name'
                required
              />
            </FormGroup>
          </Col>
          <Col className='mt-75' sm='12'>
            <Alert className='mb-50' color='warning'>
              <h4 className='alert-heading'>Your email is not confirmed. Please check your inbox.</h4>
              <div className='alert-body'>
                <a href='/' className='alert-link' onClick={e => e.preventDefault()}>
                  Resend confirmation
                </a>
              </div>
            </Alert>
          </Col>
          <Col className='mt-2' sm='12'>
            <Button.Ripple className='mr-1' color='primary'>
              Save changes
            </Button.Ripple>
            <Button.Ripple color='secondary' outline>
              Cancel
            </Button.Ripple>
          </Col>
        </Row>
      </AvForm>
    </Fragment>
  )
}

export default GeneralTabs
