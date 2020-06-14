import React from "react"
import {reduxForm} from "redux-form";
import {createField, Input} from "../../../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validatos";
import s from "../../../FormsControls/FormsControls.module.css";

const maxLength20 = maxLengthCreator(20);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Login", Input, "email", [required, maxLength20])}
            {createField("Password", Input, "password", [required, maxLength20],
                {type: "password"})}
            {createField(null, Input, "rememberMe", null,
                {type: "checkbox"}, "remember me")}

            <div>
                {error ? <div className={s.FormSummaryError}>{error}</div> : undefined}
            </div>

            <div>
                <button>Login</button>
            </div>

        </form>
    )
}


export const LoginReduxForm = reduxForm({form: "login"})(LoginForm);
