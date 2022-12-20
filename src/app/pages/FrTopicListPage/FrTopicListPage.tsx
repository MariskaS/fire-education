import React from 'react';
import {useAppSelector} from '../../hooks';
import {FrTopicListPageContent} from './components/FrTopicListPageContent/FrTopicListPageContent';
import {FrFooter} from "../components/FrFooter/FrFooter";
import './fr-topic-list-page.scss'
import {selectTopicList} from "../../data-flow/topic/selectors";

export const FrTopicListPage: React.FC = () => {
  const topicList = useAppSelector(selectTopicList);

  return (
    <>
      <div className="fr-topic-list-page">
        <FrTopicListPageContent topicList={topicList}/>
      </div>
      <FrFooter/>
    </>
  );
}
