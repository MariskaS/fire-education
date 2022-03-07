import React, {useState} from 'react';

import './fr-flashcards.scss';
import {QuestionsListItem} from "../../../../../../shared/core/interfaces";
import {TITLE} from "../../../../../../shared/core/constant";

export interface FrFlashcardsProps {
  questions: QuestionsListItem[],
}

export const FrFlashcards: React.FC<FrFlashcardsProps> = ({questions}) => {
  const [checkedState, setCheckedState] = useState(
    new Array(questions.length).fill(false)
  );

  const handleOnChange = (index: number): void => {
    const updatedCheckedState = checkedState.map((item, idx) =>
      idx === index ? !item : item
    );

    setCheckedState(updatedCheckedState);
  }

  const listItems = questions.map((item, index) =>
    <div className={`fr-flashcards__list-item ${checkedState[index] ? 'is-active' : ''}`}
         onClick={() => handleOnChange(index)}
         key={index}>
      <h4>{index + 1}.&nbsp;{checkedState[index] ? TITLE.answer : TITLE.question}</h4>
      {
        checkedState[index] ? (
          <p>{item.answer}</p>
        ) : (
          <p>{item.question}</p>
        )
      }
    </div>
  );

  return (
    <div className="fr-flashcards">
      <div className="fr-flashcards__list">
        {listItems}
      </div>
    </div>
  );
}
