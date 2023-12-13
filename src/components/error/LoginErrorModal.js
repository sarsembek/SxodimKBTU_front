import React from 'react';
import { Modal, Button } from 'antd';

export const LoginErrorModal = ({ onClose, isOpen }) => {
  return (
    <Modal
      title="Login Error"
      open={isOpen}
      onCancel={onClose}
      onOk={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      <p>Invalid email or password. Please try again.</p>
    </Modal>
  );
};

export default LoginErrorModal;
