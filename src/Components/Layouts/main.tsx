import * as React from 'react';
import styles from './Layout.module.scss'
import { isMobileOnly } from 'react-device-detect';
import cn from 'classnames';
import { LayoutProps } from '../../Types';

export interface  MainLayoutProps {
}

export  function MainLayout ({children}:  LayoutProps) {
  return (
    <div
      className={cn(styles.container, {
        [styles.mobile]: isMobileOnly,
        [styles.desktop]: !isMobileOnly,
      })}
    >
      {children}
    </div>
  );
}
