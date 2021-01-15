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
        type1: 150,
        type2: 200,
        type3: 350,
    },
    15: {
        name: "15 à 20 mètres",
        type1: 250,
        type2: 300,
        type3: 900,
    },
    20: {
        name: "20 à 30 mètres",
        type1: 350,
        type2: 600,
        type3: 1200,
    },

}

export default function Price2() {

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
                <div className="containerColorBrownPriceSelect">
                    <p>Voici les prix en euros HT pour l'abattage de l'arbre en entier ou par démontage (découpe en morceaux, utilisation de cordes et de matériel spécifique) :</p>
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
                <div className="ContainerColorIndication">
                    <p>Ces prix d'élagage et d'abattage sont donnés hors TVA, ils sont donnés à titre indicatif et peuvent varier à la hausse comme à la baisse en fonction :</p>
                    <ul>
                        <li>du besoin exprimé par le client (conservation d'une partie du bois, fente du gros bois...)</li>
                        <li>des critères extérieurs, l'emplacement de l'abre, éloignement du chantier...</li>
                        <li>de l'essence de l'arbre (plus ou moins de bois et branches)</li>
                        <li>de la difficulté du travail (arbre mort, déraciné, dans l'eau)</li>
                    </ul>
                </div>
            </div>
        </>
    )

}