import style from "./Hamburger.module.css"

function Hamburger(props){

    const {open, toggleMenu} = props;
    
    return(
            <button className={style.burger+" "+ (open ? style.burgerOpen : "")} //se open + true aggiungi classe burgerOpen
                    aria-expanded={open ? "true" : "false"} //serve per accessibilità (screen reader)
                    aria-controls="mainnav" type="button" //il bottone controlla il nav (id=mainnav)
                    onClick={toggleMenu}
                    >
                    <span className={style.burgerIcon} aria-hidden="true"></span>
                    <span className={style.sronly}>Menu</span> {/* //accessibilità screen reader (button menu) */}
            </button>
    );
}

export default Hamburger;