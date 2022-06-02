import React from 'react'
import { Link } from 'react-router-dom';

import { Button, Input } from "../components";
import Return from "../assets/img/Union.svg"

function Register() {
  return (
    <div className='page-wrapper'>
      <div className='registerpage'>
        <form action="register">
        <Link
          to="/loggedout"
          className={'button--back'}>
          <img
          width='16'
          height='16' 
          src={Return} alt="back" />
          </Link>
          <label htmlFor='register' className='label'>Register</label>
          <div>
            <Input 
            placeholder={'E-mail@example.com'}/>
            <Input 
            placeholder={'Create a password'}
            type={'password'}/>
            <Button>Next</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register