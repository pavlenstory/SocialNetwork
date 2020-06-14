import React from "react";
import s from "./Users.module.css";
import photoAvatar from "../../assets/photoAvatar.png";
import {NavLink} from "react-router-dom";

let Users = ({totalUsersCount, pageSize, onPageChanged, currentPage, users, followingInProgress, getUnFollow, getFollow}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span
                    key={p}
                    onClick={() => onPageChanged(p)}
                    className={currentPage === p ? s.selectedPage : undefined}>{p}</span>
            })}
        </div>
        {
            users.map(u => <div key={u.id}>
                    <span>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : photoAvatar} alt={u.name}/>
                        </NavLink>
                    </span>

                <span>
                        <div>
                            <div>{u.name}</div><div>{u.status}</div>
                        </div>
                    </span>

                <span>
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

            </div>)
        }
    </div>
}

export default Users;