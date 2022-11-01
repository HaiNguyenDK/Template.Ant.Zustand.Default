import React from 'react';
import './index.style.less';
import AuthWrapper from '../AuthWrapper';
import SignInJwtAuth from './SigninJwtAuth';

const Signin = () => {
  return (
    <AuthWrapper>
      <SignInJwtAuth />
    </AuthWrapper>
  );
};

export default Signin;