import React from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'

function YourDomain(props) {
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
                <p className="mb-50 text-bold-600">Current Site Name</p>
                <p className="mb-50 text-bold-600 text-primary">
                  yoursite.ringfuze.com
                </p>
              </FormGroup>
            </Col>
            <Col lg="4" md="12" sm="12">
              <FormGroup>
                <p className="mb-50 text-bold-600">Change Site Name</p>
                <InputGroup>
                  <Input
                    id="siteName"
                    name="siteName"
                    placeholder="Your Brand Name"
                    defaultValue=""
                    required
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>.ringfuze.com</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
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
export default YourDomain
