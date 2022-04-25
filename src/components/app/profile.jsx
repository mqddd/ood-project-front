import React from 'react';

import QuestionCard from './question-card';
import './profile.css';
import avatar from '../../avatar.svg';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            <div className="profile-container">
                <ProfileHeader />
                <div className="profile-content">
                    <ProfileContent />
                </div>
            </div>
        );
    }
}

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="profile-header">
                <div className="profile-avatar">
                    <img className="profile-avatar-image" src={avatar} alt="avatar" />
                    <button className="profile-change-avatar">
                        تغییر آواتار
                    </button>
                </div>
                <div className="profile-header-right">
                    <h2 className="profile-username">سلام مقداد!</h2>
                    <p className="profile-bio">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
        );
    }
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