import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Cool Chat</span>
            <div className='user'>
                <img src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img"/>
                <span>John</span>
                <button className="button">Log out</button>
            </div>
        </div>
    )
};

export default Navbar;