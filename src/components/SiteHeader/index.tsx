import React from 'react';
import css from './style.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { route } from '../../misc/constants';
import UserAvatar from '../UserAvatar';
import LogoIcon from '../../assets/img/logo.svg';

const links = [
  {
    link: route.ROOT,
    label: 'Home',
  },
  {
    link: route.RECOGNIZER,
    label: 'Recognizer',
  },
  {
    link: route.API,
    label: 'API Documentation',
  },
  {
    link: route.FAQ,
    label: 'FAQ',
  },
];

function SiteHeader() {
  const location = useLocation();

  return (
    <header className={css.header}>
      <Link
        to={route.ROOT}
        className={css.brand}
      >
        <img
          src={LogoIcon}
          alt="Logotype"
          className={css.logoIcon}
        />

        Car Model Recognizer
      </Link>

      <nav className={css.links}>
        {links.map(link => (
          <Link
            key={link.link}
            to={link.link}
            className={location.pathname === link.link ? css.active : ''}
          >{link.label}</Link>
        ))}
      </nav>

      <div className={css.spaceFiller} />

      <UserAvatar />
    </header>
  );
}

export default SiteHeader;
