import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import './ask.css';

function Ask() {
    const [form, setForm] = useState({
        title: '',
        content: ''
    })

    const sendData = () => {
        axios.post('http://127.0.0.1:8000/api/post/', form, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`
            }
        }).then((r) => {
            if(r.status === 201) {
                toast.success('سوال با موفقیت ثبت شد')
                setForm({
                    title: '',
                    content: ''
                })
            }
        }).catch(() => {
            toast.error('مشکلی پیش آمده است')
        })
    }

    return (
        <div className="ask-container">
            <div className="ask-form">
                <h1 className="ask-title">
                    سؤال خود را اینجا بنویسید:
                </h1>
                <form action="#" className="ask-question-form">
                    <div className="ask-form-group">
                        <input type="text" name="title" value={form.title} placeholder="عنوان" onChange={(e) => setForm({
                            ...form,
                            title: e.target.value
                        })} />
                    </div>
                    <div className="ask-form-group">
                        <textarea name="content" placeholder="متن" value={form.content} onChange={(e) => setForm({
                            ...form, 
                            content: e.target.value
                        })}/>
                    </div>
                    <div class="ask-btn" onClick={() => sendData()}>
                        ارسال سؤال
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Ask;