import React from "react"
import s from "./Dialogs.module.css"
import DialogsUsers from "./DialogUser/DialogsUsers"
import DialogsMessages from "./DialogMessages/DialogsMessages"
import {DialogsReduxForm} from "./DialogsForm/DialogsForm";


const Dialogs = (props) => {

    let dialogsElements = props.users.map((u) => <DialogsUsers name={u.name} id={u.id} key={u.id}/>)
    let dialogsMessages = props.messages.map((m) => <DialogsMessages message={m.message} id={m.id}
                                                                                       key={m.id}/>)

    let onSubmit = (formData) => {
        props.addMessage(formData.messageArea)
    }

    return (
        <>
            <div className={s.DialogsUsers}>
                {dialogsElements}
            </div>
            <div className={s.DialogsMessages}>
                {dialogsMessages}
            </div>
            <DialogsReduxForm onSubmit={onSubmit}/>
        </>
    )
}

export default Dialogs;
