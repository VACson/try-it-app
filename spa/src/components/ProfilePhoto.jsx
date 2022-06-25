import React from 'react';
import classNames from 'classnames';

import photo from '../assets/img/profile.jpg'

const ProfilePhoto = ( className ) => {
  return (
    <img
    alt='profilephoto'
    height='128'
    width='128'
    src={photo} 
    className={classNames('profilephoto', className)}></img>
  )
}

export default ProfilePhoto