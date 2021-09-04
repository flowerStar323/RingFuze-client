// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Tables
import NumbersTable from './PurchaseNumber'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Numbers = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Purchase Number"
        breadCrumbParent="Numbers"
        breadCrumbActive="Purchase Number"
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
