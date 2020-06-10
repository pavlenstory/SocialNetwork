import React from "react"
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validatos";
import s from "../../../FormsControls/FormsControls.module.css";

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} component={Input} name={"email"} validate={[required, maxLength20]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} component={Input} name={"password"}
                           validate={[required, maxLength20]} type={"password"}/>
                </div>
                <div>
                    <Field type={"checkbox"} component={Input} name={"rememberMe"}/>remember me
                </div>
                <div>
                    { props.error? <div className={s.FormSummaryError}>{props.error}</div> : undefined}
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    )
}


export const LoginReduxForm = reduxForm({form: "login"})(LoginForm);
