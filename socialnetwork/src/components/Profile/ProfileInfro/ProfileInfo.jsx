import React from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    }

    return (
        <>
            <div>
                <img src={props.userProfile.photos.large} alt={props.userProfile.fullName}/>
            </div>
            <ProfileStatus userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
        </>
    )
}

export default ProfileInfo;
