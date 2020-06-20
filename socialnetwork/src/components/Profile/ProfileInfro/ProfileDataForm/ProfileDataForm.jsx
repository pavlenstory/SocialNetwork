import React from "react";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validatos";
import {reduxForm} from "redux-form";
import s from "../../../common/FormsControls/FormsControls.module.css";

let maxLength20 = maxLengthCreator(20);
let maxLength90 = maxLengthCreator(90);
let maxLength190 = maxLengthCreator(190);

const ProfileDataForm = ({handleSubmit, userProfile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                Full name: {createField("Full name", Input,
                "fullName", [required, maxLength20], {}, "")}
            </div>
            <div>
                {createField(null, Input, "lookingForAJob", null,
                    {type: "checkbox"}, "looking for a job")}
            </div>
            <div>
                Skills: {createField("My professionals skills", Textarea,
                    "lookingForAJobDescription", [required, maxLength190])}
            </div>
            <div>
                About you: {createField("About me", Textarea,
                    "aboutMe", [required, maxLength90])}
            </div>
            <div>
                <div>Contacts: </div><div>{Object.keys(userProfile.contacts).map(key => {
                    return (
                        <div key={key}>{key}: {createField(key, Textarea,
                            "contacts." + key)}</div>
                    )
                })}</div>
                {error ? <div className={s.FormSummaryError}>{error}</div> : undefined}
            </div>
            <div>
                <button>save</button>
            </div>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm({form: "editProfile"})(ProfileDataForm);

