function StrutturaMenu ({titolo, lista, id}){

    return  <div className="menu" >               {/* apro menu */}
                <h2>{titolo}</h2>                 {/* stampo titolo */}
                <ul>
                    {lista.map(voce =>            /* stampo link  */
                    <li key={id+"_"+voce.id}>     {/* = Es.:"dc_comics_1"  */}  
                        <a href={voce.link}>
                            {voce.linktitle}        
                        </a>
                    </li>
                    )}
                </ul>
            </div>                                  //chiudo menu

                            }

export default StrutturaMenu;