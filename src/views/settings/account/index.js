import { Fragment, useState, useEffect } from "react"
import Tabs from "./Tabs"
import axios from "axios"
import AddressContent from "./AddressContent"
import Breadcrumbs from "@components/breadcrumbs"
import SocialTabContent from "./SocialTabContent"
import GeneralTabContent from "./GeneralTabContent"
import PasswordTabContent from "./PasswordTabContent"
import NotificationsTabContent from "./NotificationsTabContent"
import { Row, Col, TabContent, TabPane, Card, CardBody } from "reactstrap"
import * as TokenService from "../../../services/TokenService"

import "@styles/react/libs/flatpickr/flatpickr.scss"
import "@styles/react/pages/page-account-settings.scss"

const AccountSettings = () => {
  const userData = TokenService.getUserData()

  const [activeTab, setActiveTab] = useState('1'),
    [data, setData] = useState(null)

  const toggleTab = tab => {
    setActiveTab(tab)
  }

  // useEffect(() => {
  //   axios.get('/account-setting/data').then(response => setData(response.data))
  // }, [])

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Account' breadCrumbParent='Settings' breadCrumbActive='Account' />
      {userData !== null ? (
        <Row>
          <Col className="mb-2 mb-md-0" md="3">
            <Tabs activeTab={activeTab} toggleTab={toggleTab} />
          </Col>
          <Col md="9">
            <Card>
              <CardBody>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <GeneralTabContent data={userData} />
                  </TabPane>
                  <TabPane tabId="2">
                    <PasswordTabContent />
                  </TabPane>
                  <TabPane tabId="3">
                    <AddressContent data={userData} />
                  </TabPane>
                  <TabPane tabId="4">
                    <SocialTabContent data={userData} />
                  </TabPane>
                  <TabPane tabId="5">
                    <NotificationsTabContent data={userData} />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  )
}

export default AccountSettings
