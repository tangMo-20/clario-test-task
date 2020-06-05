import React, { useState, useEffect } from 'react';
import TableBlock from './common/TableBlock';
import Tooltip from './common/Tooltip';
import config from '../const/config';
import '../style/css/Content.css';

const generateId = () => {
    return Math.random().toString(36).substring(2);
};

function Content() {
    const { SHOW, DONT_SHOW } = config.toolbarOptions;

    const sessionToolbar = sessionStorage.getItem('sessionToolbar');
    if (sessionToolbar === null) {
        sessionStorage.setItem('sessionToolbar', SHOW);
    }

    const [users, changeUsers] = useState([]);
    useEffect(() => {
        const fetchData = async (url) => {
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const data = await fetch(proxy + url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => response.json());
            changeUsers(data.map((item) => ({ ...item, id: generateId() })));
        };
        fetchData(
            'https://d3qgrbb3ofqfjo.cloudfront.net/test/api-response.json'
        );
    }, []);

    const [showToolbar, toggleToolbar] = useState(false);
    useEffect(() => {
        if (users.length && sessionToolbar) {
            setTimeout(() => {
                toggleToolbar(true);
            }, 5000);
        }
    }, [users, sessionToolbar]);

    const hideToolbar = () => {
        toggleToolbar(false);
        sessionStorage.setItem('sessionToolbar', DONT_SHOW);
    };

    return (
        <div className="content">
            <div className="content-box">
                <TableBlock users={users} />
                {showToolbar && <Tooltip hideToolbar={hideToolbar} />}
            </div>
        </div>
    );
}

export default Content;
