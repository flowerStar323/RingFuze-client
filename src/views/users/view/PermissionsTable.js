// ** Reactstrap
import { Card, CardHeader, CardTitle, CardText, Table, CustomInput } from 'reactstrap'

const PermissionsTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Permissions</CardTitle>
      </CardHeader>
      <CardText className='ml-2'>Permission according to roles</CardText>
      <Table striped borderless responsive>
        <thead className='thead-light'>
          <tr>
            <th>Module</th>
            <th>Read</th>
            <th>Write</th>
            <th>Create</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dashboard</td>
            <td>
              <CustomInput type='checkbox' id='admin-1' label='' defaultChecked disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='admin-2' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='admin-3' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='admin-4' label='' disabled />
            </td>
          </tr>
          <tr>
            <td>Listings</td>
            <td>
              <CustomInput type='checkbox' id='maintenance-1' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='maintenance-2' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='maintenance-3' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='maintenance-4' label='' disabled />
            </td>
          </tr>
          <tr>
            <td>Projects</td>
            <td>
              <CustomInput type='checkbox' id='buyer-1' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='buyer-2' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='buyer-3' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='buyer-4' label='' disabled />
            </td>
          </tr>
          <tr>
            <td>Leads</td>
            <td>
              <CustomInput type='checkbox' id='publisher-1' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='publisher-2' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='publisher-3' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='publisher-4' label='' disabled />
            </td>
          </tr>
          <tr>
            <td>Settings</td>
            <td>
              <CustomInput type='checkbox' id='lead-1' label='' defaultChecked disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='lead-2' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='lead-3' label='' disabled />
            </td>
            <td>
              <CustomInput type='checkbox' id='lead-4' label='' disabled  />
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
}

export default PermissionsTable
