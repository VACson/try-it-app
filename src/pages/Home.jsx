import React from 'react'
import { ActivityIcon, Popular } from '../components'

function Home() {
  return (
      <div>
        <div className='label'>Discover</div><br></br>
        <div className='heading'>What's popular today</div><br></br>
        <div className="flex--slider">
          <Popular />
        </div>
        <div className='heading'>Browse all</div>
        <div className="browse flex">
          <ActivityIcon className={"smallicon"}/>
          <ActivityIcon className={"smallicon"}/>
          <ActivityIcon className={"smallicon"}/>
          <ActivityIcon className={"smallicon"}/>
        </div>
      </div>
  )
}


export default Home