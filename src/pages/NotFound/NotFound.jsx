import React from "react";
import './NotFound.css';

function NotFound() {
    return(
        <div className="not-found">
            <h1 className="not-found-head"><span style={{color: 'red'}}>Not</span> Found</h1>
            <p className="not-found-para"><a href="/">click here</a> to go to home page</p>
        </div>
    );
}

export default NotFound;