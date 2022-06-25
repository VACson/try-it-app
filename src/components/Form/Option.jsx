import React, { useState } from 'react'
import Select from 'react-select'

const options = [
    { value: 'sport', label: 'Sport' },
    { value: 'event', label: 'Events' },
  ]

function Option ({ onClick }) { 
  const [currentCategory, setCurrentCategory] = useState([])
  const isMulti = true

  const getValue = () => {
      return currentCategory 
      ? options.filter(c => currentCategory.indexOf(c.value) >= 0)
      : options.find(c => c.value === currentCategory)
    
  }

  const onChange = (newValue) => {
    setCurrentCategory(
    isMulti
    ? newValue.map(v => v.value)
    : newValue.value
    )
  }

  return (
    <Select
    classNamePrefix='custom-select'
    isMulti={isMulti}
    onChange={onChange}
    onClick={onClick}
    value={getValue()}
    isSearchable={false}
    options={options} />
  )
}

export default Option