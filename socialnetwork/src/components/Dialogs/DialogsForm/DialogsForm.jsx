import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validatos";
import s from "./../Dialogs.module.css"

const maxLength60 = maxLengthCreator(60);

const DialogsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={s.DialogsForm}>
            {createField("Message", Textarea, "messageArea", [required, maxLength60],
                {type: "text"})}
            <button>Send message</button>
        </form>
    )
}

export const DialogsReduxForm = reduxForm({form: "dialogsMessages"})(DialogsForm);