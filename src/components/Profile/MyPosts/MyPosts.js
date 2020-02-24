import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post.js';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post id = {p.id} message = {p.message} likesCount = {p.likesCount}/>)

    return(
        <div className = {p.generalContent}>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className = {p.postItems}>
                {postsElement}
            </div>   
        </div>
    )
}

export default MyPosts;