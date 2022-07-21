import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Button, Input } from '../../components';
import Return from '../../assets/img/Union.svg';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  return (
    <div className="page-wrapper">
      <div className="registerpage">
        <Link to="/loggedout" className={'button--back'}>
          <img width="16" height="16" src={Return} alt="back" />
        </Link>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}>
          <label htmlFor="input" className="label">
            Register
          </label>
          <div>
            <input
              {...register('email', { required: 'Set your e-mail' })}
              placeholder={'E-mail@example.com'}
            />
            <p>{errors.email?.message}</p>
            <input
              {...register('password', {
                required: 'Set your password',
                minLength: {
                  value: 8,
                  message: 'Min legth is 8',
                },
              })}
              placeholder={'Create a password'}
            />
            <p>{errors.password?.message}</p>
            {/* <Link to="/register/username"> */}
            <input type="submit" />
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
