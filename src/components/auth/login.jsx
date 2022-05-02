import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import './form-style.css';

function Login() {
    let navigate = useNavigate();

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const login = () => {
        axios.post('http://127.0.0.1:8000/api/rest-auth/login/', form).then(res => {
            if(res.status === 200) {
                localStorage.setItem('user', JSON.stringify({
                    access: res.data.access_token,
                    username: res.data.user.username
                }))
                navigate('/index/profile')
            }
        }).catch((e) => {
            toast.error(e?.message)
        })
    }

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
                        <div class="btn" onClick={() => login()}>  
                            ورود   
                        </div>
                    </div>
            </div>

        );
}

export default Login;