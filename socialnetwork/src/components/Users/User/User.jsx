import React from "react";
import photoAvatar from "../../../assets/photoAvatar.png";
import {NavLink} from "react-router-dom";

let Users = ({users, followingInProgress, getUnFollow, getFollow}) => {
    return <div>
        {users.map(u => <div key={u.id}>
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

            </div>
        )}}
    </div>
}

export default Users;