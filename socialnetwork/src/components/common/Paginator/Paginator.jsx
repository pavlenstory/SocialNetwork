import React, {useState} from "react";
import s from "./Paginator.module.css";

let Paginator = ({portionSize, totalUsersCount, pageSize, onPageChanged, currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let starterPortionNumber = (portionNumber - 1) * portionSize + 1;
    let finishedPortionNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 ?
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>left</button> : undefined}
            {pages
                .filter(p => p >= starterPortionNumber && p <= finishedPortionNumber)
                .map(p => {
                return <span
                    key={p}
                    onClick={() => onPageChanged(p)}
                    className={currentPage === p ? s.selectedPage : undefined}>{p + " "}</span>
            })}
            {portionCount > portionNumber ?
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>right</button> : undefined}
        </div>
    )
}

export default Paginator;