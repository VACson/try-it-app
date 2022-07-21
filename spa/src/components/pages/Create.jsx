import React, { useState, useEffect } from 'react'
import {Category} from '../../components'
import Category_json from '../Category_data.json'

function Create(children) {
  const cat = Category_json
  const list = ['red', 'blue', 'yellow']
  const [category, setCategory] = React.useState()
  React.useEffect(() => console.log(cat.category))
  return (
    <div className="page-wrapper">
    <div className="heading">What u wanna do?</div>
    <div className="browse flex">
    {cat.map((category, index) => {
      return(
      <Category 
      key={category.category}
      child={category.category}
      className={classNames('activityicon browse flex', className)}
      />)
    })}
      
    </div>
    </div>
    
  )
}

export default Create