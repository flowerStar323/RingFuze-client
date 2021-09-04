// ** Custom Components
import Timeline from '@components/timeline'

// ** Third Party Components
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Timeline Data
const data = [
  {
    title: 'Project Accepted',
    content: "Lee's Air has accepted this project",
    meta: '12 min ago'
  },
  {
    title: 'Project Created',
    content: 'Plumbing project created',
    meta: '1 days ago',
    color: 'warning'
  },
  {
    title: 'Create Account',
    content: 'Signed up as a Business account',
    color: 'success',
    meta: '2 weeks ago'
  }
]

const UserTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4' className='mb-2'>
          User Timeline
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Timeline data={data} />
      </CardBody>
    </Card>
  )
}

export default UserTimeline
