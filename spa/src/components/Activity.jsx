import classNames from 'classnames'
import React from 'react'

const Activity = ({ img, time, username, event, className }) => {
  return (
    <div className={classNames('activityicon browse flex', className)}>
      <div className='m-auto'>{img}</div>
      <div className='m-auto'>{event}</div>
      <div className='m-auto'>{time}</div>
      <div className='m-auto'>{username}</div>
    </div>
  )
}

export default Activity