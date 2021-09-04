import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import notAuthImg from '@src/assets/images/pages/not-authorized.svg'
import loginImg from "@src/assets/images/logo/ringfuze-logo-dark.png"

import '@styles/base/pages/page-misc.scss'

const NotAuthorized = () => {
  return (
    <div className='misc-wrapper'>
      <Link
        className='brand-logo'
        to='/'
        onClick={(e) => e.preventDefault()}
        >
        <img src={loginImg} alt='loginImg' />
      </Link>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>You are not authorized! 🔐</h2>
          <p className='mb-2'>
            The page you are trying to reach is not accessable by your current account role. If you feel this is a mistake, please contact your administrator to request access.
          </p>
          <Button tag={Link} to='/login' color='primary' className='btn-sm-block mb-1'>
            Back to login
          </Button>
          <img className='img-fluid' src={notAuthImg} alt='Not authorized page' />
        </div>
      </div>
    </div>
  )
}
export default NotAuthorized
