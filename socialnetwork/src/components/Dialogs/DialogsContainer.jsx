import React from "react"
import {addMessageAC, updateNewMessageTextAC} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let sendMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    let onMessageChange = (newText) => {
        props.store.dispatch(updateNewMessageTextAC(newText))
    }
    
    return <Dialogs state={props.state} sendMessage={sendMessage} onMessageChange={onMessageChange}/>
}

export default DialogsContainer;
