import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login, logout}) => {
    return (
        <div className={s.Header}>
            <div className={s.HeaderSocialNameWrapper}>
                <div className={s.HeaderSocialName}>SocialNetwork</div>
            </div>
            <div>
                {isAuth ?
                    <div>
                        <div className={s.HeaderLogoutWrapper}><button onClick={logout} className={s.HeaderLogout}>Log out</button></div>
                        <div className={s.HeaderUserNameWrapper}><div className={s.HeaderSocialName}>{login}</div></div>
                    </div>
                    : <NavLink to={'/login'}>
                        <div className={s.HeaderLoginWrapper}><button className={s.HeaderLogin}>Log in</button></div>
                    </NavLink>
                }
            </div>
        </div>
    )
}

export default Header;
