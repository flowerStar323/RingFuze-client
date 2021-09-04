// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardHeader, CardTitle, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone, MapPin } from 'react-feather'
import profileImg from '../../../../assets/images/logo/Business Logos/leadjar.jpg'

const BuyerInfoCard = () => {

  return (
    <Card>
      <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
        <CardTitle tag="h4">Buyer Info</CardTitle>
      </CardHeader>
      <CardBody>
        <Row className='mt-2'>
          <Col xl='6' lg='12' className='d-flex flex-column justify-content-between border-container-lg'>
            <div className='user-avatar-section'>
              <div className='d-flex justify-content-start'>
                <Avatar img={profileImg} imgHeight={92} imgWidth={92} />
                <div className='d-flex flex-column ml-1'>
                  <div className='user-info mb-1'>
                    <h4 className='mb-0'>{'Leadjar LLC'}</h4>
                    <CardText tag='span'>
                      {'hello@leadjar.io'}
                    </CardText>
                  </div>
                  <div className='d-flex flex-wrap align-items-center'>
                    <Button.Ripple tag={Link} to={`#`} color='primary'>
                      View Profile
                    </Button.Ripple>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='d-flex align-items-center user-total-numbers'>
              <div className='d-flex align-items-center mr-2'>
                <div className='color-box bg-light-primary'>
                  <DollarSign className='text-primary' />
                </div>
                <div className='ml-1'>
                  <h5 className='mb-0'>23.3k</h5>
                  <small>Monthly Sales</small>
                </div>
              </div>
              <div className='d-flex align-items-center'>
                <div className='color-box bg-light-success'>
                  <TrendingUp className='text-success' />
                </div>
                <div className='ml-1'>
                  <h5 className='mb-0'>$99.87K</h5>
                  <small>Annual Profit</small>
                </div>
              </div>
            </div> */}
          </Col>
          <Col xl='6' lg='12' className='mt-2 mt-xl-0'>
            <div className='user-info-wrapper'>
              <div className='d-flex flex-wrap align-items-center'>
                <div className='user-info-title'>
                  <User className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    Username
                  </CardText>
                </div>
                <CardText className='mb-0'>
                  {'leadjar'}
                </CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <Check className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    Status
                  </CardText>
                </div>
                <CardText className='text-capitalize mb-0'>
                  {'Active'}
                </CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <Star className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title text-capitalize font-weight-bold mb-0'>
                    Role
                  </CardText>
                </div>
                <CardText className='text-capitalize mb-0'>
                  {'Buyer'}
                </CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <MapPin className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    State
                  </CardText>
                </div>
                <CardText className='mb-0'>{'Florida'}</CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center'>
                <div className='user-info-title'>
                  <Phone className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    Contact
                  </CardText>
                </div>
                <CardText className='mb-0'>{'(123) 456-7890'}</CardText>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default BuyerInfoCard
