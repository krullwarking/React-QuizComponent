import React, { Component } from 'react';

class QuizQuestion extends Component {
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section>
                    <ul>
                        <li>{this.props.quiz_question.answer_options[0]}</li>
                    </ul>
                </section>
            </main>
        )
    }



}

/*
QuizQuestion.propTypes = {
    myProp: PropTypes.string.isRequired
};
*/
export default QuizQuestion;