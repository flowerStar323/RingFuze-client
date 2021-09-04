import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import FormikBasic from './FormikBasic'
import FormikErrorMsg from './FormikErrorMsg'
import FormikValidation from './FormikValidation'

const Formik = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Formik' breadCrumbParent='Form' breadCrumbActive='Formik' />
      <Row>
        <Col lg='6' md='12'>
          <FormikBasic />
        </Col>
        <Col lg='6' md='12'>
          <FormikErrorMsg />
        </Col>
        <Col sm='12'>
          <FormikValidation />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Formik
