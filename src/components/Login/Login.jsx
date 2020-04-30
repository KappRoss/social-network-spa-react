import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { withFormElement } from '../common/FormControls/Forms';
import { required, maxLengthCreator } from '../../utilites/validators/validator';
import { connect } from 'react-redux';
import { login, logout } from '../../Redux/authReducer';
import { Redirect } from 'react-router-dom';
import styleFormError from '../common/FormControls/Forms.module.css';
import style from './login.module.css';

const maxLength = maxLengthCreator(50)
 
const Input = withFormElement("input");

const LoginForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit} className = {style.form}>
                <div >
                    <Field 
                        className = {style.input}
                        placeholder = "email" 
                        name = "email" 
                        component = {Input}
                        validate = {[required, maxLength]}
                    />
                </div>
                <div >
                    <Field 
                        className = {style.input}
                        type = "password"
                        placeholder = "password" 
                        name = "password" 
                        component = {Input}
                        validate = {[required, maxLength]}
                    />
                </div>
                <div className = {style.checkbox_group}>
                    
                    <Field 
                        className = {style.checkbox}
                        type = "checkbox" 
                        name = "rememberMe"
                        id = "rememberMe" 
                        component = {Input}
                    /> 
    
                    <label for = "rememberMe" className = {style.label}>remember me</label>

                    <div className = {style.b1}>
                        <button className = {style.button_login}>Log in</button>
                    </div>
                    
                </div>
                    {props.error 
                        && <div className = {styleFormError.summuryError}>
                            {props.error}
                        </div> }

                
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password , formData.rememberMe)
    }

    if (props.isAuth){
        return <Redirect to = '/Profile' />
    }

    return(
        <div className = {style.loginContainer}>
            <div></div>
            <div className = {style.loginForm}>
                <h1 className = {style.title}>LOGIN</h1>
                <LoginReduxForm 
                    onSubmit = {onSubmit}
                />
            </div>
            <div></div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.authIcon.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);