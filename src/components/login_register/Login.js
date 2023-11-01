import React,{useState} from 'react';
import {  UserOutlined } from '@ant-design/icons';
import './Login.css';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
  const [userName,setUserName]=useState('');
  const[password,setPassword]=useState('');
  const signIn = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,userName,password)
    .then((useCredential)=>{
      console.log(useCredential)
    }).catch((error)=>{
      console.log(error);
    })
  }
 return(
   <div id='main'>
      <form id='logDiv' onSubmit={signIn}>
        <div >
        <UserOutlined  style={{
          width:'1.5em',
          fontSize:'5em',
          backgroundColor:'#38a3a5',
          color:'#000',
          marginBottom:'0.8em',
          border:'2px solid #000',
          borderRadius:'100%'
        }}/>
        </div>
        <div id='Username'>
          <input 
          id='username'
           placeholder='Username'
          type='text'
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
             ></input>
        </div>
        <div id='Password'>
          <input 
          id='password' 
          placeholder='Password'
          type='password' 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          ></input>
        </div>
        <button type='submit' id='logButton'>Log in</button>
        <a>Forgot password?</a>
      </form>
   </div>
 );
};