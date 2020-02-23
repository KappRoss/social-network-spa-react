import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post.js';

let postsData = [{id: 1, message: 'SomeText', likesCount: 12}]

const MyPosts = () => {
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
                <Post id = {postsData[0].id} message = {postsData[0].message} likesCount = {postsData[0].likesCount}/>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            
        </div>
    )
}

export default MyPosts;