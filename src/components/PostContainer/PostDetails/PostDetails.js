import React from "react";

import css from './PostDetails.module.css'

const PostDetails = ({postDetails, getClose}) => {
    const {id, userId, title, body} = postDetails
    return (
        <div className={css.PostDetails}>
            <h2>Post details</h2>
            <div>Id : {id}</div>
            <div>UserId : {userId}</div>
            <div>Title : {title}</div>
            <div>Body : {body}</div>
            <button onClick={() => getClose(id)}>Close</button>
        </div>
    );
};

export {PostDetails};