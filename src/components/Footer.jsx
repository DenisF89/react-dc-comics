import style from "./Footer.module.css"
import BlueBand from "./BlueBand.jsx"
import menu from "./vocimenu.js"

function Footer() {
    return (
        <footer>
            <BlueBand />
            <div className={style.fascia_image}>
                <div className={style.boxed}>
                    <div className={style.footermenu}>
                        <div className={style.col_menu}>
                            {menu.slice(0, 2).map((menu,index)=><>
                                <h2>{menu.titolo}</h2>
                                <ul>
                                    {menu.lista.map(link=><li><a href="#">{link.linktitle}</a></li>)}  
                                </ul> 
                            </>)}
                        </div>
                            {menu.slice(2).map((menu,index)=>
                            <div className={style.col_menu}>
                                <h2>{menu.titolo}</h2>
                                <ul>
                                    {menu.lista.map(link=><li><a href="#">{link.linktitle}</a></li>)}  
                                </ul> 
                            </div>
                            )}
                    </div>
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