import { Row, Col } from "reactstrap"
import CompanyTable from "./CompanyTable"
import CardMedal from "@src/views/ui-elements/cards/advance/CardMedal"
import StatsCard from "@src/views/ui-elements/cards/statistics/StatsCard"

import "@styles/react/libs/charts/apex-charts.scss"
import "@styles/base/pages/dashboard-ecommerce.scss"

const Dashboard = () => {
  return (
    <div id="dashboard">
      <Row className="match-height">
        <Col xl="4" md="6" xs="12">
          <CardMedal />
        </Col>
        <Col xl="8" md="6" xs="12">
          <StatsCard cols={{ xl: "3", sm: "6" }} />
        </Col>
      </Row>
      <Row className="match-height">
        <Col xs="12">
          <CompanyTable />
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
