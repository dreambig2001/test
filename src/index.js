import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import userPic from './user.png';

const App = () => {
    return (
        <div id="container">
            <div className="messageBlock">
                <img src={userPic} className="userPic" alt=""/>
                <span className="name">Alex</span>
                <span className="time">Today at 5:00</span>
                <p className="text">Great blog post!</p>
            </div>
            <div className="messageBlock">
                <img src={userPic} className="userPic" alt=""/>
                <span className="name">Sam</span>
                <span className="time">Today at 7:51</span>
                <p className="text">Informative. Thanks.</p>
            </div>
            <div className="messageBlock">
                <img src={userPic} className="userPic" alt=""/>
                <span className="name">Jane</span>
                <span className="time">Today at 9:01</span>
                <p className="text">Looks great.</p>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));