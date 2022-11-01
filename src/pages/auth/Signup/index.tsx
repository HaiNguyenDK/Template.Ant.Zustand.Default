import React from 'react';
import './index.style.less';
import AuthWrapper from '../AuthWrapper';
import SignupJwtAuth from './SignupJwtAuth';

const Signup = () => {
  return (
    <AuthWrapper>
      <SignupJwtAuth />
    </AuthWrapper>
  );
};

export default Signup;
