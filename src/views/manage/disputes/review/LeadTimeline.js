// ** React Imports
import { Fragment, useState } from 'react'

// ** Custom Components
import Timeline from '@components/timeline'

// ** Images
import { PlayCircle } from 'react-feather'

// ** Third Party Components
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'
import { Link } from 'react-router-dom'
import MediaPlayer from './../../../components/modal/MediaPlayer'

// ** Timeline Data
const data = [
  {
    title: 'Dispute',
    content: `Reason: Outside of coverage area.`,
    meta: '10/26/2021 11:36 AM',
    color: 'warning',
    customContent: (
      <Media className='align-items-center'>
        <Media body>Requested Credit: $35.00</Media>
      </Media>
    )
  },
  {
    title: 'Buyer Charged',
    content: `Revenue: $35.00`,
    meta: '10/26/2021 11:36 AM',
    color: 'success'
  },
  {
    title: 'Profile Updated',
    meta: '10/25/2021 4:04 PM'
  },
  {
    title: 'Call Converted',
    meta: '10/25/2021 3:52 PM',
    color: 'success',
    customContent: (
      <Media className='align-items-center'>
        <Link>
          <PlayCircle color="#0473ba" size='32'/>
        </Link>
        <Media className='ml-50' body>
          <h6 className='mb-0'>(415) 233-5427</h6>
          <span>34 minutes</span>
        </Media>
      </Media>
    )
  },
  {
    title: 'Call Connected',
    meta: '10/25/2021 3:18 PM'
  },
  {
    title: 'Incoming Call',
    meta: '10/25/2021 3:18 PM'
  }
]

const LeadTimeline = () => {

  return (
    <Fragment>
    <Card>
      <CardHeader>
        <CardTitle tag='h4' className='mb-2'>
          Timeline
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Timeline data={data} />
      </CardBody>
    </Card>
    </Fragment>
  )
}

export default LeadTimeline
