import { useState } from 'react'
import BlockUi from 'react-block-ui'
import { Card, CardHeader, CardTitle, CardText, CardBody, Button, Spinner } from 'reactstrap'

const SectionBlocking = () => {
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
        <CardTitle tag='h4'>Section Blocking</CardTitle>
      </CardHeader>
      <CardBody>
        <BlockUi
          tag='div'
          className='border p-1 mb-1'
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
          <CardText className='mb-0'>
            Lorem ipsum dolor sit amet, an vel affert soleat possim. Usu meis neglegentur ut, oporteat salutandi
            dignissim at mea. Pericula erroribus quaerendum ex duo, his autem accusamus ad, alienum detracto rationibus
            vis et. No est volumus ocurreret vituperata.
          </CardText>
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

export default SectionBlocking
