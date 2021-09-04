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
  const [showBuyerPrimaryColorPicker, setShowBuyerPrimaryColorPicker] = useState(false)
  const [showBuyerButtonColorPicker, setShowBuyerButtonColorPicker] = useState(false)
  const [buyerPrimaryColor, setBuyerPrimaryColor] = useState('#0473BA')
  const [buyerRegisterButtonColor, setBuyerRegisterButtonColor] = useState('#0473BA')

  return (
    <Card className='card-apply-job'>
      <CardHeader>
        <CardTitle tag='h4'>Customize</CardTitle>
      </CardHeader>
      <CardBody>
        <h5 className='apply-job-title mb-1'>
          Use the settings below to customize the registration page for your buyers.
        </h5>
        <Row>
          <Col>
            <AvForm className='auth-login-form mt-2'>
              <FormGroup>
                <Label className='form-label' for='buyer-register-link'>
                  Buyer Registration Link
                </Label>
                <AvInput
                  disabled
                  type='text'
                  id='buyer-register-link'
                  name='buyer-register-link'
                  value={`https://company.ringfuze.com/buyer/register`}
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='buyer-register-logo'>
                  Logo
                </Label>
                <CustomInput
                  type='file'
                  id='buyer-register-logo'
                  name='buyer-register-logo'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='buyer-register-logo-link'>
                  Logo Link
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='buyer-register-logo-link'
                  name='buyer-register-logo-link'
                  placeholder='https://www.ringfuze.com'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='buyer-register-header'>
                  Header
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='buyer-register-header'
                  name='buyer-register-header'
                  placeholder='Get Ready for Takeoff 🚀'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='buyer-register-message'>
                  Message
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='buyer-register-message'
                  name='buyer-register-message'
                  placeholder='Pay-Per-Call management software made easy!'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='buyer-register-logo-link'>
                  Privacy & Terms Link
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='buyer-register-logo-link'
                  name='buyer-register-logo-link'
                  placeholder='https://www.ringfuze.com/privacy-policy'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='buyer-register-primary-color'>
                  Primary Color
                </Label>
                <InputGroup>
                  <Input value={buyerPrimaryColor} placeholder='#0473BA' />
                  <InputGroupAddon addonType='append'>
                    <Button
                      color='primary'
                      outline
                      onClick={() => setShowBuyerPrimaryColorPicker((showBuyerPrimaryColorPicker) => !showBuyerPrimaryColorPicker)}
                    >
                    {showBuyerPrimaryColorPicker ? 'Close Color Picker' : 'Open Color Picker'}
                    </Button>
                    {showBuyerPrimaryColorPicker && (
                      <ChromePicker
                        color={buyerPrimaryColor}
                        onChange={(updatedColor) => setBuyerPrimaryColor(updatedColor.hex)}
                      />
                    )}
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='buyer-register-button-text'>
                  Button Text
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='buyer-register-button-text'
                  name='buyer-register-button-text'
                  placeholder='Sign up'
                />
              </FormGroup>
              <FormGroup className='mb-3'>
                <Label className='form-label' for='buyer-register-button-color'>
                  Button Color
                </Label>
                <InputGroup>
                  <Input value={buyerRegisterButtonColor} placeholder='#0473BA' />
                  <InputGroupAddon addonType='append'>
                    <Button
                      color='primary'
                      outline
                      onClick={() => setShowBuyerButtonColorPicker((showBuyerButtonColorPicker) => !showBuyerButtonColorPicker)}
                    >
                    {showBuyerButtonColorPicker ? 'Close Color Picker' : 'Open Color Picker'}
                    </Button>
                    {showBuyerButtonColorPicker && (
                      <ChromePicker
                        color={buyerRegisterButtonColor}
                        onChange={(updatedColor) => setBuyerRegisterButtonColor(updatedColor.hex)}
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
