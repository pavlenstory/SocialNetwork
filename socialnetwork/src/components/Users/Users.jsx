import React from "react"


const UsersContainer = (props) => {

    if(props.users.length === 0 ) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: undefined,
                    followed: true,
                    fullName: "Pavel",
                    status: 'This is status',
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 2,
                    photoUrl: undefined,
                    followed: true,
                    fullName: "Pavel",
                    status: 'This is status',
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 3,
                    photoUrl: undefined,
                    followed: false,
                    fullName: "Pavel",
                    status: 'This is status',
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 4,
                    photoUrl: undefined,
                    followed: false,
                    fullName: "Pavel",
                    status: 'This is status',
                    location: {city: "Minsk", country: "Belarus"}
                },
        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>

                    <span>
                        <div>Тут картинка</div>
                    </span>

                    <span>
                        <div>
                            <div>{u.fullName}</div><div>{u.status}</div>
                        </div>
                        <div>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                 {u.location.city}
                            </div>
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
    )
}

export default UsersContainer;
