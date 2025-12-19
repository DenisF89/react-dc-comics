import style from "./Main.module.css"
import comics from "../data/comics.js"
import Card from "./Card.jsx";

function Main() {
    return (
        <main>
            <div className={style.cartoonband}></div>
            <div className={style.boxed}>
                <h3>CURRENT SERIES</h3>
                {   // Creo un componente Card per ogni elemento dell'array comics, a cui passo i dati con le props
                    comics.map(card =>
                        <Card 
                        key={card.id} //non viene passata come props, serve a React come elemento univoco di map
                        img={card.thumb} //prop img
                        title={card.title} //prop title
                        />
                    )
                }
            </div>
        </main>
    );
}

export default Main;