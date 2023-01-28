import React from 'react';

const Message = () => {
    return (
        <div class="message owner">
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img"/>
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img"/>
            </div>
        </div>
    )
};

export default Message;