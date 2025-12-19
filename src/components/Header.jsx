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
                            listaMenu.map((link) => {
                                const currentPath = window.location.pathname.slice(1);
                                const isActive = link === currentPath;
                                return(
                                <li key={link + "_link"}>
                                    <a className={isActive ? style.active : ""}
                                    href={link}>{link}</a>
                                </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default Header;