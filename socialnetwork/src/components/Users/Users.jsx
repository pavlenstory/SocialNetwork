import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";


let Users = (props) => {
    return (
        <div>
            <User {...props}/>
            <Paginator {...props}/>
        </div>
    )
}

export default Users;