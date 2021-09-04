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
  const [buyerLoginButtonColor, setBuyerLoginButtonColor] = useState('#0473BA')

  return (
    <Card className='card-apply-job'>
      <CardHeader>
        <CardTitle tag='h4'>Customize</CardTitle>
      </CardHeader>
      <CardBody>
        <h5 className='apply-job-title mb-1'>
          Use the settings below to customize the login page for your buyers.
        </h5>
        <Row>
          <Col>
            <AvForm className='auth-login-form mt-2'>
              <FormGroup>
                <Label className='form-label' for='buyer-login-link'>
                  Buyer Login Link
                </Label>
                <AvInput
                  disabled
                  type='text'
                  id='buyer-login-link'
                  name='buyer-login-link'
                  value={`https://company.ringfuze.com/buyer/login`}
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='buyer-login-logo'>
                  Logo
                </Label>
                <CustomInput
                  type='file'
                  id='buyer-login-logo'
                  name='buyer-login-logo'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='buyer-login-logo-link'>
                  Logo Link
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='buyer-login-logo-link'
                  name='buyer-login-logo-link'
                  placeholder='https://www.ringfuze.com'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='buyer-login-header'>
                  Header
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='buyer-login-header'
                  name='buyer-login-header'
                  placeholder='Welcome to RingFuze! 👋'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='buyer-login-message'>
                  Message
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='buyer-login-message'
                  name='buyer-login-message'
                  placeholder='Please sign-in to your account'
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='buyer-login-primary-color'>
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
                <Label className='form-label' for='buyer-login-button-text'>
                  Button Text
                </Label>
                <AvInput
                  autoFocus
                  type='text'
                  id='buyer-login-button-text'
                  name='buyer-login-button-text'
                  placeholder='Sign In'
                />
              </FormGroup>
              <FormGroup className='mb-3'>
                <Label className='form-label' for='buyer-login-button-color'>
                  Button Color
                </Label>
                <InputGroup>
                  <Input value={buyerLoginButtonColor} placeholder='#0473BA' />
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
                        color={buyerLoginButtonColor}
                        onChange={(updatedColor) => setBuyerLoginButtonColor(updatedColor.hex)}
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
