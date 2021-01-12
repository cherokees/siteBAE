import { GiHamburgerMenu } from 'react-icons/gi';
import { slide as Menu } from "react-burger-menu";
import SideBar from "./sidebar";



export default function Layout({ children }) {
    return (
        <>
            <nav className="layoutNav">
                <div className="containerBurgerMenu">
                    <div className="infoHeader">
                        <p>Bernard Aurélien Elagage</p>
                        <p>06 77 74 53 99</p>
                        <p>aurelien.78@orange.fr</p>
                    </div>
                    <div id="App">
                        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

                        <div id="page-wrap">
                            {children}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}