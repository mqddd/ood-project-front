import React, { useEffect, useState } from 'react';

import QuestionCard from './question-card';
import './profile.css';
import avatar from '../../avatar.svg';
import axios from 'axios';

function Profile() {
        return (
            <div className="profile-container">
                <ProfileHeader />
                <div className="profile-content">
                    <ProfileContent />
                </div>
            </div>
        );
}

function ProfileHeader() {
    const username = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).username

    const [occasions, setOccasions] = useState({})

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/DayOccasions', {
        }).then(res => {
            setOccasions(res.data)
        }).catch(e => {
            console.log(e?.message);
        })

        
    }, [])
        return (
            <div className="profile-header">
                <div className="profile-avatar">
                    <img className="profile-avatar-image" src={avatar} alt="avatar" />
                </div>
                <div className="profile-header-right">
                    <h2 className="profile-username">سلام {username}!</h2>
                </div>
                <div className="profile-header-occasions">
                    <p className="profile-header-occassion-header">:مناسبت‌های امروز</p>
                    {occasions.events && occasions.events.map((occasion) => (
                        <Occasions desc={occasion.description}/>
                    ))} 
                </div>   
            </div>
        );
}

function Occasions(props) {
    return (
        <div className="occasion-container">
            <p className="occasion-desc">
                {props.desc} -
            </p>
        </div>
    );
}

function ProfileContent() {
            const [favorites, setFavorites] = useState(false)
            const [likedPosts, setLikedPosts] = useState({})
            const [myPosts, setMyPosts] = useState({})

            useEffect(() => {
                if(favorites) {
                    axios.get('http://127.0.0.1:8000/api/post/?filter=liked', {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`
                        }
                    }).then(res => {
                        setLikedPosts(res.data)
                    })
                } else {
                    axios.get('http://127.0.0.1:8000/api/post/?filter=me', {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).access}`
                        }
                    }).then(res => {
                        setMyPosts(res.data)
                    })
                }
            }, [favorites])

            return (
            <div className="profile-content-container">
                <div className="profile-content-header">
                    <button className="profile-content-mine" onClick={() => setFavorites(false)}>
                        سؤالات پرسیده شده
                    </button>
                    <button className="profile-content-favorites" onClick={() => setFavorites(true)}>
                        سؤالات پسندیده شده
                    </button>
                </div>
                <div className="profile-content-main">
                    {favorites ? 
                    <div>
                        <h5 className="profile-content-warning">شما هیچ سؤالی را نپسندیده‌اید!</h5>
                    </div> : <div>
                        {myPosts.results && myPosts.results.map(post => {
                           return <QuestionCard content={post.content} date={post.created_at} username={post.author} id={post.id} />
                        })}
                    </div>
                    }
                </div>
            </div>
        ); 
}



export default Profile;