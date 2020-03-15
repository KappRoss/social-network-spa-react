import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post.js';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post id = {p.id} message = {p.message} likesCount = {p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    return(
        <div className = {p.generalContent}>
            <div>
                <div>
                    <textarea onChange = {onPostChange}
                            value = {props.newPostText} 
                            ref = {newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ onAddPost }>add post</button>
                </div>
            </div>
            <div className = {p.postItems}>
                {postsElement}
            </div>   
        </div>
    )
}

export default MyPosts;