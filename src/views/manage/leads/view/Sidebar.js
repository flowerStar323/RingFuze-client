// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Third Party Components
import { Button, FormGroup, Label, Input } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

const SidebarNewUsers = ({ open, toggleSidebar }) => {

  return (
    <Sidebar
      size='lg'
      open={open}
      title='Dispute Call'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <AvForm>
        <FormGroup>
          <Label for='user-role'>Reason</Label>
          <AvInput type='select' id='user-role' name='user-role' required>
            <option value='na'>Select Reason</option>
            <option value='bad-connection'>Bad Connection</option>
            <option value='no-caller-on-line'>No Caller on Line</option>
            <option value='out-of-service-area'>Out of Service Area</option>
            <option value='prank-spam'>Prank/Spam</option>
            <option value='other'>Other</option>
          </AvInput>
        </FormGroup>
        <FormGroup>
          <Label for='contact'>Description</Label>
          <Input type='textarea'  rows='4' name='contact' id='contact' placeholder='Please provide more details about why you are requesting a credit for this call.' required />
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
