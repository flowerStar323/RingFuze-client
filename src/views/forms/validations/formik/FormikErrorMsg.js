import { Card, CardHeader, CardTitle, CardBody, CardText, Button, FormGroup } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  firstName: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a first name that long')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Nice try, nobody has a last name that long')
    .required('Required')
})

const FormikErrorMsg = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Error Msg</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          You can show error messages with formik using <code>validationSchema</code> prop with formik tag.
        </CardText>
        <Formik
          initialValues={{
            email: '',
            firstName: '',
            lastName: ''
          }}
          validationSchema={SignUpSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <FormGroup>
                <label htmlFor='firstName'>First Name</label>
                <Field
                  type='text'
                  name='firstName'
                  placeholder='Jane'
                  className={`form-control ${errors.firstName && touched.firstName && 'is-invalid'}`}
                />
                <ErrorMessage name='firstName' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <label htmlFor='lastName'>Last Name</label>
                <Field
                  type='text'
                  name='lastName'
                  placeholder='Doe'
                  className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                />
                <ErrorMessage name='firstName'>
                  {(msg /** this is the same as the above */) => <div className='field-error text-danger'>{msg}</div>}
                </ErrorMessage>
              </FormGroup>

              <FormGroup>
                <label htmlFor='email'>Email</label>
                <Field
                  name='email'
                  type='email'
                  placeholder='jane@acme.com'
                  className={`form-control ${errors.lastName && touched.lastName && 'is-invalid'}`}
                />
                {/* This will render a string */}
                <ErrorMessage name='email'>
                  {(msg /** this is the same as the above */) => <div className='field-error text-danger'>{msg}</div>}
                </ErrorMessage>
              </FormGroup>

              <Button.Ripple color='primary' type='submit'>
                Submit
              </Button.Ripple>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}
export default FormikErrorMsg
