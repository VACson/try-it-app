import React, { useState, useEffect } from 'react'
import { Input, ActivityList } from 'components'
import MOCK_DATA from 'MOCK_DATA.json'

const filterActivity = (searchText, listOfActivity) => {
  if (!searchText) {
    return []
  }
  return listOfActivity.filter(({ event }) => 
  event.toLowerCase().includes(searchText.toLowerCase())
  );
}
const data = MOCK_DATA;

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activityList, setActivityList] = useState(data);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredActivity = filterActivity(searchTerm, data);
      setActivityList(filteredActivity);
    }, 500);

    return () => clearTimeout(Debounce);
  }, [searchTerm])

  return (
    <div className="page-wrapper">
        <form>
          <label htmlFor='select' className='label'>Search</label>
          <div className='flex'>
            <Input 
            type="search" 
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search" 
            />
          </div>
          <ActivityList className={'browse flex'} activityList={activityList}/>
        </form>
    </div>
  )
}

export default Search