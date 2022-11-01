import React from 'react';
import languageData from './data';

import { Dropdown, Menu } from 'antd';
import './index.style.less';
import { ThemeDirection } from '../../../shared/constants/AppEnums';
import {
  useLocaleActionsContext,
  useLocaleContext,
} from '../../utility/AppContextProvider/LocaleContextProvide';
import { useLayoutActionsContext } from '../../utility/AppContextProvider/LayoutContextProvider';
import { IoLanguageOutline } from 'react-icons/io5';

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

  const menu = (
    <Menu id='language-switcher' items={languageData?.map((language, index) => {
      return {
        key: index,
        label: (
          <div className='langItem'>
            <i className={`flag flag-24 flag-${language.icon}`} />
            <h4>{language.name}</h4>
          </div>
        ),
        type: 'item',
        onClick: () => changeLanguage(language)
      }
    })} />
  );

  return (
    <>
      <Dropdown
        overlay={menu}
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
