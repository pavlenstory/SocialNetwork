import React from "react";
import s from "./Users.module.css";
import photoAvatar from "../../assets/photoAvatar.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span
                    key={p}
                    onClick={() => props.onPageChanged(p)}
                    className={props.currentPage === p ? s.selectedPage : undefined}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
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
                            <button onClick={() =>
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "c6286f29-6613-4a55-b5f7-ec35d57c3099",
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                    })
                            }>unFollow</button>

                            : <button onClick={() =>
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "c6286f29-6613-4a55-b5f7-ec35d57c3099",
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }>follow</button>
                        }
                    </span>

            </div>)
        }
    </div>
}

export default Users;