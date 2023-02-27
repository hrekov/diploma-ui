import React from 'react';
import css from './style.module.scss';
import joinCSS from 'classnames';

interface SectionTitleProps {
  title: string,
  className?: string,
}

function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h2 className={joinCSS(css.title, className)}>{title}</h2>
  );
}

export default SectionTitle;
