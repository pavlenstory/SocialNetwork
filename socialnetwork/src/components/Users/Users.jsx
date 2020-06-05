import React from "react";
import s from "./Users.module.css";
import photoAvatar from "../../assets/photoAvatar.png";

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
                    onClick={() => props.onPageChanged(p)} className={props.currentPage === p && s.selectedPage}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div><img src={u.photos.small != null ? u.photos.small : photoAvatar}/></div>
                    </span>

                <span>
                        <div>
                            <div>{u.name}</div><div>{u.status}</div>
                        </div>
                    </span>

                <span>
                        {u.followed ?
                            <button onClick={() => props.follow(u.id)}>follow</button>
                            : <button onClick={() => props.unFollow(u.id)}>unFollow</button>}
                    </span>

            </div>)
        }
    </div>
}

export default Users;