import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { withFormElement } from '../common/FormControls/Forms';
import { required, maxLengthCreator } from '../../utilites/validators/validator';


const maxLength = maxLengthCreator(10)
 
const Input = withFormElement("input");

const LoginForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
                <div>
                    <Field 
                        placeholder = "login" 
                        name = "login" 
                        component = {Input}
                        validate = {[required, maxLength]}
                    />
                </div>
                <div>
                    <Field 
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
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
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

export default Login;