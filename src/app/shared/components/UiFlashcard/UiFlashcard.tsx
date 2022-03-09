import React from 'react';

import './ui-flashcard.scss'

export interface UiFlashcardProps {
  title: string;
}

export const UiFlashcard: React.FC<UiFlashcardProps> = ({title, children}) => {
  return (
    <div className="ui-flashcard">
      {title && (<h4 className="ui-flashcard__title">{title}</h4>)}
      <div className="ui-flashcard__body">
        {children}
      </div>
    </div>
  );
}
