import React, {useEffect, useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import photoAvatar from "./../../../assets/photoAvatar.png"
import {ProfileDataReduxForm} from "./ProfileDataForm/ProfileDataForm";
import s from "../Profile.module.css"

const ProfileInfo = ({updateUserStatus, userProfile, userStatus, isOwner, savePhoto, updateProfile, profileInfoEditMode}) => {

    let [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setEditMode(false)
    }, [profileInfoEditMode]);

    if (!userProfile) {
        return <Preloader/>
    }
    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    let AddNewProfileInformation = (formData) => {
        updateProfile(formData)
    }
    return (
        <>
            <div className={s.ProfileInfo}>
                <img src={userProfile.photos.large ? userProfile.photos.large : photoAvatar}
                     alt={userProfile.fullName}/>
                {isOwner ? <input type={"file"} onChange={onPhotoSelected}/> : undefined}
            </div>
            {editMode
                ? <ProfileDataReduxForm initialValues={userProfile} userProfile={userProfile}
                                        onSubmit={AddNewProfileInformation}/>
                : <ProfileData userProfile={userProfile} isOwner={isOwner} setEditMode={setEditMode}/>}
            <ProfileStatusWithHooks userStatus={userStatus} updateUserStatus={updateUserStatus}/>
        </>
    )
}

const ProfileData = ({userProfile, isOwner, setEditMode}) => {
    return (
        <div>
            <div>
                {isOwner && <div>
                    <button onClick={() => {
                        setEditMode(true)
                    }}>edit
                    </button>
                </div>}
            </div>
            <div>
                <div>Full name: {userProfile.fullName}</div>
            </div>
            <div>
                <div>Looking for a job: {userProfile.lookingForAJob ? "Yes" : "No"}</div>
            </div>
            <div>
                <div>Skills: {userProfile.lookingForAJobDescription}</div>
            </div>
            <div>
                <div>About me: {userProfile.aboutMe}</div>
            </div>
            <div>
                <div>{Object.keys(userProfile.contacts).map(key => {
                    return (
                        <Contact key={key} contactTitle={key} contactValue={userProfile.contacts[key]}/>
                    )
                })}</div>
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {

    if(contactValue === null || contactValue === "") {
        return <div></div>
    }

    return <div>
        <div>{contactTitle} :</div>
        <div>{contactValue}</div>
    </div>
}

export default ProfileInfo;
