import React from "react";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validatos";
import {reduxForm} from "redux-form";
import s from "../../../common/FormsControls/FormsControls.module.css";
import style from "../../Profile.module.css"


let maxLength90 = maxLengthCreator(90);
let maxLength190 = maxLengthCreator(190);

const ProfileDataForm = ({handleSubmit, userProfile, error}) => {
    return (
        <form onSubmit={handleSubmit} className={style.ProfileDataForm}>
            <div>
                <div>{Object.keys(userProfile.contacts).map(key => {
                    return (
                        <div key={key} className={style.ProfileDataFormFieldWrapper}>{createField(key, Input,
                            "contacts." + key, null, {type: "text"}, "", key + ": ")}</div>
                    )
                })}</div>
                {error ? <div className={s.FormSummaryError}>{error}</div> : undefined}
            </div>
            <div className={style.ProfileDataFormFieldWrapper}>{createField("Full name", Input, "fullName", null,
                {type: "text"}, "", "Full name:")}</div>

            <div
                className={style.ProfileDataFormFieldWrapper}>{createField("My professionals skills", Input, "lookingForAJobDescription", [required, maxLength190],
                {type: "text"}, "", "Skills:")}</div>

            <div
                className={style.ProfileDataFormFieldWrapper}>{createField("About me", Input, "aboutMe", [required, maxLength90],
                {type: "text"}, "", "About you:")}</div>

            <div className={style.ProfileDataFormFieldWrapper}>{createField(null, Input, "lookingForAJob", null,
                {type: "checkbox"}, "looking for a job: ", "" )}</div>

            <div className={style.ProfileDataFormSave}>
                <button>save</button>
            </div>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm({form: "editProfile"})(ProfileDataForm);

