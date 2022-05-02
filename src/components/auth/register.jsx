import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import './form-style.css';

const Register = () => {
    let navigate = useNavigate();

    const [data, setData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: ''
    })

    const sendData = () => {
        axios.post('http://127.0.0.1:8000/api/rest-auth/registration/', data).then(res => {
            if(res.status === 201) {            
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
                        <h1>ایجاد حساب کاربری</h1>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <input type="text" name="username" placeholder="نام کاربری" onChange={(e) => setData({
                                ...data,
                                username: e.target.value
                            })}/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" placeholder="ایمیل" onChange={(e) => setData({
                                ...data,
                                email: e.target.value
                            })}/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="رمز عبور" onChange={(e) => setData({
                                ...data,
                                password1: e.target.value
                            })}/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="confirm-password" placeholder="تکرار رمز عبور" onChange={(e) => setData({
                                ...data,
                                password2: e.target.value
                            })}/>
                        </div>
                        <div class="btn" onClick={() => sendData()}>  
                            ایجاد   
                        </div>
                    </div>    
            </div>
        );
}

export default Register;