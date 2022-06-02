import React from 'react'
import { Link } from 'react-router-dom';

import { Button } from '../components'

function LoggedOut() {
  return (
      <div className='logoutpage'>
        <div className="mainlogo">acti</div>
        <div className="flex">
          <Link to="/login">
            <Button
            className={'button--login'}>Log In</Button>
          </Link>
          <Link to="/register">
            <Button
            className={'button--login button--login--reverse' }>Sign Up</Button>
          </Link>
        </div>
      </div>
  )
}

export default LoggedOut