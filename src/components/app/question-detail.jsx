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
                        <h2 className="question-deatil-username">By Meqdad</h2>
                        <h5 className="question-deatil-time">
                            2021-5-2 
                        </h5>                   
                </div>
                <div className="question-detail-content">
                    <p className="question-deatil-content-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
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
                            Write your comment here:
                        </div>
                        <form action="#" className="add-comment-form">
                            <input type="text" className="add-comment-title" placeholder="title"/>
                            <textarea name="content" id="" cols="30" rows="10" className="add-comment-content" placeholder="content"></textarea>
                            <button className="add-comment-submit">
                                Post Comment
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
                    From Meqdad
                </div>
                <div className="comment-title">
                    That was awesome!
                </div>
                <div className="comment-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
            </div>
        );
    }
}

export default QuestionDetail;