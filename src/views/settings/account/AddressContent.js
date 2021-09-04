import { useState } from "react"
import { AvForm, AvInput } from "availity-reactstrap-validation-safe"
import { Label, Input, FormGroup, Row, Col, Button } from "reactstrap"

const AddressContent = ({ data }) => {
  const [address, setAddress] = useState(data.address ? data.address : "")
  const [city, setCity] = useState(data.city ? data.city : "")
  const [state, setState] = useState(data.state ? data.state : "")
  const [postal, setPostal] = useState(data.postal ? data.postal : "")
  const [country, setCountry] = useState(data.country ? data.country : "")

  return (
    <AvForm onSubmit={e => e.preventDefault()}>
      <Row>
        <Col sm="6">
          <FormGroup>
            <Label for="address">Address</Label>
            <AvInput
              id="address"
              name="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
              placeholder="Address"
              required
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label for="city">City</Label>
            <AvInput
              id="city"
              name="city"
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="City"
              required
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              id="state"
              type="select"
              value={state}
              onChange={e => setState(e.target.value)}
            >
              <option value="CA">California</option>
              <option value="WA">Washington</option>
              <option value="FL">Florida</option>
              <option value="NY">New Your</option>
            </Input>
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label for="postal">Postal Code</Label>
            <AvInput
              id="postal"
              name="postal"
              type="number"
              value={postal}
              onChange={e => setPostal(e.target.value)}
              placeholder="Postal Code"
              required
            />
          </FormGroup>
        </Col>
        <Col sm="6">
          <FormGroup>
            <Label for="country">Country</Label>
            <Input
              id="country"
              type="select"
              value={country}
              onChange={e => setCountry(e.target.value)}
            >
              <option value="USA">United States of America</option>
              <option value="Canada">Canada</option>
              <option value="France">France</option>
              <option value="Mexico">Mexico</option>
            </Input>
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
    </AvForm>
  )
}

export default AddressContent
