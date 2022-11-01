import React from 'react';
import ForgetPasswordJwtAuth from './ForgetPasswordJwtAuth';
import './index.style.less';
import AuthWrapper from '../AuthWrapper';

const ForgetPassword = () => {
  return (
    <AuthWrapper>
      <ForgetPasswordJwtAuth />
    </AuthWrapper>
  );
};

export default ForgetPassword;
