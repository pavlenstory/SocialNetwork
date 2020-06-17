import React from "react";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validatos";
import {reduxForm} from "redux-form";

let maxLength20 = maxLengthCreator(20);
let maxLength90 = maxLengthCreator(90);
let maxLength190 = maxLengthCreator(190);

const ProfileDataForm = ({userProfile}) => {
    return (
        <form>
            <div>
                <button>save</button>
            </div>
            <div>
                Full name: {createField("Full name", Input, "fullName", [required, maxLength20])}
            </div>
            <div>
                {createField(null, Input, "lookingForAJob", null,
                    {type: "checkbox"}, "looking for a job")}
            </div>
            <div>
                {createField("My professionals skills", Textarea,
                    "lookingForAJobDescription", [required, maxLength190])}
            </div>
            <div>
                {createField("About me", Textarea,
                    "aboutMe", [required, maxLength90])}
            </div>
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm({form: "editProfile"})(ProfileDataForm);

