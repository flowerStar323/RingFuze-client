import { Editor } from '@tinymce/tinymce-react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const EditorBasic = ({ theme }) => {
  const initialValue = `<h4>Welcome to the TinyMCE editor demo!</h4>`
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic Editor</CardTitle>
      </CardHeader>
      <CardBody>
        <Editor
          apiKey='emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64'
          initialValue={initialValue}
          init={{
            skin: theme === 'dark' ? 'dark' : undefined,
            content_css: theme === 'dark' ? 'dark' : undefined
          }}
        />
      </CardBody>
    </Card>
  )
}

export default EditorBasic
