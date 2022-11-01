import React from 'react';
import { IntlProvider } from 'react-intl';
import { IntlGlobalProvider } from '../Utils';
import AppLocale from '../../../shared/localization';
import { useLocaleContext } from '../AppContextProvider/LocaleContextProvide';

interface IAppLocaleProvider {
  children: React.ReactNode;
}

const AppLocaleProvider: React.FC<IAppLocaleProvider> = ({ children }) => {
  const { locale } = useLocaleContext();
  const currentAppLocale = AppLocale[locale?.locale];

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}>
      <IntlGlobalProvider>{children}</IntlGlobalProvider>
    </IntlProvider>
  );
};

export default AppLocaleProvider;
