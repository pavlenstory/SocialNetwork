import React from "react"
import s from "./Preloader.module.css"


const Preloader = () => {
    return (
        <div className={s.Preloader}>
            <div className={s.PreloaderLoader}>
            </div>
        </div>
    )
}

export default Preloader;
