import React from 'react';
import css from './style.module.scss';
import UserIcon from '../../assets/img/user.svg';

function UserAvatar() {
  return (
    <div className={css.avatar}>
      <img src={UserIcon} alt="User" />
    </div>
  );
}

export default UserAvatar;
