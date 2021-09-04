// ** Reactstrap
import { Card, CardHeader, CardTitle, CardBody, Col, Row, Badge, Button } from 'reactstrap'

const ActionsCard = () => {
  return (
    <Card className='plan-card border-primary'>
      <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
        <CardTitle tag="h4">Actions</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <div>
              <h5 className='mt-1 mb-2'>Status</h5>
            </div>
          </Col>
          <Col>
            <div>
              <Badge className='mt-1 mb-2' id='current-status' color='light-warning'>
              Pending
              </Badge>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Button.Ripple className='text-center' color='primary' block>
                Approve
              </Button.Ripple>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Button.Ripple className='text-center mt-1' color='danger' block>
                Deny
              </Button.Ripple>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ActionsCard
