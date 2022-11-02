import React from 'react';
import AppAnimateGroup from '../../@leo/core/AppAnimateGroup';
import './AuthWrapper.style.less';
import AppInfoView from '../../@leo/core/AppInfoView';
import IntlMessages from '../../@leo/utility/IntlMessages';

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
        <div className='auth-card'>
          <div className='auth-main-content'>
            <div className='auth-card-header'>
              <div className='auth-card-content'>
                <p className='auth-card-title'><IntlMessages id='common.wrapper.title.logo' /></p>
                <p className='auth-card-description'><IntlMessages id='common.wrapper.description.logo' /></p>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
      <p className='text-coppy-right'><IntlMessages id='common.wrapper.auth.coppyRight' /></p>
      <AppInfoView />
    </AppAnimateGroup>
  );
};

export default AuthWrapper;
