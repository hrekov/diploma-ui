import React from 'react';
import css from './style.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { route } from '../../misc/constants';
import UserAvatar from '../UserAvatar';

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
    link: route.FAQ,
    label: 'FAQ',
  },
];

function SiteHeader() {
  const location = useLocation();

  return (
    <header className={css.header}>
      <div className={css.brand}>Car Model Recognizer</div>

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
