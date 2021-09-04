import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import Customize from './Customize'
import Preview from './Preview'

const LoginPage = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='Login Page'
        breadCrumbParent='Buyers'
        breadCrumbActive='Login Page'
      />
      <Row>
        <Col sm='7'>
          <Customize />
        </Col>
        <Col sm='4'>
          <Preview />
        </Col>
      </Row>
    </Fragment>
  )
}

export default LoginPage
