import { useState } from 'react';
import ChoiceOfSize from './choiceSize';
import DifferentSize from './differentSize';


export default function Elagage() {
    return (
        <div className="containerPruning">
            <h2>L'élagage des arbres</h2>

            <div className="titlePruning">
                <h3>Les périodes de tailles</h3>


                <p>Il est possible d'effectuer des tailles légères toute l'année, même en été car l'arbre cicatrise plus vite lorsqu'il est en activité végétale. Pour les tailles plus importantes, il est préférable d'attendre l'hiver car l'arbre sera en repos végétatif.</p>
            </div>

            <div className="titlePruning">
                <h3>La durée d'une taille</h3>

                <p>Le type d'arbre et la taille effectuée influence la durée qui est en moyenne de cinq ans.
            Contrairement aux idées reçues, retirer beaucoup de bois ne veut pas forcément dire être tranquille plus longtemps.</p>
            </div>

            <div className="titlePruning">
                <h3>Le choix de la taille</h3>

                <p>Pour choisir la taille qui convient le mieux à ses besoins, il est indispensable de tenir compte de plusieurs points importants </p>

                <ChoiceOfSize></ChoiceOfSize>

            </div>

            <div className="titlePruning">
                <h3>Les différentes tailles possibles</h3>

                <p>Elles peuvent être effectuées séparément ou ensemble. Comme chaque taille répond à une attente particulière, il est difficile d'en faire une liste complète. Cependant, vous trouverez ci-dessous quelques unes d'entre elles :</p>

                <DifferentSize></DifferentSize>

                <p>EXEMPLE PHOTO A INCERER ICI</p>
            </div>
        </div>
    )
}