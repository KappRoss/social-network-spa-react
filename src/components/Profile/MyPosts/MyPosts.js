import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post.js';
import {Field, reduxForm} from 'redux-form';
import { required, maxLengthCreator } from '../../../utilites/validators/validator';
import { withFormElement } from '../../common/FormControls/Forms';

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


const maxLength = maxLengthCreator(10);
const TextArea = withFormElement("textarea")
const MyPostsForm = (props) => {
    return(
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field 
                    component = {TextArea}
                    name = "newPostText" 
                    placeholder = "enter your post"
                    validate = {[required, maxLength]}
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