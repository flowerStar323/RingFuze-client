import { Fragment } from 'react'
import Avatar from '@components/avatar'
import { toast } from 'react-toastify'
import { Check } from 'react-feather'
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import { Menu, Item, MenuProvider, animation } from 'react-contexify'

const ToastContent = ({ text }) => (
  <Fragment>
    <div className='toastify-header pb-0'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check />} />
        <h6 className='toast-title'>Clicked {text}</h6>
      </div>
    </div>
  </Fragment>
)

const ContextMenuAnimations = () => {
  const handleClick = text => {
    toast.success(<ToastContent text={text} />, { hideProgressBar: true, closeButton: false })
  }

  const FadeMenu = () => {
    return (
      <Menu id='fade' animation={animation.fade}>
        <Item onClick={() => handleClick('Option 1')}>Option 1</Item>
        <Item onClick={() => handleClick('Option 2')}>Option 2</Item>
      </Menu>
    )
  }
  const FlipMenu = () => {
    return (
      <Menu id='flip' animation={animation.flip}>
        <Item onClick={() => handleClick('Option 1')}>Option 1</Item>
        <Item onClick={() => handleClick('Option 2')}>Option 2</Item>
      </Menu>
    )
  }

  const PopMenu = () => {
    return (
      <Menu id='pop' animation={animation.pop}>
        <Item onClick={() => handleClick('Option 1')}>Option 1</Item>
        <Item onClick={() => handleClick('Option 2')}>Option 2</Item>
      </Menu>
    )
  }

  const ZoomMenu = () => {
    return (
      <Menu id='zoom' animation={animation.zoom}>
        <Item onClick={() => handleClick('Option 1')}>Option 1</Item>
        <Item onClick={() => handleClick('Option 2')}>Option 2</Item>
      </Menu>
    )
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Animations</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='demo-inline-spacing'>
          <MenuProvider
            id='fade'
            style={{
              width: 'max-content'
            }}
          >
            <Button color='primary' outline>
              Fade
            </Button>
          </MenuProvider>
          <MenuProvider
            id='flip'
            style={{
              width: 'max-content'
            }}
          >
            <Button color='primary' outline>
              Flip
            </Button>
          </MenuProvider>
          <MenuProvider
            id='pop'
            style={{
              width: 'max-content'
            }}
          >
            <Button color='primary' outline>
              Pop
            </Button>
          </MenuProvider>
          <MenuProvider
            id='zoom'
            style={{
              width: 'max-content'
            }}
          >
            <Button color='primary' outline>
              Zoom
            </Button>
          </MenuProvider>
        </div>
        <FadeMenu />
        <FlipMenu />
        <PopMenu />
        <ZoomMenu />
      </CardBody>
    </Card>
  )
}

export default ContextMenuAnimations
