import React, { useState } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import ErrorModal from '../error/ErrorModal';
import { LoadingOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import "./Register.css";
import image from '../assets/register.svg';

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const [ errorModalIsOpen, setErrorModalIsOpen ] = useState(false);
  const [error, setError ] = useState('');
  const { signup } = useAuth();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);

    const { email, password } = values;

    try {
      await signup(email, password);
      navigate("/home");
      // Handle successful signup, e.g., redirect to a new page
    } catch (error) {
      setError(error);
      setErrorModalIsOpen(true);
      console.error('Registration failed:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin
      className='loading'
      spinning={loading} 
      tip="Signing in..."
      indicator={
        <LoadingOutlined 
          style={{
            fontSize: 24,
          }}
        />
      }
      >
      <div id='main1'>
        <div id='wrapper1'>
        <Form
          form={form}
          onFinish={onFinish}
          id='regDiv'
          style={{ maxWidth: '300px'}}
        >
          <h1 style={{color : "#27187e"}}>Create your account</h1>
          <p>Join us today to explore and participate in upcoming events!</p>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'Invalid email format!',
              },
            ]}
          >
            <Input placeholder='Email' className='inputs' />
          </Form.Item>
          <Form.Item
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
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords do not match!');
              },
            }),
          ]}
        >
            <Input.Password placeholder='Confirm Password' />
          </Form.Item>
          <Form.Item>
            <Button
              id='regButton'
              type='primary'
              htmlType='submit'
              loading={loading}
              style={{ 
                width: '100%',
                background: "#aeb8fe"
               }}
            >
              Create Account
            </Button>
          </Form.Item>
          <Link to='/login' id='link'>
            Already have an account? Log in here.
          </Link>
        </Form>
        <div className='right-block'>
          <h3 className='title' id='title'>Create your account to access<br /> upcoming events, register for events,<br /> and manage your event registrations.</h3>
          <img src={image} height='250px' alt='Register' />
        </div>
        </div>
        <ErrorModal
          isOpen={errorModalIsOpen}
          onClose={() => setErrorModalIsOpen(false)}
          message={error.message}
          type="Signin Error"
        />
      </div>
    </Spin>
  );
};

export default Register;
