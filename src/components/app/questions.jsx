import React from 'react';

import QuestionCard from './question-card';
import './questions.css';

class Questions extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="questions-container">
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
            </div>
        );
    }
}

export default Questions;