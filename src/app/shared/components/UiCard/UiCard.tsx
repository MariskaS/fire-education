import React from 'react';

import './ui-card.scss';

export interface UiCardProps {
  img: string,
}

export const UiCard: React.FC<UiCardProps> = ({img, children}) => {
  return (
    <div className="ui-card">
      <div className="ui-card__img"
           style={{backgroundImage: `url(${img})`}}>
      </div>
      <div className="ui-card__content">
        {children}
      </div>
    </div>
  );
}
