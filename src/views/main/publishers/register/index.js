import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import Customize from './Customize'
import Preview from './Preview'

const RegisterPage = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='Register Page'
        breadCrumbParent='Publishers'
        breadCrumbActive='Register Page'
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

export default RegisterPage