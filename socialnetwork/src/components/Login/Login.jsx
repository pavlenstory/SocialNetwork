import React from "react"
import {LoginReduxForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";

const Login = ({login, isAuth, captchaUrl}) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>

            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login})(Login);
