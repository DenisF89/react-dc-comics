import style from "./Header.module.css"

function Header() {

    return (
        <header>
            <div className={style.boxed}>
                <div className={style.logo}>
                    <img src="/img/dc-logo.png" alt="Logo" />
                </div>
                <nav className={style.menu}>
                    <ul>
                        <li><a href="#">CHARACTER</a></li>
                        <li><a href="#">COMICS</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">COLLECTIBLES</a></li>
                        <li><a href="#">VIDEOS</a></li>
                        <li><a href="#">FUNS</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">SHOP</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default Header;