import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import './Login.css';
import image from '../../assets/login.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LoadingOutlined } from '@ant-design/icons';
import { ErrorModal } from '../error/ErrorModal';


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError ] = useState('');
  const [ errorModalIsOpen, setErrorModalIsOpen ] = useState(false);
  const { login, loading } = useAuth();
  console.log(login);
  const navigate = useNavigate();
  const onFinish = async () => {
    try {
      await login(email, password);
      navigate("/event");
    } catch (error) {
      setError(error);
      setErrorModalIsOpen(true);
      console.error('Authentication Error:', error);
    }
  };

  return (
    <Spin
      className='loading'
      spinning={loading} 
      tip="Logging in..."
      indicator={
        <LoadingOutlined 
          style={{
            fontSize: 24,
          }}
        />
      }
      >
      <div className='wrapper'>
        <div className='main'>
          <Form
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
            <h1>Log in to your account</h1>
            <p>We encourage you to log in to your account today <br /> and start exploring all that we have to offer!</p>
            <Form.Item
              onChange={(e) => setEmail(e.target.value)}
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
            <img src={image} height='275px' alt='Sign In' />
          </div>
        </div>
        <ErrorModal
          isOpen={errorModalIsOpen}
          onClose={() => setErrorModalIsOpen(false)}
          message={error.message}
          type="Login Error"
        />
      </div>
    </Spin>
  );
};