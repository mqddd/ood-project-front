import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionCard from './question-card';
import './questions.css';

function Questions() {
    const [posts, setPosts] = useState({})

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/post/', {
        }).then(res => {
            setPosts(res.data)
        })
    }, [])
    console.log(posts)

        return (
            <div className="questions-container">
                {posts.results && posts.results.map((post) => (
                    <QuestionCard content={post.content} date={post.created_at} username={post.author} id={post.id}/>
                ))}
            </div>
        );
}

export default Questions;