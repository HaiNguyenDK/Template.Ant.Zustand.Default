import React from 'react';
import { Card } from 'antd';
import AppAnimateGroup from '../../@leo/core/AppAnimateGroup';
import './AuthWrapper.style.less';
import AppInfoView from '../../@leo/core/AppInfoView';

interface IAuthWrapper {
  children: React.ReactNode;
}
const AuthWrapper: React.FC<IAuthWrapper> = ({ children }) => {
  return (
    <AppAnimateGroup
      type='scale'
      animateStyle={{ flex: 1 }}
      delay={0}
      interval={10}
      duration={200}>
      <div className='auth-wrap' key={'wrap'}>
        <Card className='auth-card'>
          <div className='auth-main-content'>
            {/* <div className='auth-card-header'>
              <AppLogo />
            </div> */}
            {children}
          </div>
          <div className='auth-wel-action'>
            <div className='auth-wel-content'>
              <h2>Welcome to Service!</h2>
              <p>
                Service is purely based on Ant Design components and follows Ant
                Design guidelines.
              </p>
            </div>
          </div>
        </Card>
      </div>
      <AppInfoView />
    </AppAnimateGroup>
  );
};

export default AuthWrapper;
