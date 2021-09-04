// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** User View Components
import ActionsCard from './ActionsCard'
import LeadInfoCard from './LeadInfoCard'
import BuyerInfoCard from './BuyerInfoCard'
import LeadTimeline from './LeadTimeline'

// ** Styles
import '@styles/react/apps/app-users.scss'

export default function DisputeView(props) {
  return (
    <div className='app-user-view'>
      <Breadcrumbs
        breadCrumbTitle="Review Dispute"
        breadCrumbParent="Manage"
        breadCrumbParent2="Disputes"
        breadCrumbActive="Review Dispute"
      />
      <Row>
        <Col xl='5' lg='5' md='7'>
          <LeadInfoCard/>
        </Col>
        <Col xl='5' lg='5' md='7'>
          <BuyerInfoCard/>
        </Col>
        <Col xl='2' lg='2' md='5'>
          <ActionsCard/>
        </Col>
      </Row>
      <Row>
        <Col md='12'>
          <LeadTimeline />
        </Col>
      </Row>
    </div>
  )
}