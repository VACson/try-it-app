import React from 'react'

const Activity = ({ img, time, username, event }) => {
  return (
    <div className='activityicon browse flex'>
      <div className='m-auto'>{img}</div>
      <div className='m-auto'>{event}</div>
      <div className='m-auto'>{time}</div>
      <div className='m-auto'>{username}</div>
    </div>
  )
}

export default Activity