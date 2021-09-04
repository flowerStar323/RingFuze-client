import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import Disclaimer from './Disclaimer'
import PrivacyPolicy from './PrivacyPolicy'
import Terms from './Terms'
import AdvertisingPartners from './AdvertisingPartners'
import DoNotSell from './DoNotSell'
import Ccpa from './Ccpa'

const LegalPages = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Legal Pages"
        breadCrumbParent="Pages"
        breadCrumbActive="Legal Pages"
      />
      <Row>
        <Col sm="12">
          <Disclaimer />
        </Col>
        <Col sm="12">
          <PrivacyPolicy />
        </Col>
        <Col sm="12">
          <Terms />
        </Col>
        <Col sm="12">
          <Ccpa />
        </Col>
        <Col sm="12">
          <DoNotSell />
        </Col>
        <Col sm="12">
          <AdvertisingPartners />
        </Col>
      </Row>
    </Fragment>
  )
}

export default LegalPages
