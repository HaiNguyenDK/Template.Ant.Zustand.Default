import React from 'react';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';
import './index.style.less';

interface IAppScrollbar {
  children: React.ReactNode;
  className?: string;
  scrollToTop?: boolean;
  [x: string]: any;
}
const AppScrollbar: React.FC<IAppScrollbar> = ({
  children,
  className,
  scrollToTop,
  res,
}) => {
  return (
    <SimpleBarReact {...res} className={className}>
      {children}
    </SimpleBarReact>
  );
};

export default AppScrollbar;
