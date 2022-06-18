import React from 'react'
import { Link } from 'react-router-dom';

import { Button } from '../components'

function LoggedOut() {
  return (
      <div className='logoutpage'>
        <div className="mainlogo">acti</div>
        <div className="mainbuttons">
          <Link to="/login">
            <Button
            className={'button--outline button--medium'}>Log In</Button>
          </Link>
          <Link to="/register">
            <Button
            className={'button--medium'}>Sign Up</Button>
          </Link>
        </div>
      </div>
  )
}

export default LoggedOut