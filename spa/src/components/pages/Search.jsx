import React, { useState, useEffect } from 'react';
import { Input, ActivityList, Activity } from '../../components';
import MOCK_DATA from '../../MOCKDATA.json';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const data = MOCK_DATA;
function Search() {
  const [activityList, setActivityList] = useState(data);

  let [searchParams, setSearchParams] = useSearchParams();

  const { register, watch } = useForm({
    defaultValues: {
      q: searchParams.get('q'),
    },
  });

  const query = watch('q');
  useEffect(() => {
    setSearchParams(
      new URLSearchParams({
        q: query,
      }),
    );
  }, [query]);
  let filterActivity = activityList.filter((icon) => {
    return icon.event.toUpperCase().includes(query.toUpperCase());
  });

  return (
    <div className="page-wrapper">
      <form>
        <label htmlFor="select" className="label">
          Search
        </label>
        <div className="flex">
          <Input type="search" {...register('q')} placeholder="Search" />
        </div>
        <ActivityList className={'browse flex'} data={filterActivity} />;
      </form>
    </div>
  );
}

export default Search;
