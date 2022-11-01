import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useIntl} from 'react-intl';
import { Button, Checkbox, Form, Input } from 'antd';

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

  const {messages} = useIntl();

  return (
    <div className='sign'>
      <div className='sign-content'>
        <Form
          className='sign-form'
          name='basic'
          initialValues={{
            remember: true,
            email: 'myemail.demo@gmail.com',
            password: 'Pass@1!@all',
          }}
          onFinish={(data) => { signInUser({ password: data.password, userName: data.email }) }}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            name='email'
            className='form-field'
            rules={[{ required: true, message: 'Please input your Email!' }]}>
            <Input placeholder={messages['common.email'] as string} />
          </Form.Item>

          <Form.Item
            name='password'
            className='form-field'
            rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input.Password placeholder={messages['common.password'] as string} />
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

          <div className='form-field-action'>
            <span className='sign-text-grey'>
              <IntlMessages id='common.dontHaveAccount' />
            </span>
            <Link to='/signup' className='underlineNone colorTextPrimary'>
              <IntlMessages id='common.signup' />
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInJwtAuth;
