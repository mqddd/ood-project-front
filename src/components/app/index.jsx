import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import './index.css';

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

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                <Link to="/" className="navigation-btn logout">
                    خروج از حساب کاربری
                </Link>
            </div>
        );
    }
}

export default MainPage;