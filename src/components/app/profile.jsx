import React from 'react';

import QuestionCard from './question-card';
import './profile.css';
import avatar from '../../avatar.svg';

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
        return (
            <div className="profile-header">
                <div className="profile-avatar">
                    <img className="profile-avatar-image" src={avatar} alt="avatar" />
                </div>
                <div className="profile-header-right">
                    <h2 className="profile-username">سلام {username}!</h2>
                </div>
            </div>
        );
}

class ProfileContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: false
        }
    }

    setFavoritesQuestionsState = () => {
        this.setState({
            favorites: true
        })
    }

    setAskedQuestionsState = () => {
        this.setState({
            favorites: false
        })
    }

    render() {
        const { favorites } = this.state;

        return (
            <div className="profile-content-container">
                <div className="profile-content-header">
                    <button className="profile-content-mine" onClick={this.setAskedQuestionsState}>
                        سؤالات پرسیده شده
                    </button>
                    <button className="profile-content-favorites" onClick={this.setFavoritesQuestionsState}>
                        سؤالات پسندیده شده
                    </button>
                </div>
                <div className="profile-content-main">
                    {favorites ? 
                    <div>
                        <h5 className="profile-content-warning">شما هیچ سؤالی را نپسندیده‌اید!</h5>
                    </div> : <div>
                        <QuestionCard />
                        <QuestionCard />
                        <QuestionCard />
                        <QuestionCard />
                        <QuestionCard />
                    </div>
                    }
                </div>
            </div>
        ); 
    }
}



export default Profile;