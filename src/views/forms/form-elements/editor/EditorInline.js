import { Editor } from '@tinymce/tinymce-react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const EditorInline = ({ theme }) => {
  const initialValue = `<h4>Welcome to the TinyMCE editor demo!</h4>`
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Inline Editor</CardTitle>
      </CardHeader>
      <CardBody>
        <Editor
          apiKey='emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64'
          initialValue={initialValue}
          init={{
            menubar: false,
            inline: true,
            plugins: ['link', 'lists', 'autolink'],
            toolbar: [
              'undo redo | bold italic underline | fontselect fontsizeselect',
              'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent'
            ],
            valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li',
            valid_styles: {
              '*': 'font-size,font-family,color,text-decoration,text-align'
            },
            powerpaste_word_import: 'clean',
            powerpaste_html_import: 'clean',
            skin: theme === 'dark' ? 'dark' : undefined,
            content_css: theme === 'dark' ? 'dark' : undefined
          }}
        />
      </CardBody>
    </Card>
  )
}

export default EditorInline
