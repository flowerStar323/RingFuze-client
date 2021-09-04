import React from 'react'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CustomInput,
  Button,
  FormGroup,
  Input,
  Label
} from 'reactstrap'

function Disclaimer(props) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Disclaimer Agreement</CardTitle>
        </CardHeader>
        <CardBody>
          <Row className="match-height">
            <Col lg="12" md="12" sm="12">
              <FormGroup>
                <CustomInput
                  type="switch"
                  className="d-block mb-50"
                  id="enableDisclaimerAgreement"
                  name="enableDisclaimerAgreement"
                  inline
                >
                  <span className="mb-0 ml-sm-0 switch-label text-bold-600">
                    Enable Disclaimer Agreement
                  </span>
                </CustomInput>
                <Label for="disclaimerAgreement" className="mb-50">
                  Require users to accept your terms before receiving a quote.
                </Label>
              </FormGroup>
            </Col>
            <Col lg="12" md="12" sm="12">
              <FormGroup>
                <p className="mb-50 text-bold-600">Disclaimer Label</p>
                <Label for="inputDisclaimerLabel" className="mb-50">
                  This text will be shown next to a checkbox at the end of the
                  quote form. The user needs to check the box to proceed with
                  the quote. An example label would be something like "By
                  clicking this box I accept the terms."
                </Label>
                <Input
                  id="inputDisclaimerLabel"
                  name="inputDisclaimerLabel"
                  defaultValue=""
                  required
                />
              </FormGroup>
            </Col>
            <Col lg="12" md="12" sm="12">
              <FormGroup>
                <p className="mb-50 text-bold-600">Disclaimer Text</p>
                <Label for="inputDisclaimerText" className="mb-50">
                  This is the content of the actual disclaimer that the user
                  needs to accept. The disclaimer content is displayed below the
                  button for requesting a quote.
                </Label>
                <Input
                  type="textarea"
                  id="inputDisclaimerText"
                  name="inputDisclaimerText"
                  rows="3"
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
export default Disclaimer
