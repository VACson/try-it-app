import React, {useState} from 'react'
import { ActivityList, Popular } from 'components'
import MOCK_DATA from 'MOCK_DATA.json'



function Home() {

  const [activityList, setActivityList] = useState(MOCK_DATA);
  return (
      <div className='page-wrapper'>
        <div className='label'>Discover</div>
        <div className='heading'>What's popular today</div>
        <div>
          <Popular />
        </div>
        <div className='heading'>Browse all</div>
          <ActivityList className={'browse flex'} activityList={activityList}/>
          
      </div>
  )
}


export default Home