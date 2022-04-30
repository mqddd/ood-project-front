import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './ask.css';

function Ask() {
    const [form, setForm] = useState({
        title: '',
        content: ''
    })

    const sendData = () => {
        axios.post()
    }

    return (
        <div className="ask-container">
            <div className="ask-form">
                <h1 className="ask-title">
                    سؤال خود را اینجا بنویسید:
                </h1>
                <form action="#" className="ask-question-form">
                    <div className="ask-form-group">
                        <input type="text" name="title" placeholder="عنوان" onChange={(e) => setForm({
                            ...form,
                            title: e.target.value
                        })} />
                    </div>
                    <div className="ask-form-group">
                        <textarea name="content" placeholder="متن" onChange={(e) => setForm({
                            ...form, 
                            content: e.target.value
                        })}/>
                    </div>
                    <button class="ask-btn" type="submit" onClick={() => sendData()}>
                        ارسال سؤال
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Ask;