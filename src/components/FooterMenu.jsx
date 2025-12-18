import style from "./Footer.module.css"

// Suddivido l'array dei menu in più colonne in base al layout fornito:

// creo il layout delle colonne
// m = Array di oggetti che rappresentano i menu
// l = Array di numeri che definisce il layout delle colonne
// num = Num indica quanti menu devono andare in quella colonna
// return => Array di colonne
function CreaColonne(m, l) {
    let index = 0;                                  //parto dal primo menu
    return l.map(num =>                             {//per ogni colonna
        const col = m.slice(index, index + num);    //divido l'array menu (ind iniziale, ind finale)
        index += num;                               //aggiorno l'indice per la colonna successiva
        return col;
    });
}

function FooterMenu({ menu, layout }) {                         //Component figlio con props
    const columns = CreaColonne(menu, layout);                  //richiamo funzione per creare colonne
    return <div className={style.footermenu}>                   {/* apro il footermenu */}
            {columns.map((col, i) => 
                <div className={style.col_menu} key={i}>        {/* apro colonna */}
                    {col.map(m => 
                        <div className="menu" key={m.id}>       {/* apro menu */}
                            <h2>{m.titolo}</h2>                 {/* stampo titolo */}
                            <ul>
                                {m.lista.map(voce =>            //stampo link 
                                <li key={m.id+"_"+voce.id}>     {/*= Es.:"dc_comics_1"*/}    
                                    <a href={voce.link}>
                                        {voce.linktitle}        
                                    </a>
                                </li>
                                )}
                            </ul>
                        </div>                                  //chiudo menu
                    )}
                </div>                                          //chiudo colonna
                )}
            </div>                                              //chiudo il footermenu
}

export default FooterMenu;






/*   FUNZIONE CHE STAMPA I MENU DALL'ID

function FooterMenu({ menu, layout }) {
  return (
    <div className={style.footermenu}>
      {layout.map((col, i) => (

        <div className={style.col_menu} key={i}>

          {col.map(idMenu => {
            
            const m = menu.find(item => item.id === idMenu);
            if (!m) return null;

                return (
                <div className="menu" key={m.id}>           
                    <h2>{m.titolo}</h2>
                    <ul>
                    {m.lista.map(link => 
                        <li key={link.id}>
                        <a href={link.link}>{link.linktitle}</a>
                        </li>
                    )}
                    </ul>
                </div>
                );

          })}

        </div>
      ))}
    </div>
  );
}

export default FooterMenu;
 */