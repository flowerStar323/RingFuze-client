// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Lead List Component
import Table from './Table'

// ** Styles
import '@styles/react/apps/app-users.scss'

const LeadsList = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Leads"
        breadCrumbParent="Manage"
        breadCrumbActive="Leads"
      />
      <div className='app-user-list'>
        <Table />
      </div>
    </Fragment>
  )
}

export default LeadsList
