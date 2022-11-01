import { Layout } from 'antd';
import React from 'react';
import { useAuthUser } from '../../utility/AuthHooks';
import AppContentView from '../AppContentView';

import './layout.style.less'
import MiniSidebarToggle from './MiniSidebarToggle';

const AppLayout = () => {
  const { isAuthenticated } = useAuthUser();

  return (
    <React.Fragment>
      {isAuthenticated ? (
        <MiniSidebarToggle />
      ) : (
        <Layout className='auth'>
          <AppContentView />
        </Layout>
      )}
    </React.Fragment>
  )
}

export default React.memo(AppLayout);