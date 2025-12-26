import style from "./Main.module.css"
import comics from "../../data/comics.js"
import Card from "./Card";
import Filtro from "./Filtro";
import { useState } from "react";

function Main() {

    //VALORI PER IL FILTRO
    const [searchBy, setSearchBy] = useState(""); //
    const [search, setSearch] = useState(""); 

    //CERCA NEI VALORI DI COMICS (STRINGHE,ARRAY,NUMERI) EVITANDO ERRORI PER VALORI NON STRINGA
    const stringifyForSearch = (value) => {
        if (value == null) return "";
        if (Array.isArray(value)) return value.join(" ");
        if (typeof value === "string") return value;
        if (typeof value === "number" || typeof value === "boolean") return String(value);
        return "";
    };

    return (
        <main>
            <div className={style.cartoonband}></div>
            <div className={"boxed "+style.boxed_main}>
                <h3>CURRENT SERIES</h3>

                <Filtro comics={comics}                     //uso un component Filtro per le regole di filtro a cui passo i dati e gli UseState
                    searchBy={searchBy}
                    setSearchBy={setSearchBy}
                    search={search}
                    setSearch={setSearch}
                />

            {/************ CARD CONTAINER ***********/}

                <div className={style.card_container}>
                {                                           // Creo un componente Card per ogni elemento dell'array comics, 
                                                            // a cui passo i dati con le props
                    comics                                  //nell'array di oggetti comics
                    .filter(comic =>                        //filtro per ogni comic
                        stringifyForSearch(comic[searchBy]) //trasformo in stringa ogni valore di chiave
                        .toLowerCase()                      //elimino maiuscole
                        .includes(search.toLowerCase()))    //se la stringa include il valore che sto cercando (search)
                    .map(card =>                            //renderizzo solo gli oggetti filtrati
                        <Card                               //tramite un component Card 
                        key={"card_"+card.id}               //non viene passata come props, serve a React come elemento univoco di map
                        img={card.thumb}                    //prop img
                        title={card.title}                  //prop title
                        />
                    )
                }
                </div>
            </div>
        </main>
    );
}

export default Main;