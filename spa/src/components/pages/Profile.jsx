import React from 'react'
import { Button, ProfilePhoto, ProfileBio } from '../../components'

function Profile() {
  return (
    <div className="page-wrapper">
      <ProfilePhoto  className='flex'/>
      <div className="username flex flex--center">
        username
      </div>
      <div className="city flex flex--center">
        city
      </div>
      <ProfileBio />
      <Button className={'button--outline'}>
        MESSAGE
      </Button>
      <Button className={''} >
        FOLLOW
      </Button>
    </div>
    
  )
}

export default Profile