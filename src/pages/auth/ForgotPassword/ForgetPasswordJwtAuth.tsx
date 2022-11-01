import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import IntlMessages from '../../../@leo/utility/IntlMessages';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const ForgetPasswordJwtAuth = () => {

  return (
    <div className='forget-content'>
      <p className='forget-para'>
        <IntlMessages id='common.forgetPasswordTextOne' />
        <span>
          <IntlMessages id='common.forgetPasswordTextTwo' />
        </span>
      </p>

      <Form
        className='forget-form'
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          name='email'
          className='form-field'
          rules={[
            { required: true, message: 'Please input your Email Address!' },
          ]}>
          <Input placeholder={''} />
        </Form.Item>

        <div className='form-field'>
          <Button type='primary' htmlType='submit' className='forget-btn'>
            <IntlMessages id='common.sendNewPassword' />
          </Button>
        </div>

        <p className='forget-footer'>
          <IntlMessages id='common.alreadyHavePassword' />
          <Link to='/signin'>
            <IntlMessages id='common.signIn' />
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default ForgetPasswordJwtAuth;
