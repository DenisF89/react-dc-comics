import style from "./Footer.module.css"
import BlueBand from "./BlueBand"
import FooterMenu from "./FooterMenu"
import SocialMenu from "./SocialMenu"

function Footer() {
    return  <footer>
                <BlueBand />
                <div className={style.fascia_image}>
                    <div className={style.boxed}>
                        <FooterMenu /> 
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
                            <SocialMenu />
                        </nav>
                    </div>
                </div>
        </footer>
}

export default Footer;