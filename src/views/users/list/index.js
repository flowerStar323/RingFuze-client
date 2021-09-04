// ** User List Component
import Table from './Table'
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Styles
import '@styles/react/apps/app-users.scss'


const UsersList = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Users"
        breadCrumbParent="Manage"
        breadCrumbActive="Users"
      />
      <div className='app-user-list'>
        <Table />
      </div>
    </Fragment>
  )
}

export default UsersList
