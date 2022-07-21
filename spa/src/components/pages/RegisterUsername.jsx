import React from 'react'
import { Link } from 'react-router-dom';

import { Button, Input } from "../../components";
import Return from "../../assets/img/Union.svg"

function RegisterUsername() {
  return (
    <div className='page-wrapper'>
      <div className='registerpage'>
        <form action="register">
        <Link
          to="/register"
          className={'button--back'}>
          <img
          width='16'
          height='16' 
          src={Return} alt="back" />
          </Link>
          <label htmlFor='input' className='label'>Username</label>
          <div>
            <Input 
            placeholder={'Create a username'}/>
            <Button>Next</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterUsername