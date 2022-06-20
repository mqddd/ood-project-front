import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import './question-detail.css';
import avatar from '../../avatar.svg';
import { useParams } from 'react-router-dom';

function QuestionDetail() {
    let { id } = useParams();
    const [postData, setPostData] = useState({})
    const [commentData, setCommentData] = useState({})
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/post/' + id, {
        }).then(res => {
            setPostData(res.data)
        })

        axios.get('http://127.0.0.1:8000/api/post/' + id + '/comment/', {
        }).then(res => {
            setCommentData(res.data)
        })


    },[])

    const [form, setForm] = useState({
        content: ''
    })

    const sendData = () => {
        axios.post('http://127.0.0.1:8000/api/post/' + id + '/comment/', form, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`
            }
        }).then((r) => {
            if(r.status === 201) {
                toast.success('پاسخ با موفقیت ثبت شد')
                setForm({
                    content: ''
                })
            }
        }).catch(() => {
            toast.error('مشکلی پیش آمده است')
        })
    }

        return (
            <div className="question-detail-container">
                <div className="question-deatil-header">
                        <img className="question-deatil-avatar-image" src={avatar} alt="avatar" />                
                        <h2 className="question-deatil-username">توسط {postData.author}</h2>
                        <h5 className="question-deatil-time">
                            {postData.title}
                        </h5>
                </div>
                <div className="question-detail-content">
                    <p className="question-deatil-content-text">{postData.content}</p>
                </div>
                <div className="question-detail-footer">
                    <div className="question-detail-comments">
                    {commentData.results && commentData.results.map((comment) => (
                        <Comment author={comment.author} content={comment.content}/>
                    ))}
                    </div>
                    <div className="question-detail-add-comment">
                        <div className="question-detail-add-comment-header">
                            پاسخ خود را اینجا بنویسید:
                        </div>
                        <form action="#" className="add-comment-form">
                            <textarea name="content" value={form.content} id="" cols="30" rows="10" className="add-comment-content" placeholder="متن پاسخ" onChange={(e) => setForm({
                            ...form, 
                            content: e.target.value
                            })}/>
                            <div className="add-comment-submit" onClick={() => sendData()}>
                                ارسال پاسخ
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
}

function Comment(props) {
        return (
            <div className="comment-container">
                <div className="comment-username">
                    توسط {props.author}
                </div>
                <div className="comment-content">
                    {props.content}
                </div>
            </div>
        );
}

export default QuestionDetail;