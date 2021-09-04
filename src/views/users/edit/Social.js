// ** Third Party Components
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'
import { Twitter, Facebook, Instagram, Youtube, Share2, Linkedin } from 'react-feather'

const UserSocialTab = () => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Row>
        <Col lg='4' md='6' sm='12'>
          <Label for='twitter'>Twitter</Label>
          <FormGroup tag={InputGroup} className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Twitter size={17} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              id='twitter'
              placeholder='https://www.twitter.com/'
              defaultValue=''
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6' sm='12'>
          <Label for='facebook'>Facebook</Label>
          <FormGroup tag={InputGroup} className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Facebook size={17} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              id='facebook'
              placeholder='https://www.facebook.com/'
              defaultValue=''
            />
          </FormGroup>
        </Col>
        <Col lg='4' md='6' sm='12'>
          <Label for='instagram'>Instagram</Label>
          <FormGroup tag={InputGroup} className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Instagram size={17} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              id='instagram'
              placeholder='https://www.instagram.com/'
              defaultValue=''
            />
          </FormGroup>
        </Col>

        <Col lg='4' md='6' sm='12'>
          <Label for='youtube'>YouTube</Label>
          <FormGroup tag={InputGroup} className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Youtube size={17} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='youtube' placeholder='https://www.youtube.com/channel/' defaultValue='' />
          </FormGroup>
        </Col>

        <Col lg='4' md='6' sm='12'>
          <Label for='linkedin'>LinkedIn</Label>
          <FormGroup tag={InputGroup} className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Linkedin size={17} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              id='linkedin'
              placeholder='https://www.linkedin.com/'
              defaultValue=''
            />
          </FormGroup>
        </Col>

        <Col lg='4' md='6' sm='12'>
          <Label for='other'>Other</Label>
          <FormGroup tag={InputGroup} className='input-group-merge'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Share2 size={17} />
              </InputGroupText>
            </InputGroupAddon>
            <Input id='other' placeholder='Enter link here...' defaultValue='' />
          </FormGroup>
        </Col>

        <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
          <Button className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary'>
            Save Changes
          </Button>
          <Button color='secondary' outline>
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
export default UserSocialTab
