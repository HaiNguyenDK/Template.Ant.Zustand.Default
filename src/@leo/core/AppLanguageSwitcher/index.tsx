import React from 'react';

import { Dropdown, List } from 'antd';
import './index.style.less';
import { ThemeDirection } from '../../../shared/constants/AppEnums';
import {
  useLocaleActionsContext,
  useLocaleContext,
} from '../../utility/AppContextProvider/LocaleContextProvide';
import { useLayoutActionsContext } from '../../utility/AppContextProvider/LayoutContextProvider';
import { IoLanguageOutline } from 'react-icons/io5';
import languageData from '../AppLngSwitcher/data';
import AppScrollbar from '../AppScrollbar';

interface IAppLanguageSwitcher {
  iconOnly?: boolean;
}

const AppLanguageSwitcher: React.FC<IAppLanguageSwitcher> = ({ iconOnly }) => {
  const { rtlLocale, locale } = useLocaleContext();
  const { updateLocale } = useLocaleActionsContext();
  const { updateDirection } = useLayoutActionsContext();

  const changeLanguage = (language: any) => {
    if (rtlLocale.indexOf(language.locale) !== -1) {
      updateDirection(ThemeDirection.RTL);
    } else {
      updateDirection(ThemeDirection.LTR);
    }
    updateLocale(language);
  };

  const items = [{
    key: 'key-1',
    label: (
      <AppScrollbar className='header-lang-scroll-submenu'>
        <List
          dataSource={languageData}
          renderItem={(item, index) => {
            return (
              <div key={index} onClick={() => changeLanguage(item)} className='langItem'>
                <i className={`flag flag-24 flag-${item.icon}`} />
                <h4>{item.name}</h4>
              </div>
            );
          }}
        />
      </AppScrollbar>
    )
  }];

  return (
    <>
      <Dropdown
        menu={{ items, id: 'language-switcher' }}
        trigger={['click']}
        overlayStyle={{ zIndex: 1052 }}>
        <a
          className='ant-dropdown-link langBtn'
          onClick={(e) => e.preventDefault()} href="/#">
          <span className='lang-icon'>
            <IoLanguageOutline />
          </span>
          <span className='lang-text'>{locale.name}</span>
        </a>
      </Dropdown>
    </>
  );
};

export default AppLanguageSwitcher;
