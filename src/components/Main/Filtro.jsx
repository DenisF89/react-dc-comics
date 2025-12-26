import style from "./Filtro.module.css";

function Filtro(props){
    
    //recupero le props
    const {comics, searchBy, setSearchBy, search, setSearch } = props;  

    // etichette in italiano dei filtri
    const labels = {title: "Titolo", series: "Serie", type:"Tipologia", writers: "Sceneggiatori", artists: "Disegnatori"};

    //RECUPERO I VALORI DA INSEIRE NELLE OPTION DEL PRIMO SELECT
    const excludedKeys = ["id", "thumb", "price", "sale_date", "description"];  //array di chiavi di ricerca da escludere
    const searchFields = comics.length                                          //se esistono oggetti nell'array comics
        ? Object.keys(comics[0]).filter(                                        //filtro delle chiavi del primo oggetto
            key => !excludedKeys.includes(key))                                 //restituisco solo le chiavi che non sono incluse nell'array
        : [];
    
    //RECUPERO I VALORI DA INSERIRE NELLE OPTION DEL SECONDO SELECT
    const valoriUnici = searchBy ?                               //se esiste State searchBy restituisco un array con:
        [...new Set(                                             //Set esclude doppi, ... (spread op.) estrae lista 
            comics.flatMap(item => {                             //ritorna valori singoli da array
                const value = item?.[searchBy];                  //il valore della proprietà per ogni oggetto
                if (!value) return [];                           //se non esiste restituisci array vuoto
                return Array.isArray(value) ? value : [value];   //se è un array restituisci l'array oppure trasforma il valore in array
            })
        )]
    : [];                                                        //se non esiste State searchBy restituisci array vuoto


    //STAMPO I SELECT E INPUT
    return(
        <div className={style.filtro} >

            <select
            value={searchBy}                                    //valore del campo selezionato 
            onChange={(e) => {                                  //quando cambia la selezione
                setSearchBy(e.target.value);                    //aggiorna useState searchBy con il nuovo valore e renderizza di nuovo
                setSearch("");                                  //reset input quando cambia campo
            }}
            >
                <option value="">Filtra per</option>
                {searchFields.map(field => (                    //genero option dalla variabile searchFields
                    <option key={field} value={field}>              
                        {labels[field]??field}                  {/* //scrivo l'etichetta in italiano se esiste fra le etichette, altrimenti scrivi la chiave originale */}
                    </option>
                ))}
            </select>

             <select 
                value={search}                                  //restituisce le card filtrate secondo questo valore
                onChange={(e) => setSearch(e.target.value)}     //cambia lo State con il nuovo valore selezionato
                disabled={!searchBy}                            //disabilitato se il primo filtro non è attivo
            >
                <option value="">Scegli</option>
                {valoriUnici.map(unico =>                                   //restitutisce nelle option tutti i valori delle proprietà filtrate da SearchBy e dei valori singoli negli array 
                    <option key={unico} value={unico}>{unico}</option>)}    {/* Es: artists: ["Clayton Henry", "Gleb Melnikov", "Dale Eaglesham"] -> <option>Clayton Henry</option> <option>Gleb Melnikov</option> <option>Dale Eaglesham</option> */}
            </select>

            <input
                type="text"
                placeholder={searchBy? `Cerca per ${labels[searchBy]?? searchBy}` : "Scegli un filtro"}  //etichetta in italiano
                disabled={!searchBy}
                value={search}
                onChange={(e) => setSearch(e.target.value)} //quando cambio valore (digito) cambia state search e renderizza la pagina
            />

            <button 
                id="undo" 
                type="button"
                onClick={() => { 
                        setSearchBy("");    //reset del primo filtro
                        setSearch("");      //reset del secondo filtro
                    }}
            >Annulla filtro</button>
        </div>
    );
}
export default Filtro;