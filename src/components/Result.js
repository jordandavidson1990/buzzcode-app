import React from 'react';
import ProgressBar from '../components/ProgressBar'

function Result(props){
    debugger
    return (
        <div className="result">
        <h4 id="result-title">Your ideal holiday destination is &nbsp;<strong>{props.quizResult}</strong></h4>
        <img className="result-image"src={props.image} alt={props.quizResult}/>
        <p className="description">{props.description}</p>
        <button onClick={props.refresh}>Try again?</button>
        {/* <ProgressBar/> */}
        </div>
    )
}

export default Result