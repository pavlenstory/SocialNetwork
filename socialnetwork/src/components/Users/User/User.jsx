import React from "react";
import photoAvatar from "../../../assets/photoAvatar.png";
import {NavLink} from "react-router-dom";
import s from "./User.module.css"

let Users = ({users, followingInProgress, getUnFollow, getFollow}) => {
    return <div className={s.UserWrapper}>
        {users.map(u => <div key={u.id}>
                <div className={s.User}>
            <span >
                <NavLink to={'/profile/' + u.id}>
                    <img className={s.UserImage} src={u.photos.small != null ? u.photos.small : photoAvatar}
                         alt={u.name}/>
                </NavLink>
            </span>

                    <span>
                <div>
                    <div className={s.UserName}>{u.name}</div>
                </div>
            </span>

                    <span className={s.UserButton}>
                {u.followed ?
                    <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                        getUnFollow(u.id)
                    }
                    }>unFollow</button>

                    : <button disabled={followingInProgress.some(id =>
                        id === u.id)} onClick={() => {
                        getFollow(u.id)
                    }
                    }>follow</button>
                }
            </span>

                </div>
            </div>
        )}
    </div>
}

export default Users;