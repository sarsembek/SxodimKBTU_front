import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

export const Register = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('') 

  const regIn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userName, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div id='main1'>
      <form id='regDiv' onSubmit={regIn}>
        <h1 style={{ color: "#fff" }}>Sign Up</h1>
        <div>
          <input
            className='inputs'
            placeholder='Username'
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input className='inputs' placeholder='Email' type='text' />
        </div>
        <div>
          <input
            className='inputs'
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input className='inputs' placeholder='Confirm password' type='password' />
        </div>
        <button id='regButton' type='submit'>Create Account</button>
      </form>
    </div>
  );
};
