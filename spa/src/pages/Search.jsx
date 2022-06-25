import React from 'react'

import { Input, Button } from '../components'

function Search() {
  return (
    <div className="page-wrapper">
      <div className='searchpage'>
        <form action="search">
          <label htmlFor='search' className='label'>Search</label>
          <div className='flex'>
            <Input 
            className={'input--search'} 
            placeholder={'Type to search'} />
            <Button className={'button--search'}>Search</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Search