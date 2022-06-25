import React from 'react'
import classNames from 'classnames'
import Activity from './Activity'

const ActivityList = ({ className, searchTerm, activityList }) => {
  return (
      <div className={classNames(className)}>
        {activityList.map((activity, index) => {
          return (
            <Activity 
              key={activity.img} 
              event={activity.event}
              img={activity.img} 
              time={activity.time}
              username={activity.username}
            />
          )
        })}
      </div>
  )
}

export default ActivityList