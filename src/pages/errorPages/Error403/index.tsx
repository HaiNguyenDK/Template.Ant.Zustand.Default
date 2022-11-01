import React from 'react';
import { useNavigate } from 'react-router-dom';
import IntlMessages from '../../../@leo/utility/IntlMessages';
import AppAnimateGroup from '../../../@leo/core/AppAnimateGroup';
import { Button } from 'antd';
import '../index.style.less';
import { ReactComponent as Logo } from '../../../assets/icon/403.svg';

const Error403 = () => {
  const history = useNavigate();

  const onGoBackToHome = () => {
    history(-1);
  };

  return (
    <AppAnimateGroup type='bottom'>
      <div className='error-container' key='a'>
        <div className='error-img'>
          <Logo />
        </div>
        <div className='error-content'>
          <h3>Unauthorized</h3>
          <div className='error-para'>
            <p className='mb-0'>You are not authorized for this page!</p>
          </div>
          <Button type='primary' className='error-btn' onClick={onGoBackToHome}>
            <IntlMessages id='error.goBackToHome' />
          </Button>
        </div>
      </div>
    </AppAnimateGroup>
  );
};

export default Error403;
