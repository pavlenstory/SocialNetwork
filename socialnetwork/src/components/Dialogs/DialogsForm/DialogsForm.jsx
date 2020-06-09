import React from "react";
import {Field, reduxForm} from "redux-form";

const DialogsForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <Field component={"textarea"} name={"messageArea"}/>
                <button>Send message</button>
            </form>
        </>
    )
}

export const DialogsReduxForm = reduxForm({form: "dialogsMessages"})(DialogsForm);