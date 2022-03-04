import React from 'react';
import {FrTopicDetailPageContent} from "./components/FrTopicDetailPageContent/FrTopicDetailPageContent";
import {useAppSelector} from '../../hooks';
import {selectCurrentTopic} from '../../data-flow/topic/topicSlice';
import {FrFooter} from "../components/FrFooter/FrFooter";
import './fr-topic-detail-page.scss'

export const FrTopicDetailPage: React.FC = () => {
  const topic = useAppSelector(selectCurrentTopic);
  return (
    <>
      <div className="fr-topic-detail-page">
        <FrTopicDetailPageContent topic={topic}/>
      </div>
      <FrFooter/>
    </>
  );
}
