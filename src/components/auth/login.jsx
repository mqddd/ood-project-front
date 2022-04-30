import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './form-style.css';

function Login() {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

        return (
            <div className="container">
                    <div className="header">
                        <h1>ورود به حساب کاربری</h1>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <input type="text" onChange={(e) => setForm({...form, username: e.target.value})} name="username" placeholder="نام کاربری"/>
                        </div>
                        <div className="form-group">
                            <input type="password" onChange={(e) => setForm({...form, password: e.target.value})} name="password" placeholder="رمز عبور"/>
                        </div>
                        <div class="btn" to="/index/profile">  
                            ورود   
                        </div>
                    </div>
            </div>

        );
}

export default Login;