import React from "react";
import s from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={s.NavBar}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </div>
    )
}

export default NavBar;
