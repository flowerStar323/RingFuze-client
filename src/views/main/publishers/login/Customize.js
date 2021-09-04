import React, { useState } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  CustomInput
} from 'reactstrap'
import { ChromePicker } from 'react-color'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

const Customize = () => {
  const [showPublisherPrimaryColorPicker, setShowPublisherPrimaryColorPicker] = useState(false)
  const [showPublisherButtonColorPicker, setShowPublisherButtonColorPicker] = useState(false)
  const [publisherPrimaryColor, setPublisherPrimaryColor] = useState('#0473BA')
  const [publisherLoginButtonColor, setPublisherLoginButtonColor] = useState('#0473BA')

  return (
    <Card className='card-apply-job'>
      <CardHeader>
        <CardTitle tag='h4'>Customize</CardTitle>
      </CardHeader>
      <CardBody>
        <h5 className='apply-job-title mb-1'>
          Use the settings below to customize the login page for your publishers.
        </h5>
        <Row>
          <Col>
            <AvForm className='auth-login-form mt-2'>
              <FormGroup>
                <Label className='form-label' for='publisher-login-link'>
                  Publisher Login Link
                </Label>
                <AvInput
                  disabled
                  type='text'
                  id='publisher-login-link'
                  name='publisher-login-link'
                  value={`https://company.ringfuze.com/publisher/login`}
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='publisher-login-logo'>
                  Logo
                </Label>
                <CustomInput
                  type='file'
                  id='publisher-login-logo'
                  name='publisher-login-logo'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='publisher-login-logo-link'>
                  Logo Link
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='publisher-login-logo-link'
                  name='publisher-login-logo-link'
                  placeholder='https://www.ringfuze.com'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='publisher-login-header'>
                  Header
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='publisher-login-header'
                  name='publisher-login-header'
                  placeholder='Welcome to RingFuze! 👋'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='publisher-login-message'>
                  Message
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='publisher-login-message'
                  name='publisher-login-message'
                  placeholder='Please sign-in to your account'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='publisher-login-primary-color'>
                  Primary Color
                </Label>
                <InputGroup>
                  <Input value={publisherPrimaryColor} placeholder='#0473BA' />
                  <InputGroupAddon addonType='append'>
                    <Button
                      color='primary'
                      outline
                      onClick={() => setShowPublisherPrimaryColorPicker((showPublisherPrimaryColorPicker) => !showPublisherPrimaryColorPicker)}
                    >
                    {showPublisherPrimaryColorPicker ? 'Close Color Picker' : 'Open Color Picker'}
                    </Button>
                    {showPublisherPrimaryColorPicker && (
                      <ChromePicker
                        color={publisherPrimaryColor}
                        onChange={(updatedColor) => setPublisherPrimaryColor(updatedColor.hex)}
                      />
                    )}
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='publisher-login-button-text'>
                  Button Text
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='publisher-login-button-text'
                  name='publisher-login-button-text'
                  placeholder='Sign In'
                />
              </FormGroup>
              <FormGroup className='mb-3'>
                <Label className='form-label' for='publisher-login-button-color'>
                  Button Color
                </Label>
                <InputGroup>
                  <Input value={publisherLoginButtonColor} placeholder='#0473BA' />
                  <InputGroupAddon addonType='append'>
                    <Button
                      color='primary'
                      outline
                      onClick={() => setShowPublisherButtonColorPicker((showPublisherButtonColorPicker) => !showPublisherButtonColorPicker)}
                    >
                    {showPublisherButtonColorPicker ? 'Close Color Picker' : 'Open Color Picker'}
                    </Button>
                    {showPublisherButtonColorPicker && (
                      <ChromePicker
                        color={publisherLoginButtonColor}
                        onChange={(updatedColor) => setPublisherLoginButtonColor(updatedColor.hex)}
                      />
                    )}
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </AvForm>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color='danger' block>
              Cancel
            </Button>
          </Col>
          <Col>
            <Button color='primary' block>
              Update
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Customize
