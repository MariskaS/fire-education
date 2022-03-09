import React from 'react';

import './ui-flashcard.scss'
import {FaEye, FaEyeSlash} from "react-icons/fa";

export interface UiFlashcardProps {
  title: string;
  active: boolean;
}

export const UiFlashcard: React.FC<UiFlashcardProps> = ({title, active, children}) => {
  return (
    <div className="ui-flashcard">
      <div className="ui-flashcard__body">
        <div className="ui-flashcard__header">
          {title && (<h4 className="ui-flashcard__title">{title}</h4>)}
          <span className="ui-flashcard__icon">{active ? <FaEye/> : <FaEyeSlash/>}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
