import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Label,
  Button
} from 'reactstrap'
import { Editor } from '@tinymce/tinymce-react'

const PrivacyPolicy = ({ theme }) => {
  const initialValue = `<h4>Your Privacy Policy goes here!</h4>`
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Privacy Policy</CardTitle>
        </CardHeader>
        <CardBody>
          <Row className="match-height">
            <Col lg="12" md="12" sm="12">
              <FormGroup>
                <Editor
                  apiKey="emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64"
                  initialValue={initialValue}
                  init={{
                    selector: 'textarea#full-featured-non-premium',
                    plugins:
                      'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                    imagetools_cors_hosts: ['picsum.photos'],
                    menubar: 'file edit view insert format tools table help',
                    toolbar:
                      'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                    toolbar_sticky: true,
                    autosave_ask_before_unload: true,
                    autosave_interval: '30s',
                    autosave_prefix: '{path}{query}-{id}-',
                    autosave_restore_when_empty: false,
                    autosave_retention: '2m',
                    image_advtab: true,
                    importcss_append: true,
                    file_picker_callback(callback, value, meta) {
                      /* Provide file and text for the link dialog */
                      if (meta.filetype === 'file') {
                        callback('https://www.google.com/logos/google.jpg', {
                          text: 'My text'
                        })
                      }

                      /* Provide image and alt text for the image dialog */
                      if (meta.filetype === 'image') {
                        callback('https://www.google.com/logos/google.jpg', {
                          alt: 'My alt text'
                        })
                      }

                      /* Provide alternative source and posted for the media dialog */
                      if (meta.filetype === 'media') {
                        callback('movie.mp4', {
                          source2: 'alt.ogg',
                          poster: 'https://www.google.com/logos/google.jpg'
                        })
                      }
                    },
                    template_cdate_format:
                      '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
                    template_mdate_format:
                      '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
                    height: 275,
                    image_caption: true,
                    quickbars_selection_toolbar:
                      'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                    noneditable_noneditable_class: 'mceNonEditable',
                    toolbar_mode: 'sliding',
                    contextmenu: 'link image imagetools table',
                    skin: theme === 'dark' ? 'dark' : undefined,
                    content_css: theme === 'dark' ? 'dark' : undefined
                  }}
                />
                <Label for="searchText" className="mb-50">
                  Making changes to the privacy policy will prompt your users to
                  agree to the new changes the next time they log in to the
                  system.
                </Label>
              </FormGroup>
            </Col>
            <Col lg="12" md="12" sm="12">
              <Button.Ripple className="mr-50" type="submit" color="primary">
                Save
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}

export default PrivacyPolicy
