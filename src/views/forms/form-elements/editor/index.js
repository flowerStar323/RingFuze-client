import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import { useSkin } from '@hooks/useSkin'
import EditorBasic from './EditorBasic'
import EditorInline from './EditorInline'
import EditorFullFeatured from './EditorFullFeatured'
import EditorDistractionFree from './EditorDistractionFree'
import ExtensionsHeader from '@components/extensions-header'

import '@styles/react/libs/editor/editor.scss'

const Editor = () => {
  const [skin, setSkin] = useSkin()

  return (
    <Fragment>
      <ExtensionsHeader
        title='TinyMCE Editor'
        subTitle='TinyMCE is the world’s most popular open source web-based WYSIWYG editor.'
        link='https://github.com/tinymce/tinymce'
      />

      <Row>
        <Col sm={12}>
          <EditorBasic theme={skin} />
        </Col>
        <Col sm={12}>
          <EditorInline />
        </Col>
        <Col sm={12}>
          <EditorFullFeatured theme={skin} />
        </Col>
        <Col sm={12}>
          <EditorDistractionFree />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Editor
