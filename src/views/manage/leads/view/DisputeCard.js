// ** Reactstrap
import { Fragment, useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Col, Row, Badge, Button } from 'reactstrap'

// ** Sidebar
import Sidebar from './Sidebar'

const DisputeCard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // ** Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <Fragment>
    <Card className='plan-card border-primary'>
      <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
        <CardTitle tag="h4">Dispute Call</CardTitle>
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
              <Badge className='mt-1 mb-2' id='current-status' color='light-success'>
              Call Converted
              </Badge>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Button.Ripple className='text-center' color='danger' block onClick={toggleSidebar}>
                Dispute
              </Button.Ripple>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>

    <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </Fragment>
  )
}

export default DisputeCard
