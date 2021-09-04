import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import CreateCampaign from './CreateCampaign'
import BreadCrumbs from '@components/breadcrumbs'

const Wizard = () => {
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Create Campaign' breadCrumbParent='Campaigns' breadCrumbActive='Create Campaign' />
      <Row>
        <Col sm='12'>
          <CreateCampaign />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Wizard
