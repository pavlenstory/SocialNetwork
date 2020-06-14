import React from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";


const ProfileInfo = ({updateUserStatus, userProfile, userStatus,}) => {
    if (!userProfile) {
        return <Preloader/>
    }
    return (
        <>
            <div>
                <img src={userProfile.photos.large} alt={userProfile.fullName}/>
            </div>
            <ProfileStatusWithHooks userStatus={userStatus} updateUserStatus={updateUserStatus}/>
        </>
    )
}

export default ProfileInfo;
