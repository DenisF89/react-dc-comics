import style from "./Main.module.css"
import comics from "./comics.js"

function Main() {
    return (
        <main>
            <div className={style.cartoonband}></div>
            <div className={style.boxed}>

                <h3>CURRENT SERIES</h3>
                {
                    comics.map(card =>

                        <div key={card.id} className={style.card}>
                            <div className={style.cover}>
                                <img src={card.thumb} alt={card.title} />
                            </div>
                            <p>{card.title}</p>
                        </div>
                    )
                }
            </div>
        </main>
    );
}

export default Main;