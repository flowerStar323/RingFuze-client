import { toast } from 'react-toastify'
import { Formik, Field, Form } from 'formik'
import { Card, CardHeader, CardTitle, CardBody, CardText, Button, FormGroup } from 'reactstrap'

const FormikBasic = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Basic</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          Getting values in and out of form state is easy using formik, you won't have to manage state to make your
          input a controlled element.
        </CardText>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: ''
          }}
          onSubmit={values => {
            setTimeout(() => {
              toast.success(JSON.stringify(values, null, 2))
            }, 500)
          }}
        >
          <Form>
            <FormGroup>
              <label htmlFor='firstName'>First Name</label>
              <Field className='form-control' name='firstName' placeholder='Jane' />
            </FormGroup>

            <FormGroup>
              <label htmlFor='lastName'>Last Name</label>
              <Field className='form-control' name='lastName' placeholder='Doe' />
            </FormGroup>

            <FormGroup>
              <label htmlFor='email'>Email</label>
              <Field className='form-control' name='email' placeholder='jane@acme.com' type='email' />
            </FormGroup>
            <Button.Ripple color='primary' type='submit'>
              Submit
            </Button.Ripple>
          </Form>
        </Formik>
      </CardBody>
    </Card>
  )
}
export default FormikBasic
