import { Fragment } from "react"
import { Row, Col } from "reactstrap"
import BillingHistory from "./BillingHistory"
import Breadcrumbs from "@components/breadcrumbs"
import PaymentMethod from "./PaymentMethod"
import CurrentPlan from "./CurrentPlan"

const Billing = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Billing"
        breadCrumbParent="Settings"
        breadCrumbActive="Billing"
      />
      <Row>
        <Col sm="6">
          <CurrentPlan />
        </Col>
        <Col sm="6">
          <PaymentMethod />
        </Col>
        <Col sm="12">
          <BillingHistory />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Billing
