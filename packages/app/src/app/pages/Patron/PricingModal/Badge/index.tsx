import * as React from 'react';

import Relative from 'common/components/Relative';
import badges from 'common/utils/badges/patron-info';

import './animations.css';
import Particles from './Particles';

import { BadgeContainer } from './elements';

type Props = {
  badge: string
  subscribed: boolean
}

function Badge({ badge, subscribed }: Props) {
  const BadgeComponent = badges[badge].Badge;

  return (
    <Relative>
      {/* We prerender all particles, performance reasons */}
      <Particles makeItRain={subscribed} badge={badge} />
      <BadgeContainer key={badge} id="badge">
        <img src={BadgeComponent} className={`badge ${badge}`} alt={badge} />
      </BadgeContainer>
    </Relative>
  );
}

export default Badge;