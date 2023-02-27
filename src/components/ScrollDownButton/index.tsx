import React from 'react';
import ScrollDownIcon from '../../assets/img/scroll-down.svg';
import css from './style.module.scss';
import joinCSS from 'classnames';

interface ScrollDownButtonProps {
  className?: string,
}

function ScrollDownButton({ className }: ScrollDownButtonProps) {

  return (
    <button className={joinCSS(css.button, className)}>
      Next

      <img
        className={css.icon}
        src={ScrollDownIcon}
        alt="Scroll Down Icon"
      />
    </button>
  );
}

export default ScrollDownButton;
