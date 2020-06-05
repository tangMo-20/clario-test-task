import React from 'react';
import '../style/css/Header.css';

const User = (props) => (
    <div className="header__user-bar">
        <div className="header__user-logo">
            <img src="avatar.png" alt="avatar" />
        </div>
        {props.name}
    </div>
);

function Header() {
    return (
        <div className="header">
            <User name="Barack Obama" />
        </div>
    );
}

export default Header;
