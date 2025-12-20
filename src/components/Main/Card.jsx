import style from "./Card.module.css"

function Card(props){                                   //Componente Card con props da Main.jsx
    const {img, title} = props;                         //destructuring (variabili con stesso nome props)
    return <div className={style.card}>                 
                <div className={style.cover}>
                    <img src={img} alt={title} />
                </div>
                <p>{title}</p>
            </div>
}

export default Card;

