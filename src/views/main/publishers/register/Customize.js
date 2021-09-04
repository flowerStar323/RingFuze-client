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
  const [publisherRegisterButtonColor, setPublisherRegisterButtonColor] = useState('#0473BA')

  return (
    <Card className='card-apply-job'>
      <CardHeader>
        <CardTitle tag='h4'>Customize</CardTitle>
      </CardHeader>
      <CardBody>
        <h5 className='apply-job-title mb-1'>
          Use the settings below to customize the registration page for your publishers.
        </h5>
        <Row>
          <Col>
            <AvForm className='auth-login-form mt-2'>
              <FormGroup>
                <Label className='form-label' for='publisher-register-link'>
                  Publisher Registration Link
                </Label>
                <AvInput
                  disabled
                  type='text'
                  id='publisher-register-link'
                  name='publisher-register-link'
                  value={`https://company.ringfuze.com/publisher/register`}
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='publisher-register-logo'>
                  Logo
                </Label>
                <CustomInput
                  type='file'
                  id='publisher-register-logo'
                  name='publisher-register-logo'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='publisher-register-logo-link'>
                  Logo Link
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='publisher-register-logo-link'
                  name='publisher-register-logo-link'
                  placeholder='https://www.ringfuze.com'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='publisher-register-header'>
                  Header
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='publisher-register-header'
                  name='publisher-register-header'
                  placeholder='Get Ready for Takeoff 🚀'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='publisher-register-message'>
                  Message
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='publisher-register-message'
                  name='publisher-register-message'
                  placeholder='Pay-Per-Call management software made easy!'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='publisher-register-logo-link'>
                  Privacy & Terms Link
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='publisher-register-logo-link'
                  name='publisher-register-logo-link'
                  placeholder='https://www.ringfuze.com/privacy-policy'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='publisher-register-primary-color'>
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
                <Label className='form-label' for='publisher-register-button-text'>
                  Button Text
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='publisher-register-button-text'
                  name='publisher-register-button-text'
                  placeholder='Sign up'
                />
              </FormGroup>
              <FormGroup className='mb-3'>
                <Label className='form-label' for='publisher-register-button-color'>
                  Button Color
                </Label>
                <InputGroup>
                  <Input value={publisherRegisterButtonColor} placeholder='#0473BA' />
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
                        color={publisherRegisterButtonColor}
                        onChange={(updatedColor) => setPublisherRegisterButtonColor(updatedColor.hex)}
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
