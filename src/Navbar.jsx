import React, {useContext} from 'react';
import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";
import {AuthContext} from "./AuthContext.js";

const Navbar = () => {
    const {currentUser} = useContext(AuthContext)
    return (
        <div className="navbar">
            <span className="logo">Cool Chat</span>
            <div className='user'>
                <img src={currentUser.photoURL} alt="" className="img"/>
                <span>{currentUser.displayName}</span>
                <button className="button" onClick={()=>signOut(auth)}>Log out</button>
            </div>
        </div>
    )
};

export default Navbar;