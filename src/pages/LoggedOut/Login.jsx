import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Form } from "components";
import Return from "assets/img/Union.svg"

function Login() {
  const dispatch = useDispatch();
  const push = useNavigate();
  const handleLogin = (email, password) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(({user})=> {
          console.log(user);
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken
          }))
          push('/');
        })
        .catch(() => alert('Invalid user'))
  }

  return (
    <div className='page-wrapper'>
      <div className='loginpage'>
        <Link
          to="/loggedout"
          className={'button--back'}>
          <img
          width='16'
          height='16' 
          src={Return} alt="back" />
        </Link>
        <div className='label'>Login</div>
        <Form 
          title="Log in"
          handleClick={handleLogin}
        />
      </div>
    </div>
  )
}

export default Login