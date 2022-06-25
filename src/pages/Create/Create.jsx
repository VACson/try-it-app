import React, { useState } from 'react'
import { Option } from 'components';


function Create() {
  const [category, setCategory] = useState('');
  return (
    <div className="wrapper">
      <div className="page-wrapper">
        <form>
          <div className="label label--small">What u wanna do today?</div>
          <Option 
          onChange={(e) => setCategory(e.target.value)}
          />
        </form>
        
      </div>
    </div>
  )
}

export default Create