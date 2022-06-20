import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import './form-style.css';

const Register = () => {
    let navigate = useNavigate();

    const [data, setData] = useState({
        username: '',
        password1: '',
        password2: '',
        phone_number: ''
    })

    const [activateData, setActivateData] = useState({
        phone_number: data.phone_number,
        code: ''
    })

    const sendData = () => {
        axios.post('http://127.0.0.1:8000/api/rest-auth/registration/phone/activate', activateData).then(res => {
            console.log(activateData);    
                if(res.status === 200) {
                toast.success('user created successfully!')
            }
        }).catch((e) => {
            console.log(activateData);
            toast.error(e?.message)
        })
    }

    const sendData2 = () => {
        axios.post('http://127.0.0.1:8000/api/rest-auth/registration/', data).then(res => {
            console.log(data);
            if(res.status === 201) {            
                console.log('code sent:', data);
                toast.success('code sent!')
            }
        }).catch((e) => {
            console.log(data);
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
                            <input type="text" name="phone" placeholder="شماره موبایل" onChange={(e) => setData({
                                ...data,
                                phone_number: e.target.value
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
                        <div class="btn" onClick={() => sendData2()}>  
                            دریافت کد   
                        </div>
                        <div className="form-group">
                            <input type="text" name="phone" placeholder="تکرار شماره موبایل" onChange={(e) => setActivateData({
                                ...activateData,
                                phone_number: e.target.value
                            })}/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="code" placeholder="کد دریافتی" onChange={(e) => setActivateData({
                                ...activateData,
                                code: e.target.value
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