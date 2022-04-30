import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './index.css';
import {useNavigate} from 'react-router-dom'

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="root-container">
                <Outlet/>
                <SideBar/>
            </div>
        );
    }
}

function SideBar() {
    const isUser = localStorage.getItem("user")
    if (!isUser) window.location = '/'
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/')
    }

        return (
            <div className="side-bar">
                <h2 className="main-page-loggo">
                    Loggo
                </h2>
                <Link to="/index/profile" className="navigation-btn">
                    حساب کاربری
                </Link>
                <Link to="/index/questions" className="navigation-btn">
                    سؤالات دیگران
                </Link>
                <Link to="/index/add" className="navigation-btn">
                    سؤال بپرسید
                </Link>
                <div onClick={() => logout()} className="navigation-btn logout">
                    خروج از حساب کاربری
                </div>
            </div>
        );
}

export default MainPage;