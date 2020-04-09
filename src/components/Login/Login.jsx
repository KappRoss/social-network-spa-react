import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { withFormElement } from '../common/FormControls/Forms';
import { required, maxLengthCreator } from '../../utilites/validators/validator';
import { connect } from 'react-redux';
import { login, logout } from '../../Redux/authReducer';
import { Redirect } from 'react-router-dom';
import style from '../common/FormControls/Forms.module.css';

const maxLength = maxLengthCreator(50)
 
const Input = withFormElement("input");

const LoginForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
                <div>
                    <Field 
                        placeholder = "email" 
                        name = "email" 
                        component = {Input}
                        validate = {[required, maxLength]}
                    />
                </div>
                <div>
                    <Field 
                        type = "password"
                        placeholder = "password" 
                        name = "password" 
                        component = {Input}
                        validate = {[required, maxLength]}
                    />
                </div>
                <div>
                    <Field 
                        type = "checkbox" 
                        name = "rememberMe" 
                        component = {Input}
                    />remember me
                </div>
                    {props.error 
                        && <div className = {style.summuryError}>
                            {props.error}
                        </div> }

                <div>
                    <button>Login</button>
                </div>
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
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm 
                onSubmit = {onSubmit}

            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.authIcon.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);