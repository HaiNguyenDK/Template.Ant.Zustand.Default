import React, { createContext, useContext, useState } from 'react';
import { LanguageProps } from '../../core/AppLngSwitcher/data';
import defaultConfig from './defaultConfig';

interface ILocaleContextProvider {
  children: React.ReactNode;
}

export interface LocaleContextData {
  locale: LanguageProps;
  rtlLocale: string[];
}

export interface LocaleActionsData {
  updateLocale: (locale: LanguageProps) => void;
}

const LocaleContext = createContext<LocaleContextData>({
  locale: defaultConfig.locale,
  rtlLocale: defaultConfig.rtlLocale,
});
const LocaleActionsContext = createContext<LocaleActionsData>({
  updateLocale: () => { },
});

export const useLocaleContext = () => useContext(LocaleContext);

export const useLocaleActionsContext = () => useContext(LocaleActionsContext);

const LocaleContextProvider: React.FC<ILocaleContextProvider> = ({ children }) => {
  const [locale, updateLocale] = useState<LanguageProps>(defaultConfig.locale);
  

  return (
    <LocaleContext.Provider
      value={{
        locale,
        rtlLocale: defaultConfig.rtlLocale,
      }}>
      <LocaleActionsContext.Provider
        value={{
          updateLocale,
        }}>
        {children}
      </LocaleActionsContext.Provider>
    </LocaleContext.Provider>
  );
};

export default LocaleContextProvider;
