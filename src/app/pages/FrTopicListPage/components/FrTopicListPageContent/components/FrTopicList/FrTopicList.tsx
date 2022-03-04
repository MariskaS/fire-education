import React from 'react';

import './fr-topic-list.scss';
import {UiCard} from '../../../../../../shared/components/UiCard/UiCard';
import {TopicListItem} from '../../../../../../shared/core/interfaces';
import {UiDate} from '../../../../../../shared/components/UiDate/UiDate';

export interface FrTopicListProps {
  topicList: TopicListItem[],
  onClickCb: (topic: TopicListItem) => void,
}

export const FrTopicList: React.FC<FrTopicListProps> = ({topicList, onClickCb}) => {
  const listItems = topicList.map((topic) =>
    <div className="fr-topic-list__item"
         onClick={() => onClickCb(topic)}
         key={topic.id}>
      <UiCard img={topic.img}>
        <h3 className="fr-topic-list__title"><span>{topic.name}</span></h3>
        <UiDate date={topic.date}/>
      </UiCard>
    </div>
  );

  return (
    <div className="fr-topic-list">
      {listItems}
    </div>
  );
}
