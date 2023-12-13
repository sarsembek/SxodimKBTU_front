import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useAuth } from '../../context/AuthContext';

const { Title } = Typography;

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);

    const { email, password } = values;

    try {
      await signup(email, password);
      // Handle successful signup, e.g., redirect to a new page
    } catch (error) {
      console.error('Registration failed:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='main1'>
      <Form
        form={form}
        onFinish={onFinish}
        id='regDiv'
        style={{ maxWidth: '300px', margin: 'auto' }}
      >
        <Title level={3} style={{ color: '#fff', textAlign: 'center' }}>
          Sign Up
        </Title>
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
            {
              min: 6,
              message: 'Password must be at least 6 characters!',
            },
          ]}
        >
          <Input.Password placeholder='Password' className='inputs' />
        </Form.Item>
        <Form.Item>
          <Button
            id='regButton'
            type='primary'
            htmlType='submit'
            loading={loading}
            style={{ width: '100%' }}
          >
            Create Account
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
