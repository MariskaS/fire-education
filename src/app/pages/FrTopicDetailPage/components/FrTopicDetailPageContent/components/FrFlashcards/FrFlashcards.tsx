import React, {useState} from 'react';

import './fr-flashcards.scss';
import {QuestionsListItem} from "../../../../../../shared/core/interfaces";
import {TITLE} from "../../../../../../shared/core/constant";
import {UiFlashcard} from "../../../../../../shared/components/UiFlashcard/UiFlashcard";

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
      <UiFlashcard title={`${index + 1}. ${checkedState[index] ? TITLE.answer : TITLE.question}`}>
        {
          checkedState[index] ? (
            <div dangerouslySetInnerHTML={{__html: item.answer}}/>
          ) : (
            <div dangerouslySetInnerHTML={{__html: item.question}}/>
          )
        }
      </UiFlashcard>
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
