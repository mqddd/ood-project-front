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
                        <h1>Create Account</h1>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" placeholder="email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                        <Link class="btn" to="/index/profile">  
                            SIGN UP   
                        </Link>
                    </div>    
            </div>
        );
    }
}

export default Register;