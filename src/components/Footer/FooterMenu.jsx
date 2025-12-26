import style from "./Footer.module.css";
import menu from "../../data/vocimenu.js";
import StrutturaMenu from "./StrutturaMenu";

const layout = [2,1,1]; //Gestisco le colonne menu del footer 
                        //Es: 1°col=>2menu,2°col=>1 menu,3°col=>1menu

/* Suddivido l'array dei menu in più colonne in base al layout fornito:
// creo il layout delle colonne
// m = Array di oggetti che rappresentano i menu
// l = Array di numeri che definisce il layout delle colonne
// num = Num indica quanti menu devono andare in quella colonna
// return => Array di colonne */
function creaColonne(m, l) {
    let index = 0;                                  //parto dal primo menu
    return l.map(num =>{                            //per ogni colonna
        const col = m.slice(index, index + num);    //divido l'array menu (ind iniziale, ind finale)
        index += num;                               //aggiorno l'indice per la colonna successiva
        return col;
    });
}

function FooterMenu() {                                         
    const columns = creaColonne(menu, layout);                  //richiamo funzione per creare colonne
    return <div className={style.footermenu}>                   {/* apro il footermenu */}
            {columns.map((col, i) =>                            //per ogni colonna
                <div className={style.col_menu} key={i}>        {/* apro colonna */}
                {col.map(m =>                                   //per ogni menu nella colonna
                    <StrutturaMenu titolo={m.titolo} lista={m.lista} id={m.id} key={m.id} />   /* Component StrutturaMenu con props */
                )}
                </div>                                          //chiudo colonna
            )}
            </div>                                              //chiudo il footermenu 
}

export default FooterMenu;