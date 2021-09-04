import { useState } from 'react'
import { Row, Col, CustomInput, Button } from 'reactstrap'

const NotificationsTabContent = ({ data }) => {
  const [newDispute, setNewDispute] = useState(data.newDispute)
  const [blogDigest, setBlogDigest] = useState(data.blogDigest)
  const [newPublisherSignup, setNewPublisherSignup] = useState(data.newPublisherSignup)
  const [productUpdates, setProductUpdates] = useState(data.productUpdates)
  const [newAnnouncements, setNewAnnouncements] = useState(data.newAnnouncements)
  const [newBuyerSignup, setNewBuyerSignup] = useState(data.newBuyerSignup)
  const [lowBalance, setLowBalance] = useState(data.lowBalance)

  return (
    <Row>
      <h6 className='section-label mx-1 mb-2'>Activity</h6>
      <Col sm='12' className='mb-2'>
        <CustomInput
          type='switch'
          id='newBuyerSignup'
          checked={newBuyerSignup}
          onChange={e => setNewBuyerSignup(e.target.checked)}
          name='customSwitch'
          label='Email me when a new buyer signs up'
        />
      </Col>
      <Col sm='12' className='mb-2'>
        <CustomInput
          type='switch'
          id='newPublisherSignup'
          checked={newPublisherSignup}
          onChange={e => setNewPublisherSignup(e.target.checked)}
          name='customSwitch'
          label='Email me when a new publisher signs up'
        />
      </Col>
      <Col sm='12' className='mb-2'>
        <CustomInput
          type='switch'
          id='newDispute'
          checked={newDispute}
          onChange={e => setNewDispute(e.target.checked)}
          name='customSwitch'
          label='Email me when there is a new dispute'
        />
      </Col>
      <Col sm='12' className='mb-2'>
        <CustomInput
          type='switch'
          id='lowBalance'
          checked={lowBalance}
          onChange={e => setLowBalance(e.target.checked)}
          name='customSwitch'
          label='Email me when my balance is low'
        />
      </Col>

      {/* Application Notifications */}
      <h6 className='section-label mx-1 mt-2'>Application</h6>

      <Col sm='12' className='mt-1 mb-2'>
        <CustomInput
          type='switch'
          id='newAnnouncements'
          checked={newAnnouncements}
          onChange={e => setNewAnnouncements(e.target.checked)}
          name='customSwitch'
          label='News and announcements'
        />
      </Col>
      <Col sm='12' className='mb-2'>
        <CustomInput
          type='switch'
          id='productUpdates'
          checked={productUpdates}
          onChange={e => setProductUpdates(e.target.checked)}
          name='customSwitch'
          label='New feature updates'
        />
      </Col>
      <Col sm='12' className='mb-75'>
        <CustomInput
          type='switch'
          id='blogDigest'
          checked={blogDigest}
          onChange={e => setBlogDigest(e.target.checked)}
          name='customSwitch'
          label='New Blog posts'
        />
      </Col>
      <Col className='mt-1' sm='12'>
        <Button.Ripple className='mr-1' color='primary'>
          Save changes
        </Button.Ripple>
        <Button.Ripple color='secondary' outline>
          Cancel
        </Button.Ripple>
      </Col>
    </Row>
  )
}

export default NotificationsTabContent
