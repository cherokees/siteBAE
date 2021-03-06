import styled from "styled-components";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";


//appel fetch à l'API google pour afficher les avis clients de l'entreprise 

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export default function CarouselAvis() {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>INCERER LES AVIS CLIENTS GOOGLE ICI</h1>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    <Item>One</Item>
                    <Item>Two</Item>
                    <Item>Three</Item>
                    <Item>Four</Item>
                    <Item>Five</Item>
                    <Item>Six</Item>
                    <Item>Seven</Item>
                    <Item>Eight</Item>
                </Carousel>
            </div>
        </>
    );
}