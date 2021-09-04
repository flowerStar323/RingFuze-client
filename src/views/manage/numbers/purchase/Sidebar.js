// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Third Party Components
import { Button, FormGroup, Label, FormText, CustomInput } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import Cleave from 'cleave.js/react'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  const options = { blocks: [3], uppercase: true }

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
      title='New User'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <AvForm onSubmit={onSubmit}>
        <FormGroup>
          <Label for='full-name'>Country</Label>
          <AvInput type='select' id='publisher' name='publisher' required>
            <option value='na'>Select Country</option>
            <option value='usa'>United States of America</option>
            <option value='uk'>United Kingdom</option>
            <option value='canada'>Canada</option>
            <option value='mexico'>Mexico</option>
          </AvInput>
        </FormGroup>
         <Label for='number-type'>Type</Label>
        <FormGroup>
          <CustomInput type='radio' id='number-type-tollfree' name='number-type' inline label='Toll-Free' defaultChecked />
          <CustomInput type='radio' id='number-type-local' name='number-type' inline label='Local' />
        </FormGroup>
        <FormGroup>
          <Label for='prefix'>Prefix</Label>
          <Cleave className='form-control' placeholder='' options={options} id='blocks' />
          <FormText color='muted'>You can specify the area code or toll free prefix. (optional)</FormText>
        </FormGroup>
        <FormGroup>
          <Label for='publisher'>Assign Publisher</Label>
          <AvInput type='select' id='publisher' name='publisher' required>
            <option value='na'>Select Publisher</option>
            <option value='unik'>UNIK Media Group</option>
            <option value='leadjar'>Leadjar, LLC</option>
            <option value='palo'>Palo Media</option>
            <option value='aragon'>Aragon Advertising</option>
            <option value='marketcall'>Marketcall</option>
          </AvInput>
        </FormGroup>
        <Button type='submit' className='mr-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </AvForm>
    </Sidebar>
  )
}

export default SidebarNewUsers
