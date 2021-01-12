import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


export default function Devis() {
    return (
        <>
            <div className="containerDevis">
                <p className="catchphrase">Le meilleur rapport qualité prix, des offres à la carte, détaillées et adaptables.</p>
                <h2>Vos travaux en 3 étapes</h2>
                <h3>Par mail ou téléphone</h3>
                <img src="./photo/phone.jpg" alt="téléphone" />
                <div className="ItemDevis">
                    <HiOutlineArrowNarrowRight className="iconDevis" />
                    <p>Faire une demande pour un devis et une prise de rendez-vous sur place afin de comprendre vos besoins.</p>
                </div>
                <h3>Réalisation du devis</h3>
                <img src="./photo/estimate.jpg" alt="téléphone" />
                <div className="ItemDevis">
                    <HiOutlineArrowNarrowRight className="iconDevis" />
                    <p>Envoi d'une offre personnalisée par mail sous 8 jours</p>
                </div>
                <div className="ItemDevis">
                    <HiOutlineArrowNarrowRight className="iconDevis" />
                    <p>Dès confirmation de votre accord par un simple mail ou appel téléphonique, vous recevrez une date approximative pour la réalisation des travaux.</p>
                </div>
                <h3>Réalisation des travaux</h3>
                <img src="./photo/work.jpg" alt="téléphone" />
                <div className="ItemDevis">
                    <HiOutlineArrowNarrowRight className="iconDevis" />
                    <p>Signature du devis et confirmation de la date définitive 15 jours avant le début des travaux.</p>
                </div>
            </div>
            <div className="containerInformation">
                <p>Un professionel à votre disposition pour toute demande d'information et de devis par téléphone au 06.77.74.53.99.
Le devis est gratuit dans le sud des Yvelines (78) et de l'Essonne (91), déplacement possible dans les Hauts de Seine (92).</p>
            </div>

        </>
    )
}