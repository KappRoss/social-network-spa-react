import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post.js';
import {Field, reduxForm} from 'redux-form';
import { required } from '../../../utilites/validators/validator';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post id = {p.id} message = {p.message} likesCount = {p.likesCount}/>)

    let onAddPost = (value) => {
        props.addPost(value.newPostText);
    }

    return(
        <div className = {p.generalContent}>
            <MyPostsFormRedux onSubmit = {onAddPost}/>
            <div className = {p.postItems}>
                {postsElement}
            </div>   
        </div>
    )
}

const MyPostsForm = (props) => {
    return(
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field 
                    component = "textarea"
                    name = "newPostText" 
                    placeholder = "enter your post"
                    validate = {[required]}
                />
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

const MyPostsFormRedux = reduxForm({form: 'MyPostsForm'})(MyPostsForm)

export default MyPosts;