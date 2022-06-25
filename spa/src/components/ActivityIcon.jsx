import React from 'react'
import classNames from 'classnames'
import placeholder from "../assets/img/placeholder.png"

function ActivityIcon({ className }) {
  return (
      <img 
      width='100%'
      src={placeholder} 
      alt="popular"
      className={classNames('activityitem', className)} />
  )
}

export default ActivityIcon