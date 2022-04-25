import React from 'react';

import './question-detail.css';
import avatar from '../../avatar.svg';

class QuestionDetail extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="question-detail-container">
                <div className="question-deatil-header">
                        <img className="question-deatil-avatar-image" src={avatar} alt="avatar" />                
                        <h2 className="question-deatil-username">توسط مقداد</h2>
                        <h5 className="question-deatil-time">
                            2021-5-2 
                        </h5>                   
                </div>
                <div className="question-detail-content">
                    <p className="question-deatil-content-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
                <div className="question-detail-footer">
                    <div className="question-detail-comments">
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                    <div className="question-detail-add-comment">
                        <div className="question-detail-add-comment-header">
                            پاسخ خود را اینجا بنویسید:
                        </div>
                        <form action="#" className="add-comment-form">
                            <input type="text" className="add-comment-title" placeholder="عنوان پاسخ"/>
                            <textarea name="content" id="" cols="30" rows="10" className="add-comment-content" placeholder="متن پاسخ"></textarea>
                            <button className="add-comment-submit">
                                ارسال پاسخ
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment-container">
                <div className="comment-username">
                    توسط مقداد
                </div>
                <div className="comment-title">
                    سؤال خوبی بود!
                </div>
                <div className="comment-content">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                </div>
            </div>
        );
    }
}

export default QuestionDetail;