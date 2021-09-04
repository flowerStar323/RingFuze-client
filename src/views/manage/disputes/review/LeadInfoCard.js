// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardHeader, CardTitle, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { User, Check, Star, Flag, Phone, Filter, MapPin } from 'react-feather'
import profileImg from '../../../../assets/images/avatars/1.png'

const BuyerInfoCard = () => {

  return (
    <Card>
      <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">Lead Info</CardTitle>
        </CardHeader>
      <CardBody>
        <Row className='mt-2'>
          <Col xl='6' lg='12' className='d-flex flex-column justify-content-between border-container-lg'>
            <div className='user-avatar-section'>
              <div className='d-flex justify-content-start'>
                <Avatar img={profileImg} imgHeight={92} imgWidth={92} />
                <div className='d-flex flex-column ml-1'>
                  <div className='user-info mb-1'>
                    <h4 className='mb-0'>{'Eleanor Aguilar'}</h4>
                    <CardText tag='span'>
                      {'eleanor.aguilar@gmail.com'}
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
                  {'eleanor.aguilar'}
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
                  <Filter className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title text-capitalize font-weight-bold mb-0'>
                    Campaign
                  </CardText>
                </div>
                <CardText className='text-capitalize mb-0'>
                  {'U65 Health Tra...'}
                </CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <MapPin className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    State
                  </CardText>
                </div>
                <CardText className='mb-0'>{'California'}</CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center'>
                <div className='user-info-title'>
                  <Phone className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    Contact
                  </CardText>
                </div>
                <CardText className='mb-0'>{'(555) 254-8625'}</CardText>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default BuyerInfoCard
