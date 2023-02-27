import React from 'react';
import css from './style.module.scss';
import SectionTitle from '../SectionTitle';
import AINetworkIcon from '../../assets/img/ai-network.png';

function HowItWorks() {
  return (
    <section className={css.root}>
      <SectionTitle title="How it works" className={css.title} />

      <div className={css.contents}>
        <div>
          <h3 className={css.blockTitle}>Network Schema</h3>

          <img
            src={AINetworkIcon}
            alt="Neural network"
            className={css.aiImage}
          />
        </div>

        <div className={css.descriptionBlock}>
          <p className={css.description}>
            Our service uses two different neural networks which each of them
            performs <br /> its own task very well and then we&apos;re searching in remote knowledge databases.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
