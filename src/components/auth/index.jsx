import React from 'react';

import Login from './login';
import Register from './register';

import './auth-page.css';


class AuthPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginActive: false
        }
    }

    getLoginInfoFromSidebar = (data) => {
        this.setState({
            isLoginActive: data
        });
    }

    render() {
        const { isLoginActive } = this.state;
        return (
            <div className="page-container">
                <div className="left-side">
                    <LeftSide parentCallback={this.getLoginInfoFromSidebar}/>
                </div>
                <div className="right-side">
                    {isLoginActive ? <Login /> : <Register />}
                </div>          
            </div>
        );
    }
}

class LeftSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginState: {
                title: 'Welcome back!',
                text: 'To keep connected with us please login with your personal info',
                button: 'SIGN IN'
            },
            registerState: {
                title: 'Hello, Friend!',
                text: "Join us to share your experiences and gain other's",
                button: 'SIGN UP'
            },
            inLoginState: true
        }
    }

    changeLoginState = () => {
        const isInLoginState = this.state.inLoginState;
        this.setState({
            inLoginState: !isInLoginState
        });
        this.props.parentCallback(this.state.inLoginState);
    }

    render() {
        let inState;
        if (this.state.inLoginState) {
            inState = {
                title: this.state.loginState.title,
                text: this.state.loginState.text,
                button: this.state.loginState.button
            }
        } else {
            inState = {
                title: this.state.registerState.title,
                text: this.state.registerState.text,
                button: this.state.registerState.button
            }
        }

        return(
            <div className="left-container">
                <div className="loggo">
                    <h2>Loggo</h2>
                </div>
                <div className="left-content">
                    <h2 className="left-title">
                        {inState.title}
                    </h2>
                    <p className="left-text">
                        {inState.text}
                    </p>
                    <button className="left-btn" onClick={this.changeLoginState}>
                        {inState.button}
                    </button>
                </div>
            </div>
        );
    }
}

export default AuthPage;