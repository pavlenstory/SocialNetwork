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
                {isOwner ?
                    <div>
                        <label htmlFor={"choiceFile"}>Refresh photo</label>
                        <input id={"choiceFile"} type={"file"} onChange={onPhotoSelected}/>
                    </div> : undefined}
                <ProfileStatusWithHooks userStatus={userStatus} updateUserStatus={updateUserStatus}/>
            </div>
            {editMode
                ? <ProfileDataReduxForm initialValues={userProfile} userProfile={userProfile}
                                        onSubmit={AddNewProfileInformation}/>
                : <ProfileData userProfile={userProfile} isOwner={isOwner} setEditMode={setEditMode}/>}
        </>
    )
}

const ProfileData = ({userProfile, isOwner, setEditMode}) => {
    return (
        <div className={s.ProfileData}>
            <div>
                <div><span>Full name:</span> {userProfile.fullName}</div>
            </div>
            <div>
                <div><span>Looking for a job:</span> {userProfile.lookingForAJob ? "Yes" : "No"}</div>
            </div>
            <div>
                <div><span>Skills:</span> {userProfile.lookingForAJobDescription}</div>
            </div>
            <div>
                <div><span>About me:</span> {userProfile.aboutMe}</div>
            </div>
            <div>
                <div>{Object.keys(userProfile.contacts).map(key => {
                    return (
                        <Contact key={key} contactTitle={key} contactValue={userProfile.contacts[key]}/>
                    )
                })}</div>
            </div>
            <div>
                {isOwner && <div>
                    <button
                        onClick={() => {
                        setEditMode(true)
                    }}>Change Information
                    </button>
                </div>}
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {

    if (contactValue === null || contactValue === "") {
        return <></>
    }

    return <div>
        <span>{contactTitle}</span> : {contactValue}
    </div>
}

export default ProfileInfo;
