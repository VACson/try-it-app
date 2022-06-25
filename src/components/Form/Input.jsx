import React from 'react'
import classNames from 'classnames'

const SearchField = ({ onChange, className, children, type, placeholder, value }) =>{
  return (
    <input 
    type={type} 
    id='input' 
    name='input'
    value={value}
    onChange={onChange} 
    placeholder={placeholder} 
    className={classNames('input', className)}>
    {children}
    </input>
  )
}

export default SearchField