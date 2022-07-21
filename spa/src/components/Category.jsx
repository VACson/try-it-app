import classNames from 'classnames';
import React from 'react';
import Category_data from './Category_data.json';

function Category({ data, child, className, onClick, index }) {
  const cat = Category_data;
  const children = cat.category;
  return (
    <div className={classNames(className, 'activityicon browse flex')}>
      <div onClick={onClick}>{child}</div>
    </div>
  );
}
export default Category;
