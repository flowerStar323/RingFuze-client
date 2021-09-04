import { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import { AvForm, AvInput } from "availity-reactstrap-validation-safe"
import {
  Button,
  Media,
  Label,
  Row,
  Col,
  Input,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Alert
} from "reactstrap"
import moment from "moment"
import Cleave from "cleave.js/react"
import Flatpickr from "react-flatpickr"
import "cleave.js/dist/addons/cleave-phone.us"
import "@styles/react/libs/flatpickr/flatpickr.scss"
import { updateUser } from '@store/actions/user'
import { UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from '@store/constants/user'
import * as TokenService from '../../../services/TokenService'

const GeneralTabs = ({ data }) => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState(data.email ? data.email : "")
  const [name, setName] = useState(data.name ? data.name : "")
  const [avatar, setAvatar] = useState(data.avatar ? data.avatar : "")
  const [company, setCompany] = useState(data.company ? data.company : "")
  const [username, setUsername] = useState(data.username ? data.username : "")
  const [dob, setDob] = useState(data.dob ? data.dob : "")
  const [phone, setPhone] = useState(data.phone ? data.phone : "")
  const [website, setWebsite] = useState(data.website ? data.website : "")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const options = { phone: true, phoneRegionCode: "US" }

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const handleSubmitChanges = async (e) => {
    e.preventDefault()

    if (isSubmitting) return
    setIsSubmitting(true)

    const payload = { name, avatar, company, phone, website, dob }
    const result = await dispatch(updateUser(data._id, payload))

    if (result.type === UPDATE_USER_SUCCESS) {
      TokenService.setUserData(result.payload.data)
      setErrorMessage('Update success')
    }

    if (result.type === UPDATE_USER_FAILURE) {
      setErrorMessage('Update failed')
    }
    setIsSubmitting(false)
  }

  return (
    <Fragment>
      <Media>
        <Media className="mr-25" left>
          <Media
            object
            className="rounded mr-50"
            src={avatar}
            alt="Generic placeholder image"
            height="80"
            width="80"
          />
        </Media>
        <Media className="mt-75 ml-1" body>
          <Button.Ripple
            tag={Label}
            className="mr-75"
            size="sm"
            color="primary"
          >
            Upload
            <Input type="file" onChange={onChange} hidden accept="image/*" />
          </Button.Ripple>
          <Button.Ripple color="secondary" size="sm" outline>
            Reset
          </Button.Ripple>
          <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
        </Media>
      </Media>
      <AvForm className="mt-2" onSubmit={handleSubmitChanges}>
        <Row>
          <Col sm="6">
            <FormGroup>
              <Label for="username">Username</Label>
              <AvInput
                id="username"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
                disabled
              />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label for="name">Name</Label>
              <AvInput
                id="name"
                name="fullname"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label for="email">E-mail</Label>
              <AvInput
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                disabled
              />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label for="company">Company</Label>
              <AvInput
                id="company"
                name="company"
                value={company}
                onChange={e => setCompany(e.target.value)}
                placeholder="Company Name"
                required
              />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label for="phone">Phone</Label>
              <InputGroup className="input-group-merge">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>US +1</InputGroupText>
                </InputGroupAddon>
                <Cleave
                  className="form-control"
                  placeholder="555 123 4567"
                  options={options}
                  value={phone}
                  id="phone"
                  onChange={e => setPhone(e.target.value)}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label for="website">Website</Label>
              <AvInput
                type="url"
                id="website"
                name="website"
                value={website}
                onChange={e => setWebsite(e.target.value)}
                placeholder="Website Address"
                required
              />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label for="birth-date">Birth Date</Label>
              <AvInput
                tag={Flatpickr}
                name="dob"
                className="form-control"
                value={dob}
                onChange={date => setDob(moment(date[0]).format('YYYY-MM-DD'))}
                id="birth-date"
                placeholder="Birth Date"
                required
              />
            </FormGroup>
          </Col>
          <Col sm="12">
            <Alert color="danger">
              {errorMessage && (<p className='font-small-2 pl-1'>{errorMessage}</p>)}
            </Alert>
          </Col>
          <Col className="mt-2" sm="12">
            <Button.Ripple className="mr-1" color="primary" disabled={!name.length || isSubmitting}>
              Save changes
            </Button.Ripple>
            <Button.Ripple color="secondary" outline>
              Cancel
            </Button.Ripple>
          </Col>
        </Row>
      </AvForm>
    </Fragment>
  )
}

export default GeneralTabs
