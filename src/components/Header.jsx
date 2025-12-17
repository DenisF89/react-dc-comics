import style from "./Header.module.css"

function Header() {

    const listaMenu = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FUNS", "NEWS", "SHOP"];

    return (
        <header>
            <div className={style.boxed}>
                <div className={style.logo}>
                    <img src="/img/dc-logo.png" alt="Logo" />
                </div>
                <nav className={style.menu}>
                    <ul>
                        {
                            listaMenu.map((link, index) =>
                                <li key={index + "_menu"}><a href={link}>{link}</a></li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default Header;