import React from 'react';
import { Link } from 'react-router-dom';


import './form-style.css';

class Register extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="container">
                    <div className="header">
                        <h1>ایجاد حساب کاربری</h1>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <input type="text" name="username" placeholder="نام کاربری"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" placeholder="ایمیل"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="رمز عبور"/>
                        </div>
                        <Link class="btn" to="/index/profile">  
                            ایجاد   
                        </Link>
                    </div>    
            </div>
        );
    }
}

export default Register;