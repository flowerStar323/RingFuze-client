import React, { useState } from 'react'
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
  Input
} from 'reactstrap'
import { Trash2 } from 'react-feather'

function PartnersComponent(props) {
  return (
    <Row>
      <Col lg="6" md="12" sm="12">
        <FormGroup>
          <p className="mb-50 text-bold-600">Partner</p>
          <Row>
            <Col lg="8" md="12" sm="12">
              <Input
                id="partnerName"
                name="partnerName"
                defaultValue={props.partnerName}
                required
              />
            </Col>
            <Col lg="2" md="2" sm="2">
              <Trash2
                className="danger"
                size={26}
                onClick={props.handleDeletePartners}
              />
            </Col>
          </Row>
        </FormGroup>
      </Col>
    </Row>
  )
}

function AdvertisingPartners(props) {
  const [partners, setPartners] = useState([{ order: 1, partnerName: '' }])

  const handleAddPartner = (type) => () => {
    if (type === 'partners') {
      const newPartner = { order: partners.length + 1, partnerName: '' }
      const addPartner = [newPartner, ...partners]
      setPartners(addPartner)
    }
  }

  const handleDeletePartner = (type, orderId) => () => {
    if (type === 'partners') {
      const deletedPartnerIndex = partners.findIndex(
        (row) => row.order === orderId
      )
      const deletedPartners = [
        ...partners.slice(0, deletedPartnerIndex),
        ...partners.slice(deletedPartnerIndex + 1)
      ]
      setPartners(deletedPartners)
    }
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Advertising Partners</CardTitle>
        </CardHeader>
        <CardBody>
          <Row className="match-height">
            <Col lg="12" md="12" sm="12">
              <FormGroup>
                <CustomInput
                  type="switch"
                  className="d-block mb-50"
                  id="enableAdvertisingPartners"
                  name="enableAdvertisingPartners"
                  inline
                >
                  <span className="mb-0 ml-sm-0 switch-label text-bold-600">
                    Enable Advertising Partners
                  </span>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col lg="12" md="12" sm="12">
              {partners.map((item) => (
                <PartnersComponent
                  key={item.order}
                  partnerName={item.partnerName}
                  handleDeletePartners={handleDeletePartner(
                    'partners',
                    item.order
                  )}
                />
              ))}
              <Button.Ripple
                className="mr-50 mb-3"
                color="primary"
                outline
                onClick={handleAddPartner('partners')}
              >
                Add
              </Button.Ripple>
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
export default AdvertisingPartners
