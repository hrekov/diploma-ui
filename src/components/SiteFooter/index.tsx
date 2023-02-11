import React from 'react';
import joinCSS from 'classnames';
import css from './style.module.scss';

interface SiteFooterProps {
  className?: string,
}

function SiteFooter({ className }: SiteFooterProps) {
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={joinCSS(css.footer, className)}>
      <div className={css.creator}>Created by Oleksandr Hrekov - {currentYear}</div>
    </footer>
  );
}

export default SiteFooter;
