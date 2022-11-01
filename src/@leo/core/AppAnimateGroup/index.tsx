import React from 'react';
import QueueAnim from 'rc-queue-anim';

interface IAppAnimateGroup {
  children: React.ReactNode;
  animateStyle?: {
    type: string;
    ease: string;
    delay: number;
    height: string | number;
    interval: number;
    duration: number;
  } | any;
  [x: string]: any;
}

const AppAnimateGroup: React.FC<IAppAnimateGroup> = ({
  children,
  animateStyle = {
    type: 'bottom', //alpha, left, right, top, bottom, scale, scaleBig, scaleX ,scaleY
    ease: 'easeInOutQuart',
    delay: 0,
    height: '100%',
    interval: 50,
    duration: 300,
  },
  rest
}) => {
  return (
    <QueueAnim
      style={{
        display: 'flex',
        flexDirection: 'column',
        ...animateStyle,
      }}
      {...rest}>
      {children ? children : null}
    </QueueAnim>
  );
};

export default AppAnimateGroup;
