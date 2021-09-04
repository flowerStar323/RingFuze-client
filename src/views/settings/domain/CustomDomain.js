import React from 'react'
import {
  Alert,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import { AlertTriangle } from 'react-feather'

function CustomDomain(props) {
  const { title } = props

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardBody>
          <Row className="match-height">
            <Col lg="12" md="12" sm="12">
              <FormGroup>
                <p className="mb-50 text-bold-600">
                  Step 1. Change DNS Records
                </p>
                <Label className="mb-50">
                  Change your DNS records in your webhosting account by creating
                  a CNAME record for RingFuze. If you are using CloudFlare,
                  please make sure to disable the orange cloud for your
                  RingFuze domain
                </Label>
              </FormGroup>
            </Col>
            <Col lg="12" md="12" sm="12">
              <Alert color="warning">
                <div className="alert-body">
                  <AlertTriangle size={20} />{' '}
                  <span>
                    Point the value of your CNAME record to:
                    target.ringfuze.com
                  </span>
                </div>
              </Alert>
            </Col>
            <Col lg="12" md="12" sm="12">
              <Alert color="warning">
                <div className="alert-body">
                  <AlertTriangle size={20} />{' '}
                  <span>
                    CloudFlare? Please make sure to disable the orange cloud for
                    your RingFuze domain.
                  </span>
                </div>
              </Alert>
            </Col>
            <Col lg="12" md="12" sm="12">
              <FormGroup>
                <p className="mb-50 text-bold-600">
                  Step 1. Change DNS Records
                </p>
                <Label className="mb-150">
                  Fill in the full url of your new custom domain in the field
                  below and hit "Save". If you need more details more
                  details on the instructions, you can visit our FAQ here!
                </Label>
              </FormGroup>
            </Col>
            <Col lg="3" md="12" sm="12">
              <FormGroup>
                <p className="mb-50 text-bold-600">URL:</p>
                <Input
                  id="siteName"
                  name="siteName"
                  placeholder="app.yoursite.com"
                  defaultValue=""
                  required
                />
              </FormGroup>
            </Col>
            <Col lg="12" md="12" sm="12">
              <Button.Ripple className="mr-50" type="submit" color="primary">
                Save
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}
export default CustomDomain
