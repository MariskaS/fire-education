import React, {useCallback} from 'react';
import {TopicListItem} from '../../../../shared/core/interfaces';

import {HEADING_TYPE, TITLE} from '../../../../shared/core/constant';
import {UiHeading} from '../../../../shared/components/UiHeading/UiHeading';
import {FrTopicList} from './components/FrTopicList/FrTopicList';
import {useAppDispatch} from '../../../../hooks';
import {useNavigate} from "react-router";

export interface FrTopicListPageContentProps {
  topicList: TopicListItem[]
}

export const FrTopicListPageContent: React.FC<FrTopicListPageContentProps> = ({topicList}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const callback = useCallback((topic) => {
    navigate(topic.id);
  }, [dispatch, navigate]);

  return (
    <>
      <UiHeading type={HEADING_TYPE.title}>{TITLE.topics}</UiHeading>
      <FrTopicList topicList={topicList} onClickCb={callback}/>
    </>
  );
}
