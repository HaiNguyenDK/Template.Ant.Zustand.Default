import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import IntlMessages from '../../../@leo/utility/IntlMessages';
import { useIntl } from 'react-intl';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const ForgetPasswordJwtAuth = () => {
  const { messages } = useIntl();

  return (
    <div className='forget-content'>
      <p className='forget-para'>
        <IntlMessages id='common.forgetPassword.TextOne' />
        <span>
          <IntlMessages id='common.forgetPassword.TextTwo' />
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
            { required: true, message: messages['common.forgetPassword.pleaseEmail'] as string },
          ]}>
          <Input placeholder={messages['common.forgetPassword.placeholderEmailSend'] as string} />
        </Form.Item>

        <div className='form-field'>
          <Button type='primary' htmlType='submit' className='forget-btn'>
            <IntlMessages id='common.forgetPassword.sendNewPassword' />
          </Button>
        </div>

        <p className='forget-footer'>
          <IntlMessages id='common.alreadyHavePassword' />
          <Link to='/signin'>
            <IntlMessages id='common.forgetPassword.signIn' />
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default ForgetPasswordJwtAuth;
