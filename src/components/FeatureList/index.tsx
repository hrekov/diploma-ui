import React from 'react';
import FeatureBlock from '../FeatureBlock';
import HighPerformanceIcon from '../../assets/img/high-performance.svg';
import OpenSourceIcon from '../../assets/img/opensource.svg';
import HighAccuracyIcon from '../../assets/img/high-accuracy.svg';
import css from './style.module.scss';

function FeatureList() {
  return (
    <section>
      <h2 className={css.title}>Our Features</h2>

      <div className={css.featureList}>
        <FeatureBlock
          title="High Performance"
          description="By using clustered computing we provide low latency service"
          icon={HighPerformanceIcon}
          iconAlt="High Performance Icon"
        />

        <FeatureBlock
          title="Free & Open Source"
          description="MIT Licensed and free for everyone without any monetization"
          icon={OpenSourceIcon}
          iconAlt="Open Source Icon"
        />

        <FeatureBlock
          title="High Recognition accuracy"
          description="Trained on many thousand of images to provide you high level accuracy"
          icon={HighAccuracyIcon}
          iconAlt="High Accuracy Icon"
        />
      </div>
    </section>
  );
}

export default FeatureList;
