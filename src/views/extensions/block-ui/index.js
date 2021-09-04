import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import CardBlocking from './CardBlocking'
import FormBlocking from './FormBlocking'
import SectionBlocking from './SectionBlocking'
import ExtensionsHeader from '@components/extensions-header'

import 'react-block-ui/dist/style.css'

const Editor = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='React BlockUI'
        subTitle='Easy way to block the user from interacting with your UI.'
        link='https://availity.github.io/react-block-ui/'
      />

      <Row>
        <Col sm={12}>
          <SectionBlocking />
        </Col>
        <Col sm={12}>
          <CardBlocking />
        </Col>
        <Col sm={12}>
          <FormBlocking />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Editor
