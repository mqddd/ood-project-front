import React from 'react';
import { Link } from 'react-router-dom';


import './question-card.css';
import avatar from '../../avatar.svg';

function QuestionCard({username, date, content, id, like_status, likes}) {
        return (
            <div className="question-card">
                <Link to={`/index/question-detail/${id}`} className="react-link"> 
                        <div className="question-card-header">
                            <img className="question-card-avatar" src={avatar} alt="avatar" />
                            <div className="question-card-header-right">
                                <h2 className="question-card-username">{username}</h2>
                                <h5 className="question-card-time">
                                    {date}
                                </h5>
                            </div>
                        </div>
                        <div className="question-card-content">
                            <p className="question-card-summary">{content}</p>
                        </div>
                        <div className="question-card-like-btn" onClick={() => {}}>
                            {!like_status ? 'پسندیدن' : ''}
                        </div>
                        <div className="question-card-likes">
                            تعداد پسندها: {likes}
                        </div>
                </Link>
            </div>
        );
}

export default QuestionCard;