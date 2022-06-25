import React from 'react'
import { Button, ProfilePhoto, ProfileBio } from '../components'

function Profile() {
  return (
    <div className="page-wrapper">
      <ProfilePhoto  className='flex'/>
      <div className="username flex">
        username
      </div>
      <div className="city flex">
        city
      </div>
      <ProfileBio />
      <Button className={'button--outline button--outline--reverse'}>
        MESSAGE
      </Button>
      <Button className={'button--outline'} >
        FOLLOW
      </Button>
    </div>
    
  )
}

export default Profile