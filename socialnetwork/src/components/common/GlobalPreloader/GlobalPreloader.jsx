import React from "react"
import s from "./GlobalPreloader.module.css"


const GlobalPreloader = () => {
    return (
        <div className={s.Preloader}>
            <div className={s.PreloaderLoader}>
            </div>
        </div>
    )
}

export default GlobalPreloader;
