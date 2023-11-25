import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './Login.css';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import beam from '../assets/beam.png';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userName, password)
      .then((useCredential) => {
        console.log(useCredential)
      }).catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className='wrapper'>
      <div className='main'>
        <Form
          onSubmit={signIn}
          id='form'
          name="basic"
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1>Create a new account</h1>
          <p>We encourage you to log in to your account today <br /> and start exploring all that we have to offer!</p>
          <Form.Item
            onChange={(e) => setUserName(e.target.value)}
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder='Username' />
          </Form.Item>

          <Form.Item
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button id='btn' type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
          <Link to='/register' id='link'>
            Already have a account?
          </Link>
        </Form>
        <div className='right-block'>
          <h3 className='title'>Here, you can log in to your account<br /> to access upcoming events,<br /> register for events, and manage <br /> your event registrations.</h3>
          <img src={beam} />
        </div>
      </div>
    </div>
  );
};