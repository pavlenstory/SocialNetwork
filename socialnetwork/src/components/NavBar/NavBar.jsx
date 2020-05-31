import React from "react"
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom"

const NavBar = () => {
    return (
        <div className={s.NavBar}>
            <div className={s.NavBarItem}>
                <NavLink to={"/profile"} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.NavBarItem} >
                <NavLink to={"/dialogs"} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.NavBarItem}>
                <NavLink to={"/news"} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.NavBarItem}>
                <NavLink to={"/music"} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.NavBarItem}>
                <NavLink to={"/settings"} activeClassName={s.active}>Settings</NavLink>
            </div>
        </div>
    )
}

export default NavBar;
