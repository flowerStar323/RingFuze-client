// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Third Party Components
import { Button, FormGroup, InputGroup, InputGroupAddon, InputGroupText, CustomInput } from 'reactstrap'
import { AvForm } from 'availity-reactstrap-validation-safe'
import Cleave from "cleave.js/react"
import "cleave.js/dist/addons/cleave-phone.us"

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  const options = { phone: true }

  // ** Function to handle form submit
  const onSubmit = (event, errors) => {
    if (!errors.length) {
      toggleSidebar()
    }
    event.preventDefault()
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='Block Number'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <AvForm onSubmit={onSubmit}>
        <FormGroup>
          <label htmlFor="phone-number">Phone Number</label>
          <InputGroup className="input-group-merge">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>+</InputGroupText>
            </InputGroupAddon>
            <Cleave
              className="form-control"
              placeholder="1 234 567 8900"
              options={options}
              id="phone-number"
            />
          </InputGroup>
        </FormGroup>
        <Button type='submit' className='mr-1' color='primary' href='/numbers/purchase'>
          Block Number
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </AvForm>
    </Sidebar>
  )
}

export default SidebarNewUsers
