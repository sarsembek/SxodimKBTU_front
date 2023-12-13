import React from 'react';
import { Modal, Button } from 'antd';

export const ErrorModal = ({ onClose, isOpen, message, type }) => {
  return (
    <Modal
      title={type}
      open={isOpen}
      onCancel={onClose}
      onOk={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      <p>{message}</p>
    </Modal>
  );
};

export default ErrorModal;
