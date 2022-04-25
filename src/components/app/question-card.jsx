import React from 'react';
import { Link } from 'react-router-dom';


import './question-card.css';
import avatar from '../../avatar.svg';

class QuestionCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="question-card">
                <Link to="/index/question-detail" className="react-link"> 
                        <div className="question-card-header">
                            <img className="question-card-avatar" src={avatar} alt="avatar" />
                            <div className="question-card-header-right">
                                <h2 className="question-card-username">مقداد</h2>
                                <h5 className="question-card-time">
                                    2021-5-2 
                                </h5>
                            </div>
                        </div>
                        <div className="question-card-content">
                            <p className="question-card-summary">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد....</p>
                        </div>
                </Link>
            </div>
        );
    }
}

export default QuestionCard;