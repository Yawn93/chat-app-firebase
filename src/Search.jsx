import React from 'react';

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user"/>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="img"/>
                <div className="userChatInfo">
                    <span>
                       jane 
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Search;