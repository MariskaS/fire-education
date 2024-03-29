import React from 'react';
import {QuestionsListItem, QuizListItem, TopicListItem} from '../../../../shared/core/interfaces';
import {UiLink} from "../../../../shared/components/UiLink/UiLink";
import {UiBanner} from "../../../../shared/components/UiBanner/UiBanner";
import {UiKeyList} from "../../../../shared/components/UiKeyList/UiKeyList";
import {FrQuiz} from "./components/FrQuiz/FrQuiz";
import {TOPIC_TYPE} from "../../../../shared/core/constant";
import {FrTopic} from "./components/FrTopic/FrTopic";
import {FrFlashcards} from "./components/FrFlashcards/FrFlashcards";
import {UiSummary} from "../../../../shared/components/UiSummary/UiSummary";

export interface FrTopicDetailPageContentProps {
  topic: TopicListItem;
}

export const FrTopicDetailPageContent: React.FC<FrTopicDetailPageContentProps> = ({topic}) => {
  if (!topic) return null;

  const resourceList = topic.resources?.map((resource, index) =>
    <UiLink key={index} text={resource.name} link={resource.link}/>
  )

  return (
    <>
      <UiBanner img={topic.img}
                title={topic.name}
                date={topic.date}>
        {topic.resources && <p>Resources: {resourceList}</p>}
        {topic?.description && <div dangerouslySetInnerHTML={{__html: topic.description}}/>}
        <UiKeyList list={topic.keys}/>
      </UiBanner>
      {topic.type === TOPIC_TYPE.quiz &&
      <FrQuiz quiz={(topic.quiz as QuizListItem[])}/>
      }

      {topic.type === TOPIC_TYPE.topic &&
      <FrTopic content={topic?.content}/>
      }

      {topic.type === TOPIC_TYPE.flashcards &&
      <FrFlashcards questions={(topic.questions as QuestionsListItem[])}/>
      }
      {topic.notes && <UiSummary>
        <div dangerouslySetInnerHTML={{__html: topic.notes}}/>
      </UiSummary>}
    </>
  );
}
