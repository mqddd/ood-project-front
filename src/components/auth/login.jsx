import React from 'react';
import { Link } from 'react-router-dom';


import './form-style.css';

class Login extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="container">
                    <div className="header">
                        <h1>ورود به حساب کاربری</h1>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <input type="text" name="username" placeholder="نام کاربری"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="رمز عبور"/>
                        </div>
                        <div className="form-group">
                            <a href="#">
                                <h6>رمز عبور خود را فراموش کرده‌اید؟</h6>
                            </a>
                        </div>                   
                        <Link class="btn" to="/index/profile">  
                            ورود   
                        </Link>
                    </div>
            </div>

        );
    }
}

export default Login;