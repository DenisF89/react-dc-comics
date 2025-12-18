import style from "./Footer.module.css"
import BlueBand from "./BlueBand"
import menu from "./vocimenu.js"
import FooterMenu from "./FooterMenu";

function Footer() {

    /*  GESTIONE COLONNE MENU DA RECUPERO ID
    Recupero gli id-menu da visualizzare
    const menuID = menu.map(m=> m.id);
    const layout = [[menuID[0],menuID[1]],[menuID[2]],[menuID[3]]]; 
    */

    const layout = [2,1,1]; //Gestisco le colonne menu del footer 
                            //Es: 1°col=>2menu,2°col=>1 menu,3°col=>1menu

    return (
        <footer>
            <BlueBand />
            <div className={style.fascia_image}>
                <div className={style.boxed}>

                    <FooterMenu menu={menu} layout={layout} /> {/* Component con props */}

                    <div className={style.dc_back}></div>
                </div>
            </div>

            <div className={style.fascia_grey}>
                <div className={style.boxed}>
                    <button>
                        SIGN-UP NOW!
                    </button>
                    <nav className={style.socialmenu}>
                        <h3>FOLLOW US</h3>
                        <a href="#"><img src="/img/footer-facebook.png" alt="" /></a>
                        <a href="#"><img src="/img/footer-periscope.png" alt="" /></a>
                        <a href="#"><img src="/img/footer-pinterest.png" alt="" /></a>
                        <a href="#"><img src="/img/footer-twitter.png" alt="" /></a>
                        <a href="#"><img src="/img/footer-youtube.png" alt="" /></a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;