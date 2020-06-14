import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login, logout}) => {
    return (
        <div className={s.Header}>
            Header
            <div className={s.HeaderLogin}>
                {isAuth ?
                    <div>{login}<button onClick={logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Log in</NavLink>
                }
            </div>
        </div>
    )
}

export default Header;
