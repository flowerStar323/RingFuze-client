import { Editor } from '@tinymce/tinymce-react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const EditorDistractionFree = ({ theme }) => {
  const initialValue = `<div class='demo-dfree'>
  <h4 class="dfree-header mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false">
    The latest and greatest from TinyMCE
  </h4>
  <br/>
  <div class="dfree-body mce-content-body" contenteditable="true" style="position: relative;" spellcheck="false">
    <p><img src="https://tiny.cloud/images/medium-pic.jpg" style="display: block; margin-left: auto; margin-right: auto; width: 100%;" data-mce-style="display: block; margin-left: auto; margin-right: auto;" data-mce-selected="1"></p>
    <br/>
    <h4>The world’s first rich text editor in the cloud</h4>

    <p>
      Have you heard about Tiny Cloud?
      It’s the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise.
      50,000 developers already agree.
      They get free access to our global CDN, image proxy services and auto updates to the TinyMCE editor.
      They’re also ready for some exciting updates coming soon.
    </p>

    <h4>An editor for every project</h4>

    <p>
      Here are some of our customer’s most common use cases for TinyMCE:
      <ul>
        <li>Content Management Systems (<em>e.g. WordPress, Umbraco</em>)</li>
        <li>Learning Management Systems (<em>e.g. Blackboard</em>)</li>
        <li>Customer Relationship Management and marketing automation (<em>e.g. Marketo</em>)</li>
        <li>Email marketing (<em>e.g. Constant Contact</em>)</li>
        <li>Content creation in SaaS systems (<em>e.g. Eventbrite, Evernote, GoFundMe, Zendesk</em>)</li>
      </ul>
    </p>

  </div>
</div>
`
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Distraction Free</CardTitle>
      </CardHeader>
      <CardBody>
        <Editor
          apiKey='emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64'
          initialValue={initialValue}
          init={{
            menubar: false,
            inline: true,
            plugins: [
              'autolink',
              'codesample',
              'link',
              'lists',
              'media',
              'table',
              'image',
              'quickbars',
              'codesample',
              'help'
            ],
            toolbar: false,
            quickbars_insert_toolbar: 'quicktable image media codesample',
            quickbars_selection_toolbar: 'bold italic underline | formatselect | blockquote quicklink',
            contextmenu: 'undo redo | inserttable | cell row column deletetable | help',
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

export default EditorDistractionFree
