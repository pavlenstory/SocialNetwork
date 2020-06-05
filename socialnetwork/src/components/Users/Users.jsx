import * as React from "react";
import photoAvatar from "../../assets/photoAvatar.png";
import * as axios from "axios";


class Users extends React.Component {


    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
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
                            <button onClick={() => this.props.follow(u.id)}>follow</button>
                            : <button onClick={() => this.props.unFollow(u.id)}>unFollow</button>}
                    </span>

                </div>)
            }
        </div>
    }
}

export default Users
