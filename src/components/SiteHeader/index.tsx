import React from 'react';
import css from './style.module.scss';
import { Link, useLocation } from 'react-router-dom';
import routing from '../../misc/routing';
import UserAvatar from '../UserAvatar';

const links = [
  {
    link: routing.ROOT,
    label: 'Home',
  },
  {
    link: routing.RECOGNIZER,
    label: 'Recognizer',
  },
  {
    link: routing.FAQ,
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
