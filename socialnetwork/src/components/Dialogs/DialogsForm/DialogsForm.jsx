import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validatos";

const maxLength30 = maxLengthCreator(30);

const DialogsForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} name={"messageArea"}  validate={[required, maxLength30]}/>
                <button>Send message</button>
            </form>
        </>
    )
}

export const DialogsReduxForm = reduxForm({form: "dialogsMessages"})(DialogsForm);