import React from "react"
import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validatos";
import s from "../../common/FormsControls/FormsControls.module.css";
import style from "../Login.module.css"

const maxLength54 = maxLengthCreator(54);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={style.Form}>
            <h1>Login</h1>
            {createField("Login", Input, "email", [required, maxLength54],
                {type: "text"})}
            {createField("Password", Input, "password", [required, maxLength54],
                {type: "password"})}
            <div className={style.FormCheckBox}>{createField(null, Input, "rememberMe", null,
                {type: "checkbox"}, "remember me")}
            </div>
            <div>
                <div className={style.FormCaptcha}>{captchaUrl && <img src={captchaUrl} alt={captchaUrl}/>}</div>
                {captchaUrl && createField("Enter Captcha", Input, "captcha", [required],
                    {type: "text"})}
            </div>
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
