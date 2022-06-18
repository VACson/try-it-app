import React from 'react'
import classNames from 'classnames'
import placeholder from "../assets/img/placeholder.png"

function CategoryIcon({ className }) {
  return (
      <img 
      width='100%'
      src={placeholder} 
      alt="popular"
      className={classNames('categoryitem', className)} />
  )
}

export default CategoryIcon