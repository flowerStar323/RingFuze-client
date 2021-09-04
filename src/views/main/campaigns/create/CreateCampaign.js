import { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import Schedule from './steps/Schedule'
import Publishers from './steps/Publishers'
import TrackingNumber from './steps/TrackingNumber'
import CampaignDetails from './steps/CampaignDetails'
import CallRouting from './steps/CallRouting'
import CampaignReview from './steps/CampaignReview'
import { FileText, Clock, Users, Phone, GitMerge, CheckCircle } from 'react-feather'

const CreateCampaign = () => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const steps = [
    {
      id: 'campaign-details',
      title: 'Campaign Details',
      subtitle: 'Enter Your Campaign Details.',
      icon: <FileText size={18} />,
      content: <CampaignDetails stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'tracking-number',
      title: 'Tracking Number',
      subtitle: 'Add Tracking Number',
      icon: <Phone size={18} />,
      content: <TrackingNumber stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'schedule',
      title: 'Schedule',
      subtitle: 'Add Campaign Schedule',
      icon: <Clock size={18} />,
      content: <Schedule stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'publishers',
      title: 'Publishers',
      subtitle: 'Add Publishers',
      icon: <Users size={18} />,
      content: <Publishers stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'call-routing',
      title: 'Call Routing',
      subtitle: 'Setup Call Routing',
      icon: <GitMerge size={18} />,
      content: <CallRouting stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'campaign-review',
      title: 'Campaign Review',
      subtitle: 'Review Your Campaign',
      icon: <CheckCircle size={18} />,
      content: <CampaignReview stepper={stepper} type='wizard-modern' />
    }
  ]

  return (
    <div className='modern-horizontal-wizard'>
      <Wizard
        type='modern-horizontal'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default CreateCampaign
