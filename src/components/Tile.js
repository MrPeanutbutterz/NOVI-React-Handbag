import React from "react";

export default function Tile({image, header, paragraph}) {
    if (image !== undefined) {

        return (
            <section>
                <img src={image} alt=""/>
            </section>
        )

    } else {

        return (
            <section>
                <h2>{header}</h2>
                <p>{paragraph}</p>
            </section>
        )
    }
}