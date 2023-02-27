import React from 'react';
import css from './style.module.scss';
import joinCSS from 'classnames';

interface FeatureBlockProps {
  title: string,
  description: string,
  icon: string,
  iconAlt: string,
  className?: string,
}

function FeatureBlock({ title, description, icon, iconAlt, className }: FeatureBlockProps) {
  return (
    <div className={joinCSS(css.featureItem, className)}>
      <h4 className={css.title}>{title}</h4>

      <img className={css.icon} src={icon} alt={iconAlt} />

      <p className={css.description}>{description}</p>
    </div>
  );
}

export default FeatureBlock;
