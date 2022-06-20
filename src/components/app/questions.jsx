import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionCard from './question-card';
import './questions.css';

function Questions() {
    const [posts, setPosts] = useState({})
    const [searchData, setSearchData] = useState({
        data: ''
    })

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/post/', {
        }).then(res => {
            setPosts(res.data)
        })

        
    }, [])
    
    const sendData = () => {
        axios.get('http://127.0.0.1:8000/api/post/?search=' + searchData.data).then(res => {
            if(res.status === 200) {
                setPosts(res.data)
            }
        }).catch((e) => {
            console.log(e?.message);
        })
    }

        return (
            <div className="questions-container">
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="قسمتی از عنوان یا متن سؤال را وارد کنید" onChange={(e) => setSearchData({
                                ...searchData,
                                data: e.target.value
                            })} />
                    <div className="search-btn" onClick={() => sendData()}>
                        جستجو کنید
                    </div>
                </div>
                {posts.results && posts.results.map((post) => (
                    <QuestionCard content={post.content} date={post.title} username={post.author} id={post.id} like_status={post.like_status} likes={post.likes}/>
                ))}
            </div>
        );
}

export default Questions;