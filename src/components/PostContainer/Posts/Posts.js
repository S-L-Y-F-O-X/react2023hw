import React, {useEffect, useState} from "react";
import {postService} from "../../../services/postService";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";
import css from './Posts.module.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);
    const [showPostDetails, setShowPostDetails] = useState(false);

    const getPostId = async (id) => {
        const {data} = await postService.getById(id);
        setPostDetails(data);
        setShowPostDetails(true);
    }

    const getClose = () => {
        setShowPostDetails(false);
    }

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            <div className={css.Details}>
                {showPostDetails && postDetails && <PostDetails postDetails={postDetails} getClose={getClose}/>
                }
            </div>
            <h1>Posts</h1>
            <div className={css.Posts}>
                {posts.map(post => <Post key={post.id} post={post} getPostId={getPostId}/>)}
            </div>
        </div>
    );
};

export {Posts};