import React from "react";

export default function Button({name, id, isDisabled}) {

    function handleClick() {
        console.log(id)
    }

    return (
        <>
            <button
                id={id}
                disabled={isDisabled}
                onClick={handleClick}
            >{name}</button>
        </>
    )
}