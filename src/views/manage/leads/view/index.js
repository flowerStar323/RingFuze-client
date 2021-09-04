// ** React Imports
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getLead } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** Lead View Components
import LeadInfoCard from './LeadInfoCard'
import DisputeCard from './DisputeCard'
import LeadTimeline from './LeadTimeline'

// ** Styles
import '@styles/react/apps/app-users.scss'

const LeadView = props => {
  // ** Vars
  const store = useSelector(state => state.leads),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getLead(parseInt(id)))
  }, [dispatch])

  return store.selectedLead !== null && store.selectedLead !== undefined ? (
    <div className='app-user-view'>
      <Row>
        <Col md='9'>
          <LeadInfoCard selectedLead={store.selectedLead} />
        </Col>
        <Col md='3'>
          <DisputeCard />
        </Col>
      </Row>
      <Row>
        <Col md='12'>
          <LeadTimeline />
        </Col>
      </Row>
    </div>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>Leads not found</h4>
      <div className='alert-body'>
        Leads with id: {id} doesn't exist. Check list of all Leads: <Link to='/app/lead/list'>Leads List</Link>
      </div>
    </Alert>
  )
}
export default LeadView
