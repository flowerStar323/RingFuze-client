// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Tables
import NumbersTable from './Numbers'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Numbers = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Numbers"
        breadCrumbParent="Manage"
        breadCrumbActive="Numbers"
      />
      <Row>
        <Col sm="12">
          <NumbersTable />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Numbers
