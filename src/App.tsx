import React from 'react';
import {
  AppLayout,
  AuthRoutes,
} from './@leo';
import JWTAuthAuthProvider from './@leo/services/auth/jwt-auth/JWTAuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLocaleProvider from './@leo/utility/AppLocaleProvider';
import AppThemeProvider from './@leo/utility/AppThemeProvider';
import AppContextProvider from './@leo/utility/AppContextProvider';
// import AppReduxProvider from '@leo/utility/AppReduxProvider';

const App = () => {
  return (
    <AppContextProvider>
      <AppThemeProvider>
        <AppLocaleProvider>
          <Router>
            <React.Fragment>
              <JWTAuthAuthProvider>
                <AuthRoutes>
                  <AppLayout />
                </AuthRoutes>
              </JWTAuthAuthProvider>
            </React.Fragment>
          </Router>
        </AppLocaleProvider>
      </AppThemeProvider>
    </AppContextProvider>
  );
}

export default App;
