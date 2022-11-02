import React from 'react';
import {
  AppLayout,
  AuthRoutes,
} from './@leo';
import JWTAuthAuthProvider from './@leo/services/auth/jwt-auth/JWTAuthProvider';
import { BrowserRouter } from 'react-router-dom';
import AppLocaleProvider from './@leo/utility/AppLocaleProvider';
import AppThemeProvider from './@leo/utility/AppThemeProvider';
import AppContextProvider from './@leo/utility/AppContextProvider';
// import AppReduxProvider from '@leo/utility/AppReduxProvider';

const App = () => {
  return (
    <AppContextProvider>
      <AppThemeProvider>
        <AppLocaleProvider>
          <BrowserRouter>
            <React.Fragment>
              <JWTAuthAuthProvider>
                <AuthRoutes>
                  <AppLayout />
                </AuthRoutes>
              </JWTAuthAuthProvider>
            </React.Fragment>
          </BrowserRouter>
        </AppLocaleProvider>
      </AppThemeProvider>
    </AppContextProvider>
  );
}

export default App;
