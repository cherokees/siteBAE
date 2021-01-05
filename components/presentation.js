import { GiCheckMark } from 'react-icons/gi'

export default function Presentation() {
    return (
        <div className="containerPresentation">
            <div className="checkList">
                <GiCheckMark className="checkListIcon" />
                <p>Elagueur Diplômé</p>
            </div>
            <div className="checkList">
                <GiCheckMark className="checkListIcon" />
                <p>20 ans d'expérience</p>
            </div>
            <div className="checkList">
                <GiCheckMark className="checkListIcon" />
                <p>Respect des engagements en qualité de travail ainsi que des délais</p>
            </div>
            <div className="checkList">
                <GiCheckMark className="checkListIcon" />
                <p>Des solutions personnalisées en matière de taille et de soins des arbres</p>
            </div>
            <div className="checkList">
                <GiCheckMark className="checkListIcon" />
                <p>Devis gratuit dans le département des Yvelines et de l'Essone</p>
            </div>
            <div className="checkList">
                <GiCheckMark className="checkListIcon" />
                <p>Assurance professionnelle</p>
            </div>
        </div>
    )
}