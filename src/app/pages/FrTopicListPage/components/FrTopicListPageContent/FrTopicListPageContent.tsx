import React, {useCallback} from 'react';
import {TopicListItem} from '../../../../shared/core/interfaces';

import {HEADING_TYPE, TITLE} from '../../../../shared/core/constant';
import {UiHeading} from '../../../../shared/components/UiHeading/UiHeading';
import {FrTopicList} from './components/FrTopicList/FrTopicList';
import {useNavigate} from "react-router";
import {FrTopicListFilter} from "../FrTopicListFilter/FrTopicListFilter";

export interface FrTopicListPageContentProps {
  topicList: TopicListItem[]
}

export const FrTopicListPageContent: React.FC<FrTopicListPageContentProps> = ({topicList}) => {
  const navigate = useNavigate();

  const callback = useCallback((topic) => {
    navigate(topic.id);
  }, [navigate]);

  return (
    <>
      <UiHeading type={HEADING_TYPE.title}>
        <span>{TITLE.topics}</span>
        <FrTopicListFilter list={topicList}/>
      </UiHeading>
      <FrTopicList topicList={topicList} onClickCb={callback}/>
    </>
  );
}
