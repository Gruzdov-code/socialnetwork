import React from 'react';
import {Field, reduxForm} from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"login"} type="text" placeholder={'Login'} component={"input"}/>
        </div>
        <div>
            <Field name={"password"} type="text" placeholder={'Password'} component={"input"}/>
        </div>
        <div>
            <Field name={"rememberMe"} type={"checkbox"} component={"input"}/>
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
    );
};

export const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)


export default LoginForm