import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';
import './style/css/App.css';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="content-side">
                <Header />
                <Content />
            </div>
        </div>
    );
}

export default App;
