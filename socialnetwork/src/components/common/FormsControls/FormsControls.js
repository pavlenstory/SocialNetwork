import React from "react";
import s from "./FormsControls.module.css";
import {Field} from "redux-form";

const Element = (Element) => ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={s.FormControl + " " + (hasError ? s.Error : undefined)}>
            {hasError && <span>{error}</span>}
            <Element  {...input} {...props}/>
            {props.text}
        </div>
    )
}

export const Textarea = Element("textarea");
export const Input = Element("input");

export const createField = (placeholder, component, name, validate, props = {}, text = "") => (
    <>
        <Field placeholder={placeholder} component={component} name={name}
               validate={validate}{...props} text={text}/>
    </>
)