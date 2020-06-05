import React, { useState, useEffect } from 'react';
import svg from '../const/svg';
import config from '../const/config';
import '../style/css/Sidebar.css';

const Logo = () => {
    return <div className="sidebar__logo">{svg.sidebarLogo()}</div>;
};

const Button = (props) => {
    return (
        <div
            id={props.id}
            className="sidebar__button"
            onClick={() => props.handler(props.id)}
        >
            {props.svg}
        </div>
    );
};

const Buttons = (props) => {
    return (
        <div className="sidebar__buttons">
            <Button
                id={config.tabs.FOLDERS}
                svg={svg.foldersButton()}
                handler={props.toggleTab}
            />
            <Button
                id={config.tabs.CHARTS}
                svg={svg.chartsButton()}
                handler={props.toggleTab}
            />
            <Button
                id={config.tabs.MAILS}
                svg={svg.mailsButton()}
                handler={props.toggleTab}
            />
            <Button
                id={config.tabs.FILES}
                svg={svg.filesButton()}
                handler={props.toggleTab}
            />
        </div>
    );
};

const changeTabColor = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.classList.toggle('active_tab');
    }
};

function Sidebar() {
    const [currentTab, changeSidebarTab] = useState(config.tabs.CHARTS);
    useEffect(() => {
        changeTabColor(currentTab);
    }, [currentTab]);

    const toggleTab = (id) => {
        if (id !== currentTab) {
            changeTabColor(currentTab);
            changeSidebarTab(id);
        }
    };

    return (
        <div className="sidebar">
            <Logo />
            <Buttons toggleTab={toggleTab} />
        </div>
    );
}

export default Sidebar;
