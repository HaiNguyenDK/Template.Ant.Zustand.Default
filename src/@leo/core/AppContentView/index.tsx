import React from 'react';
import { Layout } from 'antd';
import { AppSuspense } from '../../index';
import {
  anonymousStructure,
  authorizedStructure,
  unAuthorizedStructure,
} from '../../../pages';
import AppErrorBoundary from '../AppErrorBoundary';
import './index.style.less';
import generateRoutes from '../../utility/RouteGenerator';
import { useAuthUser } from '../../utility/AuthHooks';
import { Navigate, Route, Routes } from 'react-router-dom';
import Error404 from '../../../pages/errorPages/Error404';
import { initialUrl } from '../../../shared/constants/AppConst';

const { Content } = Layout;

const AppContentView = () => {
  const { user, isAuthenticated } = useAuthUser();
  return (
    <Content className='main-content-view'>
      <AppSuspense>
        <AppErrorBoundary>
          <Routes>
            {generateRoutes({
              isAuthenticated: isAuthenticated,
              userRole: user?.role,
              unAuthorizedStructure,
              authorizedStructure,
              anonymousStructure,
            })}
            <Route path='/' element={<Navigate to={isAuthenticated ? initialUrl : "/signin"} replace />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </AppErrorBoundary>
      </AppSuspense>
    </Content>
  );
};

export default AppContentView;
