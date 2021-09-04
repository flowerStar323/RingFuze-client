import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'

import YourDomain from './YourDomain'
import CustomDomain from './CustomDomain'

export default function Domain(props) {
  return (
    <Fragment>
      <Row className="match-height">
        <Col lg="12" md="12" sm="12">
          <YourDomain title="Your Domain" />
        </Col>
        <Col lg="12" md="12" sm="12">
          <CustomDomain title="Custom Domain URL" />
        </Col>
      </Row>
    </Fragment>
  )
}
