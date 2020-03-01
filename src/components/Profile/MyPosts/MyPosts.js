import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post.js';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post id = {p.id} message = {p.message} likesCount = {p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text)
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
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
                    <button onClick={ addPost }>add post</button>
                </div>
            </div>
            <div className = {p.postItems}>
                {postsElement}
            </div>   
        </div>
    )
}

export default MyPosts;