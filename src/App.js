import React from 'react';
import './App.css';

//components
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";

//bag images
import bagOne from "./assets/bag_1.png"
import bagTwo from "./assets/bag_2.png"
import bagThree from "./assets/bag_3.png"
import bagFor from "./assets/bag_4.png"

//footer images
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"

export default function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button name={"to the collection"} id={"button-collection"} isDisabled={false}/>
                <Button name={"shop all bags"} id={"button-shop"} isDisabled={false}/>
                <Button name={"pre-order"} id={"button-pre"} isDisabled={true}/>
            </nav>
            <main>
                <Product label="Best seller" image={bagOne} name="The handy bag" price="€400,-"/>
                <Product label="Best seller" image={bagTwo} name="The stylish bag" price="€250,-"/>
                <Product label="New collection" image={bagThree} name="The simple bag" price="€300,-"/>
                <Product label="New collection" image={bagFor} name="The trendy bag" price="€150,-"/>
            </main>
            <footer>
                <Tile header="The Brand" paragraph="Lorem ipsum dolor sit amet. adipisicing elit. Aliquid dolorum enim excepturi fuga pariatur praesentium quia sirnilique sunt Lorem ipsum dolor sit amet. consectetur adipisicing elit Aliquid dolorum enim exceptun fuga praesentium quia sequi similique sunt" />
                <Tile image={brand}/>
                <Tile image={story}/>
                <Tile header="our story" paragraph="Lorem ipsum dolor sit amet. consectetur adipisicing elit. Blanditiis eligendi exercitationem illo, labore laboriosam nihil ornnis praesentium. Aspernatur cum deleniti excepturi itaque, laboriosam nisi rerum sunt At tenetur veniam!" />
            </footer>
        </>
    );
}