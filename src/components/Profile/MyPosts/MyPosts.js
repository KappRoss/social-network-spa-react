import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post.js';
import {Field, reduxForm} from 'redux-form';
import { required, maxLengthCreator } from '../../../utilites/validators/validator';
import { withFormElement } from '../../common/FormControls/Forms';

const MyPosts = React.memo(props => {

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
})


const maxLength = maxLengthCreator(10);
const TextArea = withFormElement("textarea")
const MyPostsForm = (props) => {
    return(
        <div className = {p.postForm}>
            <form onSubmit = {props.handleSubmit }>
                <img  alt=""/> 
                 {/* src={props.profile.photos.large} */}
            <div>
                <Field 
                    className = {p.textAreaField}
                    component = {TextArea}
                    name = "newPostText" 
                    placeholder = "enter your post"
                    validate = {[required, maxLength]}
                />
            </div>
            <div className = {p.button}>
                <button>add post</button>
            </div>
            </form>
        </div>
        
    )
}

const MyPostsFormRedux = reduxForm({form: 'MyPostsForm'})(MyPostsForm)

export default MyPosts;