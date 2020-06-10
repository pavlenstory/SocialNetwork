import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.Header}>
            Header
            <div className={s.HeaderLogin}>
                {props.isAuth ?
                    <div>{props.login}<button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Log in</NavLink>
                }
            </div>
        </div>
    )
}

export default Header;
