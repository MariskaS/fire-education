import React, {useCallback} from 'react';
import {TopicListItem} from '../../../../shared/core/interfaces';

import {HEADING_TYPE} from '../../../../shared/core/constant';
import {UiHeading} from '../../../../shared/components/UiHeading/UiHeading';
import {FrTopicList} from './components/FrTopicList/FrTopicList';
import {useNavigate} from "react-router";
import {FrTopicListFilter} from "../FrTopicListFilter/FrTopicListFilter";
import {useAppSelector} from "../../../../hooks";
import {selectTopicType} from "../../../../data-flow/search/selectors";

export interface FrTopicListPageContentProps {
  topicList: TopicListItem[]
}

export const FrTopicListPageContent: React.FC<FrTopicListPageContentProps> = ({topicList}) => {
  const navigate = useNavigate();
  const title = useAppSelector(selectTopicType);

  const callback = useCallback((topic) => {
    navigate(topic.id);
  }, [navigate]);

  return (
    <>
      <UiHeading type={HEADING_TYPE.title}>
        <span>{title}</span>
        <FrTopicListFilter list={topicList}/>
      </UiHeading>
      <FrTopicList topicList={topicList} onClickCb={callback}/>
    </>
  );
}
