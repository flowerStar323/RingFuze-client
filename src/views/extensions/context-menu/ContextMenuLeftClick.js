import { Fragment } from 'react'
import Avatar from '@components/avatar'
import { toast } from 'react-toastify'
import { Check } from 'react-feather'
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import { Menu, Item, MenuProvider } from 'react-contexify'

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

const ContextMenuLeftClick = () => {
  const handleClick = text => {
    toast.success(<ToastContent text={text} />, { hideProgressBar: true, closeButton: false })
  }

  const MenuLeftClick = () => {
    return (
      <Menu id='menu_left'>
        <Item onClick={() => handleClick('Option 1')}>Option 1</Item>
        <Item onClick={() => handleClick('Option 2')}>Option 2</Item>
      </Menu>
    )
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Left Click</CardTitle>
      </CardHeader>
      <CardBody>
        <MenuProvider
          id='menu_left'
          event='onClick'
          style={{
            width: 'max-content'
          }}
        >
          <Button color='primary' outline>
            Left Click On Me
          </Button>
        </MenuProvider>
        <MenuLeftClick />
      </CardBody>
    </Card>
  )
}

export default ContextMenuLeftClick
