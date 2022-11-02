import React from 'react';
import './index.style.less';
import { useSidebarContext } from '../../../../utility/AppContextProvider/SidebarContextProvider';
import IntlMessages from '../../../../utility/IntlMessages';
import clsx from 'clsx';

interface IAppLogo {
  hasSidebarColor?: boolean;
  isCollapsed: boolean;
}

const AppLogo: React.FC<IAppLogo> = ({ hasSidebarColor, isCollapsed }) => {
  const { sidebarColorSet } = useSidebarContext();
  return (
    <div
      className={clsx('cr-user-info')}>
      <div className={clsx('app-logo', {
        'logo-disable': isCollapsed
      })}>
        {hasSidebarColor && sidebarColorSet.mode === 'dark' ? (
          // <img src='/assets/images/logo-white-with-name.png' alt='logo' />
          <p className='logo-title'><IntlMessages id='common.wrapper.title.logo' /></p>
        ) : (
          // <img src='/assets/images/logo-with-name.png' alt='logo' />
          <p className='logo-title'><IntlMessages id='common.wrapper.title.logo' /></p>
        )}
      </div>
    </div>
  );
};

export default AppLogo;
