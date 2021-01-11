import { Item, Items } from "./functionItems";

export default function ChoiceOfSize() {
    return <Items>
        <Item title="environmentalConstraints">
            <p>Ce sont elles qui, en général, obligent à prendre la décision de tailler un arbre :</p>
            <ul>
                <li>proximité des voisins</li>
                <li>hauteur trop importante</li>
                <li>besoin de lumière, etc.</li>
            </ul>
            <p>On est souvent tenté de couper beaucoup pour être "tranquille". Mais attention, une taille trop forte peut provoquer à long terme l'effet contraire de celui souhaité. On peut ainsi noter qu'un arbre sévèrement taillé :</p>
            <ul>
                <li>repousse plus vite avec des branches désorganisées et plus serrées (moins de lumière),</li>
                <li>cicatrise mal ses plaies de taille (risque de chute de branches),</li>
                <li>Est plus sensible aux parasites et aux maladies (risque de pourriture des racines pouvant occasionner la chute de l'arbre).</li>
            </ul>
        </Item>
        <Item title="sanitaryStateTree">
            <p>Son âge, sa vigueur, son aspect général, sont autant d'éléments à prendre en compte pour choisir la taille la mieux adaptée. Un diagnostic approfondi peut révéler un arbre dangereux qui nécessitera une taille de mise en sécurité voire même un abattage si son état est jugé trop menaçant.</p>
            <h4>L'essence de l'arbre</h4>
            <p>Il faut savoir que selon les espèces les arbres ne réagissent pas de la même manière à une même taille </p>
            <ul>
                <li>repousse plus ou moins vigoureuse</li>
                <li>cicatrisation des plaies</li>
                <li>sensibilité aux maladies.</li>
            </ul>
            <p>C'est souvent 1 ou 2 ans après que l'aspect esthétique de l'arbre change, il est donc important de bien le connaître pour éviter les mauvaises surprises.</p>
        </Item>
        <Item title="aestheticAspect">
            <p>Il est possible d'effectuer des tailles pour mettre en valeur l'arbre ou pour l'accompagner dans son développement. Ce sont en général des tailles assez légères qui ne gênent en rien le bon développement du végétal. Elles peuvent être indispensables dans le cas de certains arbres sujets à la déchirure de branches comme le cèdre.</p>
        </Item>
    </Items>
}

