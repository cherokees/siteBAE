import { useState } from "react";

const treePruning = {
    5: {
        name: "5 à 10 mètres",
        type1: 150,
        type2: 150,
        type3: 200,
    },
    10: {
        name: "10 à 15 mètres",
        type1: 200,
        type2: 250,
        type3: 350,
    },
    15: {
        name: "15 à 20 mètres",
        type1: 300,
        type2: 350,
        type3: 650,
    },
    20: {
        name: "20 à 30 mètres",
        type1: 350,
        type2: 450,
        type3: 750,
    },

}

export default function Price() {

    const [pruneHeight, setPruneHeight] = useState(5);
    const [pruneFinition, setPruneFinition] = useState("type1");

    function handleChangePruneHeight(e) {
        e.preventDefault();
        setPruneHeight(e.target.value)
    }

    function handleChangePruneFinition(e) {
        e.preventDefault();
        setPruneFinition(e.target.value)
    }

    return (
        <>
            {/* <div className={"containerPriceSelect " + (propTruc ? " autreClasse" : "")}> */}
            <div className="containerPrice">
                <div className="containerColorTitlePrice">
                    <h2>Les prix</h2>
                    <p>Les prix sont adaptés au besoin du client, afin de maintenir un bon rapport qualité/prix.
Contactez-moi pour un devis.</p>
                </div>
                <div className="containerColorGreenPriceSelect">
                    <p>Voici les prix en euros HT pour la taille de réduction de couronne complète (hauteur et côtés) d'environ 1/3 avec conservation du port naturel de l'arbre :</p>
                    <div className="containerPriceSelect">
                        <div className="selectOption">
                            <label>Veuillez sélectionner une hauteur</label>
                            <select value={pruneHeight} onChange={handleChangePruneHeight}>
                                {Object.keys(treePruning).map((key, index) => {
                                    return (
                                        <option key={index} value={key}>{treePruning[key].name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="selectOption">
                            <label>Veuillez sélectionner une finition</label>
                            <select value={pruneFinition} onChange={handleChangePruneFinition}>
                                <option value="type1">En vrac</option>
                                <option value="type2">Découpé sur place</option>
                                <option value="type3">Déchets enlevés</option>
                            </select>
                        </div>
                    </div>
                    <div className="containerPriceView">
                        <p className="prghPrice">PRIX : {treePruning[pruneHeight][pruneFinition]} €</p>
                    </div>
                </div>
            </div>
        </>
    )

}