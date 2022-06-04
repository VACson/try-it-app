import React from 'react'
import classNames from 'classnames'

const SearchField = ({ onClick, className, children, type, placeholder }) =>{
  return (
    <input 
    type={type} 
    id='input' 
    name='input' 
    placeholder={placeholder} 
    className={classNames('input', className)}>
    {children}
    </input>
  )
}

export default SearchField