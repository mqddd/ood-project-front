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
                <SideBar />
                <Outlet/>
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
                    Profile
                </Link>
                <Link to="/index/questions" className="navigation-btn">
                    Questions
                </Link>
                <Link to="/index/add" className="navigation-btn">
                    Ask
                </Link>
                <Link to="/" className="navigation-btn logout">
                    Logout
                </Link>
            </div>
        );
    }
}

export default MainPage;