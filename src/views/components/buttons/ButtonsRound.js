import { Button } from 'reactstrap'

const RoundButtons = () => {
  return (
    <div className='demo-inline-spacing'>
      <div className='round overflow-hidden round overflow-hidden'>
        <Button.Ripple className='round' color='primary' outline>
          Primary
        </Button.Ripple>
      </div>
      <div className='round overflow-hidden'>
        <Button.Ripple className='round' color='secondary' outline>
          Secondary
        </Button.Ripple>
      </div>
      <div className='round overflow-hidden'>
        <Button.Ripple className='round' color='success' outline>
          Success
        </Button.Ripple>
      </div>
      <div className='round overflow-hidden'>
        <Button.Ripple className='round' color='danger' outline>
          Danger
        </Button.Ripple>
      </div>
      <div className='round overflow-hidden'>
        <Button.Ripple className='round' color='warning' outline>
          Warning
        </Button.Ripple>
      </div>
      <div className='round overflow-hidden'>
        <Button.Ripple className='round' color='info' outline>
          Info
        </Button.Ripple>
      </div>
      <div className='round overflow-hidden'>
        <Button.Ripple className='round' color='dark' outline>
          Dark
        </Button.Ripple>
      </div>
    </div>
  )
}
export default RoundButtons
