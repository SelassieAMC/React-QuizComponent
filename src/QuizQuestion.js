import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component{
    handleClick(button_text){
        const isValid = button_text === this.props.quiz_question.answer;
        if(isValid){
            this.props.showNextQuestionHandler();
        }
    }
    render(){
        const options = this.props.quiz_question.answer_options; 
        return(
            <main>
                <section>
                <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {options.map((answer_option, index) =>
                            <QuizQuestionButton clickHandler = {this.handleClick.bind(this)} 
                            key={index} 
                            button_text = {answer_option} />
                        )}
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;