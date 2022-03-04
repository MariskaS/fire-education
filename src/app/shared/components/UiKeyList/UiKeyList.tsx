import React from 'react';

import './ui-key-list.scss';

export interface UiKeyListProps {
  list: string[],
}

export const UiKeyList: React.FC<UiKeyListProps> = ({list}) => {
  const keyList = list.map((value, index) =>
    <span className="ui-key-list__item"
          key={index}>{index !== 0 ? ' | ' : ''}{value}</span>
  )

  return (
    <div className="ui-key-list">
      [&nbsp;{keyList}&nbsp;]
    </div>
  );
}
