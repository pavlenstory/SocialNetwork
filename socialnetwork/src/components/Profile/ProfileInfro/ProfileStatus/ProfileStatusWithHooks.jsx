import React, {useEffect, useState} from "react"

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [userStatus, setUserStatus] = useState(props.userStatus);

    useEffect( () => {
        setUserStatus(props.userStatus)
    }, [props.userStatus]);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const onStatusChange = (e) => {
        setUserStatus(e.currentTarget.value)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(userStatus)
    }

    return (
        <>
            {editMode ?
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={userStatus}/>
                </div>
                : <div onDoubleClick={activateEditMode}>
                    {props.userStatus || "Enter status"}
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;
