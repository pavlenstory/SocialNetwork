import React from "react";
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.userProfile) {
        return <Preloader/>
    }

    return (
            <div>
                <img src={props.userProfile.photos.large} alt={props.userProfile.fullName}/>
            </div>
    )
}

export default ProfileInfo;
