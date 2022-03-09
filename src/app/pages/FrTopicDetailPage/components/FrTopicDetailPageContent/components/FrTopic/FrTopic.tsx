import React from 'react';

import './fr-topic.scss'

export interface FrTopicProps {
  content?: string;
}

export const FrTopic: React.FC<FrTopicProps> = ({content}) => {
  return (
    <div className="fr-topic">
      {content && <div dangerouslySetInnerHTML={{__html: content}}/>}
    </div>
  );
}
