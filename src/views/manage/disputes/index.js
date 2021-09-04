// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Tables
import DisputesTable from './Disputes'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Disputes = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Disputes"
        breadCrumbParent="Manage"
        breadCrumbActive="Disputes"
      />
      <Row>
        <Col sm="12">
          <DisputesTable />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Disputes
