import { useState } from 'react'
import BlockUi from 'react-block-ui'
import { Card, CardHeader, CardTitle, CardBody, Button, Spinner, FormGroup, Input, Label } from 'reactstrap'

const FormBlocking = () => {
  const [block, setBlock] = useState(false)
  const [customSpinner, setCustomSpinner] = useState(false)
  const [message, setMessage] = useState(false)

  const handleBlock = (spinner, message) => {
    setBlock(true)
    if (spinner === true) setCustomSpinner(true)
    else setCustomSpinner(false)

    if (message === true) setMessage(true)
    else setMessage(false)

    setTimeout(() => {
      setBlock(false)
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Form Blocking</CardTitle>
      </CardHeader>
      <CardBody>
        <BlockUi
          tag='div'
          blocking={block}
          /*eslint-disable */
          {...(customSpinner
            ? {
                loader: <Spinner color='primary' className='reload-spinner' />
              }
            : {})}
          {...(message
            ? {
                message: <p className='mb-0 font-weight-bold'>Please Wait...</p>
              }
            : {})}
          /*eslint-enable */
        >
          <FormGroup>
            <Label for='username'>Username</Label>
            <Input id='username' />
          </FormGroup>
          <FormGroup>
            <Label for='email'>Email</Label>
            <Input type='email' id='email' />
          </FormGroup>
          <FormGroup>
            <Label for='password'>Password</Label>
            <Input id='password' />
          </FormGroup>
          <FormGroup>
            <Button className='mr-50 mb-50' color='primary' disabled>
              Submit
            </Button>
            <Button className='mb-50' color='secondary' outline disabled>
              Cancel
            </Button>
          </FormGroup>
        </BlockUi>
        <div className='demo-inline-spacing'>
          <Button color='primary' outline onClick={() => handleBlock(false, false)}>
            Default
          </Button>
          <Button color='primary' outline onClick={() => handleBlock(true, false)}>
            Custom Spinner
          </Button>
          <Button color='primary' outline onClick={() => handleBlock(false, true)}>
            Message
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default FormBlocking
