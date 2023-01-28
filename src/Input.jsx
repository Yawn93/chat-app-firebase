import React from 'react';
import Attach from './Attach.png';
import Img from './Img.png';

const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder='Type something...'/>
            <div className="send">
                <img src={Attach} alt="" style={{height:25}}/>
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                    <img src={Img} alt="" style={{height:20}}/>
                </label>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Input;