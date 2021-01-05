import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'


export default function Elagage() {

    //Booleanc des grands titres
    const [boolHeightPeriod, setBoolHeightPeriod] = useState(true);
    const [boolPruningTime, setBoolPruningTime] = useState(true);
    const [boolTitlePruning, setBoolTitlePruning] = useState(true);
    const [boolDifferentSizes, setBoolDifferentSizes] = useState(true);

    //Booleans des sous-titres du paragraphe "les différentes tailles possibles" 
    const [boolReductionSize, setBoolReductionSize] = useState(true);
    const [boolResizingSize, setBoolResizingSize] = useState(true);
    const [boolHeighteningSize, setBoolHeighteningSize] = useState(true);

    function handleChangeBoolHeightPeriod(e) {
        e.preventDefault();
        setBoolHeightPeriod(!boolHeightPeriod)
    }

    function handleChangeBoolPruningTime(e) {
        e.preventDefault();
        setBoolPruningTime(!boolPruningTime)
    }

    function handleChangeBoolTitlePruning(e) {
        e.preventDefault();
        setBoolTitlePruning(!boolTitlePruning)
    }

    function handleChangeBoolDifferentSizes(e) {
        e.preventDefault();
        setBoolDifferentSizes(!boolDifferentSizes)
    }

    function handleChangeBoolReductionSize(e) {
        e.preventDefault();
        setBoolReductionSize(!boolReductionSize)
    }

    function handleChangeBoolResizingSize(e) {
        e.preventDefault();
        setBoolResizingSize(!boolResizingSize)
    }

    function handleChangeBoolHeighteningSize(e) {
        e.preventDefault();
        setBoolHeighteningSize(!boolHeighteningSize)
    }

    return (
        <div className="containerPruning">
            <h2>L'élagage des arbres</h2>
            <div className="titlePruning">
                <h3>Les périodes de tailles</h3>

                <button
                    onClick={handleChangeBoolHeightPeriod}
                    value={boolHeightPeriod}>
                    {boolHeightPeriod ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {boolHeightPeriod === true ?
                <div className="heightPeriod">
                    <p>Il est possible d'effectuer des tailles légères toute l'année, même en été car l'arbre cicatrise plus vite lorsqu'il est en activité végétale. Pour les tailles plus importantes, il est préférable d'attendre l'hiver car l'arbre sera en repos végétatif.</p>
                </div>
                :
                null
            }
            <div className="titlePruning">
                <h3>La durée d'une taille</h3>
                <button
                    onClick={handleChangeBoolPruningTime}
                    value={boolPruningTime}>
                    {boolPruningTime ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {boolPruningTime === true ?
                <div className="pruningTime">
                    <p>Le type d'arbre et la taille effectuée influence la durée qui est en moyenne de cinq ans.
            Contrairement aux idées reçues, retirer beaucoup de bois ne veut pas forcément dire être tranquille plus longtemps.</p>
                </div>
                :
                null
            }
            <div className="titlePruning">
                <h3>Le choix de la taille</h3>
                <button
                    onClick={handleChangeBoolTitlePruning}
                    value={boolTitlePruning}>
                    {boolTitlePruning ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {boolTitlePruning === true ?
                <div className="choiceOfSizes">
                    <p>Pour choisir la taille qui convient le mieux à ses besoins, il est indispensable de tenir compte de plusieurs points importants :</p>
                    <ul>
                        <li>Les contraintes environnementales</li>
                        <li>L'état sanitaire de l'arbre</li>
                        <li>L'essence de l'arbre</li>
                        <li>L'aspect esthétique</li>
                    </ul>
                </div>
                :
                null
            }
            <div className="titlePruning">
                <h3>Les différentes tailles possibles</h3>
                <button
                    onClick={handleChangeBoolDifferentSizes}
                    value={boolDifferentSizes}>
                    {boolDifferentSizes ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {boolDifferentSizes === true ?
                <div className="differentSizes">
                    <p>Elles peuvent être effectuées séparément ou ensemble. Comme chaque taille répond à une attente particulière, il est difficile d'en faire une liste complète. Cependant, vous trouverez ci-dessous quelques unes d'entre elles :</p>

                    <div className="titleReductionSize">
                        <h4>Taille de réduction</h4>
                        <button
                            onClick={handleChangeBoolReductionSize}
                            value={boolReductionSize}>
                            {boolReductionSize ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </button>
                    </div>
                    {boolReductionSize === true ?
                        <div className="reductionSize">
                            <p>La taille de réduction consiste à :</p>
                            <ul>
                                <li>maintenir l'arbre dans ses dimensions actuelles</li>
                                <li>ou diminuer ses dimensions extérieures</li>
                            </ul>
                            <p>en s'adaptant aux contraintes extérieures.
                            Mais il serait souhaitable de ne pas diminuer le volume de la couronne (partie située entre le sommet et les premières branches) de plus d'1/3 de sa hauteur.
La taille devra être effectuée si possible sur tire-sève (départ de petites branches vertes) qui seront utiles à la bonne reprise de l'arbre, à sa cicatrisation et à éviter aussi un regarnissage trop brutal.</p>
                        </div>
                        :
                        null
                    }
                    <div className="titleReductionSize">
                        <h4>Taille de resserrage</h4>
                        <button
                            onClick={handleChangeBoolResizingSize}
                            value={boolResizingSize}>
                            {boolResizingSize ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </button>
                    </div>
                    {boolResizingSize === true ?
                        <div className="resizingSize">
                            <p>La taille de resserrage consiste à :</p>
                            <ul>
                                <li>couper des branches surplombant une toiture ou un jardin voisin</li>
                                <li>couper sur les côtés de l'arbre sans toucher à sa hauteur</li>
                            </ul>
                            <p>Elle sert à empêcher l'arbre de trop s'étaler.</p>
                        </div>
                        :
                        null
                    }
                    <div className="titleReductionSize">
                        <h4>Taille de rehaussement</h4>
                        <button
                            onClick={handleChangeBoolHeighteningSize}
                            value={boolHeighteningSize}>
                            {boolHeighteningSize ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </button>
                    </div>
                    {boolHeighteningSize === true ?
                        <div className="heighteningSize">
                            <p>La taille de rehaussement consiste à :</p>
                            <ul>
                                <li>couper des branches basses pour dégager le bas de l'arbre</li>
                                <li>remonter la hauteur des premières branches</li>
                            </ul>
                        </div>
                        :
                        null
                    }
                    <h4>Taille d'entretien</h4>
                    <h4>Taille de mise en sécurité</h4>
                    <h4>Taille d'éclaircie</h4>
                    <h4>Taille de cohabitation</h4>
                    <h4>Taille de formation ou de reformation</h4>
                </div>
                :
                null
            }
            <p>EXEMPLE PHOTO A INCERER ICI</p>
        </div>
    )
}