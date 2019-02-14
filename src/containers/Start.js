import React, {Component} from 'react'
import quizQuestions from '../api/quizQuestions'
import countryImages from '../api/countryImages';
import Quiz from '../components/Quiz'
import Result from '../components/Result'
import '../App.css';
import Footer from '../components/Footer'
import Header from '../components/Header'
// import ProgressBar from '../components/ProgressBar' 

class Start extends Component{
    constructor(props){
        super(props)
        this.state={
            allQuestions:{quizQuestions},
            resultImages:{countryImages},
            counter:0, 
            questionId:1, 
            question:'',
            answerOptions:[],
            answer:'',
            answerImage:'',
            description:'',
            answersCount:{
                Italy:0,
                China:0, 
                India:0, 
                Scotland:0,
                Scandanavia:0,
                NewZealand:0
            },
            result:''
        }
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
    }

    componentWillMount() {
      const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
      this.setState({
          question:quizQuestions[0].question,
          answerOptions: shuffledAnswerOptions[0]
      })
    }

    //this shuffle works. But isn't used as messes up finding result image
    shuffleArray(array){
        // let currentIndex = array.length, temporaryValue, randomIndex;
        // while(0 !== currentIndex){
        //     randomIndex = Math.floor(Math.random()*currentIndex);
        //     currentIndex -= 1;
        // temporaryValue = array[currentIndex];
        // array[currentIndex] = array[randomIndex];
        // array[randomIndex] = temporaryValue;
        // }
        return array;
    }

    setUserAnswer(answer){
        // debugger
        this.setState((state) => ({
            answersCount: {
                ...state.answersCount, 
                [answer]: state.answersCount[answer]+1
            },
            answer:answer

        }))
    }

    setNextQuestion(){
        const counter = this.state.counter+1;
        const questionId = this.state.questionId +1;
        this.setState({
            counter:counter,
            questionId:questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer:''
        })
    }

    getResults(){
        // debugger
        const answersCount = this.state.answersCount; //sets var answerCount to state.
        const answersCountKeys = Object.keys(answersCount); //Constructs an object out of the answers
        const answersCountValues = answersCountKeys.map((key)=>answersCount[key]) //left with array of countries with a key on them with a value of how much they have
        const maxAnswerCount = Math.max.apply(null, answersCountValues); // gives the winner as maxAnswerCount 
        return answersCountKeys.reduce((accum, key, index) => {
            if (answersCount[key] === maxAnswerCount) {
                accum.push(answersCountKeys[index]);
                accum.push(index);
            }
            return accum;
        }, []);
    }

    refreshPage(){ 
        window.location.reload(); 
    }

  
    setResults(result){
        // debugger
        if(result.length===2){
            const correctAnswer = result[0]
            this.setState({result: correctAnswer})
            this.setState({answerImage: this.state.allQuestions.quizQuestions[5].answers[result[1]].image})
            // debugger
            this.setState({description:this.state.allQuestions.quizQuestions[5].answers[result[1]].description})
            // debugger
        }else{
            this.setState({result:'undetermined'})
            this.setState({answerImage:"https://ak1.picdn.net/shutterstock/videos/3968101/thumb/9.jpg?i10c=img.resize(height:240)"})
            this.setState({description:'Unfortuanatly we couldn\'t quite pin down where exactly you should go. Perhaps try again by clicking on the button below or BUZZCODE at the top left of the screen.'})

    }}
    
    handleAnswerSelected(event){
        // debugger
        this.setUserAnswer(event.currentTarget.value);
        if(this.state.questionId < (quizQuestions.length-1)){
            setTimeout(() => this.setNextQuestion(), 300);
        }else{
            setTimeout(() =>
              this.setResults(this.getResults()), 300)
        }
    }

    renderQuiz(){
        return(
        <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={quizQuestions.length}
                onAnswerSelected={this.handleAnswerSelected}
                // image={this.state.answerImage}
            />
        )
    }

    renderResult(){
        return(
            <Result 
            quizResult={this.state.result}
            image={this.state.answerImage}
            description={this.state.description}
            refresh={this.refreshPage}
                /> 
        )
    }

    render(){
        return(
            <div className="full">
            <Header refresh={this.refreshPage} />
            <h3 className="header">Find Your Ideal Holiday Destination</h3>
            {this.state.result ? this.renderResult(): this.renderQuiz()}
            <Footer />
            </div>
        )
    }
}
export default Start