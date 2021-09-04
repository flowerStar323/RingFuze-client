import { useState, Fragment } from "react"
import { Link } from "react-feather"
import { Form, Label, Input, Button, Row, Col, FormGroup } from "reactstrap"

const SocialTabContent = ({ data }) => {
  const [twitter, setTwitter] = useState(
    data?.twitter ? data?.twitter : ""
  )
  const [facebook, setFacebook] = useState(
    data?.facebook ? data?.facebook : ""
  )
  const [youTube, setYouTube] = useState(
    data?.youTube ? data?.youTube : ""
  )
  const [linkedIn, setLinkedIn] = useState(
    data?.linkedIn ? data?.linkedIn : ""
  )
  const [instagram, setInstagram] = useState(
    data?.instagram ? data?.instagram : ""
  )
  const [pinterest, setPinterest] = useState(
    data?.pinterest ? data?.pinterest : ""
  )

  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Row>
        <Col sm="12">
          <div className="d-flex align-items-center mb-2">
            <Link size={18} />
            <h4 className="mb-0 ml-75">Social Links</h4>
          </div>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label for="account-twitter">Twitter</Label>
            <Input
              id="account-twitter"
              value={twitter}
              onChange={e => setTwitter(e.target.value)}
              placeholder="Add Link"
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label for="account-facebook">Facebook</Label>
            <Input
              id="account-facebook"
              value={facebook}
              onChange={e => setFacebook(e.target.value)}
              placeholder="Add Link"
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label for="account-youTube">YouTube</Label>
            <Input
              id="account-youTube"
              value={youTube}
              onChange={e => setYouTube(e.target.value)}
              placeholder="Add Link"
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label for="account-linkedIn">LinkedIn</Label>
            <Input
              id="account-linkedIn"
              value={linkedIn}
              onChange={e => setLinkedIn(e.target.value)}
              placeholder="Add Link"
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label for="account-instagram">Instagram</Label>
            <Input
              id="account-instagram"
              value={instagram}
              onChange={e => setInstagram(e.target.value)}
              placeholder="Add Link"
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label for="account-pinterest">Pinterest</Label>
            <Input
              id="account-pinterest"
              value={pinterest}
              onChange={e => setPinterest(e.target.value)}
              placeholder="Add Link"
            />
          </FormGroup>
        </Col>
        <Col className="mt-1" sm="12">
          <Button.Ripple className="mr-1" color="primary">
            Save changes
          </Button.Ripple>
          <Button.Ripple color="secondary" outline>
            Cancel
          </Button.Ripple>
        </Col>
      </Row>
    </Form>
  )
}

export default SocialTabContent
