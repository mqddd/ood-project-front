import React from 'react';

import './ask.css';

class Ask extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="ask-container">
                <div className="ask-form">
                    <h1 className="ask-title">
                        Write your Question here:
                    </h1>
                    <form action="#" className="ask-question-form">
                        <div className="ask-form-group">
                            <input type="text" name="title" placeholder="title"/>
                        </div>
                        <div className="ask-form-group">
                            <textarea name="content" placeholder="content"/>
                        </div>
                        <button class="ask-btn" type="submit"> 
                            Ask Question
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Ask;