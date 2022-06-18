import React, { useState } from 'react'
import { Option } from '../components';


function Create() {
  const [category, setCategory] = useState('');
  return (
    <div className="wrapper">
      <div className="page-wrapper">
        <div className="label">What u wanna do today?</div>
        <form>
          <Option 
          onChange={(e) => setCategory(e.target.value)}
          />
        </form>
        
      </div>
    </div>
  )
}

export default Create