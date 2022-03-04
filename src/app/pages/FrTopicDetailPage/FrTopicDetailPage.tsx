import React from 'react';
import {FrTopicDetailPageContent} from "./components/FrTopicDetailPageContent/FrTopicDetailPageContent";
import {useAppSelector} from '../../hooks';
import {selectTopicList} from '../../data-flow/topic/topicSlice';
import {FrFooter} from "../components/FrFooter/FrFooter";
import './fr-topic-detail-page.scss'
import {useParams} from "react-router-dom";
import {UiOops} from "../../shared/components/UiOops/UiOops";
import {BUTTON_TEXT} from "../../shared/core/constant";
import {UiBreadcrumbs} from "../../shared/components/UiBreadcrumbs/UiBreadcrumbs";
import {LinkListItem} from "../../shared/core/interfaces";

export const FrTopicDetailPage: React.FC = () => {
  const topicList = useAppSelector(selectTopicList);
  const {id} = useParams();
  const topic = topicList.find((v) => v.id === id);

  const breadcrumbs = [
    {text: BUTTON_TEXT.topics, link: '/topics'}
  ] as LinkListItem[];

  const errorLink = {text: BUTTON_TEXT.topics, link: '/topics'}

  if (topic) {
    return (
      <>
        <div className="fr-topic-detail-page">
          <UiBreadcrumbs breadcrumbs={breadcrumbs}/>
          <FrTopicDetailPageContent topic={topic}/>
        </div>
        <FrFooter/>
      </>
    );
  } else {
    return (
      <UiOops to={errorLink}/>
    )
  }

}
