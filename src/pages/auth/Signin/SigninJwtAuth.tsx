import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import IntlMessages from '../../../@leo/utility/IntlMessages';
import { useAuthMethod } from '../../../@leo/utility/AuthHooks';

const SignInJwtAuth = () => {
  const history = useNavigate();
  const { signInUser } = useAuthMethod();

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onGoToForgetPassword = () => {
    history('/forget-password', { state: { tab: 'jwtAuth' } });
  };

  function onRememberMe(e: any) {
    console.log(`checked = ${e.target.checked}`);
  }

  const { messages } = useIntl();

  return (
    <div className='sign'>
      <div className='sign-content'>
        <Form
          className='sign-form'
          name='basic'
          initialValues={{
            remember: true,
            email: '',
            password: '',
          }}
          onFinish={(data) => { signInUser({ password: data.password, userName: data.email }) }}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            name='email'
            className='form-field'
            rules={[{ required: true, message: messages['common.login.pleaseUsername'] as string }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder={messages['common.login.placeholderUsername'] as string} />
          </Form.Item>

          <Form.Item
            name='password'
            className='form-field'
            rules={[{ required: true, message: messages['common.login.pleasePassword'] as string }]}>
            <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder={messages['common.login.placeholderPassword'] as string} />
          </Form.Item>

          <div className='rememberMe'>
            <Checkbox onChange={onRememberMe}>
              <IntlMessages id='common.rememberMe' />
            </Checkbox>

            <span className='sign-link' onClick={onGoToForgetPassword}>
              <IntlMessages id='common.forgetPassword' />
            </span>
          </div>

          <div className='form-btn-field'>
            <Button type='primary' htmlType='submit' className='sign-btn'>
              <IntlMessages id='common.login' />
            </Button>
          </div>
          <p className='suppor-register'><IntlMessages id='common.login.supportRegister' /></p>
        </Form>
      </div>
    </div>
  );
};

export default SignInJwtAuth;
