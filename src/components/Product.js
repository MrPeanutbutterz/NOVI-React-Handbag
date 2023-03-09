import React from "react";

export default function Product({ label, image, name, price }) {
    return (
        <article>
            <span>{label}</span>
            <img src={image} alt="A bag"/>
            <p>{name}</p>
            <h4>{price}</h4>
        </article>
    )
}