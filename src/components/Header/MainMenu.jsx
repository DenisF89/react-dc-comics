import style from "./MainMenu.module.css"
import listaMenu from "../../data/listamenu.js"

function MainMenu(props){

    const {open, toggleMenu} = props;

    return(
                <nav id="mainnav" className={style.menu+" "+ (open ? style.menuOpen : "")}> 
                    <ul>
                        {
                            listaMenu.map((link) => {
                                //per ogni elemento in listamenu creo un link 
                                //e stilizzo il link(.active) che corrisponde alla pagina attuale
                                const currentPath = window.location.pathname.slice(1);  //elimino lo slash del pathname
                                const isActive = link === currentPath;                  //true se la voce menu è uguale a currentpath
                                return(
                                <li key={link + "_link"}>                               {/* key per <li> univoco per map */}
                                    <a className={isActive ? style.active : ""}         //se isActive è true, do classe active al link, altrimenti nessuna classe
                                    href={link}
                                    onClick={toggleMenu}
                                    >{link}</a>
                                </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                );
}

export default MainMenu;