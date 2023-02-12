import React, { ButtonHTMLAttributes } from 'react';
import css from './style.module.scss';
import joinCSS from 'classnames';

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={joinCSS(css.button, props.className)}
    />
  );
}

export default Button;
