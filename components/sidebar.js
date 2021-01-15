import { slide as Menu } from "react-burger-menu";

export default props => {
    return (
        <Menu {...props}>
            <a className="menu-item" href="#containerPresentation">
                PRESENTATION
      </a>

            <a className="menu-item" href="/about">
                AVIS GOOGLE
      </a>

            <a className="menu-item" href="/services">
                DEVIS
      </a>

            <a className="menu-item" href="/contact">
                PRIX
      </a>
            <a className="menu-item" href="/contact">
                ELAGAGE
      </a>
            <a className="menu-item" href="/contact">
                DIAPORAMA
      </a>
            <a className="menu-item" href="/contact">
                ABATTAGE
      </a>
            <a className="menu-item" href="/contact">
                TAILLE DE HAIE
      </a>
        </Menu>
    );
};