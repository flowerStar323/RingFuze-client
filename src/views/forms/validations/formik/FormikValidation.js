import { Card, CardHeader, CardTitle, CardBody, FormGroup, Button, Label } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const formSchema = Yup.object().shape({
  required: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  number: Yup.number().required('Required'),
  url: Yup.string().url().required('Required'),
  date: Yup.date().required('Required'),
  minlength: Yup.string().min(4, 'Too Short!').required('Required'),
  maxlength: Yup.string().max(5, 'Too Long!').required('Required')
})

const FormValidation = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'> Validation</CardTitle>
      </CardHeader>

      <CardBody>
        <Formik
          initialValues={{
            required: '',
            email: '',
            url: '',
            number: '',
            date: '',
            minlength: '',
            maxlength: ''
          }}
          validationSchema={formSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <FormGroup>
                <Label for='required'>Name</Label>
                <Field
                  name='required'
                  id='required'
                  className={`form-control ${errors.required && touched.required && 'is-invalid'}`}
                />
                <ErrorMessage name='required' component='div' className='field-error text-danger' />
              </FormGroup>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Field
                  type='email'
                  name='email'
                  id='email'
                  className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                />
                <ErrorMessage name='email' component='div' className='field-error text-danger' />
              </FormGroup>
              <FormGroup>
                <Label for='url'>Website URL</Label>
                <Field name='url' id='url' className={`form-control ${errors.url && touched.url && 'is-invalid'}`} />
                <ErrorMessage name='url' component='div' className='field-error text-danger' />
              </FormGroup>
              <FormGroup>
                <Label for='number'>Number</Label>
                <Field
                  name='number'
                  id='number'
                  className={`form-control ${errors.number && touched.number && 'is-invalid'}`}
                />
                <ErrorMessage name='number' component='div' className='field-error text-danger' />
              </FormGroup>
              <FormGroup>
                <Label for='date'>Date</Label>
                <Field
                  type='date'
                  name='date'
                  id='date'
                  className={`form-control ${errors.date && touched.date && 'is-invalid'}`}
                />
                <ErrorMessage name='date' component='div' className='field-error text-danger' />
              </FormGroup>
              <FormGroup>
                <Label for='minlength'>Min Length (Minimum 4 Characters)</Label>
                <Field
                  name='minlength'
                  id='minlength'
                  className={`form-control ${errors.minlength && touched.minlength && 'is-invalid'}`}
                />
                <ErrorMessage name='minlength' component='div' className='field-error text-danger' />
              </FormGroup>
              <FormGroup>
                <Label for='maxlength'>Max Length (Maximum 5 Characters)</Label>
                <Field
                  name='maxlength'
                  id='maxlength'
                  className={`form-control ${errors.maxlength && touched.maxlength && 'is-invalid'}`}
                />
                <ErrorMessage name='maxlength' component='div' className='field-error text-danger' />
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
export default FormValidation
