import React, {useState} from 'react';
import {UiHeading} from "../../../../../../shared/components/UiHeading/UiHeading";
import {QuizListItem} from "../../../../../../shared/core/interfaces";
import {BUTTON_TEXT, BUTTON_TYPE, HEADING_TYPE, TITLE} from "../../../../../../shared/core/constant";

import './fr-quiz.scss'
import {UiTag} from "../../../../../../shared/components/UiTag/UiTag";
import {UiButton} from "../../../../../../shared/components/UiButton/UiButton";
import {UiTextHighlight} from "../../../../../../shared/components/UiTextHighlight/UiTextHighlight";

export interface FrQuizProps {
  quiz: QuizListItem[],
}

export const FrQuiz: React.FC<FrQuizProps> = ({quiz}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestions = currentQuestion + 1;
    if (nextQuestions < quiz.length) {
      setCurrentQuestion(nextQuestions);
    } else {
      setShowScore(true)
    }
  }

  const answerListTmp = quiz.map((value, index) => (
    <div className="fr-quiz-answers__list-item"
         key={index}>
      <h4>{value.question}</h4>
      <p>{value.answer}</p>
    </div>
  ))

  const variantListTmp = quiz[currentQuestion].variants.map((variant, index) => (
    <div className="fr-quiz-variants__list-item"
         key={index}>
      <UiTag tag={variant}
             onClickCb={() => handleAnswerButtonClick(variant.isCorrect)}/>
    </div>
  ))

  const reset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false)
  }

  return (
    <div className="fr-quiz">
      {showScore ? (
          <div className="fr-quiz-answers">
            <UiTextHighlight>
              <h3 className="fr-quiz-answers__title">You scored <strong>{score}</strong> out of <strong>{quiz.length}</strong></h3>
            </UiTextHighlight>
            <UiHeading type={HEADING_TYPE.subtitle}>{TITLE.answers}</UiHeading>
            <div className="fr-quiz-answers__list">
              {answerListTmp}
            </div>
            <UiButton text={BUTTON_TEXT.tryAgain}
                      onClickCb={reset}
                      color={BUTTON_TYPE.promoPrimary}/>
          </div>
        )
        :
        (
          <div className="fr-quiz-variants">
            <UiHeading type={HEADING_TYPE.subtitle}>
              <h3 className="fr-quiz-variants__title">{quiz[currentQuestion].question}</h3>
            </UiHeading>
            <p>Question {currentQuestion + 1} out of {quiz.length}</p>

            <div className="fr-quiz-variants__list">
              {variantListTmp}
            </div>
          </div>
        )}
    </div>
  )
}
