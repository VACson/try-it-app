import React from 'react';
import classNames from 'classnames';
import Activity from './Activity';

const ActivityList = ({ className, data }) => {
  return (
    <div className={classNames(className)}>
      {data.map((activity, index) => {
        return (
          <Activity
            key={index}
            event={activity.event}
            img={activity.img}
            time={activity.time}
            username={activity.username}
            className={`category--${activity.event.toLowerCase()}`}
          />
        );
      })}
    </div>
  );
};

export default ActivityList;
