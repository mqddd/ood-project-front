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
                        سؤال خود را اینجا بنویسید:
                    </h1>
                    <form action="#" className="ask-question-form">
                        <div className="ask-form-group">
                            <input type="text" name="title" placeholder="عنوان"/>
                        </div>
                        <div className="ask-form-group">
                            <textarea name="content" placeholder="متن"/>
                        </div>
                        <button class="ask-btn" type="submit"> 
                            ارسال سؤال
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Ask;