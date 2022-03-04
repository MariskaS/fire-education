import React from 'react';
import {QuizListItem, TopicListItem} from '../../../../shared/core/interfaces';
import {UiLink} from "../../../../shared/components/UiLink/UiLink";
import {UiBanner} from "../../../../shared/components/UiBanner/UiBanner";
import {UiKeyList} from "../../../../shared/components/UiKeyList/UiKeyList";
import {FrQuiz} from "./components/FrQuiz/FrQuiz";

export interface FrTopicDetailPageContentProps {
  topic: TopicListItem;
}

export const FrTopicDetailPageContent: React.FC<FrTopicDetailPageContentProps> = ({topic}) => {

  const resourceList = topic.resources.map((resource, index) =>
    <UiLink key={index} text={resource.name} link={resource.link}/>
  )

  return (
    <>
      <UiBanner img={topic.img}
                title={topic.name}
                date={topic.date}>
        <p>Resources: {resourceList}</p>
        <p>{topic.description}</p>
        <UiKeyList list={topic.keys}/>
      </UiBanner>
      <FrQuiz questions={(topic.questions as QuizListItem[])}/>
    </>
  );
}
