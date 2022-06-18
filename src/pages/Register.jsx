import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Form } from "../components";
import Return from "../assets/img/Union.svg"

function Register() {
  const dispatch = useDispatch();
  const push = useNavigate();
  const handleRegister = (email, password) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          console.log(user);
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken
          }))
          push('/');
        })
        .catch(console.error)
  }

  return (
    <div className='page-wrapper'>
      <div className='registerpage'>
        <Link
          to="/loggedout"
          className={'button--back'}>
          <img
          width='16'
          height='16' 
          src={Return} alt="back" />
        </Link>
        <Form 
          title="Register"
          handleClick={handleRegister}
        />
      </div>
    </div>
  )
}

export default Register