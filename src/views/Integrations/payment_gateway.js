import { Fragment, useState, useEffect } from 'react'
import { CreditCard, ChevronUp, ChevronDown } from 'react-feather'
import { Row, Col, Card, CardBody, FormGroup, Input, Label, CustomInput, Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import img_file from '../../assets/images/Integrations/stripe-icon.png'
import img_file_1 from '../../assets/images/Integrations/paypal.png'
import video_file from '../../assets/images/Integrations/video-body-img.png'

const Payment = () => {
  const [isActiveStripe, setActiveStripe] = useState(true)
  const [isActivePayPal, setActivePayPal] = useState(true)
  const toggleClassStripe = () => {
    setActiveStripe(!isActiveStripe)
  }
  const toggleClassPayPal = () => {
    setActivePayPal(!isActivePayPal)
  }

  return (
    <section className="intergration-section"> 
      <Card className="title-card">
        <CardBody>
          <div className="title-data">
            <div className="title-icon">
              <CreditCard size="25" className="primary" />
            </div>
            <div className="title-line">
              <h4 className="mb-0">Payment Gateway Integrations</h4>
            </div>
          </div>
          <p className="mt-1">Link your site up to your prefered payment gateway. Don't show your integration listed below.</p> 
          <Link to="/dashboard">Submit a future request here</Link>
        </CardBody>
      </Card>

      {/* stripe card */}
      <Card>
        <CardBody>
          <Row className="align-items-center">
            <Col sm='12' className="mb-1">
              <img src={img_file} className="img-fluid logo-img" alt="image" />
            </Col>
            <Col sm='12' className="mb-1">
              <FormGroup className="mb-0">
                <Label for='nameVertical'>Stripe Publishable Key</Label>
                <Input type='text' name='Publishablekey' id='Publishablekey' placeholder='' />
              </FormGroup>
            </Col>
            <Col sm='12' className="mb-1">
              <FormGroup className="mb-0">
                <Label for='nameVertical'>Stripe Secret Key</Label>
                <Input type='text' name='Secretkey' id='Secretkey' placeholder='' />
              </FormGroup>
            </Col>
            {/* <Col sm='12' className="mb-1">
              <div className="toggle-block">
                <div className="toggle-block-1">
                  <CustomInput
                      type='switch'
                      id='stripeTest'
                      name='stripeTest'
                      inline/>
                </div>
                <div className="toggle-block-2">
                    <span className="mb-0">Live Credentials (Uncheck this if they are sendbox credentials.)</span>   
                </div>
              </div>
            </Col> */}
            <Col md="6" className="md-mb-1">
              <a href='javascript:void(0);' onClick={toggleClassStripe}>
                Watch Video Guide
                <ChevronUp
                  size='25'
                  className={
                    isActiveStripe ? 'd-inline ml-50 p-color' : 'd-none ml-50 p-color'
                  }
                />
                <ChevronDown
                  size='25'
                  className={
                    isActiveStripe ? 'd-none ml-50 p-color' : 'd-inline ml-50 p-color'
                  }
                />
              </a>
            </Col>
            <Col md="6" className="text-right">
              <Button.Ripple
                color='primary'>
                Save
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody>
        {/* stripe video body */}
        <CardBody
          className={isActiveStripe ? 'video-card d-none' : 'video-card d-block'}
        >
          <Row className='justify-content-center text-center'>
            <Col xl={7} lg={8} md={10}>
              <img src={video_file} className='img-fluid w-100' alt='image' />
              <h3 className='mb-0'>How To Setup Stripe</h3>
              <p className='text-left'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className='text-left'>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <Button.Ripple
                href='javascript:void(0);'
                onClick={toggleClassStripe}
                className='btn-icon rounded-circle p-25 mt-25'
                color='primary'
              >
                <ChevronUp
                  size='25'
                  className={isActiveStripe ? 'd-inline' : 'd-none'}
                />
                <ChevronUp
                  size='25'
                  className={isActiveStripe ? 'd-none' : 'd-inline'}
                />
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody>
        {/* end of stripe video body */}
      </Card>

      {/* Paypal card */}
      {/* <Card>
        <CardBody>
          <Row className="align-items-center">
            <Col sm='12' className="mb-1">
              <img src={img_file_1} className="img-fluid logo-img" alt="image" />
            </Col>
            <Col sm='12' className="mb-1">
              <FormGroup className="mb-0">
                <Label for='nameVertical'>Stripe Publishable Key</Label>
                <Input type='text' name='Publishablekey' id='Publishablekey' placeholder='' />
              </FormGroup>
            </Col>
            <Col sm='12' className="mb-1">
              <FormGroup className="mb-0">
                <Label for='nameVertical'>Stripe Secret Key</Label>
                <Input type='text' name='Secretkey' id='Secretkey' placeholder='' />
              </FormGroup>
            </Col>
            <Col sm='12' className="mb-1">
              <div className="toggle-block">
                <div className="toggle-block-1">
                  <CustomInput
                      type='switch'
                      id='paypalTest'
                      name='paypalTest'
                      inline/>
                </div>
                <div className="toggle-block-2">
                    <span className="mb-0">Live Credentials (Uncheck this if they are sendbox credentials.)</span>   
                </div>
              </div>
            </Col>
            <Col md="6" className="md-mb-1">
              <a href='javascript:void(0);' onClick={toggleClassPayPal}>
                Watch Video Guide
                <ChevronUp
                  size='25'
                  className={
                    isActivePayPal ? 'd-inline ml-50 p-color' : 'd-none ml-50 p-color'
                  }
                />
                <ChevronDown
                  size='25'
                  className={
                    isActivePayPal ? 'd-none ml-50 p-color' : 'd-inline ml-50 p-color'
                  }
                />
              </a>
            </Col>
            <Col md="6" className="text-right">
              <Button.Ripple
                color='primary'>
                Save
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody> */}
        {/* paypal video body */}
        {/* <CardBody
          className={isActivePayPal ? 'video-card d-none' : 'video-card d-block'}
        >
          <Row className='justify-content-center text-center'>
            <Col xl={7} lg={8} md={10}>
              <img src={video_file} className='img-fluid w-100' alt='image' />
              <h3 className='mb-0'>How To Setup PayPal</h3>
              <p className='text-left'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className='text-left'>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <Button.Ripple
                href='javascript:void(0);'
                onClick={toggleClassPayPal}
                className='btn-icon rounded-circle p-25 mt-25'
                color='primary'
              >
                <ChevronUp
                  size='25'
                  className={isActivePayPal ? 'd-inline' : 'd-none'}
                />
                <ChevronUp
                  size='25'
                  className={isActivePayPal ? 'd-none' : 'd-inline'}
                />
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody> */}
        {/* end of paypal video body */}
      {/* </Card> */}
    </section>
  )
}

export default Payment
