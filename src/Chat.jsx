import React from 'react';
import More from './More.png';
import Add2 from './Add2.png';
import Cam from './Cam.png';
import Messages from './Messages.jsx';
import Input from './Input.jsx';

const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={Add2} alt='' style={{ width: 25}}/>
                    <img src={Cam} alt='' style={{ width: 25}}/>
                    <img src={More} alt='' style={{ width: 25}}/>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
};

export default Chat;