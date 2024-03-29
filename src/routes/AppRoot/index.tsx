import React from 'react';
import SiteHeader from '../../components/SiteHeader';
import { Outlet } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';
import css from './style.module.scss';

function Root() {
  return (
    <div className={css.wrapper}>
      <SiteHeader />

      <div className={css.content}>
        <Outlet />
      </div>

      <SiteFooter className={css.footer} />
    </div>
  );
}

export default Root;
