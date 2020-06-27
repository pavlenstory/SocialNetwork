import React from "react";
import s from "./FormsControls.module.css";
import {Field} from "redux-form";

const Element = (Element) => ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={s.FormControl + " " + (hasError ? s.Error : undefined)}>
            {hasError && <span className={s.ErrorName}><div>{error}</div></span>}
            {props.beforetext && <span>{props.beforetext}</span>}
            <Element  {...input} {...props}/>
            {props.aftertext && <span>{props.aftertext}</span>}
        </div>
    )
}

export const Textarea = Element("textarea");
export const Input = Element("input");

export const createField = (placeholder, component, name, validate, props = {}, aftertext = "", beforetext = "") => (
    <>
        <Field placeholder={placeholder} component={component} name={name}
               validate={validate}{...props} aftertext={aftertext} beforetext={beforetext}/>
    </>
)