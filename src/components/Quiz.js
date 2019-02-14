import React from 'react';
import Question from '../components/Question'
import QuestionCount from '../components/Question'
import AnswerOption from '../components/AnswerOptions';


function Quiz(props) {

    function renderAnswerOptions(key) {
        // console.log(key.image)
        return (
          <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
            image={key.image}
          />
        );
      }
    
    return(
        <div key={props.questionId} className="quiz">
        <Question className="quest" content={props.question}/>
        <QuestionCount
        counter={props.questionId}
        total={props.questionTotal}
        />
        
        <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        </div>
    )
}

  export default Quiz