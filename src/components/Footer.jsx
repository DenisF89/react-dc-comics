import style from "./Footer.module.css"
import BlueBand from "./BlueBand.jsx"

function Footer() {
    return (
        <footer>
            <BlueBand />
            <div className={style.fascia_image}>
                <div className={style.boxed}>
                    <div className={style.footermenu}>
                        <div className={style.col_menu}>
                            <h2>DC COMICS</h2>
                            <ul>
                                <li><a href="#">Characters</a></li>
                                <li><a href="#">Comics</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Games</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                            <h2>SHOP</h2>
                            <ul>
                                <li><a href="#">Shop DC</a></li>
                                <li><a href="#">Shop DC Collectibles</a></li>
                            </ul>
                        </div>

                        <div className={style.col_menu}>
                            <h2>DC</h2>
                            <ul>
                                <li><a href="#">Terms Of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Ad Choices</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Subscriptions</a></li>
                                <li><a href="#">Talent Workshops</a></li>
                                <li><a href="#">CPSC Certificates</a></li>
                                <li><a href="#">Ratings</a></li>
                                <li><a href="#">Shop Help</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className={style.col_menu}>
                            <h2>SITES</h2>
                            <ul>
                                <li><a href="#">DC</a></li>
                                <li><a href="#">MAD Magazine</a></li>
                                <li><a href="#">DC Kids</a></li>
                                <li><a href="#">DC Universe</a></li>
                                <li><a href="#">DC Power Visa</a></li>
                            </ul>
                        </div>
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