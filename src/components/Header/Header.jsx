import {useState } from "react";
import style from "./Header.module.css"
import Hamburger from "./Hamburger"
import MainMenu from "./MainMenu"

function Header() {

const [open, setOpen] = useState(false);  /* creo uno stato (React) booleano per gestire menu aperto/chiuso */
                                        /*  open è il valore dello stato, setOpen la funzione per cambiarlo */ 

const toggleMenu = () => setOpen((value) => !value) //variabile con funzione setOpen (true=>false e viceversa)                                  
    
    return (
        <header>
            <div className={"boxed "+style.boxed}>
                <div className={style.logo}>
                    <img src="/img/dc-logo.png" alt="Logo" />
                </div>
                <Hamburger open={open} toggleMenu={toggleMenu} />  {/* gestione menu responsive con Hamburger */}
                <MainMenu open={open} toggleMenu={toggleMenu}/> {/* Componente Menu Principale */}
            </div>
        </header>
    );

}

export default Header;