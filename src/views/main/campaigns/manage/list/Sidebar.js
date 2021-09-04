// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Third Party Components
import { Button, FormGroup, Label, FormText } from 'reactstrap'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
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
          <Label for='full-name'>Full Name</Label>
          <AvInput name='full-name' id='full-name' placeholder='John Doe' required />
        </FormGroup>
        <FormGroup>
          <Label for='username'>Username</Label>
          <AvInput name='username' id='username' placeholder='johnDoe99' required />
        </FormGroup>
        <FormGroup>
          <Label for='email'>Email</Label>
          <AvInput type='email' name='email' id='email' placeholder='john.doe@example.com' required />
          <FormText color='muted'>You can use letters, numbers & periods</FormText>
        </FormGroup>
        <FormGroup>
          <Label for='country'>Country</Label>
          <AvInput name='country' id='country' placeholder='Australia' required />
        </FormGroup>
        <FormGroup>
          <Label for='contact'>Contact</Label>
          <AvInput name='contact' id='contact' placeholder='(397) 294-5153' required />
        </FormGroup>
        <FormGroup>
          <Label for='user-role'>User Role</Label>
          <AvInput type='select' id='user-role' name='user-role' required>
            <option value='subscriber'>Subscriber</option>
            <option value='editor'>Editor</option>
            <option value='maintainer'>Maintainer</option>
            <option value='author'>Author</option>
            <option value='admin'>Admin</option>
          </AvInput>
        </FormGroup>
        <FormGroup className='mb-2'>
          <Label for='select-plan'>Select Plan</Label>
          <AvInput type='select' id='select-plan' name='select-plan' required>
            <option value='basic'>Basic</option>
            <option value='enterprise'>Enterprise</option>
            <option value='company'>Company</option>
            <option value='team'>Team</option>
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
