import React from "react"
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom"

const NavBar = () => {
    return (
        <div className={s.NavBar}>
            <div className={s.NavBarItemWrapper}>
                <NavLink to={"/profile"} activeClassName={s.active} className={s.NavBarItem}>Profile</NavLink>
            </div>
            <div className={s.NavBarItemWrapper}>
                <NavLink to={"/dialogs"} activeClassName={s.active} className={s.NavBarItem}>Messages</NavLink>
            </div>
            <div className={s.NavBarItemWrapper}>
                <NavLink to={"/users"} activeClassName={s.active} className={s.NavBarItem}>Users</NavLink>
            </div>
            <div className={s.NavBarItemWrapper}>
                <NavLink to={"/news"} activeClassName={s.active} className={s.NavBarItem}>News</NavLink>
            </div>
            <div className={s.NavBarItemWrapper}>
                <NavLink to={"/settings"} activeClassName={s.active} className={s.NavBarItem}>Settings</NavLink>
            </div>
        </div>
    )
}

export default NavBar;
