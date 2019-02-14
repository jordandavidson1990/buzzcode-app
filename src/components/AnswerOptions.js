import React from 'react';
import {Animated} from "react-animated-css";


function AnswerOption(props) {
    // debugger
    return(
        
        <ul className="answerOption">
        
        <label className="radioCustomLabel" htmlFor={props.answerType}><h2></h2>
        <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
        >
        
        </input>
        <Animated id="animation" animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}> 
        <div className="quiz-container">
        <h5>{props.answerContent}</h5>
        <img 
        id="image" src={props.image} alt="poster"/>
        </div>
        </Animated>
        
        
        </label>
        </ul>
    )
}

export default AnswerOption