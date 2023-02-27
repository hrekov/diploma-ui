import React from 'react';
import BannerImage from '../../assets/img/banner.jpg';
import css from './style.module.scss';
import ScrollDownButton from '../ScrollDownButton';

function BannerBlock() {
  return (
    <div
      className={css.image}
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className={css.texts}>
        <h1 className={css.title}>The new ega of image recognition technology</h1>

        <p className={css.subtitle}>Our service provides free and powerful tool to recognize cars from images</p>
      </div>

      <ScrollDownButton className={css.scrollDownButton}/>
    </div>
  );
}

export default BannerBlock;
