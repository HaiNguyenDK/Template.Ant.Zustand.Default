import React, { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import AppLocale from '../../../shared/localization';
import { useLayoutContext } from '../AppContextProvider/LayoutContextProvider';
import { useLocaleContext } from '../AppContextProvider/LocaleContextProvide';
import { DirectionType } from 'antd/lib/config-provider';

interface IAppThemeProvider {
  children: React.ReactNode;
}

const AppThemeProvider: React.FC<IAppThemeProvider> = ({ children }) => {
  const { direction } = useLayoutContext();
  const { locale } = useLocaleContext();

  const { antLocale } = AppLocale[locale.locale];

  useEffect(() => {
    document.body.setAttribute('dir', direction);
  }, [direction]);

  return (
    <ConfigProvider direction={direction as DirectionType} locale={antLocale}>
      {children}
    </ConfigProvider>
  );
};

export default React.memo(AppThemeProvider);
