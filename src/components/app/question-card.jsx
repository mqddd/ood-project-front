import React from 'react';
import { Link } from 'react-router-dom';


import './question-card.css';
import avatar from '../../avatar.svg';

class QuestionCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="question-card">
                <Link to="/index/question-detail" className="react-link"> 
                        <div className="question-card-header">
                            <img className="question-card-avatar" src={avatar} alt="avatar" />
                            <div className="question-card-header-right">
                                <h2 className="question-card-username">Meqdad</h2>
                                <h5 className="question-card-time">
                                    2021-5-2 
                                </h5>
                            </div>
                        </div>
                        <div className="question-card-content">
                            <p className="question-card-summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                                    but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                        </div>
                </Link>
            </div>
        );
    }
}

export default QuestionCard;