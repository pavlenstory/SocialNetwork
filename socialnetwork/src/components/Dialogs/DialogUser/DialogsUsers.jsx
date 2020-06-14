import React from "react"
import {NavLink} from "react-router-dom"


const DialogsUsers = ({id, name}) => {
    let path = "/dialogs/" + id;
    return (
        <div>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogsUsers;
