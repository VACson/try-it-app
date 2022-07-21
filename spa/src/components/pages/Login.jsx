import React from 'react'
import { Link } from 'react-router-dom';

import { Button, Input } from "../../components";
import Return from "../../assets/img/Union.svg"

function Login() {
  return (
    <div className='page-wrapper'>
      <div className='loginpage'>
        <form action="login">
          <Link
          to="/loggedout"
          className={'button--back'}>
          <img
          width='16'
          height='16' 
          src={Return} alt="back" />
          </Link>
          <label htmlFor='input' className='label'>Login</label>
          <div>
            <Input 
            placeholder={'E-mail'}/>
            <Input 
            placeholder={'Password'}
            type={'password'}/>
            <Button>Next</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login