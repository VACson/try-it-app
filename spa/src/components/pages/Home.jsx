import React, { Children, useState } from 'react';
import { ActivityList, Category } from '../../components';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../../redux/actions/counterSlice';

import MOCK_DATA from '../../MOCKDATA.json';
import Category_data from '../../components/Category_data.json';

function Home() {
  // const cat = ['RED', 'BLUE', 'YELLOW'];
  const dispatch = useDispatch();

  const [activityList, setActivityList] = useState(MOCK_DATA);
  const [categoryList, setcategoryList] = useState(Category_data.categories);
  console.log('TCL: Home -> categoryList', categoryList);
  return (
    <div className="page-wrapper">
      <div className="label">Discover</div>
      <div className="heading">What's popular today</div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination
        modules={[Pagination]}
        className="mySwiper">
        {categoryList.map(({ name }) => (
          <SwiperSlide key={name}>
            <Link
              // to="/search"
              to={{
                pathname: 'search',
                search: `q=${name}`,
              }}
              className="swiper-slide-img">
              <Category className={`category--${name} category`} child={name} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="heading">Browse all</div>
      <ActivityList className={'browse flex'} data={activityList} />
    </div>
  );
}

export default Home;
