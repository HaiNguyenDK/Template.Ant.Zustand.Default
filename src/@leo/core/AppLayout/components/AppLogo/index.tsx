import React from 'react';
import './index.style.less';
import { useSidebarContext } from '../../../../utility/AppContextProvider/SidebarContextProvider';

interface IAppLogo {
  hasSidebarColor?: boolean;
}

const AppLogo: React.FC<IAppLogo> = ({ hasSidebarColor }) => {
  const { sidebarColorSet } = useSidebarContext();
  return (
    <div className='app-logo'>
      {hasSidebarColor && sidebarColorSet.mode === 'dark' ? (
        // <img src='/assets/images/logo-white-with-name.png' alt='logo' />
        <p>Logo</p>
      ) : (
        // <img src='/assets/images/logo-with-name.png' alt='logo' />
        <p>Logo</p>
      )}
    </div>
  );
};

export default AppLogo;
